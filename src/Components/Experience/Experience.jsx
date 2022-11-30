import { 
    useState,
    useEffect
} from 'react';
import { 
    Card,
    Stack
} from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs'

import Element from '../Element/Element';

import { getCollection } from "../../Services/getCollection";
import { Link } from 'react-router-dom';

function Experience() {
    const [experience, setExperience] = useState([])
    const url = "experience-data/experience-elements-data"
    

    useEffect(()=>{
        const result = async () =>{
            try{
                const response = await getCollection(url);
                setExperience(response.docs);
            }catch(error){
                console.log(error);
            }
        }
        result();
    },[])
    

    return ( 
        <>
        <Card>
            <Card.Body>
                <div className="experience">

                    <div className="justify-spacebetween">
                        <Card.Title>Experiencia</Card.Title>
                        <Link to="/add">
                            <BsPlusLg/>
                        </Link>
                    </div>

                    <Stack direction="vertical" gap={3}>
                        {experience.map(data => <Element element={data}/>)}
                    </Stack>

                </div>
                <hr/>
            </Card.Body>
        </Card>

        
        </>
     );
}

export default Experience;