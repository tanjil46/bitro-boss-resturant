
import axios from "axios";
import useMenu from "../../hooks/useMenu";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";


const PaymentChart = () => {




const[menus]=useMenu()

const totalMenusPrice=menus?.reduce((sum,menu)=>sum+menu.price,0)
const totalMenus=menus?.length;
const orderedMenu=cart?.length;
const cartPrice=cart?.reduce((sum,menu)=>sum+menu.price,0)

console.log(totalMenus,cartPrice,totalMenusPrice,orderedMenu)
    return (
        <div>
            okk
        </div>
    );
};

export default PaymentChart;