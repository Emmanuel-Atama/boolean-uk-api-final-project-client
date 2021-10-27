import ListOfCompetition from "./ListOfCompetition";

export default function LeftAside (props) {
const { competitions } = props

    return(
    <aside className="left-aside">
<header>
    <h2>View Competitions</h2>
</header>
<ListOfCompetition competitions={competitions}/>
</aside>
    )
}
