import axios from 'axios'
import config from '../../config'

const API_URL = `${config.url}/user/complaints`;
// export async function registerComplaint(title,complaintType,complaintDescription, crimeDate, suspectAddress, imageProof) {
//     // body parameters
//     const body = {
//         title,complaintType,complaintDescription,crimeDate,suspectAddress,imageProof
//     }
//     // make API call
//     const response = await axios.post(`${config.url}/user/register`, body)  
//     // read JSON data (response)
//     return response.data
//   }

// src/services/complaints.js




// Get all complaints
export const getComplaints = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching complaints:', error);
        throw error;
    }
};

// Get complaint by ID
export const getComplaintById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching complaint details:', error);
        throw error;
    }
};

// Create a new complaint
export const registerComplaint = async (complaintData) => {
    try {
        const formData = new FormData();
        Object.keys(complaintData).forEach(key => {
            if (complaintData[key]) {
                formData.append(key, complaintData[key]);
            }
        });
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        console.error('Error creating complaint:', error);
        throw error;
    }
};

// Update a complaint
export const updateComplaint = async (id, complaintData) => {
    try {
        const formData = new FormData();
        Object.keys(complaintData).forEach(key => {
            if (complaintData[key]) {
                formData.append(key, complaintData[key]);
            }
        });
        const response = await axios.put(`${API_URL}/${id}`, formData);
        return response.data;
    } catch (error) {
        console.error('Error updating complaint:', error);
        throw error;
    }
};

// Delete a complaint
export const deleteComplaint = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting complaint:', error);
        throw error;
    }
};
