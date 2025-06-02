import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className={`navbar navbar-light bg-light  
      `}
    >
      <div className="container d-flex justify-content-end">
        <Link to="/demo">
          <button
            className={`btn btn-success ${
              location.pathname === "/demo" ? "d-none" : ""
            }`}
          >
            Add new Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};
