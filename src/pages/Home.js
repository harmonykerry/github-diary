import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import LoadingSpinner from "../component/LoadingSpinner";

import axios from "axios";
import Banner from "../component/Banner";
import SearchForm from "../component/SearchForm";
import ErrorMessage from "../component/ErrorMessage";
import Repo from "../component/Repo";
import Repos from "../component/Repos";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

function Home() {
  const [repos, setRepos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState();

  const handleApiTrigger = (userName) => {
    setUrl(`https://api.github.com/users/${userName}/repos`);
  };

  console.log(url);
  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const { data } = await axios.get(url);

          setError(false);
          setRepos(data);
        } catch {
          setError(true);
          setRepos();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [url]);
  console.log(repos);

  const addRepo = (repoToAdd) => {
    console.log(repoToAdd);
    //first step: Get everything from local storage
    const repoFromLS = getFromLocalStorage("repos", []);
    //second step: push or add repo
    // console.log(repoFromLS);
    repoFromLS.push(repoToAdd);

    localStorage.setItem("repos", JSON.stringify(repoFromLS))
  };

  return (
    <Container>
      <Banner
        title="Github Diary"
        subTitle="A Github search tool to save your favorite repositories"
      />
      <SearchForm handleApiTrigger={handleApiTrigger} />
      {isLoading && <LoadingSpinner />}
      {error && (
        <ErrorMessage message="No repositories found.Please try again" />
      )}
      {repos && <Repos repos={repos} handleOnClick={addRepo} />}
    </Container>
  );
}

export default Home;
