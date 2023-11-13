
import { Parallax } from 'react-parallax';
const DynamicCover = ({img,title,desk}) => {
    return (
       

<Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
      
        

        <div className="hero h-[700px]">
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-m">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">{desk}</p>
     
    </div>
  </div>
</div> 
    </Parallax>







       
    );
};

export default DynamicCover;