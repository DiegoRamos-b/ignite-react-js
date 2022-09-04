import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Drb-Diego/repos')
      .then((response) => response.json())
      .then((json) => setRepositories(json));
  }, []);

  console.log(repositories);

  return (
    <section>
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

export default RepositoryList;
