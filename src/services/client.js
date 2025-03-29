import axios from 'axios';

export const getRequest =async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } 
}

export const postRequest =async (url,data) => {
    return axios.post(url, data)
        .then(response => response.data)
        .catch(error => {
            console.error('Error posting data:', error);
            throw error;
        });
}
export const deleteRequest =async (url) => {
    return axios.delete(url)
        .then(response => response.data)
        .catch(error => {
            console.error('Error deleting data:', error);
            throw error;
        });
}
export const putRequest =async (url,data) =>{
    return axios.put(url, data)
        .then(response => response.data)
        .catch(error => {
            console.error('Error updating data:', error);
            throw error;
        });
}
