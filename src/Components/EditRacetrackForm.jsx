import { useEffect } from "react";

export default function EditRacetrackForm(props) {
  const { racetrackEdit, racetracks, SetRacetracks } = props;

  const [trackName, setTrackName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [laps, setLaps] = useState(0);

  useEffect(() => {
    if (racetrackEdit) {
      setTrackName(racetrackEdit.trackName);
      setCountryName(racetrackEdit.countryName);
      setLaps(racetrackEdit.laps);
    }
  }, [racetrackEdit]);

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

    const racetrackToUpdate = {
      trackName,
      countryName,
      laps,
    };
    const fetchRacetrackToUpdate = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(racetrackToUpdate),
    };
    const racetrackUrl = `http://localhost:3030/racetracks/${racetrackEdit.id}`;

    fetch(racetrackUrl, fetchRacetrackToUpdate)
      .then((res) => res.json())
      .then((updatedRacetrack) => {
        console.log("Racetrack Patch Request: ", updatedRacetrack);

        const updatedRacetracks = racetracks.map((racetrack) => {
          if (racetrack.id === updatedRacetrack.id) {
            return {
              ...updatedRacetrack,
            };
          } else {
            return racetrack;
          }
        });
        SetRacetracks(updatedRacetracks);
      });
  };

  return (
    <>
      <h2>Edit Racetrack Form</h2>
      <form
        onSubmit={handleSubmit}
        className="form-stack light-shadow center form-stack"
      >
        <label htmlFor="trackName">Track Name To Update:</label>
        <input
          onChange={handleTrackName}
          id="trackName"
          name="trackName"
          type="text"
          value={trackName}
        />
        <label htmlFor="countryName">Name of Country To Update:</label>
        <input
          onChange={handleCountryName}
          id="countryName"
          name="countryName"
          type="text"
          value={countryName}
        />
        <label htmlFor="laps">Number of Laps To Update:</label>
        <input
          onChange={handleLaps}
          id="laps"
          name="laps"
          type="text"
          value={laps}
        />
        <div >
          <button onClick={handleSubmit} type="submit" className="form-to-apply">
            Update Racetrack
          </button>
        </div>
      </form>
    </>
  );
}
