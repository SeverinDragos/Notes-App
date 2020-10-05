import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NewNote from "./features/notes/NewNote";
import NoteList from "./features/notes/NoteList";
import Welcome from "./features/welcome/Welcome";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = useCallback(
    (note, resetFunction) => () => {
      setNotes([...notes, note]);
      resetFunction();
    },
    [notes]
  );

  const handleDeleteNote = useCallback(
    (index) => () => {
      setNotes(notes.filter((_, idx) => idx !== index));
    },
    [notes]
  );

  return (
    <Container>
      <Welcome />
      <NewNote handleAdd={handleAddNote} />
      <NoteList notes={notes} handleRemove={handleDeleteNote} />
    </Container>
  );
}

export default App;
