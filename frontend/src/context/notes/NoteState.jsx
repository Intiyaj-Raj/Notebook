import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "note001",
      user: "user001",
      title: "Title 1",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:55:22.260+00:00",
      __v: 0,
    },
    {
      _id: "note002",
      user: "user002",
      title: "Title 2",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    },
    {
      _id: "note003",
      user: "user003",
      title: "Title 3",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:55:22.260+00:00",
      __v: 0,
    },
    {
      _id: "note004",
      user: "user004",
      title: "Title 4",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    },
    {
      _id: "note005",
      user: "user005",
      title: "Title 5",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:55:22.260+00:00",
      __v: 0,
    },
    {
      _id: "note006",
      user: "user006",
      title: "Title 6",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("add a new note");

    const note = {
      _id: "note007",
      user: "user007",
      title: "new title",
      description: "12312",
      tag: "pajksdhfjkasd",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log("delete note " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = (id, title, description, tag) => {
    for (let index = 0; index < notes.length; index++) {
      // API Call
      // logic to edit note
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
