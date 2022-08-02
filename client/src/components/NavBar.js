
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return(
       
            <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#home">Grocery List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/">Grocery List</Nav.Link>
            <Nav.Link href="/view_grocery_lists">View all Grocery Lists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    )
}
export default NavBar;