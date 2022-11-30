import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from "../Home/Home.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import ExperienceAdd from "../../Components/ExperienceAdd/ExperienceAdd.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="nav">
            <NavBar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path="/add" element={<ExperienceAdd/>}/>
      </Routes>
    </Router>
  );
}

export default App;
