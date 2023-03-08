import { Card } from "react-bootstrap";

import styles from './ProyectElement.module.css'

function ProyectElement( proyectData ) {
    return ( 
        
        <>
        <hr/>
        <Card.Subtitle>
            <a href="https://github.com/Joable/porfolio" className={styles.proyectTitle}>
                {proyectData.proyectData.name}
            </a>
        </Card.Subtitle>

        <Card.Text >
            <div className={styles.descriptionText}>
                {proyectData.proyectData.description}
            </div>
        </Card.Text>
        </>
     );
}

export default ProyectElement;