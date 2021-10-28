export default function ListOfSponsors(props) {
 const {sponsors} = props;

  console.log("Inside ListOfSponsors Props: ", props);

  const handleSponsorDelete = (event) => {
    event.preventDefault();
    const fetchOptions = {
      method: "DELETE",
    };

    fetch(`http://localhost:3030/sponsors/${sponsors.id}`, fetchOptions);
  };
  return (
    <>
      <h2>SPONSORS LIST</h2>
      <ul>
        {props.sponsors.map((sponsor, index) => {
          console.log("Inside sponsors map: ", sponsor);
          const { sponsorName } = sponsor;
          return (
            <li key={index} className="border-for-li">
              <h3> {sponsorName} </h3>
              <button onClick={handleSponsorDelete}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
