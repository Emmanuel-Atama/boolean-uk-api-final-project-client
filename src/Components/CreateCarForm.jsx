import { useState } from "react"

export default function CreateCarForm(props) {
    const { cars, setCars } = props
    const [model, setModel] = useState("")

    const handleModel = (e) => {
        setModel(e.target.value)
    }
    const handleSubmit =(e) => {
        e.preventDefault()

    const carToCreate = {
        model,
    }

const fetchCar = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carToCreate)  
}
fetch("http://localhost:3030/cars", fetchCar)
  .then(res => res.json())
  .then(newCar => {
    console.log("Car POST request: ", newCar)
    const carToAdd = {
      ...newCar,
    }

    setCars([...cars.data, carToAdd.data])
  })}
    
    return(
        <form onSubmit={handleSubmit} className="form-stack light-shadow center">
<label htmlFor="model-input">Model:</label>
<input type="text" 
id="model-input"
name="model-input"
value={handleModel}
/>
</form>
    )
}