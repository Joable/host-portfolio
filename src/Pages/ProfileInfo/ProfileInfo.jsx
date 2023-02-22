import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";

function ProfileInfo() {
    const urlExperience = "experience-data/experience-elements-data"
    const urlEducation = "education-data/education-data-elements"

    return (
        <>
        <div >

            <About/>

            <Experience url = { urlExperience } isEducation={ false }/>

            <Experience url = { urlEducation } isEducation={ true }/>
        </div>
        </> 
     );
}

export default ProfileInfo;