import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/User-Components/navbar';
import track from '../../Images/track.jpg';
import Footer from '../../Components/User-Components/footer';
import { Link } from 'react-router-dom';
import { getComplaints } from '../../services/User-Services/complaint';

function Status() {
    const [complaints, setComplaints] = useState([]);
    const userId = localStorage.getItem('userId'); 

    useEffect(() => {
        const fetchComplaints = async () => {
            if (userId) {
                try {
                    const data = await getComplaints(userId);
                    setComplaints(data);
                } catch (error) {
                    console.error('Error fetching complaints:', error);
                }
            }
        };

        fetchComplaints();
    }, [userId]);

    return (
        <>
            <NavBar />
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
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Complaint Title</th>
                                        <th>Complaint Category</th>
                                        <th>Status</th>
                                        <th>Assigned To</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {complaints.map((complaint, index) => (
                                        <tr key={complaint.id}>
                                            <td>{index + 1}</td>
                                            <td>{complaint.title}</td>
                                            <td>{complaint.category}</td>
                                            <td>{complaint.status}</td>
                                            <td>{complaint.assignedTo}</td>
                                            <td>
                                                <Link to={`/viewDetails/${complaint.id}`}>
                                                    <button className="btn btn-outline-primary">View</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </center>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Status;
