import './styles.css';
import {Navbar, Container} from 'react-bootstrap'


function NavBaro (props) {
    const {nameOfNavBar, imageLink} = props;
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-center">
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={imageLink}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{'   '}
            {nameOfNavBar}
            {'   '}
            <img
                alt=""
                src={imageLink}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            </Container>
            
        </Navbar>
    );
  }
  
  export default NavBaro;