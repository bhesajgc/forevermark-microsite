import { Modal } from 'react-bootstrap';
import React from 'react';

const CustomModal = (props) => {

  const { show, onHide, url } = props;

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
        <iframe id='pop-box-placholder' src={url}
          title="W3Schools Free Online Web Tutorials"
          allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen" allow="camera; microphone" />
      </Modal.Body>
    </Modal>
  );
}
export default CustomModal;