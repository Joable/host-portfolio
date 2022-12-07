import {
    Card, 
    Placeholder
} from 'react-bootstrap'

function AboutLoading() {
    return(
        <>
        <Card>
            <Card.Body>
                <Card.Title>
                    <Placeholder as={Card.Title} animation='glow'>
                        <Placeholder xs={4}/>
                    </Placeholder>
                </Card.Title>
                
                <Card.Text>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>            
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
}

export default AboutLoading;