import { useState } from "react";
import * as C from "./styles";
import { SideBarData } from "../../Data/SidebarData";


const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const sidebarVariants = {
        true:{
            left:'0',
        },

        false:
        {   
            left:'-60%',
        },
    }

    return (
        <>  
            <C.Bars 
                $isExpanded = {expanded}
                onClick={()=>setExpanded(!expanded)}>
            M</C.Bars>
            <C.SideBar
                variants={sidebarVariants}
                animate = {window.innerWidth<=768?`${expanded}`:''}
            >
                <C.Logo>FB</C.Logo>
                <C.Menu>
                    {SideBarData.map((item, index) => {
                        return (
                            <C.MenuItem $isSelected={selected === index ? true : false}
                                key={index}
                                onClick={() => setSelected(index)}>
                                <div>{item.icon}</div>
                                <span>{item.heading}</span>
                            </C.MenuItem>
                        );

                    })}

                </C.Menu>
            </C.SideBar>
        </>

    );
};

export default SideBar;