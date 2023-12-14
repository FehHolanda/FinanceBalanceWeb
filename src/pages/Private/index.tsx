import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import SideBar from "../../components/SideBar";
import MainDash from "../../components/MainDash";

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <>
            <SideBar></SideBar>
            <MainDash></MainDash>
            <div></div>
        </>

    );
}