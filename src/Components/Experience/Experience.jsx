import { Link } from 'react-router-dom';
import { 
    useState,
    useEffect
} from 'react';
import { 
    Card,
    Stack
} from "react-bootstrap";

import Element from '../Element/Element';
import ExperienceLoading from './ExperienceLoading';

import { getCollection } from "../../Services/getCollection";


function Experience( {url, isEducation} ) {
    const [experience, setExperience] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const result = async () =>{

            try{
                
                const response = await getCollection(url);

                setExperience(response.docs);

                setIsLoading(false)

            }catch(error){

                console.log(error);
            }
        
        }

        result();

    },[])
    

    if(isLoading){
        return(

            <ExperienceLoading/>

        )
    }else{
        return ( 
            <Card>
                <Card.Body>

                    <div>

                        <div className="justify-spacebetween">

                            <Card.Title>{ isEducation ? "Education" : "Experience" }</Card.Title>

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
}

export default Experience;