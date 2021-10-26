import { useEffect, useState } from "react";

export default function App() {
  const [drivers, setDrivers] = useState([])

  console.log("Inside State: ", { drivers})

  return(
<>
 <header className="main-header">
<h1>UNTITLED FORMULA ONE</h1>
<h3><i>...The official formula 1 Web page</i></h3>
</header>
<body>

</body>

</>
  )
}