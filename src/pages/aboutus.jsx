
import '../styles/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../assets/background.jpg';
import aboutus from '../assets/about-us.svg';
import innovation from '../assets/innovation.svg';
import commitment from '../assets/commitment.svg';



const AboutUs = () => {
 
  return (
    <div>
      <Header />



      {/* Your page content About page*/}
<div className="body flex flex-col justify-center items-center">
  <div className="abuout-us-header flex flex-col w-screen">
  <div className="md:ml-12 ml-2">
            <div className="heading w-4/5   lg:text-5xl  md:text-4xl text-base font-semibold font-['Inter']">
               DOOB Community: Empowering Change Through Unity, Compassion, and Collective Commitment
             </div>
            <div className=" w-3/5 my-4  lg:3xl md:text-2xl text-[8px] font-normal ">
             At DOOB Community, we merge compassion with innovation to forge a supportive community where everyone belongs. Join us in our story of passion and commitment, where connection is paramount
            </div>
           <div className="justify-start items-start md:gap-7 gap-2 inline-flex ">
              <div className="md:w-36 w-12 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Contact Us</div>
               </div>
              <div className="md:w-36 w-10 md:p-3 p-2 rounded-[6px] border md:rounded-lg border-lime-950 justify-center items-center gap-2 flex">
                 <div className="w-28 text-center text-stone-600 md:text-2xl  text-[6px] font-semibold font-['Inter']">Enroll</div>
              </div>
            </div>
         </div>
    
    -<div className=" images-cylinder  md:-mt-96 -mt-36">
      <img  className="w-full px-2" src={aboutus} />
    </div>

  </div>
  <div className="our commitment flex flex-row">
    <div className=" left-side md:mx-12  md:my-12 my-4 mx-4 w-1/2 flex flex-col">
      <div className="heading md:text-7xl text-2xl font-semibold font-['Inter]">
        Our Commitment
      </div>
      <div className="sub-heading md:text-4xl font-medium text-base md:my-8 my-2">
      Our Pledge to Excellence
      </div>

      <div className="body md:text-xl text-[8px]">
      At DOOB Community, our commitment goes beyond providing a service – it's about cultivating a community that transcends barriers and nurtures authentic connections. We stand firmly on the pillars of trust, respect, and the collective belief that every individual, regardless of ability, deserves unfettered access to top-tier care, unwavering support, and boundless opportunities. Join us in building a community where inclusivity is not just a goal but a shared reality.
      </div>

      <div className="justify-start items-start md:gap-7 gap-2 inline-flex md:mt-4  mt-2">
              <div className="md:w-36 w-12 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Contact Us</div>
               </div>
              <div className="md:w-36 w-10 md:p-3 p-2 rounded-[6px] border md:rounded-lg border-lime-950 justify-center items-center gap-2 flex">
                 <div className="w-28 text-center text-stone-600 md:text-2xl  text-[6px] font-semibold font-['Inter']">Enroll</div>
              </div>
        </div>
  

    </div>
    <div className=" right-side w-1/2 ">
    <img  className=" " src={commitment} />
      
      </div>




  </div>
  <div className="what-drives-us flex flex-col md:mx-12 mx-4">
    <div className="heading  md:text-6xl text-2xl font-semibold font-['Inter] text-center">
      What Drives Us
    </div>
   
    <div className="sub-heading md:text-4xl font-medium text-base md:my-8 my-2 text-center">
    Empowered by Stories: DOOB Community's Driving Force      
    </div>
    <div className="body md:text-xl text-[8px] ">
    At DoobCommunity Living, our unwavering commitment is fueled by the profound inspiration derived from the remarkable individuals we are dedicated to serving. It is the indomitable spirit, inherent resilience, and undeniable strength exhibited by those confronting distinctive challenges that propels us to embark on a relentless journey of enhancement and expansion within our platform.

     In our pursuit of excellence, we are driven by the narratives of triumph that echo through the corridors of our community. The connections forged within our virtual haven are emblematic of the unbreakable bonds that form when individuals with diverse abilities come together. Witnessing the positive impact our community exerts on the lives of others acts as a perennial source of motivation, pushing us to continuously refine and elevate the quality of support and inclusivity we provide.

     What truly drives us is not just the functionality of our platform but the profound human stories that weave a tapestry of courage, hope, and resilience. Our mission extends beyond the virtual realm, reaching into the tangible lives of those we aim to empower. At DoodCommunity Living, we embrace the power of collective determination, recognizing that our success is intricately intertwined with the progress and well-being of every individual who calls our community home.
   
    </div>
    
  </div>
  <div className="innovation flex flex-col md:my-8 my-4 md:mx-12 mx-2 ">
    <div className="heading md:text-6xl text-2xl font-semibold font-['Inter] text-center ">
      Innovation for Inclusion
    </div>
   
      <div className="body md:text-xl text-center text-[8px] md:px-44 p-4 md:my-8 my-2">
      Technology is the driving force behind DOOB Community. We leverage the latest advancements to create a user-friendly, accessible, and secure platform. Our commitment to innovation ensures that individuals with disabilities can navigate our services seamlessly, caregivers can connect with those in need, and donors can make a meaningful impact.
      
      </div>
      <div className="image ">
      <img  className="w-screen " src={innovation} />
      </div>
      <div className="Donate justify-center items-center">
      <div className="justify-center items-center md:px-96  inline-flex md:mt-4  mt-2">
              <div className="md:w-44 w-16 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Donate</div>
               </div>
             
        </div>
  
      
      </div>
    
  </div>









 {/* Our mission*/}




      {/*small screen*/}
   <div className="what-we-do">
    
  
    </div>

</div>

















    <Footer />
 
    </div>
  );
};

export default AboutUs;










