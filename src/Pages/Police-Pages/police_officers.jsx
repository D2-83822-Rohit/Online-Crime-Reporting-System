import React from 'react'
import PoliceNavBar from '../../Components/Police-Components/police_navbar'
import Footer from '../../Components/User-Components/footer';
import policeImage from '../../Images/Officers.jpeg'
import { Link } from 'react-router-dom';

const PoliceOfficers = () => {
  return (
    <div>
      <PoliceNavBar/>

      <div className="home-container">
                <header className="home-header">
                    <h1>Police Officers</h1>
                </header>


                <section className="home-section">
                    <div className="row mb-3">

                        <div className="col-md-12">
                            <div className="card text-center">
                                <Link to="/police-complaints"><img src={policeImage} className="card-img-top" alt="Report Crime" /></Link>

                            </div>
                        </div>
                      </div>
                    
                </section>

                

        </div>

      <Footer/>
    </div>
  )
}

export default PoliceOfficers
