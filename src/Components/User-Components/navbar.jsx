import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'


function NavBar() {
    return(
        <>
       
        {/* <Navbar bg="dark" data-bs-theme="dark">
        
        <Container>
          <Navbar.Brand href="#home">CRIME REPORT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <Link to="/home">Home</Link> </Nav.Link>
            <Nav.Link > <Link to="/complaints">Complaints</Link></Nav.Link>
            <Nav.Link ><Link to="/status">Track</Link></Nav.Link>
            <Nav.Link ><Link to="/history">History</Link></Nav.Link>
            <Nav.Link ><Link to="/contact">Contact Us</Link></Nav.Link>
            <Nav.Link ><Link to="/">Logout</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Navbar bg="dark" data-bs-theme="dark">      
        <Container>
      <div className="containerNAV containerNAV-flex">
                <div className='logocontainer'>
                <Navbar.Brand >CRIME REPORT</Navbar.Brand>
                </div>
                <nav>
                    <div className='listNAV'>
                        <NavLink to="/home" className="listItemNAV" >Home</NavLink>
                        <NavLink  to="/complaints" className="listItemNAV" >Complaint</NavLink>
                        <NavLink  to="/status" className="listItemNAV" >Track</NavLink>
                        <NavLink  to="/history" className="listItemNAV" >History</NavLink>
                        <NavLink  to="/contact" className="listItemNAV" >Contact Us</NavLink>
                        <NavLink  to="/" className="listItemNAV" >Logout</NavLink>
                    </div>
                </nav>

            </div>
        
        </Container>
        </Navbar>
      
        </>
    )
}
export default NavBar;