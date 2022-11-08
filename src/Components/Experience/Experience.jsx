import { Card } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs'
import ExperienceElement from "../ExperienceElement/ExperienceElement.jsx";


function Experience() {
    return ( 
        <Card>
            <Card.Body>
                <div className="experience">
                    <div className="justify-spacebetween">
                        <Card.Title>Experiencia</Card.Title>
                        <BsPlusLg/>
                    </div>
                    <ExperienceElement/>
                </div>
                <div className="education">
                    <div className="justify-spacebetween">
                        <Card.Title>Educación</Card.Title>
                        <BsPlusLg/>
                    </div>
                    <ExperienceElement/>
                </div>
            </Card.Body>
        </Card>
     );
}

export default Experience;