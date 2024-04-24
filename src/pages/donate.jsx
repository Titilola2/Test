
import '../styles/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../assets/background.jpg';
import backgroundsmall from '../assets/backgroundsmall.svg';
import one from '../assets/left-image1.svg';
import two from '../assets/left-image2.svg';
import three from '../assets/left-image3.svg';
import four from '../assets/right-image1.svg';
import five from '../assets/right-image2.svg';
import six from '../assets/right-image3.svg';
import seven from '../assets/right-image4.svg';
import whatwedo from '../assets/what-we-do.svg';
import check from '../assets/check.svg';


const Donate = () => {
 
  return (
    <div>
      <Header />



      {/* Your page content */}
<div className="body flex flex-col justify-center items-center">

<div className="background">
    {/* medium and large screen*/}
  <div className="w-screen md:h-screen h-96  hidden md:flex"  style={{backgroundImage: `url(${background})`}} >
     <div className=" w-full h-96 mx-4 ml-20 flex-col justify-start items-start gap-8 inline-flex ">
       <div className="w-1/2 mt-40 text-white text-5xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
       <div className="w-2/5 text-white text-2xl font-normal font-['Inter']">empowers adults with intellectual and developmental disabilities, fostering independence and enhancing quality of life through comprehensive support services.<br/>they don't have disability but an ability</div>
       <div className="justify-start items-start gap-7 inline-flex">
         <div className="w-32 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
           <div className="text-center text-white text-xl font-semibold font-['Inter']">Contact Us</div>
         </div>
          <div className="w-32 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
             <div className="w-28 text-center text-white text-xl font-semibold font-['Inter']">Enroll</div>
          </div>
        </div>
      </div>
    </div>

       {/*small screen*/}
       <div className="w-screen h-60 md:hidden flex-col  gap-4 inline-flex">
        <img  className="w-screen " src={backgroundsmall} />
         <div className="self-stretch h-44 flex-col justify-start items-start gap-1.5 flex">
         
          <div className="self-stretch text-stone-800 text-3xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
           <div className="self-stretch text-stone-800 mb-8 text-base font-normal font-['Inter']">empowers adults with intellectual and developmental disabilities, fostering independence and enhancing quality of life through comprehensive support services.<br/>they don't have disability but an ability</div>
         </div>
         <div className="justify-start items-start gap-4 inline-flex   ">
             <div className="w-28 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>
        </div>
</div>

 {/* Our mission*/}


       


    
  
</div>

















    <Footer />
 
    </div>
  );
};

export default Donate;












