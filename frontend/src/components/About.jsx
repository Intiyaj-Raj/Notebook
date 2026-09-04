import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: "bi-file-earmark-plus",
      title: "Create Notes",
      desc: "Quickly jot down your thoughts, ideas, and to-dos in a clean, distraction-free editor.",
    },
    {
      icon: "bi-pencil-square",
      title: "Edit Notes",
      desc: "Update and refine your notes anytime, with changes saved instantly and reliably.",
    },
    {
      icon: "bi-trash3",
      title: "Delete Notes",
      desc: "Remove notes you no longer need with a single click, keeping your workspace tidy.",
    },
    {
      icon: "bi-shield-lock",
      title: "Secure Authentication",
      desc: "Your notes are protected with JWT-based authentication, keeping your data private.",
    },
  ];

  const techStack = [
    "React.js",
    "JavaScript",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
  ];

  const whyPoints = [
    {
      icon: "bi-lightning-charge",
      title: "Simple",
      desc: "An intuitive interface that lets you focus on writing, not figuring things out.",
    },
    {
      icon: "bi-speedometer2",
      title: "Fast",
      desc: "Built on a modern stack for a smooth, responsive note-taking experience.",
    },
    {
      icon: "bi-shield-check",
      title: "Secure",
      desc: "Your data is safeguarded with industry-standard authentication practices.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="text-white text-center py-5"
        style={{
          background:
            "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)",
        }}
      >
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-3">About iNotebook</h1>
          <p
            className="lead mb-0"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Your thoughts, organized and secured — anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="fs-5 text-secondary">
                iNotebook is a simple and secure note-taking web application
                that helps you capture ideas, manage tasks, and stay organized.
                Built with a modern tech stack, it offers a fast and reliable
                way to create, edit, and manage your personal notes from any
                device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#0d47a1" }}>
            Features
          </h2>
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-sm-6 col-lg-3" key={idx}>
                <div
                  className="card h-100 text-center border-0 shadow-sm"
                  style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 0.75rem 1.5rem rgba(13, 71, 161, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
                  }}
                >
                  <div className="card-body py-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        backgroundColor: "#e3f2fd",
                        color: "#0d47a1",
                        fontSize: "1.75rem",
                      }}
                    >
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <h5 className="card-title fw-semibold">{feature.title}</h5>
                    <p className="card-text text-secondary small">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#0d47a1" }}>
            Tech Stack
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="badge rounded-pill fw-normal"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0d47a1",
                  border: "1px solid #90caf9",
                  padding: "0.65rem 1.25rem",
                  fontSize: "0.95rem",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why iNotebook Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#0d47a1" }}>
            Why iNotebook?
          </h2>
          <div className="row g-4 justify-content-center">
            {whyPoints.map((point, idx) => (
              <div className="col-sm-6 col-lg-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm text-center">
                  <div className="card-body py-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundColor: "#0d47a1",
                        color: "#ffffff",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className={`bi ${point.icon}`}></i>
                    </div>
                    <h5 className="card-title fw-semibold">{point.title}</h5>
                    <p className="card-text text-secondary small">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
        }}
      >
        <div className="container py-4">
          <h2 className="fw-bold mb-3">Ready to get organized?</h2>
          <p className="lead mb-4">
            Join iNotebook today and keep your ideas safe, simple, and always
            within reach.
          </p>
          <Link
            to="/"
            className="btn btn-light btn-lg fw-semibold px-4 py-2 shadow-sm"
            style={{ color: "#0d47a1" }}
          >
            Start Taking Notes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
