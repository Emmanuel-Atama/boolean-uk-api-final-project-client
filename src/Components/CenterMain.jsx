import CreateCarForm from "./CreateCarForm";
import ListOfDrivers from "./ListOfDrivers";

export default function CenterMain(props) {
  const { drivers, cars, setCars } = props;
  return (
    <main className="center-main">
      <div>
        <ListOfDrivers drivers={drivers} />
      </div>
      <div>
        <CreateCarForm cars={cars} setCars={setCars} />
      </div>
    </main>
  );
}
