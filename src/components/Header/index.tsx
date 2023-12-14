import { useContext } from "react";
import * as C from "./styles"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogout = async () => {    
      navigate('/');
      await auth.signout();
    }

    return (
        <C.Header>            
            <C.Nav>
                <C.Label>Finance Balance</C.Label>
                <C.LinkContainer>
                    <C.LinkItem><Link to="/">Home</Link></C.LinkItem>  
                    <C.LinkItem><Link to="/private">Pagina Privada</Link></C.LinkItem>                    
                </C.LinkContainer>
                
                <div>{auth && <button onClick={handleLogout}>Sair</button>}</div>
            </C.Nav>
        </C.Header>
    );
};

export default Header;