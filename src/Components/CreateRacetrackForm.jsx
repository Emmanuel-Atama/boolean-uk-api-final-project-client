import { useState } from "react";

export default function CreateRacetrackForm(props) {
  const { racetracks, setRacetracks } = props;

  const [trackName, setTrackName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [laps, setLaps] = useState(0);

  const handleTrackName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setTrackName(event.target.value);
  };
  const handleCountryName = (event) => {
    console.log("Inside handlers ", event.target.value);
    setCountryName(event.target.value);
  };
  const handleLaps = (event) => {
    console.log("Inside handlers ", event.target.value);
    setLaps(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const racetrackToCreate = {
      trackName,
      countryName,
      laps,
    };
    const fetchRacetracks = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(racetrackToCreate),
    };
    fetch("http://localhost:3030/racetracks", fetchRacetracks)
      .then((res) => res.json())
      .then((newRacetrack) => {
        console.log("Driver POST request: ", newRacetrack);
        const racetrackToAdd = {
          ...newRacetrack,
        };
        setRacetracks([...racetracks, racetrackToAdd]);
      });
      console.log("INside HandleSubmit: ", handleSubmit)
  };
  return (
    <>
      <h2 className="h2-special">New Racetrack Form</h2>
      <form
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      >
        <label htmlFor="trackName">Track Name:</label>
        <input
          onChange={handleTrackName}
          id="trackName"
          name="trackName"
          type="text"
          value={trackName}
        />
        <label htmlFor="countryName">Name of Country:</label>
        <input
          onChange={handleCountryName}
          id="countryName"
          name="countryName"
          type="text"
          value={countryName}
        />
        <label htmlFor="laps">Number of Laps:</label>
        <input
          onChange={handleLaps}
          id="laps"
          name="laps"
          type="text"
          value={laps}
        />
        <div className="form-to-apply">
          <button onClick={handleSubmit} type="submit">
            New Racetrack
          </button>
        </div>
      </form>
    </>
  );
}
