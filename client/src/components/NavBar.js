
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
       
            <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand className="logo">
                <img className="spinach-icon" alt="spinach icon" src='spinach.png'/>
                <span className="title">
                  Grocery List
                </span>
                </Navbar.Brand>
              {user && user.username ? <div>
              Welcome back {user.username}!
              <Button onClick={handleLogout}>Log Out</Button>
              </div> : ""}
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