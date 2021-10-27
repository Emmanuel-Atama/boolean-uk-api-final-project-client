import { useEffect, useState } from "react";
import CenterMain from "./Components/CenterMain";
import LeftAside from "./Components/LeftAside";
import RightAside from "./Components/RightAside";

export default function App() {
  const [drivers, setDrivers] = useState([])
  const [competitions, setCompetitions] = useState([])

  console.log("Inside App State: ", { drivers, competitions})

  useEffect(() => {
    fetch("http://localhost:3030/drivers")
      .then((res)=> res.json())
      .then((driversData) => {
        
        setDrivers(driversData)
        // console.log("Inside drivers Get Fetch: ", driversData)
      });
    
  },[]);
  
  useEffect(() => {
    fetch("http://localhost:3030/competitions")
      .then((res)=> res.json())
      .then((competitionData) => {
        
        setCompetitions(competitionData)
        // console.log("Inside competitions Get Fetch: ", competitionData)
      });
    
  },[]);

  return(
<>
 <header className="main-header">
<h1>UNTITLED FORMULA ONE</h1>
<h3><i>...The official formula 1 Web page</i></h3>
</header>
<div className="three-column-grid-expand-center">
 <LeftAside/>
  <CenterMain/>
  <RightAside/>
</div>

</>
  )
}