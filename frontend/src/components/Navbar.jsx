import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: "#091726" }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link className="navbar-brand fs-4 fw-bold text-info" to="/">
          iNotebook
        </Link>

        {/* Mobile Toggle */}
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

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Items - Right Side */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === "/" ? "active text-info" : "text-light"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === "/about"
                    ? "active text-info"
                    : "text-light"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === "/contact"
                    ? "active text-info"
                    : "text-light"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            {/* Logged In */}
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link px-3 fw-semibold ${
                      location.pathname === "/profile"
                        ? "active text-info"
                        : "text-light"
                    }`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>

                <li className="nav-item ms-lg-2">
                  <button
                    className="btn btn-primary px-4"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-lg-2">
                  <Link className="btn btn-primary px-4" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item ms-lg-2">
                  <Link className="btn btn-primary px-4" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
