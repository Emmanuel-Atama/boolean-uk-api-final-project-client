export default function ListOfCompetition(props) {
  // console.log("Inside ListOfCompetition props: ", props)
  // const { competitions} = props
  return (
    <ul>
      {props.competitions.map((competition, index) => {
        const { compName, date } = competition;

        console.log("Inside competition map: ", competition);

        return (
          <li key={index} className="border-for-li">
            <h3> Competition Name: {compName}</h3>

            <p> Date of Competition: {date} </p>
          </li>
        );
      })}
    </ul>
  );
}
