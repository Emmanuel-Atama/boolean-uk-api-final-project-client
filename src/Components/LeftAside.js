import ListOfCompetition from "./ListOfCompetition";

export default function LeftAside (props) {
    return(
    <aside className="left-aside">
<header>
    <h2>View Competitions</h2>
    <button className="create-new-button">New Competition</button>
</header>
<ListOfCompetition/>
</aside>
    )
}