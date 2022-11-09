import { useState } from 'react'
import { 
    Card, 
    Nav,
    Image,
    Modal,
    Button
} from 'react-bootstrap'
import { BsPencilSquare } from 'react-icons/bs'

import gif from '../../img/ayynomarico2.gif'
import gif2 from '../../img/ayynomarico4.gif'
import './Header.css'

function Header() {
    const [form, setForm] = useState({name:'Joaquin Elias Altable', ocupation:'Front End Web Developer', location:'Capital Federal, Buenos Aires (Argentina)'})
    const [formChange, setFormChange] = useState(form)

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleSubmit = (event) => {
        event.preventDefault();

        setForm(formChange);

        handleClose();
    }

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(value)
        setFormChange({
            ...formChange,
            [name] : value
        });
    }

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
                <form onSubmit={handleSubmit}>
                    <div className="header-form">
                        <h3>
                            Name:
                        </h3>
                        <input name='name' type='text' value={formChange.name} onChange={handleChange}/>

                        <h3>
                            Ocupation:
                        </h3>
                        <input name='ocupation' type='text' value={formChange.ocupation} onChange={handleChange}/>

                        <h3>
                            Location:
                        </h3>
                        <input name='location' type='text' value={formChange.location} onChange={handleChange}/>
                    </div>

                    <div className='header-form-button'>
                        <Button type='submit'>Save Changes</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal> 
        </>
     );
}

export default Header;