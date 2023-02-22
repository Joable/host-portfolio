import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavBar from "../../Components/NavBar/NavBar.jsx";
import Header from "../../Components/Header/Header.jsx";
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx"
import Proyects from "../Proyects/Proyects.jsx"

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>

      <div className="nav">
            <NavBar/>
      </div>

      <div className="center">       
        <Header/>

      <Routes>

        <Route path="/" element={<ProfileInfo/>}/>
        <Route path="/proyects" element={<Proyects/>}/>

      </Routes>

      </div>
      
    </Router>
  );
}

export default App;
