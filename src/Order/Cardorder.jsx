import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";


const Cardorder = ({item}) => {
const[,refetch]=useCart()
    const{image,name,price,recipe,_id}=item
const{user}=useAuth()
const axiosSecure=useAxios()
  const handlerAddToCart=foods=>{

console.log(foods)
 
 if(user && user.email){

const carts={email:user.email,image,name,price,menuId:_id}

axiosSecure.post('http://localhost:5000/carts',carts)
.then(res=>{
  console.log(res.data)

  if(res.data.insertedId){
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`${name} added to your Cart`,
      showConfirmButton:false,
      timer:1500

    })
     
    refetch()
  }
    

})










 }else{
     
  Swal.fire(
    'error',
    'You have to Logi First',
    'error'
  )

 }



  }








    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image}alt="Shoes" className="rounded-xl" />
    <p className="-ml-10 text-yellow-500">{price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=>handlerAddToCart(item)} className="btn text-yellow-600 font-bold border-b-4 border border-black hover:bg-slate-600">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cardorder;