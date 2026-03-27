import api from './api';

export const dataService = {
  getLeads: async () => {
    const response = await api.get('/leads');
    return response.data;
  },

  getTasks: async () => {
    const response = await api.get('/tasks');
    return response.data;
  },

  getUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },
};
