import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Homepage/Footer";
import Navbar from "./Navbar";


const Roots = () => {
    const location=useLocation()
    const isLogin=location.pathname.includes('login')
 
    return (
        <div>
            {isLogin ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin ||   <Footer></Footer>}
        </div>
    );
};

export default Roots;