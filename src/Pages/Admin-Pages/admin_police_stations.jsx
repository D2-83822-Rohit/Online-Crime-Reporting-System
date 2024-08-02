import React, { useState, useEffect } from 'react';
import AdminNavBar from "../../Components/Admin-Components/admin_navbar";
import Footer from "../../Components/User-Components/footer";
import { Link } from 'react-router-dom';
import { fetchPoliceStations, deletePoliceStation } from '../../services/Admin-Services/police_station'; // Adjust the path as needed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Modal } from 'react-bootstrap';

const AdminPoliceStations = () => {
    const [stations, setStations] = useState([]);
    const [selectedStation, setSelectedStation] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    useEffect(() => {
        const loadStations = async () => {
            try {
                const data = await fetchPoliceStations();
                setStations(data);
            } catch (error) {
                console.error('Error fetching police stations:', error);
                toast.error('Failed to fetch police stations');
            }
        };

        loadStations();
    }, []);

    const handleDelete = async (stationId) => {
        try {
            await deletePoliceStation(stationId);
            setStations(stations.filter(station => station.id !== stationId));
            toast.success('Police station deleted successfully');
        } catch (error) {
            console.error('Error deleting police station:', error);
            toast.error('Failed to delete police station');
        }
    };

    const handleShowDetails = (station) => {
        setSelectedStation(station);
        setShowDetailsModal(true);
    };

    const handleCloseDetailsModal = () => {
        setShowDetailsModal(false);
    };

    return (
        <>
            <AdminNavBar />

            <div className="home-container">
                <header className="home-header">
                    <h1>Police Stations</h1>
                </header>

                <section className="home-section">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <div className="card text-center">
                                {/* <Link to="/admin-police-stations"><img src={PoliceStationBanner} className="card-img-top" alt="Report Crime" /></Link> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-section">
                    <Link to={'/add-police-station'}>
                        <Button variant="outline-primary">Add Police Station</Button>
                    </Link>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Contact Number</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stations.map((station, index) => (
                                    <tr key={station.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Button
                                                variant="link"
                                                onClick={() => handleShowDetails(station)}
                                            >
                                                {station.stationName}
                                            </Button>
                                        </td>
                                        <td>{station.address.city}</td>
                                        <td>{station.contactNumber}</td>
                                        <td>
                                            <Link to={`/update-police-station/${station.id}`}>
                                                <Button variant="outline-warning">Edit</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button
                                                variant="outline-danger"
                                                onClick={() => handleDelete(station.id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <Footer />

            {/* Details Modal */}
            <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Police Station Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedStation && (
                        <>
                            <h5>{selectedStation.stationName}</h5>
                            <p><strong>Address:</strong> {selectedStation.address.addressLine1}, {selectedStation.address.addressLine2}, {selectedStation.address.city}, {selectedStation.address.state} - {selectedStation.address.pinCode}</p>
                            <p><strong>Contact Number:</strong> {selectedStation.contactNumber}</p>
                            {selectedStation.imageUrl && (
                                <img src={selectedStation.imageUrl} alt={selectedStation.stationName} style={{ width: '100%', height: 'auto' }} />
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailsModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </>
    );
};

export default AdminPoliceStations;
