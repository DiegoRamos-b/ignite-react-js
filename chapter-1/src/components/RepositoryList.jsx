import React from "react";
import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem 
          repository="Google" 
          description="Site do goole" 
          link="https://google.com" 
        />

        <RepositoryItem />

        <RepositoryItem />
      </ul>
    </section>
  );
}

export default RepositoryList;
