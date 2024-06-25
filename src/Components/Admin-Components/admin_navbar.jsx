import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'


function AdminNavBar() {
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
                        <NavLink to="/admin-home" className="listItemNAV" >Home</NavLink>
                        <NavLink to="/admin-complaints" className="listItemNAV" >Complaints</NavLink>
                        <NavLink to="/admin-police-stations" className="listItemNAV" >Stations</NavLink>
                        <NavLink to="/admin-police-officers" className="listItemNAV" >Officers</NavLink>
                        <NavLink to="/admin-users-inquires" className="listItemNAV" >Inquires</NavLink>   
                        <NavLink to="/" className="listItemNAV" >Logout</NavLink>
                    </div>
                </nav>

            </div>
        
        </Container>
        </Navbar>
      
        </>
    )
}
export default AdminNavBar;