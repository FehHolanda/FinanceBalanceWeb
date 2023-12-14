import axios from "axios";

const api = axios.create({
    baseURL:   "//localhost:8000"
});

export const useApi = () => ({
    validateToken: async (token:string)=>{
        const response = await api.post('/validate',{token});
        return response.data;
    },

    signin: async (username:string,password:string) => {
        return {
            user: {id:1,name:'felcra',username:'felcra'},
            token: "12345678845"
        };
        const response = await api.post('/signin',{username,password});
        return response.data;

    },

    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});