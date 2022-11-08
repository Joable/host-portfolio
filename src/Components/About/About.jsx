import { Card } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs'

function About() {
    return ( 
        <Card>
            <Card.Body>
                <div className="justify-spacebetween">
                    <Card.Title>Acerca de mi</Card.Title>
                    <BsPencilSquare/>
                </div>
                <Card.Text>
                            Soy desarrollador de software, con inglés avanzado, muy motivado, siempre con ganas de aprender y mejorar mis habilidades.
                            Tengo experiencia trabajando de manera freelance con :
                            JavaScript, TypeScript, HTML, CSS, Bootstrap, React js, SQL, Angular.
                            Python, C, C++.
                </Card.Text>
            </Card.Body>
        </Card>
     );
}

export default About;