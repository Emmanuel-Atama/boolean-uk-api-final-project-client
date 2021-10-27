

export default function CenterMain(props) {
    const { drivers} = props;
    console.log("Props Inside CenterMain", {props})
    console.log("drivers", drivers)
    return(
        <main className="center-main">
        <ul>
            {drivers.map((driver)=>{
                <li>
                    {driver.firstName}, {driver.lastName}
                </li>    
            })}
        </ul>
        </main>
    )
    }