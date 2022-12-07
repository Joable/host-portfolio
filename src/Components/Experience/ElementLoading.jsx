
import { 
    Card, 
    Placeholder,
    Spinner
} from "react-bootstrap";

import styles from '../Element/Element.module.css'

function ElementLoading() {
    return (
        <>
        <hr/>
        <div className={styles.element}>

            <div className={styles.elementSpinner}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

            <Placeholder as={Card.Text} animation="glow" style={{width: "100%"}}>

                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />

            </Placeholder>

        </div>

        </>
    );
}


export default ElementLoading;