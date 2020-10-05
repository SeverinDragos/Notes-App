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
    [setNotes, notes]
  );

  return (
    <Container>
      <Welcome />
      <NewNote handleAdd={handleAddNote} />
      <NoteList notes={notes} />
    </Container>
  );
}

export default App;
