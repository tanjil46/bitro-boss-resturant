import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBookmark, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa"


const Dashboard = () => {

    const isAdmin=false;
   
    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu">


{
    isAdmin?
    <><li>

<NavLink to='/dash/adminhome' className='text-white'>
     <FaHome></FaHome>
     ADMIN HOME</NavLink>


     <NavLink to='/dash/items' className='text-white'>
     <FaUtensils></FaUtensils>
     ADD ITEMS</NavLink>

 <NavLink to='/dash/manage' className='text-white'>
     <FaList></FaList>
     MANAGE ITEMS</NavLink>


     <NavLink to='/dash/review' className='text-white'>
     <FaCalendar></FaCalendar>
     MANAGE BOOKINGS</NavLink>


     <NavLink to='/dash/users' className='text-white'>
     <FaUsers></FaUsers>
     ALL USERS</NavLink>


</li></>:
   
<li>

<NavLink to='/dash/userhome' className='text-white'>
     <FaHome></FaHome>
     User Home</NavLink>


 <NavLink to='/dash/mycart' className='text-white'>
     <FaShoppingCart></FaShoppingCart>
     My Cart</NavLink>


     <NavLink to='/dash/review' className='text-white'>
     <FaAd></FaAd>
     Add Review</NavLink>



     <NavLink to='/dash/history' className='text-white'>
     <FaCalendar></FaCalendar>
     My Payment History</NavLink>




     <NavLink to='/dash/boking' className='text-white'>
     <FaList></FaList>
     My Bookings</NavLink>


</li>

    
}








          
           <div className="divider my-24">
            <ul className="space-y-5">
            <li>
           <NavLink to='/' className='text-white'>
                <FaHome></FaHome>
                   Home</NavLink>

         </li>

       <li>
           <NavLink to='/menu' className='text-white'>
                <FaSearch></FaSearch>
                    Menu</NavLink>

        
                    </li>


                    <li>
           <NavLink to='/contact' className='text-white'>
                <FaVoicemail></FaVoicemail>
                    Contact Us</NavLink>

        
                    </li>








                   </ul>
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