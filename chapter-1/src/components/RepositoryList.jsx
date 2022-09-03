import React from 'react';
import RepositoryItem from './RepositoryItem';

const respository = {
  title: 'unform 1',
  description: 'unform 1 description',
  link: 'https://www.instagram.com/',
};

function RepositoryList() {
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
