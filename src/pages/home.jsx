
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


const Home = () => {
 
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
        <img  className="w-screen " src={backgroundsmall} />
         <div className="self-stretch h-44 flex-col justify-start items-start gap-1.5 flex">
         
          <div className="self-stretch text-stone-800 text-3xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
           <div className="self-stretch text-stone-800 mb-8 text-base font-normal font-['Inter']">empowers adults with intellectual and developmental disabilities, fostering independence and enhancing quality of life through comprehensive support services.<br/>they don't have disability but an ability</div>
         </div>
         <div className="justify-start items-start gap-4 inline-flex   ">
             <div className="w-28 p-2 bg-lime-950 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>
        </div>
</div>

 {/* Our mission*/}

<div className="our-mission flex flex-col justify-center items-center">

 <div className=" w-full  flex flex-col justify-center items-center md:mt-12 mt-72 items-center gap-7 inline-flex ">
  <div className="text-stone-950 md:text-6xl  text-4xl font-semibold font-['Inter']">Our Mission</div>
  <div className="flex-col justify-center items-center gap-6 flex">
    <div className="flex-col justify-center items-center gap-4 flex">
      <div className="text-center text-stone-950 md:text-4xl text-2xl font-semibold font-['Inter']">Empowering Connections for Every Ability</div>
      <div className="w-full md:w-3/5 pl-2 text-center text-stone-950 md:text-xl text-base font-normal font-['Inter']">Our mission is dedicated to fostering empowerment among individuals with disabilities, encouraging active engagement, and ultimately contributing to an enriched quality of life</div>
    </div>
    <div className="h-14 p-2 bg-lime-950 mb-8 rounded-lg justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-xl font-semibold font-['Inter']">Learn More</div>
    </div>
  </div>
  </div>

{/* medium and large screen*/}
 <div className="mission-body flex-row   flex  w-full md:gap-0 gap-2 ">

   <div className="w-1/2 md:h-4/5 md:mt-2 mt-4 ">
      <div className="mission-imag   ">
        <div className=" container flex-col ">
         <img className="md:w-4/5 w-4/5   h-1/3 md:ml-24 ml-10  " src={one} />
         <img className="md:w-4/5 w-4/5  h-1/3 xl:-mt-48 lg:-mt-12 md:-mt-6 -mt-2" src={two} />
         <img className="md:w-4/5 w-4/5  h-1/3 md:ml-24 xl:-mt-48  lg:-mt-12 md:-mt-6 ml-10 -mt-2 " src={three} />
        </div>
     </div>
    </div>

   <div className="mission-words flex-col w-1/2  ">
   <div className="w-full flex-row  md:h-1/4 h-34 bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3 h-full " src={four} />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className="text-white md:text-xl lg:text-4xl  text-[12px] h-1/4  md:font-semibold font-thin font-['Inter']">Explore our Services</div>
      <div className=" text-center text-stone-50 md:text-xs lg:text-xl  text-[7px] md:font-normal font-hairline font-hairline font-['Inter']">Embark on a journey of discovery with "Explore Our Services," where tailored programs and comprehensive support await, empowering individuals to thrive and achieve their unique goals.</div>
    </div>
    </div>

    <div className="w-full flex-row md:pr-2.5 md:h-1/4 h-34 my-1 bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3 h-full " src={five} />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className="text-white md:text-xl lg:text-4xl  text-[12px] md:h-1/4 h-2 md:font-semibold font-thin  font-['Inter']">Join Our Team</div>
      <div className=" text-center text-stone-50 md:text-xs lg:text-xl text-[7px] md:font-normal font-hairline font-['Inter']">Become a valued member of our team! Explore exciting opportunities and contribute your skills to a dynamic and supportive work environment. Join us in making a positive impact and shaping a brighter future together.</div>
    </div>
    </div>
   
    <div className="w-full flex-row  pr-2.5 md:h-1/4 h-34  bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3 h-full " src={six} />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className="text-white md:text-xl lg:text-4xl  text-[12px] md:h-1/4 h-2  md:font-semibold font-thin  font-['Inter']">Support Our Mission</div>
      <div className=" text-center text-stone-50 md:text-xs lg:text-xl text-[7px] md:font-normal font-hairline font-['Inter']">Join our mission to empower lives through support. Your contribution fosters independence and enhances quality of life for individuals facing disabilities. Together, let's make a positive impact.</div>
    </div>
    </div>

    <div className="w-full flex-row  pr-2.5 md:h-1/4 h-34  mt-1 bg-lime-950 rounded-md justify-start items-center gap-3 inline-flex">
    <img className="w-1/3 h-full " src={seven} />
    <div className="flex-col justify-start items-center gap-2 inline-flex">
      <div className=" text-white md:text-xl lg:text-xl  text-[12px] md:h-1/4 h-2 md:font-semibold font-thin   font-['Inter']">Follow Our Events</div>
      <div className=" text-center text-white md:text-xs lg:text-xl text-[7px] md:font-normal font-hairline font-['Inter']">Stay connected and follow our events for exciting updates, impactful initiatives, and opportunities to engage with our community. Don't miss out on the latest happenings – be a part of our journey</div>
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
  <div className="what-we-do  items-center flex flex-col mt-4 hidden md:flex">
    <div className="heading w-3/5  py-8 md:my-4">
      <div className="md:text-4xl  font-black justify-center items-center text-center justify-center font-['Inter']">
            What We Do
      </div>
      <div className="md:text-xl text-center  font-medium">
       DOOB Community offers an extensive array of meticulously tailored programs and services designed to address the distinct needs of each individual. Our professional offerings include Meaningful Day Services, Residential Services, Support Services, and specialized support for Transitioning Youth.
        </div>
       </div>
    <div className="Body flex flex-row w-4/5">
      <div className="left w-1/3 flex-col">
       <div className="left-top flex flex-col">
        <div className="one md:mb-8 items-center">
          <div className="rectangle" >
          <img className="w-1/5 ml-28  justify-center py-4 " src={check} />
            </div>
           <div className="font-semibold text-2xl">
              Meaningful Day Services
            </div>
             <div className="text-base">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
        <div className="two">
        <div className="rectangle" >
            <img className="w-1/5 ml-28 justify-center py-2 " src={check} />
            </div>
           <div className="font-semibold text-2xl">
              Support Services
            </div>
             <div className="text-base">
             Discover the support you need with our comprehensive Support Services. From healthcare to skill development, we're committed to addressing diverse needs and enhancing your well-being.</div>
        </div>
      </div>
      </div>


      <div className=" middle w-1/3 h-full">
      <img className="w-full px-8 " src={whatwedo} />
      </div>
      <div className="right w-1/3">
      <div className="left-top flex flex-col ">
        <div className="one md:mb-8">
          <div className="rectangle" >
            <img className="w-1/5 ml-28  justify-center py-4 " src={check} />
            </div>
           <div className="font-semibold text-2xl">
              Residential Services
            </div>
             <div className="text-base">
             Experience supportive living with our Residential Services. We provide a safe and empowering environment, fostering independence and a sense of belonging for each resident.</div>
        </div>
        <div className="two">
        <div className="rectangle" >
            <img className="w-1/5 ml-28 justify-center py-2" src={check} />
            </div>
           <div className="font-semibold text-2xl">
              Transitioning Youth
            </div>
             <div className="text-base">
             Navigate the journey to adulthood seamlessly with our Transitioning Youth support. We equip young individuals with the skills and resources needed for a confident transition into independence.</div>
        </div>
      </div>
      
      </div>

    </div>
  
   </div>


      {/*small screen*/}
   <div className="what-we-do md:hidden flex flex-col text-center">
      <div className="heading text-center mt-4 mx-1">
       <div className=" text-lg  font-black  justify-center font-['Inter']">
            What We Do
        </div>
        <div className=" text xs font-normal">
          DOOB Community offers an extensive array of meticulously tailored programs and services designed to address the distinct needs of each individual. Our professional offerings include Meaningful Day Services, Residential Services, Support Services, and specialized support for Transitioning Youth.
        </div>
       </div>

       <div className="one">
          <div className="rectangle" >
          <img className="w-1/5 ml-36 justify-center py-4 " src={check} />
            </div>
           <div className="font-semibold text-xl">
              Meaningful Day Services
            </div>
             <div className="text-lg ">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
            <div className="two">
        <div className="rectangle" >
            <img className="w-1/5 ml-36 justify-center py-4 " src={check} />
            </div>
           <div className="font-semibold text-xl">
              Residential Services
            </div>
             <div className="text-lg">
             Experience supportive living with our Residential Services. We provide a safe and empowering environment, fostering independence and a sense of belonging for each resident.</div>
        </div>

        <div className=" middle h-full">
      <img className="w-full px-8 py-4" src={whatwedo} />
      </div>

        <div className="two">
        <div className="rectangle" >
            <img className="w-1/5 ml-36 justify-center py-4 " src={check} />
            </div>
           <div className="font-semibold text-xl">
              Support Services
            </div>
             <div className="text-lg">
             Discover the support you need with our comprehensive Support Services. From healthcare to skill development, we're committed to addressing diverse needs and enhancing your well-being.</div>
        </div>
      
        <div className="two">
        <div className="rectangle" >
            <img className="w-1/5 ml-36 justify-center py-4 " src={check} />
            </div>
           <div className="font-semibold text-xl">
              Transitioning youth
            </div>
             <div className="text-lg">
               Enrich your days with our Meaningful Day Services—tailored programs fostering community, personal growth, and fulfillment</div>
        </div>
       


    
  
    </div>

</div>

















    <Footer />
 
    </div>
  );
};

export default Home;












