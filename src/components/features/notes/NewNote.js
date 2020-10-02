import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const NewNote = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const displayHandler = useCallback(() => {
    setDisplayForm(true);
  }, [setDisplayForm]);

  const jsx = displayForm ? (
    <>
      <label>Category</label>
      <br />
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select>
      <br />
      <label>Text</label>
      <br />
      <textarea style={{width: "60%", height: "200px"}}></textarea>
      <br />
      <Button variant="primary">Save</Button>
    </>
  ) : (
    <Button variant="primary" onClick={displayHandler}>
      Add Note
    </Button>
  );

  return (
    <Container>
      {jsx}
      <hr />
    </Container>
  );
};

export default NewNote;
