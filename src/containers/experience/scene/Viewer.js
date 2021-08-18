import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';
import PublishIcon from '@material-ui/icons/Publish';

import CustomModal from '../../../components/modal/CustomModal';
import BabylonScene from './Scene';
import type { SceneEventArgs } from './Scene';
import { mediaData, boothMap, advertisementData } from './Database';
import LoadingScreen from '../../../components/loading-screen/LoadingScreen';
import Home from '../assets/home.png';
import Reticle from '../assets/Reticle.png';
import TutorialPopup from '../../../components/tutorial-popup/TutorialPopup';
import Minimap from '../../../components/miniMap/Minimap';
import { db } from '../../../config/Firebase';

const Viewer = () => {
  return (
    <div>
      <ViewerPage />
    </div>
  );
};

class ViewerPage extends Component<{}, {}> {
  constructor(props) {
    super(props);

    this.canvas = '';
    this.engine = '';
    this.scene = '';
    this.camera = '';
    this.light = '';
    this.state = {
      sceneLoadedPercent: 0,
      showLoading: true,
      showModal: false,
      interactables: '',
      url: '',
      currentAnalytics: '',
    };
    this.interactablesData = '';
    this.hotspots = '';
    this.result = '';
    this.reticle = '';
    this.mainModel = '';
  }

