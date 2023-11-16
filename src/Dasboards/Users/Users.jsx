import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const Users = () => {

const axiosSecure=useAxios()


 const {data:users=[],refetch}=useQuery({

 queryKey:['users'],
 queryFn:async()=>{
  const res=await axiosSecure.get('/users')

   return res.data


 }


 })


 const deleteUser=(id)=>{


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
     axiosSecure.delete(`/users/${id}`)
     .then(res=>{
        console.log(res.data)

  if(res.data.deletedCount){
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


 const hadlerAdmin=(user)=>{
axiosSecure.patch(`/users/admin/${user._id}`)
.then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0)
    refetch()
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} Is an admin now`,
        showConfirmButton: false,
        timer: 1500
      });
})


 }





    return (
        <div>
            <div className="flex justify-evenly">
                <p className="text-3xl">All Users</p>
                <p className="text-3xl">Total Users: {users.length}</p>
            </div>
            <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Email</th>
        
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

{
    users.map((user,index)=> <tr>
        <th>
          {index+1}
        </th>
        <td>
          <img src={user.photoUrl} className="w-[50px] rounded-full"></img>
        </td>

        <td>
          <p>{user.email}</p>
        </td>
        <td>
          
          <br/>
          <span className="badge badge-ghost badge-sm text-lg">{user.name}</span>
        </td>
        <td >
            {
                user.role==='admin'?'ADMIN':
            <FaUser className="bg-orange-600 text-center  text-white text-lg" onClick={()=>hadlerAdmin(user)}></FaUser>
}
            </td>

        <th>
          <button onClick={()=>deleteUser(user._id)} className="btn text-red-600 btn-lg"><FaTrash></FaTrash></button>
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

export default Users;