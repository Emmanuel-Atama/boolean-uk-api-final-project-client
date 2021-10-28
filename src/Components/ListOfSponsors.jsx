export default function ListOfSponsors (props) {

const { sponsors, setSponsors } = props;

console.log("Inside ListOfSponsors Props: ", props)
console.log("Inside ListOfSponsosrs, sponsor, setSponsors: ", sponsors, setSponsors)

const handleDeleteClick = (e) => {
    e.preventDefault()

    const fetchOptions = {
        method: "DELETE"
      };
      
      fetch("http://localhost:3030/sponsors/2", fetchOptions);
    
      
}



return (
    <>
    <h2>SPONSORS LIST</h2>
    <ul>
        {props.sponsors.map((sponsor, index) => {
            console.log("Inside sponsors map: ", sponsor)
                const { sponsorName } = sponsor
                    return (
                    <li key = {index} className = "border-for-li">
                        <h3> {sponsorName} </h3>
                        <button  onClick = {handleDeleteClick}> 
                            Remove 
                        </button>
                    </li>
                    )
                    
        })}
                    
    </ul>
    </>
)
}