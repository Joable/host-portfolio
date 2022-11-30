import { useState } from 'react';
import {
    Card,
    Form,
    Button
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import firebase from '../../Config/firebase'

function ExperienceAdd() {
    const [form , setForm] = useState({
        position: '',
        location: '',
        from: '',
        to: ''
    })
    const url = "experience-data/experience-elements-data"
    const navigate = useNavigate()

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

        firebase.db.collection(`profile-data/${url}`).add({
            position: form.position,
            location: form.location,
            from: form.from,
            to: form.to
        }) 
        
        navigate("/")
    }
    
    return ( 
        <Card className='center'>
            <Card.Header>
                Edit
            </Card.Header>

            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Position</Form.Label>
                        <Form.Control type='name' name='position' placeholder='Enter position' onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type='name' name='location' placeholder='Enter location' onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control type='date' name='from' onChange={handleChange}/>
                    
                        <Form.Label>To</Form.Label>
                        <Form.Control type='date' name='to' onChange={handleChange}/>
                    </Form.Group>

                    <Button type='submit'>Add Experience</Button>
                </Form>
            </Card.Body>
        </Card>
     );
}

export default ExperienceAdd;