import {createContext} from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signin: (username:string,passwors:string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);