import { createContext, useContext, useReducer } from "react";

const ConctactContext = createContext();

const initialState = {
  contacts: [],
  isEditing: false,
  contactToEdit: null,
};

function contactReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };

    case "SET_EDIT_CONTACT":
      return {
        ...state,
        isEditing: true,
        contactToEdit: state.contacts.find(
          (contact) => contact.id === action.payload
        ),
      };

    case "CLEAR_EDIT_CONTACT":
      return {
        ...state,
        isEditing: false,
        contactToEdit: null,
      };

    default:
      return state;
  }
}

export function ContactProvider({ children }) {
  const [contactsList, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ConctactContext.Provider value={{ contactsList, dispatch }}>
      {children}
    </ConctactContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(ConctactContext);
}
