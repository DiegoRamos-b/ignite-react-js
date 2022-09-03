import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

const respository = {
  title: 'unform 1',
  description: 'unform 1 description',
  link: 'https://www.instagram.com/',
};

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
        <RepositoryItem repository={respository} />
        <RepositoryItem repository={respository} />
      </ul>
    </section>
  );
}

export default RepositoryList;
