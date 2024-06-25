import NavBar from '../../Components/User-Components/navbar';
import track from "../../Images/track.jpg"
import Footer from '../../Components/User-Components/footer';

function Status(){
    return (
        <>
        <NavBar/>
        <div className="home-container">
                <header className="home-header">
                    <h1>Track Your Complaint Here</h1>
                </header>


                <section className="home-section">
                <div className="row mb-3">

                        <div className="col-md-12">
                            <div className="card text-center">
                                <img src={track} className="card-img-top" alt="Track Banner" />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-section">
                <center>
            <div class="table-responsive">
                <table class="table table-striped table-bordered text-center" >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Complaint Title</th>
                            <th>Complaint Category</th>
                            <th>Status</th>
                            <th>Assigned To</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </center>
                </section>
        </div> 
                <Footer/>
        
        </>
    )
}
export default Status;