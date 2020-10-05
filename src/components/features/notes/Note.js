import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import {colors} from '../../../utils/data'

const Note = (props) => {
  const { category, content } = props;
  return (
    <>
      <Card>
        <Card.Header style={{backgroundColor: colors[category]}}>{category}</Card.Header>
        <Card.Body>
          <Card.Text>{content}</Card.Text>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

Note.propTypes = {
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
