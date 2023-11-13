import { useEffect, useState } from "react";
import Hadlines from "../componets/Hadlines";
import Menu from "./Menu";
import useMenu from "../hooks/useMenu";


const Ourmenu = () => {


const [menus]=useMenu()
const popularItems=menus.filter(item=>item.category==='popular')






    return (
        <div>
            <Hadlines heading={'From Our Menu'} subHeading={'POPULAR ITEMS'}></Hadlines>
             <div className="grid md:grid-cols-2 gap-8 p-10">
                {
                    popularItems.map(menu=><Menu menu={menu}></Menu>)
                }
             </div>

        </div>
    );
};

export default Ourmenu;