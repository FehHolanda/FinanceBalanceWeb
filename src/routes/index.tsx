import { Fragment} from "react";
import { Home } from '../pages/Home'
import { Private } from '../pages/Private'
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from '../contexts/Auth/RequireAuth'


const RouteApp = () => {
    
    return(
            <Fragment>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/private" element = {<RequireAuth><Private/></RequireAuth>} />
                </Routes>
            </Fragment>
    );
};

export default RouteApp;