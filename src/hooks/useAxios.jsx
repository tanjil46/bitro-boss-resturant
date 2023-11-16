import axios from "axios";
import { config } from "localforage";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
 baseURL:'http://localhost:5000'

})
const useAxios = () => {
    const{userLogOut}=useAuth()
    const naviagte=useNavigate()
axiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('access_token')
   
config.headers.authorization=`Bearer ${token}`
    return config
},
function(error){
    return Promise.reject(error)
}
)



axiosSecure.interceptors.response.use(function(response){
return response
},async(error)=>{
   
    const status=error.response.status;

if(status===401 || status==403 ){
    await userLogOut();
    naviagte('/login')
}



    return Promise.reject(error)
}
)







return axiosSecure;





}

export default useAxios;