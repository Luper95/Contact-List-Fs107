// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { AddNewContact, UpdateContact } from "../Services/Services";

export const Demo = () => {
  const navigate = useNavigate();
  const { contactsList, dispatch } = useGlobalReducer();
  const [contacData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    id: "",
  });

  useEffect(() => {
    if (contactsList.isEditing && contactsList.contactToEdit) {
      setContactData({
        name: contactsList.contactToEdit.name,
        email: contactsList.contactToEdit.email,
        phone: contactsList.contactToEdit.phone,
        address: contactsList.contactToEdit.address,
        id: contactsList.contactToEdit.id,
      });
    } else {
      clearEditingState();
      setContactData({
        name: "",
        email: "",
        phone: "",
        address: "",
        id: "",
      });
    }
  }, [contactsList.isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contacData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactsList.isEditing) {
      //Send the updated contact data to the server
      UpdateContact(contacData).then(() => {
        //dispatch the action to update the contact in the global state
        dispatch({ type: "UPDATE_CONTACT", payload: contacData });
      });
      clearEditingState(); // Clear the editing state
      setTimeout(() => {
        navigate("/"); // Redirect to the home page after adding the contact
      }, 200);
    } else {
      // If not editing, add a new contact and then dispatch the action to add the contact
      AddNewContact(contacData).then(() => {
        dispatch({ type: "ADD_CONTACT", payload: contacData });
        clearEditingState();
      });
      setTimeout(() => {
        navigate("/"); // Redirect to the home page after adding the contact
      }, 200);
    }
  };

  const clearEditingState = () => {
    dispatch({ type: "CLEAR_EDIT_CONTACT" });
    setContactData({
      name: "",
      email: "",
      phone: "",
      address: "",
      id: "",
    });
  };

  return (
    <div>
      <div className="container-fluid text-center">
        <h1> Add new contact</h1>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Full Name"
          name="name"
          onChange={handleInputChange}
          value={contacData.name}
        />
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter email"
          name="email"
          onChange={handleInputChange}
          value={contacData.email}
        />
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter phone"
          name="phone"
          onChange={handleInputChange}
          value={contacData.phone}
        />
        <label className="form-label">Adress</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter adress"
          name="address"
          onChange={handleInputChange}
          value={contacData.address}
        />
        <button className="btn btn-primary w-100 mt-2" type="submit">
          <strong>save</strong>
        </button>
        <Link to="/">
          <p onClick={clearEditingState}>or get back to contacts</p>
        </Link>
      </form>
    </div>
  );
};
