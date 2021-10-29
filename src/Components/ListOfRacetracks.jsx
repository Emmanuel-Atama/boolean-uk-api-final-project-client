export default function ListOfRacetracks(props) {
  const {
    racetracks,
    setEditRacetrackForm,
    editRacetrackForm,
    setRacetrackEdit,
  } = props;
  return (
    <ul>
      {racetracks.map((racetrack, index) => {
        const { trackName, countryName, laps } = racetrack;
        return (
          <li key={index} className="border-for-li">
            <h3>Track Name: {trackName}</h3>
            <p>Name of Country: {countryName}</p>
            <p>Number of Laps: {laps}</p>
            <button
              onClick={() => {
                console.log("inside editRacetrackForm: ",editRacetrackForm )
                setEditRacetrackForm(!editRacetrackForm);
                console.log("inside setEditRacetrackForm: ",racetrack)
                setRacetrackEdit(racetrack);
              }}
              className="delete-button"
            >
              {editRacetrackForm ? "Cancel" : "Edit"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
