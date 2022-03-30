import React from "react";

function NewPlantForm({handleSubmit}) {
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" id="name"/>
        <input type="text" name="image" placeholder="Image URL" id="image"/>
        <input type="number" name="price" step="0.01" placeholder="Price" id="price"/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
