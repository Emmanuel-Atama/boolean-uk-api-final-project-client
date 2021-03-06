// import delete from './delete.png'
import garbage from "../assets/img/garbage.png";

export default function SingleCar(props) {
    const { model, id } = props.car
// console.log("Inside Single Car Props: ", id)
    const handleCarDelete = (event) => {

        const fetchCarModelToDelete = {
          method: "DELETE",
        };
        const delUrl = `http://localhost:3030/cars/${id}`;
    
        //  console.log("Inside delUrl: ", delUrl)
    
        fetch(delUrl, fetchCarModelToDelete)
        .then((res) => res.json())
      };

    return (
          <li key={id} className="border-for-li">
            <h3> Car Model: {model} </h3>
            {/* <img src={delete} alt="" /> */}
            <button onClick={handleCarDelete}>
            <div className = "box"><img src = {garbage} alt = "delete icon" className = "garbage-icon"/></div>
            </button>
          </li>
        );
       }