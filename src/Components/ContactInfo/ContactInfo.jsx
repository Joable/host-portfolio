import { Accordion, Card } from "react-bootstrap";

import ContactInfoAccordion from "../ContactInfoAccordion/ContactInfoAccordion";

function ContactInfo( {telephone, email} ) {
    return ( 
        <Accordion defaultActiveKey="0">
            <ContactInfoAccordion>Informacion de contacto</ContactInfoAccordion>
            <Accordion.Collapse>
                <Card.Text>Email: {email}</Card.Text>
            </Accordion.Collapse>
            
            <Accordion.Collapse>
                <Card.Text>Telephone: {telephone}</Card.Text>
            </Accordion.Collapse>

        </Accordion>
    );
}

export default ContactInfo;