import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import List from "../../Components/List/List";

function ProfileInfo() {

    return (
        <>
        <div >

            <About/>

            <List url={"education"}/>
        </div>
        </> 
     );
}

export default ProfileInfo;