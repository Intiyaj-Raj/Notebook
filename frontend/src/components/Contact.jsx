import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919117392461";

    const whatsappMessage = `
Hello, I need support with iNotebook.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <h1 className="fw-bold text-primary">Contact Support</h1>
                <p className="text-muted">
                  Need help with iNotebook? We're here to help.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-success px-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
