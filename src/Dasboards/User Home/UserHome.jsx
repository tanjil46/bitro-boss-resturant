import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";



const UserHome = () => {
    const{user}=useAuth()
    const[payments,setpayments]=useState([])
    const[carts,setcarts]=useState([])
    const axiosSecure=useAxios()

    axiosSecure.get(`/payment/${user?.email}`)
    .then(res=>setpayments(res.data))

    axiosSecure.get(`/carts?email=${user.email}`)
    .then(res=>setcarts(res.data))

    return (
        <div>
            <p className="text-3xl">
                <span>Hi,Welcome </span> {user?.displayName?user.displayName:'Back'}
                
            </p>
            <div className="w-full flex ">






            <div className=" w-[50%] bg-orange-200">
    <div className="card-body">
<img className="w-[180px] rounded-full mx-auto border-orange-600 border-2" src={user?.photoURL}></img>
     <p className="text-center text-xl font-bold">{user?.displayName}</p>
    </div>

</div>

<p className="border-3 border-orange-600"></p>


<div className=" w-[50%] bg-orange-200">
    <div className="card-body">
<p className="text-center text-xl font-bold border-b-2 border-orange-500">Your Activites</p>
     <p className="text-center text-red-500 text-xl font-bold"> Total Payments:{payments?.length}</p>
     <p className="text-center text-green-600 text-xl font-bold"> Total Orders:{carts?.length}</p>
    </div>

</div>





          </div>

            
        </div>
    )
};

export default UserHome;