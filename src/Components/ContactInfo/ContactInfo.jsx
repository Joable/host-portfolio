import { Accordion, Card } from "react-bootstrap";

import ContactInfoAccordion from "../ContactInfoAccordion/ContactInfoAccordion";

function ContactInfo() {
    return ( 
        <Accordion defaultActiveKey="0">
            <ContactInfoAccordion>Informacion de contacto</ContactInfoAccordion>
            <Accordion.Collapse>
                <Card.Text>Sample Text</Card.Text>
            </Accordion.Collapse>

        </Accordion>
    );
}

export default ContactInfo;