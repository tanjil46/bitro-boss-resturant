import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';




import { Pagination } from 'swiper/modules';
import slider1 from '../assets/home/slide1.jpg'
import slider2 from '../assets/home/slide2.jpg'
import slider3 from '../assets/home/slide3.jpg'
import slider4 from '../assets/home/slide4.jpg'
import slider5 from '../assets/home/slide5.jpg'
import Hadlines from '../componets/Hadlines';
const Swipers = () => {
    return (
        <div className=''>

          <Hadlines subHeading={'ORDER ONLINE'} heading={'...From 11.00 am To 10.00 pm...'}></Hadlines>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slider1}></img>
        <p className='text-center text-4xl -m-16 text-white'>SALADs</p>

        </SwiperSlide>
        <SwiperSlide><img src={slider2}></img>
        <p className='text-center text-4xl -m-16 text-white'>PIZZAs</p>

        </SwiperSlide>
        <SwiperSlide><img src={slider3}></img>
        <p className='text-center text-4xl -m-16 text-white'>SOUPs</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4}></img>
        <p className='text-center text-4xl -m-16 text-white'>CAKEs</p>
 </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Swipers;