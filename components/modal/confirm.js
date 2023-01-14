import { Button, Modal } from "react-bootstrap";
export default function ConfirmBox({
  isShow = false,
  text,
  okayText,
  okayAction,
  cancelText = "Cancel",
  cancelAction,
}) {
  return (
    <Modal
      size="sm"
      show={isShow ? true : false}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-sm">{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="light" onClick={cancelAction}>
          {cancelText}
        </Button>
        <Button variant="primary" onClick={okayAction}>
          {okayText}
        </Button>
      </Modal.Body>
    </Modal>
  );
}
