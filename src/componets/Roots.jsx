import { Outlet } from "react-router-dom";
import Footer from "../Homepage/Footer";
import Navbar from "./Navbar";


const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;