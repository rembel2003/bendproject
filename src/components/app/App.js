import './app.sass'
import Functional from "../Functional/functional";
import Classes from "../Classes/Classes";
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
           <Route path="functional" element={<Functional/>}/>
           <Route path="classes" element={<Classes/>}/>
       </Routes>
        <Link  to={"/functional"}><button>Functional</button></Link>
        <Link  to={"/classes"}><button>Classes</button></Link>
    </div>
  );
}

export default App;
