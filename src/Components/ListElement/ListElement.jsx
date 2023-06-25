import { Card } from 'react-bootstrap';

function ListElement({element}) {
    return ( 
        <>
        <hr/>
        <Card.Body>
            <Card.Subtitle>
                {element.name}
            </Card.Subtitle>

            <Card.Text>
                {element.description}
            </Card.Text>
            
            <Card.Text>{element.from} - {element.to}</Card.Text>
        </Card.Body>
        </>
    
    );
}

export default ListElement;