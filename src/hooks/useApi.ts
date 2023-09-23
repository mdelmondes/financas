import axios from "axios"

const api = axios.create({baseURL: process.env.REACT_APP_API})

export const useApi = () => ({

    validateToken: async (token: string) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
       };
        const response = await api.post('/validateToken', null, config)
        return response.data
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/auth/login', {email, password})
        return response.data
    },

    signout: async () => {
       const response = await api.post('/logout')       
       return response.data
    }
})