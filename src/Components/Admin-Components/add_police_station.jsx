import React from 'react'
import Footer from '../User-Components/footer'
import AdminNavBar from './admin_navbar'
import Form from 'react-bootstrap/Form';

const AddPoliceStation = () => {
    return (
        <div>

            <AdminNavBar />

            <div className="home-container">
                <header className="home-header">
                    <h1>ADD POLICE STATION</h1>
                </header>

                <section className='home-section'>

                    <div className="container">
                        <div className="row">

                            <div className="col-sm-10 col-md-9 col-lg-7 mx-auto">
                                <div className="card border-0 shadow rounded-3 my-5">
                                    <div className="card-body p-4 p-sm-5">

                                        <h5 className="card-title text-center mb-5 fw-light fs-5">POLICE STATION INFO</h5>
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Station Name" />
                                                <label for="floatingInput">Station Name</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Location" />
                                                <label for="floatingInput">Location</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Contact Number" />
                                                <label for="floatingInput">Contact Number</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                            <div className='row'>
                                            <div className='col'>

                                                <input type="text" disabled className="form-control" id="floatingInput" placeholder="Upload Image of Police Station" />
                                                {/* <label for="floatingInput">Location</label> */}
                                            {/* </div>
                                            <div className='col'> */}
                                            <Form.Group controlId="formFile">
                                                <Form.Control type="file" placeholder="Image of Police Station"/>
                                                
                                            </Form.Group>
                                            </div>
                                            </div>
                                            
                                            </div>
                                            

                                            <div className='row'>
                                            <div className='col'>

                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Address Line 1" />
                                                <label for="floatingInput">Address Line 1</label>
                                            </div>
                                            </div>
                                            <div className='col'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="Address Line 2" />
                                                <label for="floatingInput">Address Line 2</label>
                                            </div>
                                            </div>

                                            </div>


                                            <div className='row'>

                                                <div className='col'>
                                                    <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingPassword" placeholder="City" />
                                                <label for="floatingPassword">City</label>
                                                    </div>
                                                </div>

                                                <div className='col'>
                                                <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingPassword" placeholder="State" />
                                                <label for="floatingPassword">State</label>
                                            </div>
                                                </div>
                                                <div className='col'>
                                                <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingPassword" placeholder="Pin Code" />
                                                <label for="floatingPassword">Pin Code</label>
                                            </div>
                                                </div>
                                                
                                                

                                            </div>
                                            

                                            <div className="d-grid mt-4">
                                                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">ADD STATION</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default AddPoliceStation
