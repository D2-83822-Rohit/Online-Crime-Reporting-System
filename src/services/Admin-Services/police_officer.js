import axios from 'axios';

const API_ENDPOINT = 'YOUR_API_ENDPOINT';

// Function to register a police officer
export const registerPoliceOfficer = async (formData) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/register-officer`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error registering police officer:', error);
        throw error;
    }
};

// Function to fetch the list of police officers
export const fetchPoliceOfficers = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/police-officers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching police officers:', error);
        throw error;
    }
};

// Function to delete a police officer
export const deletePoliceOfficer = async (officerId) => {
    try {
        await axios.delete(`${API_ENDPOINT}/police-officers/${officerId}`);
    } catch (error) {
        console.error('Error deleting police officer:', error);
        throw error;
    }
};

// Function to update a police officer
export const updatePoliceOfficer = async (officerId, formData) => {
    try {
        const response = await axios.put(`${API_ENDPOINT}/police-officers/${officerId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating police officer:', error);
        throw error;
    }
};
