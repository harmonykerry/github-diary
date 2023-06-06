import React from "react";
import Container from "react-bootstrap/esm/Container";
import Banner from "../component/Banner";
import ErrorMessage from "../component/ErrorMessage";
import Repos from "../component/Repos";

// const repos = [];

const repos = undefined;

function MyRepos() {
  const removeRepo = () => {
    console.log("remove.repo");
  };
  return (
    <Container>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of my favorite Github Repositories"
      />

      {repos.length === 0 && (
        <ErrorMessage message="You have no repositories in your favorites" />
      )}
      {repos.length > 0 && (
        <Repos repos={repos} isFavorite={true} handleOnClick={removeRepo} />
      )}
    </Container>
  );
}

export default MyRepos;
