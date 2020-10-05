import React, { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { categories } from "../../../utils/data";

const NewNote = (props) => {
  const { handleAdd } = props;
  const [displayForm, setDisplayForm] = useState(false);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const displayHandler = useCallback(() => {
    setDisplayForm(!displayForm);
  }, [setDisplayForm, displayForm]);

  const buttonText = displayForm ? "Hide" : "Add Note";

  const handleSelectChange = useCallback(
    (event) => {
      setCategory(event.target.value);
    },
    [setCategory]
  );

  const handleTextAreaChange = useCallback(
    (event) => {
      setContent(event.target.value);
    },
    [setContent]
  );

  const resetState = useCallback(() => {
    setCategory(categories[0]);
    setContent("");
  }, [setCategory, setContent]);

  const jsx = displayForm ? (
    <>
      <label>Category</label>
      <br />
      <div className="selectdiv">
        <select value={category} onChange={handleSelectChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <br />
      <br />
      <br />
      <label>Text</label>
      <br />
      <textarea
        value={content}
        style={{ width: "50%", height: "200px" }}
        onChange={handleTextAreaChange}
      ></textarea>
      <br />
      <br />
      <Button
        variant="primary"
        onClick={handleAdd(
          { category: category, content: content },
          resetState
        )}
      >
        Save
      </Button>
    </>
  ) : (
    ""
  );

  return (
    <Container>
      <Button variant="primary" onClick={displayHandler}>
        {buttonText}
      </Button>
      <br />
      {jsx}
      <hr />
    </Container>
  );
};

NewNote.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default NewNote;
