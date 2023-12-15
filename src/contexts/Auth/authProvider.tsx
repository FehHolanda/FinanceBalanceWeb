import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    
    const [user,setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(()=>{
        const validateToken = async() => {
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await api.validateToken(storageData)
                if(data.user){
                    setUser(data.user);
                }
            }
        }

        validateToken();
    },[]);

    const signin = async (username:string, password:string) => {
        const {user,acessToken} = await api.signin(username,password);
        if(user && acessToken){
            setUser(user);
            setToken(acessToken);
            return true;
        }
        return false;
    }
    
    const signout = async() =>{
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token:string) => {
        localStorage.setItem('authToken',token);
    }

    const clearToken = () =>{
        localStorage.removeItem('authToken');
    }

    return(
        <AuthContext.Provider value={{user,signin,signout}}>
            {children}
        </AuthContext.Provider>
    );
}