import { Card } from "react-bootstrap";
import { 
    MdDesignServices,
    MdAccountBalance
 } from 'react-icons/md'

import styles from './Element.module.css'


/*FIX THE DIPLAY OF THE ELEMENT */

function Element( {element, isEducation} ) {

    const data = element.data()

    return (
            <>
            <hr/>
            <div className={styles.element}>

                <div className={styles.elementBody}>

                    <div className={styles.elementIcon}>
                        {isEducation ? <MdAccountBalance size={40}/> : <MdDesignServices size={40}/>}
                    </div>

                    <div className={styles.elementData}>
                        <Card.Subtitle>{data.institution}</Card.Subtitle>
                        
                        <Card.Text>{data.areaOfInterest}</Card.Text>

                        <Card.Text>{data.from} - {data.to}</Card.Text>
                    </div>

                </div>

            </div>
            
            </>
    );
}

export default Element;