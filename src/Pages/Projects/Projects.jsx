import { 
    Card,
    Stack
 } from "react-bootstrap";
 import { 
    useState,
    useEffect
} from "react";

import { getCollection } from "../../Services/getCollection";

import ProjectElement from "../../Components/ProjectElement/ProjectElement";
import ProjectsLoading from "./ProjectsLoading";

function Projects() {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const urlProjects = "proyects"

    useEffect(()=>{
        const result = async () =>{

            try{
                
                const response = await getCollection(urlProjects);

                setProjects(response.docs); 
                setIsLoading(false)

            }catch(error){

                console.log(error);
            }
        
        }

        result();

    },[])

    if (isLoading) {
        return(
            <ProjectsLoading/>
            )
    }else{
        return ( 
            <Card>
            <Card.Body>

                <Card.Title>Projects</Card.Title>

                <Stack direction="vertical" gap={3}>
                    {projects.map(data => <ProjectElement projectData={data.data()}/>)}
                </Stack>

                <hr/>

            </Card.Body>
        </Card>
        );
    }
}
    
    export default Projects;