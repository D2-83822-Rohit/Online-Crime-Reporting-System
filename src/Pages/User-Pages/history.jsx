import NavBar from "../../Components/User-Components/navbar";
import historyBanner from "../../Images/history.png"
import Footer from "../../Components/User-Components/footer";

function History(){
    return(
        <>
            <NavBar/>
        <div className="home-container">
                <header className="home-header">
                    <h1>Previous Complaints</h1>
                </header>


                <section className="home-section">
                <div className="row mb-3">

                        <div className="col-md-12">
                            <div className="card text-center">
                                <img src={historyBanner} className="card-img-top" alt="Track Banner" />

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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <span class="btn btn-warning">Edit</span>
                                </td>
                                <td>
                                    <span class="btn btn-danger">Delete</span>
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
    )
}

export default History;