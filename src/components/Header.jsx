import React from 'react';
import menu from '../assets/menu.svg';
import group from '../assets/Group.svg';

const Header = () => {
  return (
    <header className="header">

<div className="App">
    
    
    <div className="lg:px-8 px-2 py-4 bg-lime-900 justify-centre  inline-flex w-full">
      <div className=" grow shrink basis-0 self-stretch justify-between items-center inline-flex">
         <div className=" justify-start items-start gap-2 flex flex row">
           <div className=" flex-row justify-center items-center inline-flex">
                <div className=" text-white text-1xl font-black font-['Font Awesome 5 Free']"></div>
               </div>
           <div className="12408185628 text-white sm:text-sm text-base font-semibold font-['Inter']">+1 (240) 818-5628</div>
            </div>
          <div className="Frame35 justify-start items-start gap-2 flex">
           <div className="IconamoonEmailLight w-6 h-6 px-0.5 py-1 justify-center items-center flex">
             <div className="Group  relative">
             </div>
           </div>
          <div className="CareDoobcommunityCom">
             <span className="underline text-white text-base font-semibold font-['Inter']">image</span>
              <span style={{ textDecoration: 'underline' }} className="text-white text-base font-semibold font-['Inter']">Care@doobcommunity.com</span>
              </div>

           </div>
      </div>
    </div>


 <div className="Frame8 lg:px-16 px-2 justify-between items-center inline-flex w-full py-2">
   <div className="Frame13 flex flex-col justify-center items-center inline-flex">
     <div className="Group  relative"> 
     <img className="  " src={group} />
     </div>
    <div className="DoobCommunity text-center text-lime-950 text-sm font-black font-['Playfair Display']">DOOB COMMUNITY</div>
  </div>
  <div className="hidden md:flex justify-start items-center gap-12 flex">
    <div className="Frame2 justify-start items-center gap-5 flex">
      <div className="AboutUs text-center text-black text-base font-semibold font-['Inter']"   href="/about">About Us</div>
      <div className="People text-center text-black text-base font-semibold font-['Inter']">People</div>
      <div className="Services text-center text-black text-base font-semibold font-['Inter']">Services</div>
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
  <img className="  " src={menu} />
     </div>

</div>




</div>

    </header>
  );
};

export default Header;
