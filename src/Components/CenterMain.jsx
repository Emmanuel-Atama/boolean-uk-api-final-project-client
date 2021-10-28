import ListOfDrivers from "./ListOfDrivers";

export default function CenterMain(props) {
    const { drivers } = props
    return(
        <main className="center-main">
        <ListOfDrivers drivers ={drivers} />
        </main>
    )
    }