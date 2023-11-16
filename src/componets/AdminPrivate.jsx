import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminPrivate = ({children}) => {
    const {user,loading}=useAuth()
    const[isAdmin,isAdminPending]=useAdmin()
    const location=useLocation()
    if(loading || isAdminPending   ){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user || isAdmin ){
        return children
    }
    
    
        return <Navigate state={location.pathname} to='/login'></Navigate>
    

};

export default AdminPrivate;