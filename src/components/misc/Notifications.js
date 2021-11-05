import React from 'react'
import {Modal,Button} from 'react-bootstrap'

function Notifications(props) {
    return (
        <Modal
          show={props.open}
          onHide={props.onClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
            {/* <Button variant="primary">Understood</Button> */}
          </Modal.Footer>
        </Modal>
    )
}


export default Notifications

