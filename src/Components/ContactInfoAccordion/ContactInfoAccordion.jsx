import { Card, useAccordionButton } from 'react-bootstrap';
import styles from './ContactInfoAccordion.module.css';

function ContactInfoAccordion({children, eventKey}) {
    const activateAccordion = useAccordionButton(eventKey)

    return ( 
        <Card.Text onClick={activateAccordion} className = {styles.info}>
            {children}
        </Card.Text>
     );
}

export default ContactInfoAccordion;