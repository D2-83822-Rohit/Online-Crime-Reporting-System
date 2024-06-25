import React from 'react'
import PoliceNavBar from '../../Components/Police-Components/police_navbar';
import Footer from '../../Components/User-Components/footer';

const PoliceInquires = () => {
  return (
    <div>
      <PoliceNavBar/>

      <div className="home-container">
        <header className="home-header">
            <h1>Inquires</h1>
        </header>


        <section className="home-section">
            <div className="row mb-3">

                <div className="col-md-12">
                    <div className="card text-center">
                        {/* <Link to="/complaints"><img src={jailImage} className="card-img-top" alt="Report Crime" /></Link> */}

                    </div>
                </div>
            </div>
        </section>

        <section className="home-section">
        <div>
      <center>
            <div class="table-responsive">
                <table class="table table-striped table-bordered text-center" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reason Of Contact</th>
                            <th>Contact Number</th>
                            <th>Email</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>                        
                    </tbody>
                </table>
            </div>
        </center>
    </div>

        </section>
    </div>

      <Footer/>
    </div>
  )
}

export default PoliceInquires
