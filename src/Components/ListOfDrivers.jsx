export default function ListOfDrivers (props) {
// const { drivers } = props
return (
    <>
    <h2>DRIVERS LIST</h2>
    <ul>
            {props.drivers.map((driver, index) => {

                console.log("Inside drivers map: ", driver)

                const { firstName, lastName} = driver

               return (

                <li key = {index} className="border-for-li">

                <h3>First Name: {firstName} </h3>

                <p>Last Name: {lastName} </p>

            </li>
               )    
            })}
        </ul>
        </>
)
}