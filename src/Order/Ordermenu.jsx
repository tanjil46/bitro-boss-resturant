import { useState } from 'react';
import DynamicCover from '../Foodmenupages/DynamicCover';
import orderImag from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import Cardorder from './Cardorder';
const Ordermenu = () => {

    const[indexDe,setIndex]=useState(0)





    const[menus]=useMenu()

    const deserts=menus.filter(item=>item.category==='dessert')
    const pizzas=menus.filter(item=>item.category==='pizza')
    const soups=menus.filter(item=>item.category==='soup')
    const salads=menus.filter(item=>item.category==='salad')
    const drinks=menus.filter(item=>item.category==='drinks')
    










    return (
        <div>
            <DynamicCover img={orderImag} title={'ORDER NOW'} desk={'Order Your Favourite Food.You can Get Your Delevery In 30 minutes'}></DynamicCover>


            <Tabs defaultIndex={indexDe} onSelect={(index) => setIndex(index)}>
  <TabList className='text-center mt-4'>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUP</Tab>
    <Tab>DESERT</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel className=''>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
    {
        salads.map(item=><Cardorder item={item}></Cardorder>)
    }
    </div>
  </TabPanel>
  <TabPanel>

  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
    {
        pizzas.map(item=><Cardorder item={item}></Cardorder>)
    }
    </div>


  </TabPanel>


  <TabPanel>

<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
  {
      soups.map(item=><Cardorder item={item}></Cardorder>)
  }
  </div>


</TabPanel>
<TabPanel>

<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
  {
      deserts.map(item=><Cardorder item={item}></Cardorder>)
  }
  </div>


</TabPanel>
<TabPanel>

<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
  {
      drinks.map(item=><Cardorder item={item}></Cardorder>)
  }
  </div>


</TabPanel>
</Tabs>




        </div>
    );
};

export default Ordermenu;