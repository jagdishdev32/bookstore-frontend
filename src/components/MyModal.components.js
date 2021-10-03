// import Button from "./Button.components";
import { Modal, Button } from "react-bootstrap";

const MyModal = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        animation={true}
        className="modal fade"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
