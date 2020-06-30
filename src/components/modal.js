import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const HoverModal = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}></Button>
      <Modal isOpen={modal} toggle={toggle} className='modal'>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          {about}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" href={github} target='_blank'>Github</Button>{' '}
          <Button color="secondary" href={website} target ='_blank'>Website</Button>
          <Button target ='_blank' onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default HoverModal;