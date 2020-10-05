import React, { useCallback, useState } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { colors } from "../../../utils/data";

const Note = (props) => {
  const { category, content, index, handleRemove } = props;
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const handleDeleteClick = useCallback(
    () => {
      setIsDeleteClicked(!isDeleteClicked)
    },
    [isDeleteClicked],
  )

  const jsx = isDeleteClicked ? (
    <>
    <h5>Are you sure you no longer need this note?</h5>
    <Button variant="danger" onClick={handleRemove(index)} style={{marginRight: "5px"}}>
      Yes
    </Button>
    <Button variant="primary" onClick={handleDeleteClick}>
      No
    </Button>
    </>
  ) : (
    <Button variant="danger" onClick={handleDeleteClick}>
      Delete
    </Button>
  );

  return (
    <>
      <Card>
        <Card.Header style={{ backgroundColor: colors[category] }}>
          {category}
        </Card.Header>
        <Card.Body>
          <Card.Text>{content}</Card.Text>
          {jsx}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

Note.propTypes = {
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Note;
