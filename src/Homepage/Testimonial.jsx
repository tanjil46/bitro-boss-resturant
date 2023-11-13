import Hadlines from "../componets/Hadlines";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


import '@smastrom/react-rating/style.css'

const Testimonial = () => {

const[review,setReview]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
     },[])
    
    




    return (
        <div className="my-20">

      <Hadlines heading={'What Our Clients say'} subHeading={'TESTIMONIALS'}></Hadlines>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
      {
        review.map(view=><SwiperSlide>
<div className="p-12">

<Rating className="mx-auto"
      style={{ maxWidth: 180 }}
      value={view.rating}
      readOnly
    />



    <p>{view.details}</p>
    <h1 className="text-xl fong-bold text-yellow-500 text-center">{view.name}</h1>
</div>
        </SwiperSlide>)
      }
      
      
      
      
      
      
      
        
       
      </Swiper>





        </div>
    );
};

export default Testimonial;