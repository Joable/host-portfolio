import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs'

import './About.css'

function About() {
    const [aboutText, setAboutText] = useState(
        "Soy desarrollador de software, con inglés avanzado, muy motivado, siempre con ganas de aprender y mejorar mis habilidades.Tengo experiencia trabajando de manera freelance con :JavaScript, TypeScript, HTML, CSS, Bootstrap, React js, SQL, Angular.Python, C, C++."
    );
    const [aboutTextChange, setAboutTextChange] = useState(aboutText)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setAboutTextChange(value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setAboutText(aboutTextChange)
        handleClose()
    }



    return (
        <>
        <Card>
            <Card.Body>

                <div className="justify-spacebetween">
                    <Card.Title>Acerca de mi</Card.Title>
                    <BsPencilSquare onClick={handleShow}/>
                </div>
                <Card.Text>
                    {aboutText}
                </Card.Text>
                
            </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h3>
                    Acerca de mi
                </h3>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>    
                    <textarea name="about" id="about-input" onChange={handleChange}>{aboutTextChange}</textarea>
                    <Button type="submit">Save Changes</Button>
                </form>
            </Modal.Body>
        </Modal>
        </> 
     );
}

export default About;