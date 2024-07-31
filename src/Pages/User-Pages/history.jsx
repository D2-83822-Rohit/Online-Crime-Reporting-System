import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/User-Components/navbar';
import historyBanner from '../../Images/history.png';
import Footer from '../../Components/User-Components/footer';
import { useNavigate } from 'react-router-dom';
import { getComplaints, deleteComplaint } from '../../services/User-Services/complaint';

function History() {
    const [complaints, setComplaints] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const data = await getComplaints();
                setComplaints(data);
            } catch (error) {
                console.error('Error fetching complaints:', error);
            }
        };

        fetchComplaints();
    }, []);

    const handleEdit = (id) => {
        navigate(`/updateComplaint/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await deleteComplaint(id);
            setComplaints(complaints.filter(complaint => complaint.id !== id));
        } catch (error) {
            console.error('Error deleting complaint:', error);
        }
    };

    return (
        <>
            <NavBar />
            <div className="home-container">
                <header className="home-header">
                    <h1>Previous Complaints</h1>
                </header>

                <section className="home-section">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="card text-center">
                                <img src={historyBanner} className="card-img-top" alt="History Banner" />
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
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {complaints.map((complaint, index) => (
                                        <tr key={complaint.id}>
                                            <td>{index + 1}</td>
                                            <td>{complaint.title}</td>
                                            <td>{complaint.category}</td>
                                            <td>
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => handleEdit(complaint.id)}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(complaint.id)}
                                                >
                                                    Delete
                                                </button>
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

export default History;
