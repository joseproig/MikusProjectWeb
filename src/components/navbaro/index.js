import './styles.css';
import {Navbar, Container} from 'react-bootstrap'
import Imagen from './../imagen';

function NavBaro (props) {
    const {nameOfNavBar, imageLink} = props;
    return (
        <Navbar variant="dark" className="navbarTransparent">
            <Container className="justify-content-center">
            <Navbar.Brand href="#home">
                <Imagen width="30" height="30" imageLink={imageLink}></Imagen>
                {'   '}
            {nameOfNavBar}
            {'   '}
            <Imagen width="30" height="30" imageLink={imageLink}></Imagen>
            </Navbar.Brand>
            </Container>
            
        </Navbar>
    );
  }
  
  export default NavBaro;