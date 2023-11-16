import { Link} from "react-router-dom";

 import Icon from '../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Result } from "postcss";
import useCart from "../hooks/useCart";
const Navbar = () => {


const[cart]=useCart()
const{user,userLogOut}=useContext(AuthContext)


const userHanler=()=>{
  userLogOut()
  .then((result)=>{})
  .catch(error=>console.log(error.message))
}





    return (
      <div>
        <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-slate-500 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link>Home</Link>
        <li>
          <a>Parent</a>
          <ul className="p-2">
         
          <Link to='/order'>Order Now</Link>
          <Link>Services</Link>
          </ul>
        </li>
      
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex items-center space-x-5 font-bold px-1">
    <Link to='/'>HOME</Link>
    <Link>CONTACT US</Link>
    <Link to='/order'>ORDER NOW</Link>
    <Link to='/menu'>OUR MENU</Link>
    <Link to='/dash/mycart' className="flex items-center">
    <button className="btn">
  <img className="w-[30px]" src={Icon}></img>
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
    </Link>


    </ul>
  </div>
  <div className="navbar-end">
    <img className="w-[30px] rounded-full" src={user && user.photoURL}></img>

    {
      user?<Link onClick={userHanler} className="font-bold ">SIGN OUT</Link>:
      <Link className="font-bold" to='/login'>LOGIN</Link>

    }
  </div>
</div>
        </div>
    );
};

export default Navbar;