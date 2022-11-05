import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from "../Home/Home.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
