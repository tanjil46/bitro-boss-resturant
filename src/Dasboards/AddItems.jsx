import { useForm } from "react-hook-form";
import Hadlines from "../componets/Hadlines";
import { FaUtensils } from "react-icons/fa";
import useAxiosOpen from "../hooks/useAxiosOpen";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key='26084db1c96279fe50abffb136cb0e8e';
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key} `
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm()

const openAxios=useAxiosOpen()
const axiosSecure=useAxios()

// MENU WILL NOT POST AS YOU KNOW IMAGE URL IS NOT CREATED FOR BAD REQUEST (400) SO I AHVE TO WAIT




const onSubmit=async(data)=>{
  console.log(data)
  const imageFile={image:data.image[0]}








const res=await openAxios.post(image_hosting_api,imageFile,{
  headers:{
    'content-Type':'multipart/form-data'
  }
  
})
console.log(res.data)

const menuItem={
name:data.name,
category:data.category,
price:parseFloat(data.price),
recipe:data.recipe,
image:res.data.data.display_url
}


const menuRes=await axiosSecure.post('/menu',menuItem)

 console.log(menuRes.data)
if(menuRes.data. insertedId){
reset()
  Swal.fire(
    'success',
    'Succesfully Menu added',
    'success'
  )
}






}

    return (
        <div className="">
        <Hadlines heading={'Whats New'} subHeading={'Add An Item'}></Hadlines>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Recipe Name*</span>
   
  </label>
  <input {...register('name',{required:true})} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
  
</div>


<div className="flex gap-4">


<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Category*</span>
   
  </label>
 

  <select defaultValue='default' {...register('category',{required:true} )}    className="select select-bordered w-full ">
  <option disabled value='default'>Selete A category</option>
  <option value="salad">Salad</option>
  <option value="pizza">Pizza</option>
  <option value="soup">Soup</option>
  <option value="dessert">Desert</option>
  <option value="drinks">Drinks</option>
</select> 
  
</div>



<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Price*</span>
   
  </label>
  <input {...register('price',{required:true})} type="number" placeholder="Price" className="input input-bordered w-full " />
  
</div>











</div>




<div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details</span>
   
  </label>
  <textarea {...register('recipe',{required:true} )} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
  
  </div>

<div className="my-6">

<input type="file" {...register('image',{required:true} )} className="file-input file-input-bordered w-full max-w-xs" />


</div>

      <button className="btn bg-slate-500" type="submit"><FaUtensils></FaUtensils> Add Item</button> 
    </form>
        </div>
        </div>
    );
};

export default AddItems;