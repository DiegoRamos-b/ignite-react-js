import React from 'react';

function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.title ?? 'default'}</strong>
      <p>{repository.description}</p>

      <a href={repository.link ?? '/'} target='blank'>
        Acessar repositorio
      </a>
    </li>
  );
}

export default RepositoryItem;
