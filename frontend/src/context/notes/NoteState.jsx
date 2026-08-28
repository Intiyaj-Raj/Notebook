import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6a8de51a258b6baa575e0541",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: "Title 1",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:55:22.260+00:00",
      __v: 0,
    },
    {
      _id: "6a8de581258b6baa575e0542",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: " Title 2",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    },
    {
      _id: "6a8de51a258b6baa575e0541",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: "Title 1",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:55:22.260+00:00",
      __v: 0,
    },
    {
      _id: "6a8de581258b6baa575e0542",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: " Title 2",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    },
    {
      _id: "6a8de51a258b6baa575e0541",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: "Title 1",
      description: "wake up in the morning",
      tag: "personal",
      date: "2026-08-25T18:55:22.260+00:00",
      __v: 0,
    },
    {
      _id: "6a8de581258b6baa575e0542",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: " Title 2",
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
      _id: "6a8de581258b6baa575e0542",
      user: "6a8d7d5da40c1465a6e6ae92",
      title: " new title",
      description: "12312",
      tag: "pajksdhfjkasd",
      date: "2026-08-25T18:57:05.407+00:00",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = () => {};
  // Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
