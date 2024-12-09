import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>Breed: {animal.breed}</p>
      <p>Age: {animal.age} years</p>
      <button>Adopt Me</button>
    </div>
  );
};

export default AnimalCard;
