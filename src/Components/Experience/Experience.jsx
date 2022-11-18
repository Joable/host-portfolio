import { 
    useState,
    useEffect
} from 'react';
import { 
    Button,
    Card,
    Form,
    Modal,
    Stack
} from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs'

import Element from '../Element/Element';

import { getCollection } from "../../Services/getCollection";
import firebase from '../../Config/firebase';

function Experience() {
    const [experience, setExperience] = useState([])
    const [form , setForm] = useState({
        position: '',
        location: '',
        from: '',
        to: ''
    })
    const [show, setShow] = useState(false)
    const url = "experience-data/experience-elements-data"
    
    useEffect(()=>{
        const result = async () =>{
            try{
                const response = await getCollection(url);
                setExperience(response.docs);
            }catch(error){
                console.log(error);
            }
        }
        result();
        {experience.map(element => console.log(element))}
    },[])
    
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

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
        event.preventDefault();

        /* CAMBIA ESTO Y HACE UN SERVICIO TE LO PIDO PORFAVOR */
        firebase.db.collection(`profile-data/${url}`).add({
            position: form.position,
            location: form.location,
            from: form.from,
            to: form.to
        })
    }

    return ( 
        <>
        <Card>
            <Card.Body>
                <div className="experience">

                    <div className="justify-spacebetween">
                        <Card.Title>Experiencia</Card.Title>
                        <BsPlusLg onClick={handleShow}/>
                    </div>

                    <Stack direction="vertical" gap={3}>
                        {experience.map(element => <Element element={element}/>)}
                    </Stack>

                </div>
            </Card.Body>
        </Card>

        <Modal show={show} onHide = {handleClose}>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Position</Form.Label>
                        <Form.Control type='name' name='position' placeholder='' onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type='name' name='location' placeholder='' onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control type='date' name='from' placeholder='' onChange={handleChange}/>
                    
                        <Form.Label>To</Form.Label>
                        <Form.Control type='date' name='to' placeholder='' onChange={handleChange}/>
                    </Form.Group>

                    <Button type='submit'>Add Experience</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
     );
}

export default Experience;