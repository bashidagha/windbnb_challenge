import logo from "../assets/logo.svg";
import "./Navbar.scss";
import NavbarExpand from "./NavbarExpand";
import { useSelector } from "react-redux";

const Navbar = () => {

  const filteredCities = useSelector((state) => state.city.value.filterValue);

  return (
    <>
      <div className="offcanvas offcanvas-top" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title"></h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <NavbarExpand/>
        </div>
      </div>

      <nav className="container d-flex justify-content-between align-items-center">
        <img src={logo} alt="logo" />
        <div className="shadow">
          <a
            className="d-flex align-items-center justify-content-around"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <p className="m-0 loc">{filteredCities===""?"Helsinki":filteredCities}, Finland</p>
            <p className="m-0 guest">Add guests</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
