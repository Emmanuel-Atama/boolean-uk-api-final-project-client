import ListOfCompetition from "./ListOfCompetition";
import CreateRacetrackForm from "./CreateRacetrackForm";
import ListOfRacetracks from "./ListOfRacetracks";
import EditRacetrackForm from "./EditRacetrackForm";

export default function LeftAside(props) {
  const {
    competitions,
    racetracks,
    racetrackEdit,
    setRacetracks,
    setEditRacetrackForm,
    editRacetrackForm,
    setRacetrackEdit,
  } = props;
  return (
    <aside className="left-aside">
      <div>
        <h2 className="h2-special-header">COMPETITIONS</h2>
        <ListOfCompetition competitions={competitions} />
      </div>
      <div>
        <h2 className="h2-special-header">RACETRACKS</h2>
        <ListOfRacetracks
          racetracks={racetracks}
          setEditRacetrackForm={setEditRacetrackForm}
          editRacetrackForm={editRacetrackForm}
          setRacetrackEdit={setRacetrackEdit}
        />
           {editRacetrackForm ? <EditRacetrackForm 
        racetracks={racetracks}
          setRacetracks={setRacetracks}
          racetrackEdit={racetrackEdit}
        /> : <CreateRacetrackForm
        racetracks={racetracks}
        setRacetracks={setRacetracks}
      />}
        {/* <CreateRacetrackForm
          racetracks={racetracks}
          setRacetracks={setRacetracks}
        /> */}
        {/* <EditRacetrackForm 
        racetracks={racetracks}
          setRacetracks={setRacetracks}
          racetrackEdit={racetrackEdit}
        /> */}
      </div>
    </aside>
  );
}
