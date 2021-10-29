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
                setEditRacetrackForm(!editRacetrackForm);
                setRacetrackEdit(racetrack);
              }}
              className="delete-button"
            >
              {editRacetrackForm ? "Edit" : "Cancel"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
