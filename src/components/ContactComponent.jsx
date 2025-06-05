import { useEffect } from "react";
import ContactCardComponent from "./ContactCardComponent";
import { CreateNewAgenda } from "../Services/Services";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function ContactComponent() {
  const { contactsList, dispatch } = useGlobalReducer();

  useEffect(() => {
    CreateNewAgenda().then((data) => {
      dispatch({ type: "SET_CONTACTS", payload: data.contacts });
    });
  }, []);

  return (
    <div className="container">
      {contactsList.contacts && contactsList.contacts.length > 0 ? (
        contactsList.contacts.map((person) => (
          <ContactCardComponent key={person.id} Contact={person} />
        ))
      ) : (
        <div className="card-body text-center border border-2 border-warning">
          <p>Lista de contactos vacia!, crea un nuevo contacto</p>
        </div>
      )}
    </div>
  );
}
