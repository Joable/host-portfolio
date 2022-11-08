import { Card } from "react-bootstrap";
import ExperienceElement from "../ExperienceElement/ExperienceElement.jsx";


function Experience() {
    return ( 
        <Card>
            <Card.Body>
                <Card.Title>Experiencia</Card.Title>
                <ExperienceElement/>
                <Card.Title>Educación</Card.Title>
                <ExperienceElement/>
            </Card.Body>
        </Card>
     );
}

export default Experience;