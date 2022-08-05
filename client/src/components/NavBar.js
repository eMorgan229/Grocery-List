
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

const NavBar = ({user, setUser}) => {
  const history = useNavigate()

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser({})
        history('/login')
      }
    })
  }
    return(
       
            <Navbar className="color-nav" expand="lg">
            <Container >
                <Navbar.Brand className="logo">
                <img className="spinach-icon" alt="spinach icon" src='spinach.png'/>
                <span className="title">
                  Grocery List
                </span>
                </Navbar.Brand>
              {user && user.username ? <div className="welcome">
                <div className="welcome-text">
                Welcome back , {user.username}!
                </div>
                <div className="logout-button">              
                <Button className="button" onClick={handleLogout}>Log Out</Button>
                </div>
              </div> : ""}
                <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
            {/* <Nav.Link href="/grocery_lists/:id">Grocery List</Nav.Link> */}
            <Nav.Link href="/view_grocery_lists">View all Grocery Lists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    )
}
export default NavBar;