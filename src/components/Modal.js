import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

function ModalComponent(props) {
  return (
    <Modal
      isOpen={props.show}
      size="lg"
      style={{ maxWidth: '800px', width: '100%', height: 'auto' }}
      toggle={props.toggle}
    >
      <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={props.toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalComponent;
