import { Modal } from 'react-bootstrap';
import React from 'react';

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
        <iframe id='pop-box-placholder' src={videoURL}
          title="W3Schools Free Online Web Tutorials"
          allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen" allow="camera; microphone" />
          <iframe id='pop-box1-placholder' src={chatURL}
          title="W3Schools Free Online Web Tutorials"
          allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen" allow="camera; microphone" />
      </Modal.Body>
    </Modal>
  );
}
export default MyCustomModal;