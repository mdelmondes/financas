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
    },

    signup: async (email: string, username: string, password: string) => {
        const response = await api.post('/auth/register', {email, username, password})
        return response.data
    },

    createCategory: async (cat_name: string, cat_status: boolean) => {
        const response = await api.post('/categories', {cat_name, cat_status})        
        return response.data
    },

    getCategory: async () => {
        const response = await api.get('/categories')        
        return response.data
     },
})