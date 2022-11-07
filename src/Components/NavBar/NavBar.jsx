import {Navbar as BsNavbar, Button}  from 'react-bootstrap'
import { BsLinkedin } from "react-icons/bs"


import './NavBar.css'

function NavBar() {
    return (
        <div className='nav-container'>
            <BsNavbar bg="dark" variant='dark'>
                <div className='nav-elements'>
                    <div className='nav-left'>
                        <BsNavbar.Brand href='/'>Joaquin Altable</BsNavbar.Brand>
                        <BsNavbar.Text> 
                        </BsNavbar.Text>
                    </div>
                    <div className="nav-right">
                        <a href='https://www.linkedin.com/in/jealtable'>
                            <BsLinkedin size={30}/>
                        </a>
                        <Button>Login</Button>
                    </div>
                </div>
            </BsNavbar>
        </div>
         
     );
}

export default NavBar;