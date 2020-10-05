import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

const NoteList = (props) => {
  const { notes } = props;

  return notes.map((note) => (
      <Note
        key={note.content}
        category={note.category}
        content={note.content}
      />
  ));
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
