import { 
    Card,
    Placeholder
} from 'react-bootstrap'

function HeaderLoading() {
    return (
        <>
                    <Placeholder as={Card.Title} animation='glow'>
                        <Placeholder xs={4}/>
                    </Placeholder>

                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={2} /> <Placeholder xs={2} />{' '} <Placeholder xs={4} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={3} /> <Placeholder xs={3} />
                    </Placeholder>
        </> 
        );
}

export default HeaderLoading;