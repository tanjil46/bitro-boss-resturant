
import { Helmet } from 'react-helmet-async';
import Menubanner from './Menubanner';
import useMenu from '../hooks/useMenu';
import Hadlines from '../componets/Hadlines';
import MenuApi from './MenuApi';
import DynamicCover from './DynamicCover';
import Deserts from '../assets/menu/dessert-bg.jpeg'
import PIZZA from '../assets/menu/pizza-bg.jpg'
import SOUP from '../assets/menu/soup-bg.jpg'
import Salad from '../assets/menu/salad-bg.jpg'
const Foodmenus = () => {




const[menus]=useMenu()

const deserts=menus.filter(item=>item.category==='dessert')
const pizzas=menus.filter(item=>item.category==='pizza')
const soups=menus.filter(item=>item.category==='soup')
const salads=menus.filter(item=>item.category==='salad')
const offers=menus.filter(item=>item.category==='offered')

    return (
        <div className="">
        <div>
            <Helmet>
        <title>Bistro Boss Menu</title>
       
      </Helmet>
      </div>
          <div className="">
            <Menubanner></Menubanner>
              
              <Hadlines heading={'Dont Miss'} subHeading={'TODAYs OFFER'}></Hadlines>
              <MenuApi items={offers}></MenuApi>

              <DynamicCover img={Deserts} title={'Desert'} desk={'A desert is a vast area of dry, barren land. Deserts are either hot or cold environments with relatively little rainfall throughout the year'}></DynamicCover>
              

             <MenuApi items={deserts}></MenuApi>

           <DynamicCover img={PIZZA} title={'Pizza'} desk={'The most exquisite invension in the world, an awesome italian coucine fast and delicuious made with cheese and sauce alse named pizza.'}></DynamicCover>
         <MenuApi items={pizzas}></MenuApi>
          

      <DynamicCover img={SOUP} title={'Soup'} desk={'oup is a primarily liquid food, generally served warm or hot'}></DynamicCover>
          <MenuApi items={soups}></MenuApi>
           
 <DynamicCover img={Salad} title={'Salad'} desk={'Salad is very good and Hygenic'}></DynamicCover>

<MenuApi items={salads}></MenuApi>





          </div>



          </div>

      
    );
};

export default Foodmenus;