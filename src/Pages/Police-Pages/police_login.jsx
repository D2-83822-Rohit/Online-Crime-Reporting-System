import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginPoliceOfficer } from '../../services/Police-Services/police';
import { toast } from 'react-toastify';

function PoliceLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await loginPoliceOfficer(email, password);

            if (data) {
              sessionStorage.setItem('policeOfficer', JSON.stringify(data));
              sessionStorage.setItem('officerId', JSON.stringify(data.id));
              sessionStorage.setItem('policeStationId', JSON.stringify(data.policeStationId));
              sessionStorage.setItem('officerName', JSON.stringify(data.officerName));
                toast.success('Login successful.');
                navigate('/police-home'); 
            } else {
                toast.error('Invalid email or password.');
            }
        } catch (error) {
            // console.error('Login error:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">POLICE LOGIN</h5>
                            <form onSubmit={handleLogin}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="d-grid mt-4">
                                    <button className="btn btn-danger btn-login text-uppercase fw-bold" type="submit">
                                        Sign in
                                    </button>
                                    <Link to='/police-home' className="btn btn-secondary mt-3">
                                        Test
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PoliceLogin;
