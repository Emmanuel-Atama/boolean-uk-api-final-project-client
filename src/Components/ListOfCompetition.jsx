export default function ListOfCompetition (props) {
  const  {competitions}  = props
    return (
      <ul>
         {competitions.map((competition, index) => {
           const { compName, date} = competition
           console.log("Inside competition map: ", competition)
           return(
          <li key={index} className="border-for-li">
            <h3> Competiton Name: {compName}</h3>
            <p> Date of Competition: {date} </p>
            <div>
            {/* <button className="create-new-button">New Competition</button> */}
            </div>
          </li>
           )
         })}
      </ul>
    )
}