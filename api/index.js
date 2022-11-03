import axios from 'axios';

const url = 'http://localhost:3004';

const api = {
  getWines: async (pageSize) => {
    try {
      const response = await axios.get(`${url}/products?page=1&limit=${pageSize}`);
      return response.data || [];
    } catch (error) {
      throw new Error(`Error': ${error.message}`);
    }
  },

  getWine: async id => {
    try {
      const response = await axios.get(`${url}/wines/${id}`);
      return response.data || {};
    } catch (error) {
      throw new Error(`Error': ${error.message}`);
    }
  },

  getCountries: async () => {
    try {
      const response = await axios.get(`${url}/countries`);
      return response.data || [];
    } catch (error) {
      throw new Error(`Error': ${error.message}`);
    }
  },

  getDistricts: async () => {
    try {
      const response = await axios.get(`${url}/districts`);
      return response.data || [];
    } catch (error) {
      throw new Error(`Error': ${error.message}`);
    }
  },

  getSales: async () => {
    try {
      const response = await axios.get(`${url}/sales`);
      return response.data || [];
    } catch (error) {
      throw new Error(`Error': ${error.message}`);
    }
  }
};

export default api;
