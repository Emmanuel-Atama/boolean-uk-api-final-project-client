export default function ListOfCars(props) {
  const { cars } = props;

  const handleCarDelete = (event) => {
    const fetchCarModelToDelete = {
      method: "DELETE",
    };
    const delUrl = `http://localhost:3030/contacts/${cars.id}`;

    //  console.log("Inside delUrl: ", delUrl)

    fetch(delUrl, fetchCarModelToDelete);
    
  };

  return (
    <ul>
      {cars.map((car, index) => {
        const { model } = car;
        return (
          <li key={index} className="border-for-li">
            <h3> Car Model: {model} </h3>
            <button className="delete-button" onClick={handleCarDelete}>
              Delete Car
            </button>
          </li>
        );
      })}
    </ul>
  );
}
