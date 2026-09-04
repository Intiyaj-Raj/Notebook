import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }

    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });

    ref.current.click();
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);

    refClose.current.click();

    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const isUpdateDisabled =
    note.etitle.length < 5 ||
    note.edescription.length < 5 ||
    note.etag.length < 5;

  return (
    <>
      {/* Add Note */}
      <AddNote showAlert={props.showAlert} />

      {/* Hidden button to open modal */}
      <button
        type="button"
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#editNoteModal"
        ref={ref}
      >
        Open Edit Modal
      </button>

      {/* ================= EDIT MODAL ================= */}
      <div
        className="modal fade"
        id="editNoteModal"
        tabIndex="-1"
        aria-labelledby="editNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Modal Header */}
            <div className="modal-header border-0 px-4 pt-4">
              <div>
                <h4 className="modal-title fw-bold" id="editNoteModalLabel">
                  <i className="bi bi-pencil-square text-primary me-2"></i>
                  Edit Note
                </h4>

                <p className="text-muted mb-0 mt-1">
                  Update your note details below.
                </p>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body px-4 py-4">
              <form>
                {/* Title */}
                <div className="mb-4">
                  <label htmlFor="etitle" className="form-label fw-semibold">
                    <i className="bi bi-type text-primary me-2"></i>
                    Title
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="etitle"
                    name="etitle"
                    placeholder="Enter note title"
                    value={note.etitle}
                    minLength={5}
                    required
                    onChange={onChange}
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label
                    htmlFor="edescription"
                    className="form-label fw-semibold"
                  >
                    <i className="bi bi-card-text text-primary me-2"></i>
                    Description
                  </label>

                  <textarea
                    className="form-control rounded-3"
                    id="edescription"
                    name="edescription"
                    rows="5"
                    placeholder="Write your note..."
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  ></textarea>

                  <div className="text-end mt-1">
                    <small className="text-muted">
                      {note.edescription.length} characters
                    </small>
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-2">
                  <label htmlFor="etag" className="form-label fw-semibold">
                    <i className="bi bi-tags text-primary me-2"></i>
                    Tag
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    id="etag"
                    name="etag"
                    placeholder="e.g. Work, Study, Personal"
                    value={note.etag}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 px-4 pb-4">
              <button
                type="button"
                className="btn btn-light border px-4"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                <i className="bi bi-x-lg me-2"></i>
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={handleClick}
                disabled={isUpdateDisabled}
              >
                <i className="bi bi-check-lg me-2"></i>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NOTES SECTION ================= */}
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">
              <i className="bi bi-journal-text text-primary me-2"></i>
              Your Notes
            </h2>

            <p className="text-muted mb-0">
              Manage and organize all your notes in one place.
            </p>
          </div>

          {/* Notes Count */}
          <div className="mt-3 mt-md-0">
            <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">
              {notes.length} {notes.length === 1 ? "Note" : "Notes"}
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className="mb-4" />

        {/* Empty State */}
        {notes.length === 0 ? (
          <div className="text-center py-5">
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "32px",
              }}
            >
              <i className="bi bi-journal-x text-muted"></i>
            </div>

            <h4 className="fw-semibold">No Notes Yet</h4>

            <p className="text-muted mb-0">
              Create your first note using the form above.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {notes.map((note) => (
              <NoteItem
                key={note._id}
                updateNote={updateNote}
                note={note}
                showAlert={props.showAlert}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
