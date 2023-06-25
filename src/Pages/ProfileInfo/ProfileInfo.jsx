import About from "../../Components/About/About";
import List from "../../Components/List/List";

function ProfileInfo() {

    return (
        <>
        <div >

            <About/>

            <List title={"Education"} url={"education"}/>
        </div>
        </> 
     );
}

export default ProfileInfo;