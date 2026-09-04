import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();

      if (response.ok && json.success) {
        localStorage.setItem("token", json.authtoken);

        props.showAlert("Logged in Successfully", "success");

        navigate("/");
      } else {
        props.showAlert(json.error || "Invalid Credentials", "danger");
      }
    } catch (error) {
      console.error("Login Error:", error);
      props.showAlert("Unable to connect to server", "danger");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-body p-4 p-md-5">
              {/* Header */}
              <div className="text-center mb-4">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "30px",
                  }}
                >
                  <i className="bi bi-person-lock"></i>
                </div>

                <h2 className="fw-bold mb-2">Welcome Back!</h2>

                <p className="text-muted mb-0">
                  Login to continue to iNotebook
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">
                    <i className="bi bi-envelope me-2 text-primary"></i>
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg rounded-3"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={onChange}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="bi bi-lock me-2 text-primary"></i>
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg rounded-3"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={onChange}
                    autoComplete="current-password"
                    required
                  />
                </div>

                {/* Login Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-3 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Login
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="card-footer bg-light border-0 text-center py-3">
              <small className="text-muted">
                <i className="bi bi-shield-check me-1"></i>
                Your account is protected with secure authentication.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
