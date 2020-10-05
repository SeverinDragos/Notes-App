import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

const NoteList = (props) => {
  const { notes, handleRemove } = props;

  return notes.map((note, index) => (
    <Note
      key={note.content}
      index={index}
      category={note.category}
      content={note.content}
      handleRemove={handleRemove}
    />
  ));
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default NoteList;
