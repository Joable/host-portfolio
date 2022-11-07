import { 
    Card, 
    Nav,
    Image
} from 'react-bootstrap'

import gif from '../../img/ayynomarico2.gif'
import gif2 from '../../img/ayynomarico4.gif'
import './Header.css'

function Header() {
    return (
        <div className='header-profile'>
            <Card id = "header-card">

                <div className='image-container'>

                    <Card.Img className='box image-banner' variant="top" src={gif}/>
                    <Image className='box image-profile' src={gif2} roundedCircle></Image>

                </div>
                <div className='body-profile'>
                    <Card.Body >

                        <Card.Title>Joaquin Elias Altable</Card.Title>
                        <Card.Subtitle>Front End Web Developer</Card.Subtitle>
                        
                        <Card.Text>
                            Capital Federal, Buenos Aires (Argentina) 
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
     );
}

export default Header;