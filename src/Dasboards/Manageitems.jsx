
import Hadlines from "../componets/Hadlines";


import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useMenu from "../hooks/useMenu";
import useAxios from "../hooks/useAxios";



const Manageitems = () => {

const [menus,refetch]=useMenu()

const axiosSecure=useAxios()

const deleteitems=(item)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
}).then(async (result) => {
    if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
            // refetch to update the ui
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} has been deleted`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    }
});


  
}
    return (
        <div>
            <Hadlines heading={'---Hurry Up---'} subHeading={'Manage All Items'}></Hadlines>
            <div className="flex justify-evenly">
                <p className="text-3xl">Manage Items</p>
                <p className="text-3xl">Total Items:{menus.length}</p>
            </div>
            <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

{
    menus.map((item,index)=> <tr>
        <th>
          {index+1}
        </th>
        <td>
          <img src={item.image} className="w-[50px] rounded-full"></img>
        </td>

        <td>
          <p>{item.name}</p>
        </td>
        <td>
          
          <br/>
          <span className="badge badge-ghost badge-sm text-lg">${item.price}</span>
        </td>
        <td >
           <button className="btn"><FaEdit className="bg-orange-500  text-white"></FaEdit></button>
            </td>

        <th>
          <button onClick={()=>deleteitems(item)} className="btn text-red-600 btn-lg"><FaTrash></FaTrash></button>
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

export default Manageitems;