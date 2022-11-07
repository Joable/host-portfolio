import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";

import './Home.css'

function Home() {
    return (
        <>
        <div className="nav">
            <NavBar/>
        </div>
        <div className="center">
            <Header/>
            <About/>
            <Experience/>
        </div> 
        </>
     );
}

export default Home;