import React from "react";
import { Link } from "react-router-dom";

const AnimalList = () => {
  return (
    <div>
      <h2>Available Animals for Adoption</h2>
      <ul>
        <li>
          <Link to="/adopt/1">Adopt Animal 1</Link>
        </li>
        <li>
          <Link to="/adopt/2">Adopt Animal 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default AnimalList;