  onSceneMount = (e: SceneEventArgs) => {
    const { canvas, scene, engine } = e;

    this.canvas = canvas;
    this.engine = engine;
    this.scene = scene;
    this.setupCamera();
    this.setupLights();
    this.loadMediaData();
    this.setupStudio();
    this.checkTime();
    // this.addObservable();

    // #region Reticle Setup
    this.reticle = BABYLON.MeshBuilder.CreateDisc('reticle', {
      radius: 0.2,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
    });
    this.reticle.isPickable = false;

    const reticleMat = new BABYLON.StandardMaterial('reticleMat', this.scene);
    reticleMat.diffuseTexture = new BABYLON.Texture(Reticle, this.scene);
    reticleMat.unlit = true;
    reticleMat.emissiveTexture = new BABYLON.Texture(Reticle, this.scene);
    reticleMat.opacityTexture = new BABYLON.Texture(Reticle, this.scene);

    this.reticle.material = reticleMat;
    // #endregion

    this.scene.registerBeforeRender(() => {
      this.result = this.raycast();
      if (
        this.result.hit &&
        this.result.pickedMesh.metadata.tag === 'navigationFloor'
      ) {
        this.reticle.isVisible = true;
        this.reticle.position = new BABYLON.Vector3(
          this.result.pickedPoint.x,
          this.result.pickedPoint.y + 0.1,
          this.result.pickedPoint.z
        );
        this.reticle.rotation.set(Math.PI / 2, this.camera.rotation.y, Math.PI);
      } else {
        this.reticle.isVisible = false;
      }
    });

    scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERTAP: {
          switch (this.result.pickedMesh.metadata.tag) {
            case 'navigationFloor': {
              if (this.reticle.isVisible) {
                const targetLocation = new BABYLON.Vector3(
                  this.result.pickedPoint.x,
                  this.camera.position.y,
                  this.result.pickedPoint.z
                );
                BABYLON.Animation.CreateAndStartAnimation(
                  'Movement',
                  this.camera,
                  'position',
                  50,
                  60,
                  this.camera.position,
                  targetLocation,
                  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
                );
              }
              break;
            }
            case 'chat': {
              this.setModalView(
                'https://tawk.to/chat/603df02c385de407571b8982/1evov4cn5#',
                true
              );
              break;
            }
            case 'URL': {
              this.setModalView('https://www.forevermark.com/', true);
              break;
            }
            case 'broucher': {
              this.setModalView('Test.pdf', true);
              break;
            }
            case 'Screen': {
              this.setModalView(
                mediaData.get(this.result.pickedMesh.metadata.name).Video_url,
                true
              );
              break;
            }
            case 'wayPoint': {
              const targetLocation = new BABYLON.Vector3(
                this.result.pickedMesh.position.x,
                this.camera.position.y,
                this.result.pickedMesh.position.z
              );
              const targetRotation = new BABYLON.Vector3(
                0,
                this.result.pickedMesh.rotation.y,
                this.camera.rotation.z
              );
              this.animate(targetLocation, targetRotation);
              break;
            }
            default:
              break;
          }
          break;
        }
        default:
          break;
      }
    });

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  setupCamera = () => {
    this.camera = new BABYLON.FreeCamera(
      'camera1',
      new BABYLON.Vector3(0.34, 2.9, -92),
      this.scene
    );
    this.camera.setTarget(BABYLON.Vector3.Zero());
    this.camera.attachControl(this.canvas, true);
    this.camera.rotation = new BABYLON.Vector3(-0.03, 0.02, 0);
    this.camera.inputs.remove(this.camera.inputs.attached.keyboard);

    const gl = new BABYLON.GlowLayer('glow', this.scene);
    gl.intensity = 0.25;
    gl.blurKernelSize = 16;
  };

  setupLights = () => {
    const light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 0, 0),
      this.scene
    );
    light.intensity = 0.5;
    const cubeTex = new BABYLON.CubeTexture(
      'https://storage.googleapis.com/forevermarkforum2021.appspot.com/skybox/forevermark',
      this.scene
    );
    cubeTex.rotationY = 4.3;
    this.scene.createDefaultSkybox(cubeTex, true, 1000, 0, false);
    this.scene.environmentTexture = cubeTex;
    this.scene.environmentIntensity = 0.5;

    const light2 = new BABYLON.DirectionalLight(
      'light2',
      new BABYLON.Vector3(0, -1, 0),
      this.scene
    );
    light2.intensity = 13;
  };

  setTextureonScreen = (screenName, screenObject) => {
    const thumbnailTexture = mediaData.get(screenName);
    const screenMat = new BABYLON.StandardMaterial('screenMat', this.scene);
    screenObject.material = screenMat;
    screenObject.material.emissiveTexture = thumbnailTexture.thumbnail;
    screenObject.material.diffuseColor = new BABYLON.Color3.Black();
    screenObject.material.specularColor = new BABYLON.Color3.Black();
  };

  setupStudio = () => {
    const loadingCalc = (data) => {
      const { loaded } = data;
      const sceneLoadedPercent = ((loaded * 100) / 26210304).toFixed();
      this.setState((prevState) => ({
        ...prevState,
        sceneLoadedPercent,
        showLoading: true,
      }));

      this.scene.executeWhenReady(() => {
        this.setState((prevState) => ({
          ...prevState,
          sceneLoadedPercent: 100,
          showLoading: false,
        }));
      });
    };

    BABYLON.DracoCompression.Configuration = {
      decoder: {
        wasmUrl:
          'https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_decoder.js',
        wasmBinaryUrl:
          'https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_decoder.wasm',
        fallbackUrl:
          'https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_wasm_wrapper.js',
      },
    };
    BABYLON.SceneLoader.ImportMeshAsync(
      '',
      'https://storage.googleapis.com/forevermarkforum2021.appspot.com/',
      'FFM.glb',
      this.scene,
      loadingCalc
    ).then((studio) => {
      this.scene.materials.forEach((mat) => (mat.unlit = true));

      const { meshes } = studio;
      this.mainModel = meshes;

      const floor = this.scene.getMaterialByName('Floor');
      floor.environmentIntensity = 0.8;
      floor.directIntensity = 0.25;

      for (let index = 0; index < meshes[0]._children.length; index += 1) {
        const element = meshes[0]._children[index];
        if (element.name === '893672') {
          this.setTextureonScreen('Main Screen', element);
          element.metadata.tag = 'Screen';
          element.metadata.name = 'Main Screen';
        } else if (element.name === 'Audi') {
          this.setTextureonScreen('Audi Screen', element);
          element.metadata.tag = 'Screen';
          element.metadata.name = 'Audi Screen';
        } else if (element.name === 'XRC_Image_01_TV') {
          element.metadata.tag = 'chat';
        } else if (element.name === 'Booth  Kiosk Branding') {
          element.metadata.tag = 'broucher';
        } else if (element.name === 'Booth Kisok Branding_02') {
          element.metadata.tag = 'URL';
        } else if (element.name === 'ground' || element.name === 'Booth Base') {
          element.metadata.tag = 'navigationFloor';
        }
      }

      // Putting Videos on Screen
      Object.keys(boothMap).forEach((booth) => {
        const screen = Object.keys(boothMap[booth].TV)[0];
        this.makeWaypoint(
          boothMap[booth].Transform.name,
          boothMap[booth].Transform.posX,
          boothMap[booth].Transform.posY,
          boothMap[booth].Transform.posZ,
          boothMap[booth].Transform.rotX,
          boothMap[booth].Transform.rotY,
          boothMap[booth].Transform.rotZ
        );
        const element = this.getMeshfromMainModel(screen);
        if (element) {
          this.setTextureonScreen(boothMap[booth].TV[screen], element);
          element.metadata.tag = 'Screen';
          element.metadata.name = boothMap[booth].TV[screen];
        }
      });
    });
  };

  getMeshfromMainModel = (name) => {
    for (
      let index = 0;
      index < this.mainModel[0]._children.length;
      index += 1
    ) {
      const element = this.mainModel[0]._children[index];
      if (element.name === name) {
        return element;
      }
    }
    return null;
  };

  setModalView = (Url, show) => {
    this.setState(() => ({
      url: Url,
      showModal: show,
    }));
  };

  // function to fetch data from database and load it based on URL
  loadMediaData = () => {
    db.collection('boothdata')
      .get()
      .then(async (doc) => {
        doc.docs.map((data) => {
          const fetchedData = data.data();
          const thumbnail = new BABYLON.Texture(
            fetchedData['thumbnail-URL'],
            this.scene
          );
          const tempObject = {
            thumbnail: thumbnail,
            Video_url: fetchedData.asset_url,
          };
          mediaData.set(data.id, { ...tempObject });
          return null;
        });
      });
  };

  raycast = () => {
    const hit = this.scene.pick(this.scene.pointerX, this.scene.pointerY);
    return hit;
  };

  goToHome = () => {
    const fromRotation = this.camera.rotation;
    const toRotation = new BABYLON.Vector3(0, 0, 0);
    const fromPosition = this.camera.position;
    const toPosition = new BABYLON.Vector3(0.34, 2.9, -92);
    BABYLON.Animation.CreateAndStartAnimation(
      'camRot',
      this.camera,
      'rotation',
      30,
      30,
      fromRotation,
      toRotation,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    BABYLON.Animation.CreateAndStartAnimation(
      'camRot',
      this.camera,
      'position',
      30,
      30,
      fromPosition,
      toPosition,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
  };

  goToFirstFloor = () => {
    const currentRot = this.camera.rotation;
    const toRot = new BABYLON.Vector3(0, 0, 0);
    const currentPos = this.camera.position;
    const toPos = new BABYLON.Vector3(0, 20, 5);

    BABYLON.Animation.CreateAndStartAnimation(
      'camRotation',
      this.camera,
      'rotation',
      30,
      30,
      currentRot,
      toRot,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    BABYLON.Animation.CreateAndStartAnimation(
      'camPosition',
      this.camera,
      'position',
      30,
      30,
      currentPos,
      toPos,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
  };

  tutorialbutton = (open) => {
    this.setState({
      ...this.state,
      tutorialopen: open,
    });
  };

  makeWaypoint = (name, x, y, z, rotX, rotY, rotZ) => {
    const wayPoint = BABYLON.MeshBuilder.CreateDisc(name, {
      radius: 0.5,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
    });
    wayPoint.metadata = { tag: 'wayPoint' };
    wayPoint.position = new BABYLON.Vector3(x, y, z);
    wayPoint.rotation = new BABYLON.Vector3(rotX, rotY, rotZ);

    const wpMat = new BABYLON.StandardMaterial('wpMat', this.scene);
    wpMat.diffuseTexture = new BABYLON.Texture(Reticle, this.scene);
    wpMat.unlit = true;
    wpMat.emissiveTexture = new BABYLON.Texture(Reticle, this.scene);
    wpMat.opacityTexture = new BABYLON.Texture(Reticle, this.scene);

    wayPoint.material = wpMat;
  };

  moveToWayPoint = (name) => {
    const transform = boothMap[name].Transform;
    this.animate(
      new BABYLON.Vector3(
        transform.posX,
        this.camera.position.y,
        transform.posZ
      ),
      new BABYLON.Vector3(0, transform.rotY, this.camera.rotation.z)
    );
  };

  animate = (targetLocation, targetRotation) => {
    BABYLON.Animation.CreateAndStartAnimation(
      'Movement',
      this.camera,
      'position',
      50,
      60,
      this.camera.position,
      targetLocation,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    BABYLON.Animation.CreateAndStartAnimation(
      'Movement',
      this.camera,
      'rotation',
      50,
      60,
      this.camera.rotation,
      targetRotation,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
  };

  checkTime = () => {
    const getTime = setTimeout(() => {
      const today = new Date();
      const currentTime = `${today.getHours().toLocaleString()}:${today
        .getMinutes()
        .toLocaleString()}`;
      if (currentTime === advertisementData.time) {
        this.setModalView(advertisementData.URL, true);
        clearInterval(getTime);
      } else {
        this.checkTime();
      }
    }, 1000);
  };

  render() {
    const { sceneLoadedPercent, showLoading } = this.state;

    return (
      <>
        <TutorialPopup
          open={this.state.tutorialopen}
          setOpen={() => {
            this.tutorialbutton(false);
          }}
        />

        <CustomModal
          url={this.state.url}
          show={this.state.showModal}
          onHide={() => {
            this.setModalView('', false);
          }}
        />

        <BabylonScene onSceneMount={this.onSceneMount} />
        <LoadingScreen show={showLoading} loadedPercent={sceneLoadedPercent} />
        {!showLoading && (
          <div>
            <Fab
              color="primary"
              aria-label="add"
              size="large"
              style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
              }}
              onClick={this.goToHome}
            >
              <img src={Home} alt="Home icon" style={{ width: '24px' }} />
            </Fab>
            <Fab
              color="primary"
              aria-label="add"
              size="large"
              style={{
                position: 'fixed',
                bottom: '1rem',
                right: '5rem',
              }}
              onClick={this.goToFirstFloor}
            >
              <PublishIcon />
            </Fab>
            <Fab
              color="primary"
              aria-label="add"
              size="large"
              style={{
                position: 'fixed',
                bottom: '1rem',
                left: '1rem',
              }}
              onClick={() => {
                this.tutorialbutton(true);
              }}
            >
              <HelpIcon />
            </Fab>
            <Minimap
              moveToWayPoint={(name) => {
                this.moveToWayPoint(name);
              }}
            />
          </div>
        )}
      </>
    );
  }
}
export default Viewer;
