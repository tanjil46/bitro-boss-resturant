import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Hadlines from "../../componets/Hadlines";




const PaymentHistory = () => {
    const{user}=useAuth()
      const axiosSecure=useAxios()
    const {data:payments}=useQuery({
        queryKey:['payments',user.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payment/${user.email}`)
            return res.data
       
        }
    })
    return (
        <div>
            <Hadlines heading={'--At A Glance'} subHeading={'PAYMENTS HISTORY'}></Hadlines>
            <p className="text-3xl my-5">Total Payments:{payments?.length}</p>
            <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>EMAIL</th>
        
        <th>TOTAL PRICE</th>
       
        <th>TransitionId</th>
        <th>PAYMENT DATE</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>

{
    payments?.map((item,index)=> <tr>
        <th>
          {index+1}
        </th>
        <td>
        <span className="badge badge-ghost badge-sm ">{item.email}</span>
        </td>
        <td>
        ${item.price}
          <br/>
         
        </td>
        <td>{item.transitionId}</td>
        <th>
        {item.date}
    </th>
  
    <th>
        {item.status}
    </th>
     </tr>)
}


      {/* row 1 */}
     
    </tbody>
    {/* foot */}
   
    
  </table>


</div>






        </div>
    );
};

export default PaymentHistory;