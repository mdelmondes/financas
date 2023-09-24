import { useEffect, useState, useRef } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User"
import { useApi } from "../../hooks/useApi"

export const AuthProvider = ({children}: {children: JSX.Element} ) => {
    const [user, setUser] = useState<User | null>(null)
    const {current: api} = useRef(useApi())

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken')            

            if(storageData){
                try {
                    const data = await api.validateToken(storageData)
                    if(data[0].email){
                        setUser(data[0])
                    }
                } catch (error) {
                    console.log(error)
                }
               
            }
        }
        validateToken()
    }, [api])

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password)
        const token = data.token
        if (data && data.token) {
            setUser(data.user[0])
            setToken(token)
            return true
        }

        return false
    }

    const signout = async () => {
        await api.signout()
        setUser(null)
        setToken('')
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}