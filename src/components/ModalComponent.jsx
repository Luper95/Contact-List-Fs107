//investigar como trabajar con react-boostrap mejor
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({ show, onConfirm, onCancel }) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{"Confirmar Eliminación"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {"¿Estás seguro que deseas eliminar este contacto?"}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalComponent;
