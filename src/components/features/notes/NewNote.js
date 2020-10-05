import React, { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";

const NewNote = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const displayHandler = useCallback(() => {
    setDisplayForm(!displayForm);
  }, [setDisplayForm, displayForm]);

  const buttonText = displayForm ? "Hide" : "Add Note";

  const jsx = displayForm ? (
    <>
      <label>Category</label>
      <br />
      <div class="selectdiv">
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </div>
      <br />
      <br />
      <br />
      <label>Text</label>
      <br />
      <textarea style={{ width: "60%", height: "200px" }}></textarea>
      <br />
      <br />
      <Button variant="primary">Save</Button>
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

export default NewNote;
