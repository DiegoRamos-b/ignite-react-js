import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

type ResponseFetch = {
  id: string;
  name: string;
  description: string;
  html_url: string;
};

function RepositoryList() {
  const [responseFetch, setResponseFetch] = useState<ResponseFetch[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Drb-Diego/repos")
      .then(response => response.json())
      .then(json => setResponseFetch(json));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositorios</h1>

      <ul>
        {responseFetch &&
          responseFetch.map(repository => (
            <RepositoryItem repository={repository} key={repository.id} />
          ))}
      </ul>
    </section>
  );
}

export default RepositoryList;
