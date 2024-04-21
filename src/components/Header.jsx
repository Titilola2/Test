import React from 'react';
import menu from '../assets/menu.svg';
import group from '../assets/Group.svg';
import call from '../assets/call.png';
import email from '../assets/email.svg';

const Header = () => {
  return (
    <header className="header">

<div className="App">
    
    
    <div className="lg:px-8 px-2 py-4 bg-lime-900 justify-centre  inline-flex w-full">
      <div className=" grow shrink basis-0 self-stretch justify-between items-center inline-flex">
         <div className=" justify-start items-start md:gap-2 gap:-1 flex flex row">
           <div className=" flex-row justify-center items-center inline-flex">
                <div className=" text-white md:text-xl text-[12px] font-black font-['Font Awesome 5 Free']">
                  <img className="md:w-6 w-3  " src={call} />
                  </div>
               </div>
           <div className="12408185628 text-white  md:text-2xl text-[10px] font-semibold font-['Inter']">+1 (240) 818-5628</div>
            </div>
          <div className="Frame35 justify-start items-start gap-2 flex">
           <div className="IconamoonEmailLight w-6 h-6 px-0.5 py-1 justify-center items-center flex">
             <div className="Group  relative">
             </div>
           </div>
          <div className="CareDoobcommunityCom flex flex-row md:gap-2 gap-1">
             <span className="underline text-white text-base font-semibold font-['Inter']">
             <img className="md:w-7 w-5   " src={email} />
             </span>
              <span style={{ textDecoration: 'underline' }} className="text-white md:text-2xl text-[8px]font-semibold font-['Inter']">Care@doobcommunity.com</span>
              </div>

           </div>
      </div>
    </div>


 <div className="Frame8 lg:px-16 px-2 justify-between items-center inline-flex w-full py-2">
   <div className="Frame13 flex flex-col justify-center items-center inline-flex">
     <div className="Group  relative"> 
    <a href="/">
     <img  className="md:w-16 w-8  " src={group} />
     </a>

     </div>
    <div className="DoobCommunity text-center text-lime-950 md:text-sm  text-[8px] font-black font-['Playfair Display']">DOOB COMMUNITY</div>
  </div>
  <div className="hidden md:flex justify-start items-center gap-12 flex">
    <div className="Frame2 justify-start items-center gap-5 flex">
      <a href="about-us" className="AboutUs text-center text-black text-xl font-semibold font-['Inter']" 
       >About Us
      </a>
      <div className="People text-center text-black text-xl font-semibold font-['Inter']">People</div>
      <div className="Services text-center text-black text-xl font-semibold font-['Inter']">Services</div>
    </div>
    <div className="Frame6 justify-start items-start gap-2 flex">
      <div className="Frame4 w-32 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
        <div className="Donate w-28 text-center text-white text-xl font-semibold font-['Inter']">Donate</div>
      </div>
      <div className="Frame3 w-32 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
        <div className="ContactUs text-center text-white text-xl font-semibold font-['Inter']">Contact Us</div>
      </div>
      <div className="Frame5 w-32 p-2 rounded-lg border border-stone-600 justify-center items-center gap-2 flex">
        <div className="Enroll w-28 text-center text-stone-600 text-xl font-semibold font-['Inter']">Enroll</div>
      </div>
    </div>
  </div>
  <div className="Group  relative md:hidden">
  <img className="w-8  " src={menu} />
     </div>

</div>




</div>

    </header>
  );
};

export default Header;
