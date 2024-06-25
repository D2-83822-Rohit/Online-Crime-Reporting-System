import Footer from "../../Components/User-Components/footer";
import NavBar from "../../Components/User-Components/navbar";
import ContactBanner from '../../Images/ContactBanner.jpg'
import ContactInfo from "../../Components/User-Components/contactInfo";
// import React, { useState } from 'react';

function Contact() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value
    //     });
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log(formData); // Example: Log form data to console
    //   };

    return (
        <>
            <NavBar />
            <div className="home-container">
                <header className="home-header">
                    <h1>Contact Us</h1>
                </header>


                <section className="home-section">
                    <div className="row mb-3">

                        <div className="col-md-12">
                            <div className="card text-center">
                                <img src={ContactBanner} className="card-img-top" alt="Contact Banner" />

                            </div>
                        </div>
                    </div>
                </section>



                <section className="home-section contactBack">
                    <div className="col-md-2"></div>

                    <div className="col-md-8">
                        <hr />
                        <h2 className="text-dark mt-5 mb-5" >Get a call back from us</h2>
                        <div className="row">
                            <div className="col form-floating mb-3 p-1">
                                <input type="text" className="form-control" id="floatingInput" placeholder="First Name" />
                                <label htmlFor="floatingInput">First Name</label>
                            </div>
                            <div className="col form-floating mb-3 p-1">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" />
                                <label htmlFor="floatingInput">Last Name</label>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="input-group flex-nowrap mb-3">
                                <span className="input-group-text" id="addon-wrapping">+91</span>
                                <input type="text" className="form-control" placeholder="Contact No." aria-label="Username" aria-describedby="addon-wrapping" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email Address" aria-label="email" aria-describedby="basic-addon2" />

                            </div>

                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Reason of contact</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="col-12 p-4 ">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <hr />

                        </div>


                    </div>

                    <div className="col-md-2"></div>

                </section>

            

                <ContactInfo/>



            </div>
            <Footer />
        </>
    )
}

export default Contact;

