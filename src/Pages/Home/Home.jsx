import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Header from "../../Components/Header/Header";

function Home() {
    const urlExperience = "experience-data/experience-elements-data"
    const urlEducation = "education-data/education-data-elements"

    return (
        <>       
        <div className="center">
            <Header/>
            <About/>
            <Experience url = { urlExperience } isEducation={ false }/>
            <Experience url = { urlEducation } isEducation={ true }/>
        </div> 
        </>
     );
}

export default Home;