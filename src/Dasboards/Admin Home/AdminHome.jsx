import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { FaDollarSign, FaJediOrder, FaSearch, FaUser, FaUtensils } from "react-icons/fa";



const AdminHome = () => {
    const{user}=useAuth()
    const axiosSecure=useAxios()

    const{data:stats}=useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/admin-stats')

         return res.data




        }
    })
        
  








    return (
        <div>
            <p className="text-3xl">
                <span>Hi,Welcome </span> {user?.displayName?user.displayName:'Back'}
                
            </p>
            
            <div className="stats shadow">
  
  <div className="stat">
  <div className="stat-figure text-secondary">
  <FaDollarSign className="text-5xl"></FaDollarSign>
     </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value ">{stats?.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaUser className="text-5xl"></FaUser>
    </div>
    <div className="stat-title">Customers</div>
    <div className="stat-value">{stats?.customers}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaJediOrder className="text-5xl"></FaJediOrder>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats?.totalPayments}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  


  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaUtensils className="text-5xl"></FaUtensils>
    </div>
    <div className="stat-title">Total Menu</div>
    <div className="stat-value">{stats?.menuProducts}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>






</div>





        </div>
    );
};

export default AdminHome;