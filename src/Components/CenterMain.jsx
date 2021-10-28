import CreateCarForm from "./CreateCarForm";
import CreateDriverForm from "./CreateDriverForm";
import ListOfCars from "./ListOfCars";
import ListOfDrivers from "./ListOfDrivers";

export default function CenterMain(props) {
  const { drivers, cars, setCars, handleCarDelete } = props;

  return (
    <main className="center-main">
      <h2>DRIVERS LIST AND CAR MODELS</h2>
      <div className="two-column-grid">
        <div>
          <ListOfDrivers drivers={drivers} />
          <CreateDriverForm />
        </div>
        <div>
        <ListOfCars cars={cars} 
          handleCarDelete={handleCarDelete}
          />
          <CreateCarForm
            cars={cars}
            setCars={setCars}
          />
        </div>
      </div>
    </main>
  );
}
