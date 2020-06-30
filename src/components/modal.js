import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const HoverModal = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}></Button>
      <Modal isOpen={modal} toggle={toggle} className='modal'>
        <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
        <ModalBody>
          {props.about}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Github Repo</Button>{' '}
          <Button color="secondary" onClick={toggle}>Visit website</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default HoverModal;