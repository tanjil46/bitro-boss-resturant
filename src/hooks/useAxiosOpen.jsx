import axios from "axios";

const openAxios=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosOpen = () => {
    return openAxios
};

export default useAxiosOpen;