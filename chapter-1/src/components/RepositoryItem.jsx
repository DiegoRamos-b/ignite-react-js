import React from "react";

function RepositoryItem(props) {
  
  return (
    <li>
      <strong>{props.repository ?? 'Default title' }</strong>
      <p>{props.description ?? 'untitle'}</p>

      <a href={props.link ?? '#'} target={props.link && "_blank"}>
        Acessar o site
      </a>
    </li>
  );
}

export default RepositoryItem;
