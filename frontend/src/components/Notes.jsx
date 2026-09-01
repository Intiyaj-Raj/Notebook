import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      {/* Hidden button to open modal */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      {/* Edit Note Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <form className="my-3">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label fw-semibold">
                        Title
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="etitle"
                        name="etitle"
                        value={note.etitle}
                        minLength={5}
                        required
                        onChange={onChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="description"
                        className="form-label fw-semibold"
                      >
                        Description
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="edescription"
                        name="edescription"
                        value={note.edescription}
                        onChange={onChange}
                        minLength={5}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label fw-semibold">
                        Tag
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="etag"
                        name="etag"
                        value={note.etag}
                        onChange={onChange}
                        minLength={5}
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="container">
        <div className="row my-3">
          <h2>Your Notes</h2>
          <div className="container">
            {notes.length === 0 && "No notes to display"}
          </div>
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
