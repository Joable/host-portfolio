import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";

function ProfileInfo() {
    const urlExperience = "experience"
    const urlEducation = "education"

    return (
        <>
        <div >

            <About/>

            <Experience url = { urlEducation } isEducation={ true }/>

            <Experience url = { urlExperience } isEducation={ false }/>
        </div>
        </> 
     );
}

export default ProfileInfo;