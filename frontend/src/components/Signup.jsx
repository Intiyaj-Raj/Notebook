import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const json = await response.json();

      if (response.ok && json.success) {
        localStorage.setItem("token", json.authtoken);

        props.showAlert("Account Created Successfully", "success");

        navigate("/");
      } else {
        props.showAlert(json.error || "Invalid Details", "danger");
      }
    } catch (error) {
      console.error("Signup Error:", error);

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

  const passwordsMatch =
    credentials.cpassword === "" ||
    credentials.password === credentials.cpassword;

  const isDisabled =
    !credentials.name ||
    !credentials.email ||
    credentials.password.length < 5 ||
    credentials.cpassword.length < 5 ||
    credentials.password !== credentials.cpassword;

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
                  <i className="bi bi-person-plus"></i>
                </div>

                <h2 className="fw-bold mb-2">Create Account</h2>

                <p className="text-muted mb-0">
                  Join iNotebook and manage your notes easily.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-semibold">
                    <i className="bi bi-person me-2 text-primary"></i>
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={credentials.name}
                    autoComplete="name"
                    onChange={onChange}
                    required
                  />
                </div>

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
                    autoComplete="email"
                    onChange={onChange}
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
                    placeholder="Create a password"
                    value={credentials.password}
                    autoComplete="new-password"
                    onChange={onChange}
                    required
                    minLength={5}
                  />

                  <small className="text-muted">Minimum 5 characters</small>
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                  <label htmlFor="cpassword" className="form-label fw-semibold">
                    <i className="bi bi-shield-lock me-2 text-primary"></i>
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className={`form-control form-control-lg rounded-3 ${
                      !passwordsMatch ? "is-invalid" : ""
                    }`}
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm your password"
                    value={credentials.cpassword}
                    autoComplete="new-password"
                    onChange={onChange}
                    required
                    minLength={5}
                  />

                  {!passwordsMatch && (
                    <div className="invalid-feedback">
                      Passwords do not match.
                    </div>
                  )}
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-3 fw-semibold"
                    disabled={loading || isDisabled}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-check me-2"></i>
                        Create Account
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
                Your information is securely protected.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
