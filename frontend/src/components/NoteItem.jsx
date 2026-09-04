import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>

          <p className="card-text">{note.description}</p>

          <button
            className="btn btn-danger mx-2 note-icon"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Successfully", "success");
            }}
          >
            Delete
          </button>

          <button
            className="btn btn-warning mx-2 note-icon"
            onClick={() => {
              updateNote(note);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
