import axios from "axios";

const api = axios.create({
    baseURL: "https://api-balance-finance-b3bch.ondigitalocean.app"
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validation', {}, {
            headers: { 'authorization': token }
        });
        return response.data;
    },

    signin: async (username: string, password: string) => {
        const response = await api.post('/signin', { username, password });
        return response.data;

    },

    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});