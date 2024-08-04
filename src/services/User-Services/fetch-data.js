import axios from 'axios';
import config from '../../config';
const API_ENDPOINT = `${config.url}/api`;

export const fetchPoliceOfficers = async (id) => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/police-officers/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching police officers:', error);
        throw error;
    }
};

export const fetchPoliceStationById = async (id) => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/police-stations/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching police station:', error);
        throw error;
    }
};
