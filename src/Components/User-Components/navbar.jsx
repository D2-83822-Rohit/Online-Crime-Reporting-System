import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';

function NavBar() {

//   const history = useHistory();

    const handleLogout = () => {
//         // Clear session storage
        sessionStorage.clear();
        
//         // Show success toast message
        toast.success('You logged out successfully');
        
//         // Redirect to the home page (or login page)
//         history.push('/');
        
//         // Disable browser navigation
//         window.history.pushState(null, '', window.location.href);
//         window.onpopstate = () => {
//             window.history.go(1);
//         };
      }
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
                        <NavLink to="/home" className="listItemNAV" >Home</NavLink>
                        <NavLink  to="/complaints" className="listItemNAV" >Complaint</NavLink>
                        <NavLink  to="/status" className="listItemNAV" >Track</NavLink>
                        <NavLink  to="/history" className="listItemNAV" >History</NavLink>
                        <NavLink  to="/contact" className="listItemNAV" >Contact Us</NavLink>
                        <NavLink  to="/" className="listItemNAV" onClick={handleLogout} >Logout</NavLink>
                    </div>
                </nav>

            </div>
        
        </Container>
        </Navbar>
      
        </>
    )
}
export default NavBar;