import { 
    Card,
    Placeholder,
    Image
} from 'react-bootstrap'

import HeaderNav from '../HeaderNav/HeaderNav';

import styles from './Header.module.css'

import gif from '../../img/ayynomarico3.gif'
import gif2 from '../../img/dudeguy-grid.jpg'

function HeaderLoading() {
    return (
        <div className={styles.headerProfile}>
                        <Card className={styles.headerCard}>

                            <div className={styles.imageContainer}>

                                <Card.Img className={`${styles.box} ${styles.imageBanner}`} variant="top" src={gif}/>
                                <Image className={`${styles.box} ${styles.imageProfile}`} src={gif2} roundedCircle></Image>

                            </div>

                            <div className={styles.bodyProfile}>
                                <Card.Body >
                                    
                                    <Placeholder as={Card.Title} animation='glow'>
                                        <Placeholder xs={4}/>
                                    </Placeholder>

                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={2} /> <Placeholder xs={2} />{' '} <Placeholder xs={4} />
                                    </Placeholder>
                                    
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={3} /> <Placeholder xs={3} />
                                    </Placeholder>

                                </Card.Body>
                            </div>

                            <HeaderNav/>

                        </Card>
        </div>
        );
}

export default HeaderLoading;