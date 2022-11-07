import { 
    Card, 
    Button,
    Image
} from 'react-bootstrap'

import gif from '../../img/ayynomarico2.gif'
import gif2 from '../../img/ayynomarico4.gif'
import './Header.css'

function Header() {
    return (
        <div className='header-profile'>
            <Card >
                <div className='image-container'>
                    <Card.Img className='box image-banner' variant="top" src={gif}/>
                    <Image className='box image-profile' src={gif2} roundedCircle></Image>
                </div>
                <div className='body-profile'>
                    <Card.Body >
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            xD
                        </Card.Text>
                        <Button variant='primary'>XD</Button>
                    </Card.Body>
                </div>
            </Card>
        </div> 
     );
}

export default Header;