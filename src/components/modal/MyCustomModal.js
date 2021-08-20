import { Modal } from 'react-bootstrap';
import React from 'react';
import {Grid} from '@material-ui/core';

const MyCustomModal = (props) => {

  const { show, onHide, videoURL,chatURL } = props;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Grid container style={{height: '100%'}}>
          <Grid item xs={8}>
            <iframe id='pop-box-placholder' src={videoURL}
                    title="W3Schools Free Online Web Tutorials"
                    allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen" allow="camera; microphone" />

          </Grid>
          <Grid item xs={4}>
            <iframe id='pop-box-placholder' src={chatURL}
                    title="W3Schools Free Online Web Tutorials"
                    allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen" allow="camera; microphone" />

          </Grid>
        </Grid>
      </Modal.Body>
    </Modal>
  );
}
export default MyCustomModal;