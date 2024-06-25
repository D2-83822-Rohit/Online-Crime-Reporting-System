import { Link } from "react-router-dom";
import AdminNavBar from "../../Components/Admin-Components/admin_navbar";
import Footer from "../../Components/User-Components/footer";
// import PoliceStationBanner from '../Images/PoliceStationBanner.jpg';
// import { Link } from "react-router-dom";
function AdminPoliceStations(){
    return(
        <>

    <AdminNavBar/>

    <div className="home-container">
        <header className="home-header">
            <h1>Police Stations</h1>
        </header>


        <section className="home-section">
            <div className="row mb-3">

                <div className="col-md-12">
                    <div className="card text-center">
                        {/* <Link to="/admin-police-stations"><img src={PoliceStationBanner} className="card-img-top" alt="Report Crime" /></Link> */}

                    </div>
                </div>
            </div>
        </section>
        
        <section className="home-section">
        <Link to={'/add-police-station'}> <button className="btn btn-outline-primary">Add Police Station</button></Link>
       
        <center>
            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center" >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
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
export default AdminPoliceStations