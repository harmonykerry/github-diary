import React from "react";
import Repo from "./Repo";
import Stack from "react-bootstrap/Stack";

function Repos({ repos, isFavourite, handleOnClick }) {
  return (
    <Stack direction="horizontal" className="justify-content-center flex-wrap">
      {repos.map((repo) => (
        <Repo
          repo={repo}
          key={repo.id}
          isFavourite={isFavourite}
          handleOnClick={handleOnClick}
        />
      ))}
    </Stack>
  );
}

export default Repos;
