import { FaTrash } from "react-icons/fa";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";


const Mycart = () => {


    const[cart,refetch]=useCart()

    const totalPrize=cart.reduce((sum,carts)=>sum+carts.price,0)

const axiosSecure=useAxios()

 const deleteHandler=(id)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed){
     axiosSecure.delete(`/carts/${id}`)
     .then(res=>{
        console.log(res.data)

  if(res.data. deletedCount){
    refetch()
    Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });


    

  }

     



     })


    }

      });


 }







    return (
        <div>
            <div className="flex justify-evenly">
            <h2 className="text-4xl">Items:{cart.length}</h2>
            <h2 className="text-4xl">Total Price:{totalPrize}</h2>
            <button className="btn btn-primary">Pay</button>
        

            </div>
            <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>image</th>
        
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

{
    cart.map((item,index)=> <tr>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            {/* <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div> */}
          </div>
        </td>
        <td>
          
          <br/>
          <span className="badge badge-ghost badge-sm ">{item.name}</span>
        </td>
        <td>{item.price}</td>
        <th>
          <button onClick={()=>deleteHandler(item._id)} className="btn btn-error btn-lg"><FaTrash></FaTrash></button>
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

export default Mycart;