import "./contactCardComponent.css";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { DeleteContact } from "../Services/Services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

export default function ContactCardComponent({ Contact }) {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  //const para el modal
  const [showModal, setShowModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  //eliminar el contacto,Llamando a un modal para confirmacion
  const handleClickDelete = () => {
    setIdToDelete(Contact.id);
    setShowModal(true);
  };
  //ahora si eliminamos desde el modal
  const confirmDelete = () => {
    DeleteContact(Contact.id).then(
      dispatch({ type: "REMOVE_CONTACT", payload: idToDelete })
    );
    setTimeout(() => {
      setShowModal(false);
      setIdToDelete(null);
    }, 200);
  };

  //editar el contacto
  const handleClickEdit = () => {
    console.log("Edit contact with ID:", Contact.id);
    dispatch({ type: "SET_EDIT_CONTACT", payload: Contact.id });
    setTimeout(() => {
      navigate("/demo");
    }, 200);
  };
  return (
    <div className=" d-flex  border border-2 py-2">
      <div className=" col-3 d-flex justify-content-center align-items-center my-2">
        <img
          src="data:image/jpeg;base64,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"
          alt={Contact.name}
          className="rounded-circle d-flex object-fit-cover"
          style={{ width: "130px", height: "130px" }}
        />
      </div>
      <div className=" col-7  ">
        <h4 className="card-title align-text-start mb-1 p-0">{Contact.name}</h4>
        <strong className="card-text m-0 p-0  text-secondary">
          <i className="fa-solid fa-location-dot me-3"></i>
          {Contact.address}
        </strong>
        <p className="card-text m-0 p-0  text-secondary">
          <i className="fa-solid fa-phone  me-3"></i>
          {Contact.phone}
        </p>
        <p className="card-text m-0 p-0  text-secondary">
          <i className="fa-solid fa-envelope  me-3"></i>
          {Contact.email}
        </p>
      </div>
      <div className="col-2  mt-2 fs-5">
        <i
          className="fa-solid fa-pencil mx-4 pencilEdit"
          onClick={handleClickEdit}
        ></i>
        <i
          className="fa-solid fa-trash-can mx-4 trashCan "
          onClick={handleClickDelete}
        ></i>
      </div>
      <ModalComponent
        show={showModal}
        onConfirm={confirmDelete}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
}
