import ListOfCompetition from "./ListOfCompetition";
import CreateRacetrackForm from "./CreateRacetrackForm";
import ListOfRacetracks from "./ListOfRacetracks";

export default function LeftAside(props) {
  const {
    competitions,
    hideButton,
    setHideButton,
    racetracks,
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
        <button
          onClick={() => setHideButton(!hideButton)}
          className="create-new-button"
        >
          {hideButton ? "Create Now" : "Cancel"}
        </button>
      </div>
      <div>
        <h2 className="h2-special-header">RACETRACKS</h2>
        <ListOfRacetracks
          racetracks={racetracks}
          setEditRacetrackForm={setEditRacetrackForm}
          editRacetrackForm={editRacetrackForm}
          setRacetrackEdit={setRacetrackEdit}
        />
        <CreateRacetrackForm
          racetracks={racetracks}
          setRacetracks={setRacetracks}
        />
      </div>
    </aside>
  );
}
