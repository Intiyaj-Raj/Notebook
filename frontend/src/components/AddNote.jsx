import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-4">
      <div className="card  border-0">
        <div className="card-body p-4">
          <h2 className="fw-bold mb-4 text-center">Add a Note</h2>

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
                    id="title"
                    name="title"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={note.title}
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
                    id="description"
                    name="description"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={note.description}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label fw-semibold">
                    Tag
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    onChange={onChange}
                    minLength={5}
                    required
                    value={note.tag}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary px-4"
                  onClick={handleClick}
                  disabled={
                    note.title.length < 5 || note.description.length < 5
                  }
                >
                  Add Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
