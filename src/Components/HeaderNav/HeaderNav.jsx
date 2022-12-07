import { Nav } from 'react-bootstrap'

function HeaderNav() {
    return ( 
        <Nav className='justify-content-center' variant='tabs' defaultActiveKey='/'>
                <Nav.Item>
                    <Nav.Link href='/'>Datos</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link href='#'>Proyectos</Nav.Link>
                </Nav.Item>
            </Nav>
     );
}

export default HeaderNav;