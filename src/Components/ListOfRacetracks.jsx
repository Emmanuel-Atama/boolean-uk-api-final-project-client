export default function ListOfRacetracks(props) {
  return (
    <ul>
      {props.racetracks.map((racetrack, index) => {
        const { trackName, countryName, laps } = racetrack;
        return (
          <li key={index} className="border-for-li">
            <h3> Track Name: {trackName}</h3>
            <p>Name of Country: {countryName}</p>
            <p>Number of Laps: {laps}</p>
          </li>
        );
      })}
    </ul>
  );
}
