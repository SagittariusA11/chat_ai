import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getHello = async () => {
  try {
    const response = await api.get('/api/hello');
    return response.data;
  } catch (error) {
    console.error('Error fetching greeting:', error);
    throw error;
  }
};

