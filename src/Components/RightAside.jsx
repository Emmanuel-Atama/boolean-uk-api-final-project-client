import ListOfTeams from "./ListOfTeams";
import ListOfSponsors from "./ListOfSponsors";

export default function RightAside(props) {
  const { teams, sponsors, setSponsors } = props
  return(
    <aside className="right-aside">
    <ListOfTeams teams = {teams} />
    <ListOfSponsors sponsors = {sponsors} setSponsors = {setSponsors} />
    </aside>
  )
}