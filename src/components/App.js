import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import NoteList from "./features/notes/NoteList";
import Welcome from "./features/welcome/Welcome";
import notesData from '../utils/data'
import NewNote from "./features/notes/NewNote";

function App() {
  return (
    <Container>
      <Welcome />
      <NewNote />
      <NoteList notes={notesData}/>
    </Container>
  );
}

export default App;
