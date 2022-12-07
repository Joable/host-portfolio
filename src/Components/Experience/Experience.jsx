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

function Experience( {url, isEducation} ) {
    const [experience, setExperience] = useState([])

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
        <Card>
            <Card.Body>
                <div>

                    <div className="justify-spacebetween">
                        <Card.Title>{ isEducation ? "Educacion" : "Experiencia" }</Card.Title>

                        <Link to={ isEducation ? "/add/education" : "/add/experience" }>
                            <BsPlusLg/>
                        </Link>
                    </div>

                    <Stack direction="vertical" gap={3}>
                        {experience.map(data => <Element element={data} isEducation={isEducation}/>)}
                    </Stack>

                </div>

                <hr/>
            </Card.Body>
        </Card>
     );
}

export default Experience;