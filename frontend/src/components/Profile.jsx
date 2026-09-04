import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const host = "http://localhost:5000";

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${host}/api/auth/getuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });

        const json = await response.json();

        if (response.ok) {
          setUser(json);
        } else {
          console.log(json);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "35px",
                  }}
                >
                  👤
                </div>

                <h2 className="fw-bold">My Profile</h2>
                <p className="text-muted">Your iNotebook account details</p>
              </div>

              {user ? (
                <>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <div className="form-control bg-light">{user.name}</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>
                    <div className="form-control bg-light">{user.email}</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">User ID</label>
                    <div className="form-control bg-light text-muted">
                      {user._id}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Account Status
                    </label>
                    <div>
                      <span className="badge bg-success">Active</span>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-muted mb-0">
                      🔐 Your account is protected with authentication.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>

                  <p className="text-muted mt-2">Loading profile...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
