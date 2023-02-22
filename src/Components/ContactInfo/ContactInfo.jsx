import { Accordion, Card } from "react-bootstrap";

import ContactInfoAccordion from "../ContactInfoAccordion/ContactInfoAccordion";

function ContactInfo( {telephone, email} ) {
    return ( 
        <Accordion defaultActiveKey="0">

            <ContactInfoAccordion>
                Contact information
            </ContactInfoAccordion>

            <Accordion.Collapse>
                <Card.Text>Email: {email}</Card.Text>
            </Accordion.Collapse>
            
            <Accordion.Collapse>
                <Card.Text>Phone: {telephone}</Card.Text>
            </Accordion.Collapse>

        </Accordion>
    );
}

export default ContactInfo;