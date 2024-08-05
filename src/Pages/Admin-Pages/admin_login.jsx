import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginAdmin } from '../../services/Admin-Services/admin'; 
import { toast } from 'react-toastify';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const admin = await loginAdmin(email, password);
            toast.success('Login successful');
            // Clear session storage and set admin details (optional, adjust as needed)
            sessionStorage.clear();
            sessionStorage.setItem('admin', JSON.stringify(admin));
            navigate('/admin-home');
        } catch (error) {
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">ADMIN</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
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
                                            required
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                            Sign in
                                        </button>
                                    </div>
                                    <Link to="/admin-home">Test</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
