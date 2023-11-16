import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosOpen from "../hooks/useAxiosOpen";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Google = () => {

const{googleLogIn}=useAuth()
const navigate=useNavigate()
const openAxios=useAxiosOpen()
    const googleLogInHanler=()=>{

        googleLogIn()
        .then((result)=>{
          console.log(result.user)
          const userInfo={
            email:result.user.email,
            name:result.user.displayName,
            photoUrl:result.user.photoURL
          }

        openAxios.post('/users',userInfo)
        .then(res=>{
            console.log(res.data)
        })


navigate('/')


        })
        .catch(error=>console.log(error.message))
        
        
        }



    return (
        <div>
             <div className="text-center my-4">
      <button onClick={googleLogInHanler}  className="btn bg-slate-500 ">
 <FaGoogle></FaGoogle>
  Login With Google
</button>
      </div>
        </div>
    );
};

export default Google;