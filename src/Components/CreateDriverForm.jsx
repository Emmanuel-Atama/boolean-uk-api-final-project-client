import { useState } from "react/cjs/react.development";

export default function CreateDriverForm(props) {
  const { drivers, setDrivers } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carId, setCarId] = useState(0);

  const handleFirstName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setLastName(event.target.value);
  };
  const handleCarId = (event) => {
    console.log("Inside handlers ", event.target.value);
    setCarId(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const driverToCreate = {
      firstName,
      lastName,
      carId,
    };
    const fetchDriver = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(driverToCreate),
    };
    fetch("http://localhost:3030/drivers", fetchDriver)
      .then((res) => res.json())
      .then((newDriver) => {
        console.log("Driver POST request: ", newDriver);
        const driverToAdd = {
          ...newDriver,
        };
        setDrivers([...drivers, driverToAdd]);
      });
    // console.log("Inside handle submit: ", handleSubmit);
  };
  return (
    <>
      <h2 className="h2-special">New Driver Form</h2>
      <form
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      >
        <label htmlFor="firstName">FirstName:</label>
        <input
          onChange={handleFirstName}
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
        />
        <label htmlFor="lastName">LastName:</label>
        <input
          onChange={handleLastName}
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
        />
        <label htmlFor="carId">Car Id:</label>
        <input
          onChange={handleCarId}
          id="carId"
          name="carId"
          type="text"
          value={carId}
        />
        <div className="form-to-apply">
          <button onClick={handleSubmit} type="submit">
            Add Driver
          </button>
        </div>
      </form>
    </>
  );
}
