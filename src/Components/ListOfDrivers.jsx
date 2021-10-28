export default function ListOfDrivers(props) {

  return (
    <>
      <ul>
        {props.drivers.map((driver, index) => {
          const { firstName, lastName, carId } = driver;
          return (
            <li key={index} className="border-for-li">
              <h3>Full Names: {firstName} {lastName} </h3>

        

              <p>Car Id: {carId}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
