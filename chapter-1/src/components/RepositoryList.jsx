import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import fetchRepositories from "../services/fetchRepositories";

import "../styles/repositories.scss";

function RepositoryList() {
  const [responseFetch, setResponseFetch] = useState([]);

  useEffect(() => fetchRepositories().then(json => setResponseFetch(json)), []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repositories={responseFetch} />
      </ul>
    </section>
  );
}

export default RepositoryList;
