import { 
    useState
 } from "react";
import { 
    Card, 
    Form, 
    Modal,
    Button
} from "react-bootstrap";
import { 
    MdDesignServices,
    MdEdit,
    MdAccountBalance
 } from 'react-icons/md'

import firebase from '../../Config/firebase'

import styles from './Element.module.css'

function Element( {element, isEducation} ) {
    const [elementData, setElementData] = useState(element.data())
    const [form, setForm] = useState({
        position: elementData.position,
        location: elementData.location,
        from: elementData.from,
        to: elementData.to
    })
    const [show, setShow] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    let url = isEducation ? "profile-data/education-data/education-data-elements" : "profile-data/experience-data/experience-elements-data" 
    

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name] : value
        });
    }

    const handleSubmit = (event) => {
        const id = element.id
        
        event.preventDefault();

        firebase.db.doc(`${url}/${id}`)
        .set({
            position: form.position,
            location: form.location,
            from: form.from,
            to: form.to 
        }, {merge: true})

        setElementData({
            position: form.position,
            location: form.location,
            from: form.from,
            to: form.to 
        })

        handleClose()
    }
    
    const handleDelete = () => {
        const id = element.id

        firebase.db.doc(`${url}/${id}`)
        .delete()

        console.log(id)

        setIsDeleted(true)
        handleClose()
    }

    if(isDeleted){
        return(
            null
        )
    }else{
        return (
            <>
            <hr/>
            <div className={styles.element}>
                <div className={styles.elementBody}>

                    <div className={styles.elementIcon}>
                        {isEducation ? <MdAccountBalance size={40}/> : <MdDesignServices size={40}/>}
                    </div>

                    <div className={styles.elementData}>
                        <Card.Subtitle>{elementData.position}</Card.Subtitle>
                        
                        <Card.Text>{elementData.location}</Card.Text>

                        <Card.Text>{elementData.from} - {elementData.to}</Card.Text>
                    </div>

                </div>

                <div className={styles.elementIcon}>
                    <MdEdit className='edit-button' onClick={handleShow}/>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <h3>Edit Experience Element</h3>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Position</Form.Label>
                            <Form.Control type='name' name='position' placeholder='Enter position' value={form.position} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control type='name' name='location' placeholder='Enter location' value={form.location} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>From</Form.Label>
                            <Form.Control type='date' name='from' value={form.from} onChange={handleChange}/>
                        
                            <Form.Label>To</Form.Label>
                            <Form.Control type='date' name='to' value={form.to} onChange={handleChange}/>
                        </Form.Group>

                        <Button type='submit'>Save Changes</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </Form>
                </Modal.Body>

            </Modal>
            </>
        );
    }
}

export default Element;