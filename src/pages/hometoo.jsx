
import '../styles/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../assets/background.jpg';



const Hometoo = () => {
 
  return (
    <div>
      <Header />



      {/* Your page content */}
<div className="body flex flex-col justify-center items-center">

<div className="background">
    {/* medium and large screen*/}
  <div className="w-screen md:h-screen h-96 bg-gradient-to-r from-zinc-800 to-zinc-300 src={background}" >
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
       <div className="w-screen h-60 md:hidden flex-col  gap-4 inline-flex">
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

 {/* Our mission*/}

<div className="our-mission flex-col justify-center items-center">

 <div className="md:w-4/5 w-full  flex-col justify-center items-center md:mt-12 mt-4 items-center gap-7 inline-flex  md:pl-96">
  <div className="text-stone-950 md:text-6xl  text-4xl font-semibold font-['Inter']">Our Mission</div>
  <div className="flex-col justify-center items-center gap-6 flex">
    <div className="flex-col justify-center items-center gap-4 flex">
      <div className="text-center text-stone-950 md:text-5xl text-2xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
      <div className="w-full md:w-full text-center text-stone-950 md:text-2xl text-base font-normal font-['Inter']">Our mission is dedicated to fostering empowerment among individuals with disabilities, encouraging active engagement, and ultimately contributing to an enriched quality of life</div>
    </div>
    <div className="h-14 p-2 bg-lime-950 mb-8 rounded-lg justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-xl font-semibold font-['Inter']">Learn More</div>
    </div>
  </div>
  </div>

{/* medium and large screen*/}
 <div className="mission-body flex-row   flex  w-full ">

   <div className="w-1/2 ">
      <div className="mission-imag   ">
        <div className=" container flex-col ">
         <img className="w-4/5 h-64 ml-24  " src={background} />
         <img className="w-4/5 h-64 " src="https://via.placeholder.com/541x359" />
         <img className="w-4/5 h-64 ml-24 " src="https://via.placeholder.com/541x359" />
        </div>
     </div>
    </div>

   <div className="mission-words flex-col w-1/2">
   <div className="w-full flex-row   bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3  " src="https://via.placeholder.com/220x188" />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className="text-white md:text-3xl text-xl font-semibold font-['Inter']">Explore our Services</div>
      <div className=" text-center text-stone-50 md:text-base  text-xs font-normal font-['Inter']">Embark on a journey of discovery with "Explore Our Services," where tailored programs and comprehensive support await, empowering individuals to thrive and achieve their unique goals.</div>
    </div>
    </div>

    <div className="w-full flex-row pr-2.5 bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3  " src="https://via.placeholder.com/220x188" />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className="text-white md:text-3xl text-xl font-semibold font-['Inter']">Join Our Team</div>
      <div className=" text-center text-stone-50 md:text-base text-xs font-normal font-['Inter']">Become a valued member of our team! Explore exciting opportunities and contribute your skills to a dynamic and supportive work environment. Join us in making a positive impact and shaping a brighter future together.</div>
    </div>
    </div>
   
    <div className="w-full flex-row  pr-2.5 bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3  " src="https://via.placeholder.com/220x188" />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className="text-white md:text-3xl text-xl font-semibold font-['Inter']">Support Our Mission</div>
      <div className=" text-center text-stone-50 md:text-base text-xs font-normal font-['Inter']">Join our mission to empower lives through support. Your contribution fosters independence and enhances quality of life for individuals facing disabilities. Together, let's make a positive impact.</div>
    </div>
    </div>

    <div className="w-full flex-row  pr-2.5 bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3 " src="https://via.placeholder.com/220x188" />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className=" text-white md:text-3xl text-xl font-semibold font-['Inter']">Follow Our Events</div>
      <div className=" text-center text-white md:text-base text-xs font-normal font-['Inter']">Stay connected and follow our events for exciting updates, impactful initiatives, and opportunities to engage with our community. Don't miss out on the latest happenings – be a part of our journey</div>
    </div>
 </div>

    {/* small screen*/}
 <div className="mission-body hidden md:flex md:hidden ">


    <div className="mission-words w-2/5">

    </div>
 
  </div>
   



    </div>
  </div>
</div>
  


{/*what we do*/}
    {/*Large screen*/}
  <div className="what-we-do ml-48 mt-4">
    <div className="heading  left-50">
      <div className="md:text-4xl text-sm  font-black  justify-center font-['Inter']">
            What We Do
      </div>
      <div className="md:text-2xl text xs font-medium">
      DOOB Community offers an extensive array of meticulously tailored programs and services designed to address the distinct needs of each individual. Our professional offerings include Meaningful Day Services, Residential Services, Support Services, and specialized support for Transitioning Youth.
      </div>
    </div>
    <div className="Body flex flex-row">
      <div className="left w-1/3 flex-col">
       <div className="left-top flex flex-col">
        <div className="one">
          <div className="rectangle" >
            R
            </div>
           <div className="font-semibold text-3xl">
              Meaningful Day Services
            </div>
             <div className="text-xl">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
        <div className="two">
        <div className="rectangle" >
            R
            </div>
           <div className="font-semibold text-3xl">
              Meaningful Day Services
            </div>
             <div className="text-xl">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
      </div>
      </div>


      <div className=" middle w-1/3 h-full">
        M
      </div>
      <div className="right w-1/3">
      <div className="left-top flex flex-col">
        <div className="one">
          <div className="rectangle" >
            R
            </div>
           <div className="font-semibold text-3xl">
              Meaningful Day Services
            </div>
             <div className="text-xl">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
        <div className="two">
        <div className="rectangle" >
            R
            </div>
           <div className="font-semibold text-3xl">
              Meaningful Day Services
            </div>
             <div className="text-xl">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
      </div>
      
      </div>

    </div>
  
   </div>


      {/*small screen*/}
   <div className="what-we-do">
    
  
    </div>

</div>

















    <Footer />
 
    </div>
  );
};

export default Hometoo;












