import ListOfCompetition from "./ListOfCompetition";
export default function LeftAside (props) {
const { competitions, hideForm, setHideForm } = props
    return(
    <aside className="left-aside">
<header>
    <h2>View Competitions</h2>
</header>
<ListOfCompetition competitions={competitions}/>
<button onClick={() => setHideForm(!hideForm)} className="create-new-button">
              {hideForm ? "Create Now" : "Cancel"}
              </button>
</aside>
    )
}