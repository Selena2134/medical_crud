import {Outlet} from "react-router-dom";

import Navbar from "../Navbar";

function MainLayout() {
    return (
        <>
            <Navbar/>
            
            <div className="w-[60%] mx-auto my-20">
                <Outlet/>
            </div>
        
        </>
    )
}

export default MainLayout;