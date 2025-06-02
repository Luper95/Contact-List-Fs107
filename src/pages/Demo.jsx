// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  return (
    <div>
      <div className="container-fluid text-center">
        <h1> Add new contact</h1>
      </div>
      <div className="container">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Full Name"
        />
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter email"
        />
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter phone"
        />
        <label className="form-label">Adress</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter adress"
        />
        <button className="btn btn-primary w-100 mt-2">
          {" "}
          <strong>save</strong>
        </button>
        <Link to="/">
          <p>or get back to contacts</p>
        </Link>
      </div>
    </div>
  );
};
