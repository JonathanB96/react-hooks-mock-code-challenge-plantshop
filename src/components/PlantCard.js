import React, {useState} from "react";

function PlantCard({obj}) {
  const[inStock, setInStock]= useState(true)
  function handleClick(){
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={obj.image} alt={obj.name} />
      <h4>{obj.name}</h4>
      <p>Price: {obj.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
