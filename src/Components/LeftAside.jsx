import ListOfCompetition from "./ListOfCompetition";

export default function LeftAside(props) {
  const { competitions, hideButton, setHideButton } = props;
  return (
    <aside className="left-aside">
      <header>
        <h2>View Competitions</h2>
      </header>
      <ListOfCompetition competitions={competitions} />
      <button
        onClick={() => setHideButton(!hideButton)}
        className="create-new-button"
      >
        {hideButton ? "Create Now" : "Cancel"}
      </button>
    </aside>
  );
}
