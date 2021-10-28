import CreateCarForm from "./CreateCarForm";
import ListOfDrivers from "./ListOfDrivers";

export default function CenterMain(props) {
  const { drivers, cars, setCars } = props;

  const handleCarDelete = (event) => {
    const fetchCarModelToDelete = {
      method: "DELETE",
    };
    const delUrl = `http://localhost:3030/contacts/${cars.id}`;

    //  console.log("Inside delUrl: ", delUrl)

    fetch(delUrl, fetchCarModelToDelete);
  };

  return (
    <main className="center-main">
      <h2>DRIVERS LIST AND CAR MODELS</h2>
      <div className="two-column-grid">
        <div>
          <ListOfDrivers drivers={drivers} />
        </div>
        <div>
          <CreateCarForm
            cars={cars}
            setCars={setCars}
            handleCarDelete={handleCarDelete}
          />
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
        </div>
      </div>
    </main>
  );
}
