import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE4ZDdkNWRhNDBjMTQ2NWE2ZTZhZTkyIn0sImlhdCI6MTc4NzY1ODY5N30.QY_Pm7V4XHq_5CvWo1ysBJNAz3LY-wG1WJ19KlFnAIE";

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });

    const json = await response.json();

    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });

    const json = await response.json();

    // Add returned note to state
    setNotes((prevNotes) => prevNotes.concat(json));
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });

    const json = await response.json();

    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });

    const json = await response.json();

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === id
          ? {
              ...note,
              title,
              description,
              tag,
            }
          : note,
      ),
    );
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        getNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
