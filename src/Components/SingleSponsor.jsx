import garbage from '../assets/img/garbage.png';

export default function SingleSponsor(props) {
    const {sponsorName, id} = props.sponsor
    // console.log("Inside Single Sponsor Props: ", id)

const handleSponsorDelete = (event) => {
    const fetchOptions = {
        method: "DELETE",
    };
    const deleteUrl = `http://localhost:3030/sponsors/${id}`;

    // console.log("Inside deleteURL: ", deleteUrl)

    fetch(deleteUrl, fetchOptions)
        .then((res) => res.json())
};

return (
    <li key = {id} className = "border-for-li">
        <h3> Sponsor Model: {sponsorName} </h3>
    <button onClick={handleSponsorDelete}>
        <div className = "box"><img src = {garbage} alt = "delete icon" className = "garbage-icon"/></div>
     </button> 
    </li>
);
}
