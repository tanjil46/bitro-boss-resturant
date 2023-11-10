import Hadlines from "../componets/Hadlines";
import backImage from '../assets/home/featured.jpg'

const Feature = () => {
    return (
        <div>
         
<div className="">


<div className="hero min-h-screen bg-fixed" style={{backgroundImage: `url(${backImage})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  
    <div className="max-w-[800px] ">
  <div className="p-10">
    <Hadlines heading={'Check It Out'} subHeading={'FEATURED ITEMS'}></Hadlines>
    </div>
     <div className="flex items-center justify-center gap-6">

      <img className="w-[300px]" src={backImage}></img>
      <div className="space-y-6 text-justify">
        <h1 className="">March 20,2023</h1>
        <h2 className="uppercase ">Where Can I get Some?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perferendis facilis aliquam nulla et quisquam libero rem nesciunt recusandae labore.</p>
        <button className="btn btn-outline border-0 border-b-4 bg-slate-300">READ MORE</button>
      </div>


    



     </div>
    </div>
  </div>
</div>






</div>



        </div>
    );
};

export default Feature;