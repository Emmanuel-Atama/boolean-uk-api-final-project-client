import SingleSponsor from "./SingleSponsor"

export default function ListOfSponsors(props) {
 const {sponsors} = props;

  console.log("Inside ListOfSponsors Props: ", props);

  return (
    <>
      <h2>SPONSORS LIST</h2>
      <ul>
       {sponsors.map((sponsor)=>{
         return (
           <SingleSponsor sponsor={sponsor} />
         )
       })}
       
      </ul>
    </>
  );
}
