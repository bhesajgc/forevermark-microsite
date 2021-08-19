import * as BABYLON from "babylonjs";
import React, { Component } from "react";

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement,
};

export type SceneProps = {
  // eslint-disable-next-line react/require-default-props
  engineOptions?: BABYLON.EngineOptions,
  // eslint-disable-next-line react/require-default-props
  adaptToDeviceRatio?: boolean,
  // eslint-disable-next-line react/require-default-props
  onSceneMount?: (args: SceneEventArgs) => void,
};

export default class BabylonScene extends Component<
  SceneProps & React.HTMLAttributes<HTMLCanvasElement>,
  {}
> {
  componentDidMount() {
    const { engineOptions, adaptToDeviceRatio, onSceneMount } = this.props;

    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
      engineOptions,
      adaptToDeviceRatio
    );

    const scene = new BABYLON.Scene(this.engine);
    this.scene = scene;
    this.scene.clearColor = new BABYLON.Color3(0, 0, 0);

    if (typeof onSceneMount === "function") {
      onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas,
      });
    }

    window.addEventListener("resize", this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }

  onCanvasLoaded = (c: HTMLCanvasElement) => {
    if (c !== null) {
      this.canvas = c;
    }
  };

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <canvas id="studio" ref={this.onCanvasLoaded} />
      </div>
    );
  }
}
