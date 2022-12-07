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

import ContactInfo from '../ContactInfo/ContactInfo.jsx'
import HeaderNav from '../HeaderNav/HeaderNav.jsx'

import styles from './Header.module.css'

import gif from '../../img/ayynomarico3.gif'
import gif2 from '../../img/dudeguy-grid.jpg'

function Header() {
    const [isLoading, setIsLoading] = useState(true)

    const [form, setForm] = useState({name:'', ocupation:'', location:'', telephone:'', email: ''})
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
            location: formChange.location,
            telephone: formChange.telephone,
            email: formChange.email
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
            
            <HeaderLoading/>

        )
    }else{
        return (
            <>
            <div className={styles.headerProfile}>
                <Card className={styles.headerCard}>

                    <div className={styles.imageContainer}>

                        <Card.Img className={`${styles.box} ${styles.imageBanner}`} variant="top" src={gif}/>
                        <Image className={`${styles.box} ${styles.imageProfile}`} src={gif2} roundedCircle></Image>

                    </div>

                    <div className={styles.bodyProfile}>
                        <Card.Body >

                            <div className="justify-spacebetween">

                                <Card.Title>{form.name}</Card.Title>

                                <BsPencilSquare className='edit-button' onClick={handleShow}/>

                            </div>

                            <Card.Subtitle>{form.ocupation}</Card.Subtitle>
                            
                            <Card.Text>
                                {form.location}
                            </Card.Text>

                            <ContactInfo telephone={form.telephone} email={form.email}/>
                            
                        </Card.Body>
                    </div>

                    <HeaderNav/>

                </Card>
            </div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <h3>Edit Profile</h3>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.headerFormBody}>
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

                            <Form.Group>
                                <Form.Label>Telephone</Form.Label>
                                <Form.Control value={formChange.telephone} type='text' name='telephone' onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={formChange.email} type='text' name='email' onChange={handleChange}/>
                            </Form.Group>
                        </div>

                        <div className={styles.headerFormButton}>
                            <Button type='submit'>Save Changes</Button>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal> 
            </>
        )}
}

export default Header;