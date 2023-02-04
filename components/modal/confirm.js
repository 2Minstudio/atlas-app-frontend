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
      size="md"
      show={isShow ? true : false}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-sm">{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="rounded-25 me-3" variant="outline-success" size="lg" onClick={cancelAction}>
          {cancelText}
        </Button>
        <Button className="rounded-25" variant="success" size="lg" onClick={okayAction}>
          {okayText}
        </Button>
      </Modal.Body>
    </Modal>
  );
}
