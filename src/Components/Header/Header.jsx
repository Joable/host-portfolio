import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


import image from '../../img/ayynomarico2.gif'
import './Header.css'

function Header() {
    return (
        <div className='header-card'>
            <Card >
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        xD
                    </Card.Text>
                    <Button variant='primary'>XD</Button>
                </Card.Body>
            </Card>
        </div> 
     );
}

export default Header;