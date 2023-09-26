import { createContext } from 'react'
import { User } from '../../types/User'

export type AuthContextType = {
    user: User | null
    signin: (email: string, password: string) => Promise<boolean>
    signup: (email: string, username: string, password: string) => Promise<string>
    signout: () => void
    createCategory: (name: string, status: boolean) => Promise<boolean>
    getCategory: () => Promise<[]>
}

export const AuthContext = createContext<AuthContextType>(null!);