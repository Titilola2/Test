import React from 'react';
import footer from '../assets/footer.svg';
import foot from '../assets/footer-icon.svg';
import group from '../assets/Group.svg';

const Footer = () => {
  return (
  
    
<div>
<div className="Frame23 w-full h-96 mt-12 md:mt-24  flex flex-row md:mb-0 -mb-48 relative">
  <div className="Background w-full lg:h-full h-2/5 md:h-4/5 left-0  absolute bg-lime-600" />
     <div className="RightColumn md:w-1/4 w-1/3 h-1/3 left-50 md:px-8 px-2 top-[-20px] md:top-[-50px] absolute">
     <img className="ImagePlaceholder w-full ml-4 " src={footer}  alt="footer"/>
     </div>
   
     <div className="w-2/5  md:ml-30 md:left-20 lg-left-40 ml-20 mt-12 -md:top-48 -top-4 -left-2 relative">
      <div className="Rectangle14   " />
      <img className="ImagePlaceholder md:w-3/4   " src={foot}  alt="footer"/>
    </div>
  <div className="YourCertified w-1/2 -right-4 md:rigth-0 flex-glow md:top-0 -top-4 md:my-20 my-12 absolute text-white lg:text-5xl  xl:tex-6xl md:text-3xl sm:text-sm font-bold font-['BoldInter'] uppercase tracking-widest">Your Certified Quality Service Providers</div>
</div>


<div className="top-bottom flex flex-col ">


   <div className="top md:px-40 px-4 md:py-4  flex flex-col h-1/4">
  
    <div className="Frame44 w-full h-full flex-col justify-center items-center  inline-flex">
     <div className="Group w-auto h-3/4 relative">  <img className="  " src={group} />
      </div>
    <div className="DoobCommunity text-center text-limee-600 text-xs text-lime-950 font-extrabold">DOOB COMMUNITY</div>
   </div>

   
   <div className="Frame45 h-1/4 justify-center items-center gap-6 inline-flex md:px-40 py-4 px-4">
    <div className="Frame38 justify-start items-start gap-6 flex flex-row">
      <div className="AboutUs text-center text-lime-950 md:text-lg text-xs font-semibold font-['Inter']">About Us</div>
      <div className="Line10">|</div>
    </div>
    <div className="Frame39 justify-start items-start gap-6 flex">
      <div className="People text-center text-lime-950 md:text-lg text-xs font-semibold font-['Inter']">People</div>
      <div className="Line10">|</div>
    </div>
    <div className="Frame41 justify-start items-start gap-6 flex">
      <div className="News text-center text-lime-950 md:text-lg text-xs font-semibold font-['Inter']">News </div>
      <div className="Line10">|</div>
    </div>
    <div className="Frame40 justify-start items-start gap-6 flex">
      <div className="Services text-center text-lime-950 md:text-lg text-xs font-semibold font-['Inter']">Services</div>
      <div className="Line1">|</div>
    </div>
    <div className="Frame42 p-2 justify-center items-center gap-2 flex">
      <div className="Blogs text-center text-lime-950 md:text-lg text-xs font-semibold font-['Inter']">Blogs</div>
    </div>
 </div>
 <div className="h-1/4   md:py-8 ">
 <div className="DoobCommunity   text-center  text-lime-950 md:text-lg flex-glow text-[8px] font-normal font-['Inter'] ">DOOB Community is committed to nondiscriminatory practices in all aspects of its services and programs. This commitment aligns with regulations from acts such as the 1964 Civil Rights Act, the Rehabilitation Act of 1973, the Age Discrimination Act of 1975, and the Hill Burton Act. We ensure equal opportunities in employment, admissions, service provisions, accommodations, and program participation, rejecting discrimination based on factors like race, color, national origin, age, and disability.</div>
</div>


 </div>



<div className="Frame29 w-full     h-10  bg-stone-50 flex flex-row mt-2 ">
 <div className="Frame37 w-full  md:h-20 h-7 absolute">
    <div className="Rectangle18 md:w-2/5 w-1/3 h-full right-0 top-0 absolute origin-top-left  bg-lime-950 rounded-tl-full" />

    <div className="footer text-center  flex flex-col gap-2">
      <div className="socials h-1/2 flex flex-row bg-blue-100">
      <div className="FacebookLogo w-1/4 h-full  relative" > F</div>
      <div className="TwitterLogo w-1/4 h-full  relative" />
      <div className="LinkedinLogo w-1/4 h-full relative" />
      <div className="InstagramLogo w-1/4 h-full  relative" />

      </div>
     <span className="footer-text text-lime-950 md:text-xs  ">
     @2024 DOOB Communiy All Rights Reserved
      </span>
    </div>
    <div className="Rectangle17 md:w-2/5 w-1/3 h-full left-0 top-0 absolute bg-lime-950 rounded-tr-full" />
    </div>
   </div>
</div>





</div>



  
  );
};

export default Footer;



