import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import useAxiosOpen from "../hooks/useAxiosOpen";
import Swal from "sweetalert2";
import Google from "./Google";


const Resister = () => {



const {createUser,updateUserProfile}=useContext(AuthContext)
const openAxios=useAxiosOpen()
const signHanler=e=>{
    e.preventDefault()
    const form =e.target
const email=form.email.value
const password=form.password.value
const name=form.name.value
const photoUrl=form.url.value

createUser(email,password)
.then((result)=>{
    console.log(result.user)


updateUserProfile(name,photoUrl)
.then((result)=>{


  const userInfo={email,name,photoUrl}
openAxios.post('/users',userInfo)
.then(res=>{
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire(
      'success',
      'Sucessfully user posted',
      'success'
    )
  }
})





})

})

.catch(error=>console.log(error.message))










}








    return (
        <div>
           
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={signHanler} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" placeholder="email" name="url" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>





        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Resister</button>
        </div>
      </form>
      <Google></Google>
      <Link className='btn bg-slate-500' to='/login'>Login</Link>
    </div>
  </div>
  </div> 
        </div>
    );
};

export default Resister;