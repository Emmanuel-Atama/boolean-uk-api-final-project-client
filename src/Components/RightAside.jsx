import ListOfTeams from "./ListOfTeams";
import ListOfSponsors from "./ListOfSponsors";
// import CreateSponsorForm from "./CreateSponsorForm";

export default function RightAside(props) {
  const { teams, sponsors } = props;
  return (
    <aside className="right-aside">
      <div>
        <h2 className="h2-special-header">TEAMS LIST</h2>
        <ListOfTeams teams={teams} />
      </div>
      <div>
        <ListOfSponsors sponsors={sponsors} />
        {/* <CreateSponsorForm sponsors={sponsors} setSponsors={setSponsors}/> */}
      </div>
    </aside>
  );
}
