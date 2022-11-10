import { useEffect, useState } from 'react'
import { 
    Card, 
    Nav,
    Image,
    Modal,
    Button,
    Form
} from 'react-bootstrap'
import { BsPencilSquare } from 'react-icons/bs'

import HeaderLoading from './HeaderLoading.jsx'
import {getData} from '../../Services/getData'
import firebase from "../../Config/firebase"

import gif from '../../img/ayynomarico3.gif'
import gif2 from '../../img/dudeguy-grid.jpg'
import './Header.css'

function Header() {
    const [isLoading, setIsLoading] = useState(true)

    const [form, setForm] = useState({name:'', ocupation:'', location:''})
    const [formChange, setFormChange] = useState(form)

    const [show, setShow] = useState(false)

    useEffect(() =>{
        const  response = async () => {
            try{
                const responseData = await getData("header-data")

                setForm(responseData.data())
                setFormChange(responseData.data())

                setIsLoading(false)
            }catch(error){
                console.log(error)
            }
        }
        response()
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleSubmit = (event) => {
        event.preventDefault();

        firebase.db.doc("profile-data/header-data")
        .set({
            name: formChange.name,
            ocupation: formChange.ocupation,
            location: formChange.location
        })

        setForm(formChange)

        handleClose();
    }

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormChange({
            ...formChange,
            [name] : value
        });
    }

    if(isLoading){
        return(
        <>
        <div className='header-profile'>
                <Card id = "header-card">

                    <div className='image-container'>

                        <Card.Img className='box image-banner' variant="top" src={gif}/>
                        <Image className='box image-profile' src={gif2} roundedCircle></Image>

                    </div>
                    <div className='body-profile'>
                        <Card.Body >
                            <HeaderLoading/>
                        </Card.Body>
                    </div>

                    <Nav className='justify-content-center' variant='tabs' defaultActiveKey='/'>
                        <Nav.Item>
                            <Nav.Link href='/'>Datos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#'>Proyectos</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Card>
            </div>

        </>)
    }else{
        return (
            <>
            <div className='header-profile'>
                <Card id = "header-card">

                    <div className='image-container'>

                        <Card.Img className='box image-banner' variant="top" src={gif}/>
                        <Image className='box image-profile' src={gif2} roundedCircle></Image>

                    </div>
                    <div className='body-profile'>
                        <Card.Body >

                            <div className="justify-spacebetween">
                                <Card.Title>{form.name}</Card.Title>
                                <BsPencilSquare onClick={handleShow}/>
                            </div>
                            <Card.Subtitle>{form.ocupation}</Card.Subtitle>
                            
                            <Card.Text>
                                {form.location}
                            </Card.Text>
                            <Card.Text>
                                Información de contacto
                            </Card.Text>
                            
                        </Card.Body>
                    </div>

                    <Nav className='justify-content-center' variant='tabs' defaultActiveKey='/'>
                        <Nav.Item>
                            <Nav.Link href='/'>Datos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#'>Proyectos</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Card>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h3>Edit Profile</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="header-form-body">
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={formChange.name} type='text' name='name' onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Ocupation</Form.Label>
                                <Form.Control value={formChange.ocupation} type='text' name='ocupation' onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control value={formChange.location} type='text' name='location' onChange={handleChange}/>
                            </Form.Group>
                        </div>

                        <div className='header-form-button'>
                            <Button type='submit'>Save Changes</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal> 
            </>
        )}
}

export default Header;