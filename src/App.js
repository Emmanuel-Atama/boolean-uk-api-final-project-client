import { useEffect, useState } from "react";

export default function App() {
  const [drivers, setDrivers] = useState([])

  console.log("Inside App State: ", { drivers})

  useEffect(()=>{
    fetch("http://localhost:3030/drivers")
      .then((res)=> res.json())
      .then((driversData) => setDrivers(driversData));
    
  },[]);
  

  return(
<>
 <header className="main-header">
<h1>UNTITLED FORMULA ONE</h1>
<h3><i>...The official formula 1 Web page</i></h3>
</header>
<div className="three-column-grid-expand-center">
  <aside></aside>
  <main></main>
  <aside></aside>
</div>

</>
  )
}