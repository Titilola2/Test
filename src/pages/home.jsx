
import '../styles/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Home = () => {
 
  return (
    <div>
      <Header />



      {/* Your page content */}
<div className="body flex flex-col">

<div className="background">
    {/* medium and large screen*/}
  <div className="w-full md:h-screen h-96 bg-gradient-to-r from-zinc-800 to-zinc-300">
     <div className=" hidden md:flex w-full h-96 mx-4 ml-20 flex-col justify-start items-start gap-8 inline-flex ">
      <div className="w-1/2 mt-40 text-white text-6xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
       <div className="w-2/5 text-white text-2xl font-normal font-['Inter']">empowers adults with intellectual and developmental disabilities, fostering independence and enhancing quality of life through comprehensive support services.<br/>they don't have disability but an ability</div>
       <div className="justify-start items-start gap-7 inline-flex">
       <div className="w-32 p-2 bg-lime-950 rounded-lg justify-center items-center gap-2 flex">
      <div className="text-center text-white text-xl font-semibold font-['Inter']">Contact Us</div>
       </div>
       <div className="w-32 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
      <div className="w-28 text-center text-white text-xl font-semibold font-['Inter']">Enroll</div>
     </div>
     </div>
  </div>
  </div>

       {/*small screen*/}
       <div className="w-screen h-60 md:hidden flex-col justify-start items-start gap-4 inline-flex">
         <div className="self-stretch h-44 flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch text-stone-800 text-3xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
           <div className="self-stretch text-stone-800 mb-8 text-base font-normal font-['Inter']">empowers adults with intellectual and developmental disabilities, fostering independence and enhancing quality of life through comprehensive support services.<br/>they don't have disability but an ability</div>
         </div>
         <div className="justify-start items-start gap-7 inline-flex   ">
             <div className="w-32 p-2 bg-lime-950 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-xl font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-32 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-xl font-semibold font-['Inter']">Enroll</div>
            </div>
         </div>
        </div>


</div>



<div className="our-mission flex-col justify-center items-center">

 <div className="md:w-3/5 w-full  flex-col justify-center items-center md:mt-12 mt-4 items-center gap-7 inline-flex  md:pl-96">
  <div className="text-stone-950 md:text-6xl  text-4xl font-semibold font-['Inter']">Our Mission</div>
  <div className="flex-col justify-center items-center gap-6 flex">
    <div className="flex-col justify-center items-center gap-4 flex">
      <div className="text-center text-stone-950 md:text-5xl text-2xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
      <div className="w-full md:w-4/5 text-center text-stone-950 md:text-xl text-base font-normal font-['Inter']">Our mission is dedicated to fostering empowerment among individuals with disabilities, encouraging active engagement, and ultimately contributing to an enriched quality of life</div>
    </div>
    <div className="h-14 p-2 bg-lime-950 rounded-lg justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-xl font-semibold font-['Inter']">Learn More</div>
    </div>
  </div>

{/* medium and large screen*/}
 <div className="mission-body hidden md:flex flex-row mb-96 pb-40 ml-96">
   <div className="w-screen mx-4 md:h-96 w-screen justify-start items-center  inline-flex flex-row">
    <div className="mission-imag ">
    <div className="w-screen h-96 relative">
    <img className="w-96 h-96 left-[114px] top-0 absolute" src="https://via.placeholder.com/541x359" />
    <img className="w-96 h-96 left-0 top-[240.79px] absolute" src="https://via.placeholder.com/541x359" />
    <img className="w-96 h-96 left-[114px] top-[514.37px] absolute" src="https://via.placeholder.com/541x359" />
  </div>

    </div>
    <div className="mission-words ">
   
  

    </div>


    {/* small screen*/}
    <div className="mission-body hidden md:flex md:hidden ">
   
    </div>
    <div className="mission-words w-2/5">

    </div>
 



    </div>
  </div>
</div>
  
</div>

  <div className="what-we-do">
  
   </div>
</div>

















    <Footer />
 
    </div>
  );
};

export default Home;