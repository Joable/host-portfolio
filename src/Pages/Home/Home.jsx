import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Header from "../../Components/Header/Header";

function Home() {
    return (
        <>       
        <div className="center">
            <Header/>
            <About/>
            <Experience/>
        </div> 
        </>
     );
}

export default Home;