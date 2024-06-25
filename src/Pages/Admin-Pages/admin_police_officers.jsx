import AdminNavBar from "../../Components/Admin-Components/admin_navbar";
import Footer from "../../Components/User-Components/footer";
import policeImage from '../../Images/Officers.jpeg'
import { Link } from 'react-router-dom';
function AdminPoliceOfficers(){
    return(
        <>

    <AdminNavBar/>

    <div className="home-container">
        <header className="home-header">
            <h1>Police Officers</h1>
        </header>


        <section className="home-section">
            <div className="row mb-3">

                <div className="col-md-12">
                    <div className="card text-center">
                        <Link to="/complaints"><img src={policeImage} className="card-img-top" alt="Report Crime" /></Link>

                    </div>
                </div>
            </div>
        </section>

        <section className="home-section">
        <Link to={'/add-police-officer'}>
        <button className="btn btn-outline-primary">Add Police Officers</button></Link>
        <center>
            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center" >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="btn btn-outline-warning">Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </center>
    
        </section>
    </div>

    <Footer/>

    </>
    );
}
export default AdminPoliceOfficers