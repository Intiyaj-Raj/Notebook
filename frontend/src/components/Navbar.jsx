import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  // useEffect(() => {
  //   // console.log(location.pathname);
  // }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid px-4">
        <Link className="navbar-brand  fs-4 fw-bold text-info" to="/">
          iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === "/" ? "active  text-info" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === "/about" ? "active  text-info" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === "/contact" ? "active  text-info" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <form className="d-flex mt-2 mt-lg-0" role="search">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              className="btn btn-outline-info rounded-pill px-4"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
