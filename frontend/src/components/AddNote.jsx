import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote(note.title, note.description, note.tag);

    setNote({
      title: "",
      description: "",
      tag: "",
    });

    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const isDisabled =
    note.title.length < 5 || note.description.length < 5 || note.tag.length < 5;

  return (
    <div className="container py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Header */}
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                    fontSize: "28px",
                  }}
                >
                  <i className="bi bi-journal-plus"></i>
                </div>

                <h2 className="fw-bold mb-2">Create a New Note</h2>

                <p className="text-muted mb-0">
                  Write down your thoughts, ideas and important information.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                  <label htmlFor="title" className="form-label fw-semibold">
                    <i className="bi bi-type me-2 text-primary"></i>
                    Title
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="title"
                    name="title"
                    placeholder="Enter note title"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={note.title}
                  />

                  <div className="form-text">Minimum 5 characters</div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="form-label fw-semibold"
                  >
                    <i className="bi bi-card-text me-2 text-primary"></i>
                    Description
                  </label>

                  <textarea
                    className="form-control rounded-3"
                    id="description"
                    name="description"
                    rows="5"
                    placeholder="Write your note here..."
                    onChange={onChange}
                    minLength={5}
                    required
                    value={note.description}
                  ></textarea>

                  <div className="d-flex justify-content-between mt-1">
                    <small className="text-muted">Minimum 5 characters</small>

                    <small className="text-muted">
                      {note.description.length} characters
                    </small>
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-4">
                  <label htmlFor="tag" className="form-label fw-semibold">
                    <i className="bi bi-tags me-2 text-primary"></i>
                    Tag
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="tag"
                    name="tag"
                    placeholder="e.g. Work, Personal, Study"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={note.tag}
                  />

                  <div className="form-text">
                    Use a tag to organize your notes.
                  </div>
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-3 fw-semibold"
                    disabled={isDisabled}
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Note
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="card-footer bg-light border-0 text-center py-3">
              <small className="text-muted">
                <i className="bi bi-shield-check me-1"></i>
                Your notes are securely stored in iNotebook.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
