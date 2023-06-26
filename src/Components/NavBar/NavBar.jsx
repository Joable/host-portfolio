import { Navbar as BsNavbar }  from 'react-bootstrap'
import { 
    BsLinkedin,
    BsGithub
 } from "react-icons/bs"

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.navContainer}>
            <BsNavbar bg="dark" variant='dark'>

                <div className={styles.navElements}>

                    <div className={styles.navLeft}>
                        <BsNavbar.Brand href='/'>Portfolio</BsNavbar.Brand>
                    </div>

                    <div className={styles.navRight}>
                        <a href='https://github.com/Joable'>
                            <BsGithub size={30}/>
                        </a>

                        <a href='https://www.linkedin.com/in/jealtable'>
                            <BsLinkedin size={30}/>
                        </a>
                    </div>

                </div>
            </BsNavbar>
        </div>
         
     );
}

export default NavBar;