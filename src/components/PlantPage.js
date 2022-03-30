import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [arr, setarr] = useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(data=> {
      setarr(data)
    })

  },[])

  const formData ={
    name: "",
    image:"",
    price:""
  }

  function handleSubmit(e){
    e.preventDefault()
    formData.name = e.target.name.value
    formData.image = e.target.image.value
    formData.price = e.target.price.value
    fetch('http://localhost:6001/plants', {
      method : "POST",
      headers:{"Content-Type": "application/json",
    Accept: "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      
    })


  }
  function handleChange(e){
    const newArr = arr.filter((obj)=>{
      return obj.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==-1
    })
    setarr(newArr)
  }
  
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search handleChange={handleChange} />
      <PlantList arr ={arr}/>
    </main>
  );
}

export default PlantPage;
