import './app.sass'
import Zone from "../zone/zone";
import {useEffect, useState} from "react";

function App() {
    const [arias, setArias] = useState([]);
    const [things,setThings] = useState([]);
    const fetchArias = async () => {
        fetch("http://localhost:3002/areas")
            .then((response) => response.json())
            .then((data) => {
                setArias(data)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchThings = async () => {
        fetch("http://localhost:3001/things")
            .then((response) => response.json())
            .then((data) => {
                setThings(data)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(()=>{
        fetchArias()
        fetchThings()},[])
    const ThingsInArias = arias.map(aria => {
        const itemsInThisZone = things.filter(item => item.areaId === aria.areaId);
        return { ...aria, items: itemsInThisZone };
    });
    const Zones = ThingsInArias.map(zone=>(<Zone name={zone.name} cells={zone.items}/>))
  return (
    <div className="App">
        {Zones}
    </div>
  );
}

export default App;
