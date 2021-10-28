import { useState } from "react";

export default function CreateCarForm(props) {
  const { cars, setCars } = props;
  const [model, setModel] = useState("");

  const handleModel = (event) => {
    console.log("Inside handlerModel ", event.target.value);
    setModel(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const carToCreate = {
      model,
    };

    const fetchCar = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carToCreate),
    };
    fetch("http://localhost:3030/cars", fetchCar)
      .then((res) => res.json())
      .then((newCar) => {
        // console.log("Car POST request: ", newCar);
        const carToAdd = {
          ...newCar,
        };
        setCars([...cars, carToAdd]);
      });
      console.log("Inside handle submit: ", handleSubmit);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-stack light-shadow center form-stack"
    >
      <label htmlFor="model-input">Model: </label>
      <input
        onChange={handleModel}
        id="model-input"
        name="model-input"
        type="text"
        value={model}
      />
      <div className="form-to-apply">
        <button onClick={handleSubmit} type="submit">
          Add Car
        </button>
      </div>
    </form>
  );
}
