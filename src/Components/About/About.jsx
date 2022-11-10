import { useEffect, useState } from "react";
import { 
    Button, 
    Card, 
    Modal,
    Form
 } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs'

import AboutLoading from "./AboutLoading.jsx";
import { getData } from "../../Services/getData.js";
import firebase from "../../Config/firebase"

import './About.css'

function About() {
    const [isLoading, setIsLoading] = useState(true)
    const [aboutText, setAboutText] = useState("");
    const [aboutTextChange, setAboutTextChange] = useState("")

    const [show, setShow] = useState(false);

    useEffect(() =>{
        const result = async () => {
            try{
                const responseData = await getData("about-data")

                setAboutText(responseData.data().about)
                setAboutTextChange(responseData.data().about)

                setIsLoading(false)
            }catch(error){
                console.log(error)
            }
        }
        result()
    }, [])

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setAboutTextChange(value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        firebase.db.doc("profile-data/about-data")
        .set({
            about: aboutTextChange
        })

        setAboutText(aboutTextChange)
        handleClose()
    }

    if(isLoading){
        return(
            <AboutLoading/>
        )
    }else{
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
                        About
                    </h3>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control name="about" as="textarea" id="about-input" onChange={handleChange} value={aboutTextChange}></Form.Control>
                        <Button type="submit">Save Changes</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            </> 
        );
    }
}

export default About;