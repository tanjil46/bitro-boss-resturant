import { useEffect, useState } from "react";
import Hadlines from "../componets/Hadlines";
import Menu from "./Menu";


const Ourmenu = () => {
const[menus,setMenus]=useState([])

 useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data=>{
const popularItems=data.filter(item=>item.category==='popular')
        setMenus(popularItems)
    })
 },[])










    return (
        <div>
            <Hadlines heading={'From Our Menu'} subHeading={'POPULAR ITEMS'}></Hadlines>
             <div className="grid md:grid-cols-2 gap-8 p-10">
                {
                    menus.map(menu=><Menu menu={menu}></Menu>)
                }
             </div>

        </div>
    );
};

export default Ourmenu;