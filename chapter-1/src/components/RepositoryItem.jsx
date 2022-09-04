import React from 'react';

function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'default'}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url ?? '/'} target='blank'>
        Acessar repositorio
      </a>
    </li>
  );
}

export default RepositoryItem;
