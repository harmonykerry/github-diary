import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchForm({ handleApiTrigger }) {
  const [userName, setUserName] = useState();
  const [error, setError] = useState(false);

  const handleOnChange = ({ currentTarget }) => {
    setUserName(currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName) {
      setError(true);
    } else {
      setError(false);

      //trigger Api Request
      handleApiTrigger(userName)
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Github UseName"
          value={userName}
          onChange={handleOnChange}
        />
        {error && (
          <Form.Text className="text-danger">
            Please enter a valid Username
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
