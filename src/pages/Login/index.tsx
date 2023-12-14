import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import * as C from "./styles"
import Button from "../../components/Button";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (username && password) {
            const isLogged = await auth.signin(username, password);
            if (isLogged) {
                navigate('/private');
            } else {
                alert("No Logged");
            }
        }
    }

    return (
        <>
            <div></div>
             <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type="text"
                    placeholder="Digite Seu Login"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <C.LabelError></C.LabelError>
                <Button
                    text="Entrar"
                    onClick={handleLogin}
                />
                <C.LabelSignup>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to="/home">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
        <div></div>
        </>     
    );
}