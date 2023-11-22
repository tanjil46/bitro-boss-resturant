import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const{user,loading}=useAuth()
    const axiosSecure=useAxios()
    const{data:isAdmin,isPending:isAdminPending}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled:!loading,
        queryFn:async()=>{
               const res=await axiosSecure.get(`/user/admin/${user.email}`)
               console.log(res.data)
               return res.data?.admin
        }
    })
    return [isAdmin,isAdminPending]
};

export default useAdmin;