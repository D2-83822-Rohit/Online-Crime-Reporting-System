import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'


function PoliceNavBar() {
    return(
        <>
    
      <Navbar bg="dark" data-bs-theme="dark">      
        <Container>
      <div className="containerNAV containerNAV-flex">
                <div className='logocontainer'>
                <Navbar.Brand >CRIME REPORT</Navbar.Brand>
                </div>
                <nav>
                    <div className='listNAV'>
                        <NavLink to="/police-home" className="listItemNAV" >Home</NavLink>
                        <NavLink to="/police-complaints" className="listItemNAV" >Complaints</NavLink>
                        <NavLink to="/police-officers" className="listItemNAV" >Officers</NavLink>
                        <NavLink to="/police-users-inquires" className="listItemNAV" >Inquires</NavLink>   
                        <NavLink to="/" className="listItemNAV" >Logout</NavLink>
                    </div>
                </nav>

            </div>
        
        </Container>
        </Navbar>
      
        </>
    )
}
export default PoliceNavBar;