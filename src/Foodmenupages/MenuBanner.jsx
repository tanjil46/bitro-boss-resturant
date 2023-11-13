import DynamicCover from "./DynamicCover";
import menuBanner from '../assets/menu/banner3.jpg'

const Menubanner = () => {
    return (
        <div>
            <DynamicCover img={menuBanner} title={'OUR MENU'} desk={'Would You Like To Try A Dish'}></DynamicCover>
        </div>
    );
};

export default Menubanner;