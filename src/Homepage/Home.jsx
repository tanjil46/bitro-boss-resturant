
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Feature from "./Feature";

import Ourmenu from "./Ourmenu";

import Swipers from "./Swipers";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss Home</title>
        
      </Helmet>
            <Banner></Banner>
            <Swipers></Swipers>
            <Ourmenu></Ourmenu>
            <Feature></Feature>
            <Testimonial></Testimonial>
          
         
        </div>
    );
};

export default Home;