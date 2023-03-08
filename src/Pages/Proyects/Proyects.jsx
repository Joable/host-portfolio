import { 
    Card,
    Stack
 } from "react-bootstrap";
 import { 
    useState,
    useEffect
} from "react";

import { getCollection } from "../../Services/getCollection";

import ProyectElement from "../../Components/ProyectElement/ProyectElement";
import ProyectsLoading from "./ProyectsLoading";

function Proyects() {
    const [proyects, setProyects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const urlProyects = "proyects"

    useEffect(()=>{
        const result = async () =>{

            try{
                
                const response = await getCollection(urlProyects);

                setProyects(response.docs); 
                setIsLoading(false)

            }catch(error){

                console.log(error);
            }
        
        }

        result();

    },[])

    if (isLoading) {
        return(
            <ProyectsLoading/>
            )
    }else{
        return ( 
            <Card>
            <Card.Body>

                <Card.Title>Proyects</Card.Title>

                <Stack direction="vertical" gap={3}>
                    {proyects.map(data => <ProyectElement proyectData={data.data()}/>)}
                </Stack>

                <hr/>

            </Card.Body>
        </Card>
        );
    }
}
    
    export default Proyects;