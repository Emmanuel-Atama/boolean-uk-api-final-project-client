import { useEffect, useState } from "react";
import CenterMain from "./Components/CenterMain";
import LeftAside from "./Components/LeftAside";
import RightAside from "./Components/RightAside";

import RaceCars from "./assets/img/racecars.PNG" 

export default function App() {
  const [drivers, setDrivers] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [racetracks, setRacetracks] = useState([]);
  const [cars, setCars] = useState([]);
  const [teams, setTeams] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [editRacetrackForm, setEditRacetrackForm] = useState(false);
  const [racetrackEdit, setRacetrackEdit] = useState({})

  console.log("Inside App State: ", {
    drivers,
    competitions,
    racetracks,
    cars,
    teams,
    sponsors,
    editRacetrackForm,
    racetrackEdit
  });

  useEffect(() => {
    fetch("http://localhost:3030/drivers")
      .then((res) => res.json())
      .then((driversData) => {
        setDrivers(driversData.data);
        // console.log("Inside drivers Get Fetch: ", driversData)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/competitions")
      .then((res) => res.json())
      .then((competitionData) => {
        setCompetitions(competitionData.data);
        // console.log("Inside competitions Get Fetch: ", competitionData)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/racetracks")
      .then((res) => res.json())
      .then((racetrackData) => {
        setRacetracks(racetrackData.data);
        // console.log("Inside racetrack Get Fetch: ", racetrackData)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/cars")
      .then((res) => res.json())
      .then((carData) => {
        setCars(carData.data);
        // console.log("Inside car Get Fetch: ", carData)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/teams")
      .then((res) => res.json())
      .then((teamData) => {
        setTeams(teamData.data);
        // console.log("Inside team Get Fetch: ", teamData)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/sponsors")
      .then((res) => res.json())
      .then((sponsorData) => {
        setSponsors(sponsorData.data);
        // console.log("Inside sponsor Get Fetch: ", sponsorData)
      });
  }, []);

  return (
    <>
      <header  className="main-header">
        
        <h1>ADMIN WEB PAGE</h1>
        <h3>
          <i>...The Unofficial formula 1 Admin Web page</i>
        </h3>
        <img src = {RaceCars} alt = "Race Cars"/>
      </header>
      <div className="three-column-grid-expand-center">
        <LeftAside
          competitions={competitions}
          racetracks={racetracks}
          racetrackEdit={racetrackEdit}
          setRacetracks={setRacetracks}
          setEditRacetrackForm={setEditRacetrackForm}
          editRacetrackForm={editRacetrackForm}
          setRacetrackEdit={setRacetrackEdit}
        />
        <CenterMain drivers={drivers} cars={cars} setCars={setCars} />
        <RightAside teams={teams} sponsors={sponsors} />
      </div>
    </>
  );
}
