import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
function Repo({ repo, isFavourite, handleOnClick }) {
  return (
    <Card className="repo-card m-3" key={repo.id}>
      <Card.Img variant="top" src={repo?.owner?.avatar_url} />
      <Card.Body>
        <Card.Title className="card-title">{repo.name}</Card.Title>
        {repo.description && <Card.Text>{repo.description}</Card.Text>}
      </Card.Body>
      <Card.Footer className="text-center">
        <Stack direction="horizontal" className="justify-content-between">
          <Button variant="light" href={repo.html_url} target="_blank">
            <i class="fa-brands fa-github"></i>
          </Button>
          {/* if favorite is false */}
          {isFavourite ? (
            <Button variant="light" onClick={() => handleOnClick(repo)}>
              <i className="fa-solid fa-trash"></i>
            </Button>
          ) : (
            <Button variant="light" onClick={() => handleOnClick(repo)}>
              <i className="fa-solid fa-heart"></i>
            </Button>
          )}
        </Stack>
      </Card.Footer>
    </Card>
  );
}

export default Repo;
