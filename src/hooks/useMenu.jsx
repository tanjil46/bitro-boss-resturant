import { useQuery } from "@tanstack/react-query";

import useAxiosOpen from "./useAxiosOpen";



const useMenu = () => {
   const openAxios=useAxiosOpen()
const{data:menus=[],isPending:loading, refetch}=useQuery({
   queryKey:['menu'],
   queryFn:async()=>{
const res=await openAxios.get('/menu')
return res.data
   }

})


return [menus,loading,refetch]



};

export default useMenu;