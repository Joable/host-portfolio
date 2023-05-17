import { Card } from "react-bootstrap";

import styles from './ProjectElement.module.css'

function ProjectElement( projectData ) {
    return ( 
        
        <>
        <hr/>
        <Card.Subtitle>
            <a href="https://github.com/Joable/porfolio" className={styles.projectTitle}>
                {projectData.projectData.name}
            </a>
        </Card.Subtitle>

        <Card.Text >
            <div className={styles.descriptionText}>
                {projectData.projectData.description}
            </div>
        </Card.Text>
        </>
     );
}

export default ProjectElement;