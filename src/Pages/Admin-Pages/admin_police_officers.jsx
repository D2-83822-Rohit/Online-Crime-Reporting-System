import React, { useState, useEffect } from 'react';
import AdminNavBar from "../../Components/Admin-Components/admin_navbar";
import Footer from "../../Components/User-Components/footer";
import policeImage from '../../Images/Officers.jpeg';
import { Link } from 'react-router-dom';
import { fetchPoliceOfficers, deletePoliceOfficer } from '../../services/Admin-Services/police_officer'; // Adjust the path as needed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal, Form } from 'react-bootstrap';

const AdminPoliceOfficers = () => {
    const [officers, setOfficers] = useState([]);
    const [selectedOfficer, setSelectedOfficer] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const loadOfficers = async () => {
            try {
                const data = await fetchPoliceOfficers();
                setOfficers(data);
            } catch (error) {
                console.error('Error fetching police officers:', error);
                toast.error('Failed to fetch police officers');
            }
        };

        loadOfficers();
    }, []);

    const handleDelete = async (officerId) => {
        try {
            await deletePoliceOfficer(officerId);
            setOfficers(officers.filter(officer => officer.id !== officerId));
            toast.success('Officer deleted successfully');
        } catch (error) {
            console.error('Error deleting police officer:', error);
            toast.error('Failed to delete officer');
        }
    };

    const handleEdit = (officer) => {
        setSelectedOfficer(officer);
        setShowEditModal(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Implement the update functionality here
        setShowEditModal(false);
        toast.success('Officer updated successfully');
    };

    return (
        <>
            <AdminNavBar />

            <div className="home-container">
                <header className="home-header">
                    <h1>Police Officers</h1>
                </header>

                <section className="home-section">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="card text-center">
                                <Link to="/complaints">
                                    <img src={policeImage} className="card-img-top" alt="Report Crime" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-section">
                    <Link to={'/add-police-officer'}>
                        <button className="btn btn-outline-primary">Add Police Officer</button>
                    </Link>
                    <center>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                        <th>Image</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {officers.map((officer, index) => (
                                        <tr key={officer.id}>
                                            <td>{index + 1}</td>
                                            <td>{officer.name}</td>
                                            <td>{officer.designation}</td>
                                            <td><img src={officer.imageUrl} alt={officer.name} style={{ width: '50px', height: '50px' }} /></td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-warning"
                                                    onClick={() => handleEdit(officer)}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() => handleDelete(officer.id)}
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

            {/* Edit Officer Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Police Officer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOfficer && (
                        <Form onSubmit={handleUpdate}>
                            <Form.Group controlId="formOfficerName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Officer Name"
                                    value={selectedOfficer.name}
                                    onChange={(e) => setSelectedOfficer({ ...selectedOfficer, name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formDesignation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Designation"
                                    value={selectedOfficer.designation}
                                    onChange={(e) => setSelectedOfficer({ ...selectedOfficer, designation: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formFile">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setSelectedOfficer({ ...selectedOfficer, image: e.target.files[0] })}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>

            <ToastContainer />
        </>
    );
};

export default AdminPoliceOfficers;
