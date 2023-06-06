import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Banner from "../component/Banner";
import ErrorMessage from "../component/ErrorMessage";
import Repos from "../component/Repos";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

function MyRepos() {
  const [repos, setRepos] = useState(getFromLocalStorage("repos", []));

  const removeRepo = (repoToRemove) => {
    const reposFromLS = getFromLocalStorage("repos", []);
    // console.log(repoToRemove);
    // console.log(reposFromLS);
    // console.log("remove.repo");

    const newRepos = reposFromLS.filter((repo) => {
      return repo.id !== repoToRemove.id;
    });

    localStorage.setItem("repos", JSON.stringify(newRepos));

    setRepos(newRepos);
  };

  return (
    <Container>
      <Banner
        title="My Repositories"
        subTitle="Here is a list of my favourite GitHub repositories"
      />
      {repos.length === 0 && (
        <ErrorMessage message="You have no repositories in your favourites." />
      )}
      {repos.length > 0 && (
        <Repos repos={repos} isFavourite={true} handleOnClick={removeRepo} />
      )}
    </Container>
  );
}

export default MyRepos;
