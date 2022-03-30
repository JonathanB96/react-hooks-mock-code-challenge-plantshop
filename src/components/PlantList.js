import React from "react";
import PlantCard from "./PlantCard";

function PlantList({arr}) {
  

    return (
    <ul className="cards">{arr.map((obj)=>{
      return <PlantCard obj={obj} key={obj.id}/>
    })}</ul>
  );
}

export default PlantList;
