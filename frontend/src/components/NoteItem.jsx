const NoteItem = (props) => {
  const { note } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-regular fa-trash-can mx-2 note-icon text-danger "></i>
          <i className="fa-regular fa-pen-to-square mx-2 note-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
