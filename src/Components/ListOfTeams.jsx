export default function ListOfTeams(props) {
  //    console.log("Inside ListOfTeams Props: ", props)
  return (
    <ul>
      {props.teams.map((team, index) => {
        // console.log("Inside teams map: ", team);
        const { teamName } = team;
        return (
          <li key={index} className="border-for-li">
            <h4>Team Name: </h4>
            <h3>{teamName}</h3>
          </li>
        );
      })}
    </ul>
  );
}
