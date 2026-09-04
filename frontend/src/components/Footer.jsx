import "../index.css";
const Footer = () => {
  const year = new Date().getFullYear();

  const features = [
    {
      icon: "bi-file-earmark-plus",
      label: "Create Notes",
    },
    {
      icon: "bi-pencil-square",
      label: "Edit Notes",
    },
    {
      icon: "bi-shield-lock",
      label: "Secure Authentication",
    },
  ];

  const socials = [
    {
      icon: "bi-instagram",
      href: "https://www.instagram.com/inti_0786/",
      label: "Instagram",
    },
    {
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/in/intiyaj-ansari/",
      label: "LinkedIn",
    },
    {
      icon: "bi-github",
      href: "https://github.com/Intiyaj-Raj",
      label: "GitHub",
    },
  ];

  return (
    <footer
      className="text-white mt-5"
      style={{
        background: "linear-gradient(180deg, #0a1929 0%, #06101c 100%)",
      }}
    >
      {/* Main Footer */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-5 col-md-6">
            <div className="mb-4">
              <h2 className="fw-bold mb-3" style={{ color: "#42a5f5" }}>
                iNotebook
              </h2>

              <p
                className="text-secondary mb-0"
                style={{
                  maxWidth: "420px",
                  lineHeight: "1.8",
                }}
              >
                Your simple and secure space to create, manage, and organize
                your notes. Stay productive, stay organized, and keep your ideas
                in one place.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">What You Get</h6>

            <ul className="list-unstyled m-0">
              {features.map((feature) => (
                <li
                  key={feature.label}
                  className="d-flex align-items-center text-secondary"
                >
                  <span className="feature-icon">
                    <i className={`bi ${feature.icon}`}></i>
                  </span>

                  <span className="px-2">{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Me */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-title">Follow Me</h6>

            <div className="d-flex flex-column">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="follow-link text-decoration-none d-flex align-items-center gap-3"
                >
                  <i
                    className={`bi ${social.icon}`}
                    style={{ color: "#42a5f5" }}
                  ></i>

                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container py-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <p className="text-secondary small mb-0">
              © {year} iNotebook. All rights reserved.
            </p>

            <p className="text-secondary small mb-0">
              Designed & Managed by{" "}
              <a
                href="https://intiyajansarifullstackdeveloper.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-semibold"
                style={{ color: "#42a5f5" }}
              >
                Intiyaj Ansari
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
