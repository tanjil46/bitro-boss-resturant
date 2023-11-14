import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa"

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu">
           <li>

           <NavLink to='/dash/userhome' className='text-white'>
                <FaHome></FaHome>
                User Home</NavLink>


                <NavLink to='/dash/reserv' className='text-white'>
                <FaCalendar></FaCalendar>
                Reservation</NavLink>

            <NavLink to='/dash/mycart' className='text-white'>
                <FaShoppingCart></FaShoppingCart>
                My Cart</NavLink>


                <NavLink to='/dash/review' className='text-white'>
                <FaAd></FaAd>
                Add Review</NavLink>


                <NavLink to='/dash/boking' className='text-white'>
                <FaList></FaList>
                My Bookings</NavLink>


           </li>
           <div className="divider">
            <li>
           <NavLink to='/' className='text-white'>
                <FaHome></FaHome>
                   Home</NavLink>
                   </li>
           </div>

            </ul>


            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;