import { Card } from "react-bootstrap";
import { 
    MdDesignServices,
    MdAccountBalance
 } from 'react-icons/md'

import styles from './Element.module.css'

function Element( {element, isEducation} ) {

    return (
            <>
            <hr/>
            <div className={styles.element}>

                <div className={styles.elementBody}>

                    <div className={styles.elementIcon}>
                        {isEducation ? <MdAccountBalance size={40}/> : <MdDesignServices size={40}/>}
                    </div>

                    <div className={styles.elementData}>
                        <Card.Subtitle>{element.position}</Card.Subtitle>
                        
                        <Card.Text>{element.location}</Card.Text>

                        <Card.Text>{element.from} - {element.to}</Card.Text>
                    </div>

                </div>

            </div>
            
            </>
    );
}

export default Element;