import React from "react";

export const CharacterItem = ({ item }) => {
  const imageUrl = item.imageUrl || "";

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={imageUrl} alt={item.name} />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;