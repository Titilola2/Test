
import '../styles/tailwind.css';
import React  from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../assets/services-background.svg';
import backgroundsmall from '../assets/services-backgroundsmall.png';
import one from '../assets/service-one.svg';
import two from '../assets/service-two.svg';
import three from '../assets/service-three.svg';
import four from '../assets/service-four.svg';
import five from '../assets/right-image2.svg';
import six from '../assets/right-image3.svg';
import seven from '../assets/right-image4.svg';
import whatwedo from '../assets/what-we-do.svg';
import check from '../assets/check.svg';


const Services = () => {
 
  return (
    <div>
      <Header />



      {/* Your page content */}
<div className="body flex flex-col justify-center items-center">

<div className="background">
    {/* medium and large screen*/}
  <div className="w-screen md:h-screen h-96  hidden md:flex"  style={{backgroundImage: `url(${background})`}} >
     <div className=" w-full h-96 mx-4 ml-20 flex-col justify-start items-start gap-8 inline-flex ">
       <div className="w-1/2 mt-40 text-white text-5xl font-semibold font-['Inter']">Our Comprehensive Services</div>
       <div className="w-2/5 text-white text-2xl font-normal font-['Inter']">At Doob Community, our commitment to personalized care is exemplified through a diverse array of services tailored to meet the unique needs of each individual. Explore the following specialized offerings that contribute to the holistic well-being and empowerment of those we serve:
</div>
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
         <div className="self-stretch h-44 flex-col justify-start px-2 items-start gap-1.5 flex">
         <div className="self-stretch text-stone-800 text-3xl text-center font-semibold font-['Inter']">Services</div>
          <div className="self-stretch text-stone-800 text-2xl font-semibold font-['Inter']">Our Comprehensive Services</div>
           <div className="self-stretch text-stone-800 mb-8 text-base font-normal font-['Inter']">At Doob Community, our commitment to personalized care is exemplified through a diverse array of services tailored to meet the unique needs of each individual. Explore the following specialized offerings that contribute to the holistic well-being and empowerment of those we serve:
</div>
         </div>
         <div className="justify-start items-start gap-4 inline-flex  mt-12 ">
             <div className="w-28 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>
        </div>
</div>
{/* medium and large screen*/}
<div className="our-mission flex flex-col justify-center items-center  hidden md:flex md:px-12 px-2 gap-8">
 
  <div className="font-semibold text-center md:text-4xl text-xl py-8">
    Services
  </div>

  <div className="flex flex-row">
     <div className=" gap-2 w-1/2">
     <img className="w-full " src={one} />
     </div>
     <div className="gap-2 w-1/2 flex flex-col">
        <div className="header font-semibold text-center md:text-4xl ">
        Residential Habilitation
        </div>
        <div className="body ml-4 gap-4">
          <ul>
           
            <li>
            <div className="header text-2xl"><b> Community Inclusion:</b> Assistance in community participation, enabling individuals to engage in social, educational, and recreational activities.
            </div>
            </li>
            <li>
            <div className="header text-2xl"><b> Budgeting and Medication Support:</b>  Practical assistance with budgeting and medication administration for enhanced daily living.
            </div>
            </li>
            <li>
            <div className="header text-2xl"><b>Personalized Care Plans: </b> Flexible service hours, with participants authorized to receive up to eight hours per day, based on the Waiver Case Manager's approval.
            </div>
            </li>
        
          </ul>
        
        </div>
        <div className="contact-enroll">
        <div className="justify-center items-center gap-4 inline-flex ml-28 my-4 ">
             <div className="w-28 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>
        
        </div>
     </div>
   </div>

   <div className="flex flex-row">
      <div className=" gap-2 w-1/2">
          <div className="header font-semibold text-center md:text-4xl">
          Behavioral Support Services
          </div>
          <div className="body">
          <ul>
           
           <li>
           <div className="header text-2xl"><b> Community Inclusion:</b> Assistance in community participation, enabling individuals to engage in social, educational, and recreational activities.
           </div>
           </li>
           <li>
           <div className="header text-2xl"><b> Budgeting and Medication Support: </b>  Practical assistance with budgeting and medication administration for enhanced daily living.
           </div>
           </li>
           <li>
           <div className="header text-2xl"><b>Personalized Care Plans:  </b>  Flexible service hours, with participants authorized to receive up to eight hours per day, based on the Waiver Case Manager's approval.
           </div>
           </li>
       
         </ul>
       

          </div>
          <div className="contact-enroll">
          <div className="justify-center items-center gap-4 inline-flex ml-28 my-4 ">
             <div className="w-28 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>

          </div>    
       </div>
     <div className=" w-1/2">
     <img className=" " src={two} />
     </div>
  </div>

  <div className="flex flex-row">
     <div className="  w-1/2">
     <img className=" " src={three} />
     </div>
     <div className="gap-2 w-1/2">
          <div className="header font-semibold text-center md:text-4xl">
          Individual Support Services
          </div>
          <div className="body">
          <ul>
           
           <li>
           <div className="header text-2xl"><b> Community Inclusion:</b> Assistance in community participation, enabling individuals to engage in social, educational, and recreational activities.
           </div>
           </li>
           <li>
           <div className="header text-2xl"><b> Budgeting and Medication Support:</b>  Practical assistance with budgeting and medication administration for enhanced daily living.
           </div>
           </li>
           <li>
           <div className="header text-2xl"><b>Personalized Care Plans: </b> Flexible service hours, with participants authorized to receive up to eight hours per day, based on the Waiver Case Manager's approval.
           </div>
           </li>
       
         </ul>
       

          </div>
          <div className="contact-enroll">
          <div className="justify-center items-center gap-4 inline-flex ml-28 my-4 ">
             <div className="w-28 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>

          </div>
     </div>
  </div>

  <div className="flex flex-row">
     <div className=" gap-2 w-1/2">
          <div className="header font-semibold text-center md:text-4xl">
          Personal Support Services
          </div>
          <div className="body">
          <ul>
           
           <li>
           <div className="header text-2xl"><b> Tailored Assistance: </b>  Our Personal Support Service provides individualized care tailored to your unique needs and preferences.
           </div>
           </li>
           <li>
           <div className="header text-2xl"><b> Compassionate Care: </b> Our caregivers are dedicated to providing attentive and empathetic care, creating a nurturing environment where you feel valued and supported.
           </div>
           </li>
           <li>
           <div className="header text-2xl"><b>Empowering Independence: </b>Our Personal Support Service is designed to empower you to live life on your terms, while we're here to assist you.
           </div>
           </li>
       
         </ul>
       

          </div>
          <div className="contact-enroll">
          <div className="justify-center items-center gap-4 inline-flex ml-28 my-4 ">
             <div className="w-28 p-2 bg-lime-900 rounded-lg justify-center items-center gap-2 flex">
               <div className="text-center text-white text-base font-semibold font-['Inter']">Contact Us</div>
             </div>
            <div className="w-28 p-2 rounded-lg border border-lime-950 justify-center items-center gap-2 flex">
              <div className="w-28 text-center text-stone-600 text-base font-semibold font-['Inter']">Enroll</div>
            </div>
          </div>

          </div>
     </div>
     <div className=" w-1/2">
     <img className=" " src={four} />
     </div>
  </div>





</div>
  


   

      {/*small screen*/}
   <div className="what-we-do md:hidden flex flex-col  mt-96 mb-12">
   <div className=" gap-2 ">
         <img className="w-full " src={one} />
     </div>
     <div className="gap-2 mx-4 mt-4 flex flex-col">
        <div className="header font-semibold text-center text-2xl ">
        Residential Habilitation
        </div>
        <div className="body  gap-4">
          <ul>
           
            <li>
            <div className="header text-sm"><b> Community Inclusion:</b> Assistance in community participation, enabling individuals to engage in social, educational, and recreational activities.
            </div>
            </li>
            <li>
            <div className="header text-sm"><b> Budgeting and Medication Support:</b>  Practical assistance with budgeting and medication administration for enhanced daily living.
            </div>
            </li>
            <li>
            <div className="header text-sm"><b>Personalized Care Plans: </b> Flexible service hours, with participants authorized to receive up to eight hours per day, based on the Waiver Case Manager's approval.
            </div>
            </li>
          </ul>
            </div>

            <div className="contact-enroll ">
              <div className="justify-start items-start md:gap-7 gap-2 inline-flex ">
              <div className="md:w-36 w-12 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Contact Us</div>
               </div>
              <div className="md:w-36 w-10 md:p-3 p-2 rounded-[6px] border md:rounded-lg border-lime-950 justify-center items-center gap-2 flex">
                 <div className="w-28 text-center text-stone-600 md:text-2xl  text-[6px] font-semibold font-['Inter']">Enroll</div>
              </div>
            </div>
            </div>
        </div>


        <div className=" w-full mt-4">
        <img className=" " src={two} />
         </div>
        <div className=" gap-2 flex flex-col mx-4 mt-4 ">
          <div className="header font-semibold text-center text-2xl">
          Behavioral Support Services
          </div>
          <div className="body">
          <ul>
           
           <li>
           <div className="header text-sm"><b> Community Inclusion:</b> Assistance in community participation, enabling individuals to engage in social, educational, and recreational activities.
           </div>
           </li>
           <li>
           <div className="header text-sm"><b> Budgeting and Medication Support: </b>  Practical assistance with budgeting and medication administration for enhanced daily living.
           </div>
           </li>
           <li>
           <div className="header text-sm"><b>Personalized Care Plans:  </b>  Flexible service hours, with participants authorized to receive up to eight hours per day, based on the Waiver Case Manager's approval.
           </div>
           </li>
         </ul>
          </div>
          <div className="contact-enroll">
          <div className="justify-start items-start md:gap-7 gap-2 inline-flex ">
              <div className="md:w-36 w-12 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Contact Us</div>
               </div>
              <div className="md:w-36 w-10 md:p-3 p-2 rounded-[6px] border md:rounded-lg border-lime-950 justify-center items-center gap-2 flex">
                 <div className="w-28 text-center text-stone-600 md:text-2xl  text-[6px] font-semibold font-['Inter']">Enroll</div>
              </div>
            </div>
          </div>    
       </div>
    
   
          <div className=" my-4">
        <img className=" " src={three} />
         </div>
         <div className="gap-2 flex flex-col mt-4 mx-4">
          <div className="header font-semibold text-center text-2xl ">
          Individual Support Services
          </div>
          <div className="body">
          <ul>
           
           <li>
           <div className="header text-sm"><b> Community Inclusion:</b> Assistance in community participation, enabling individuals to engage in social, educational, and recreational activities.
           </div>
           </li>
           <li>
           <div className="header text-sm"><b> Budgeting and Medication Support:</b>  Practical assistance with budgeting and medication administration for enhanced daily living.
           </div>
           </li>
           <li>
           <div className="header text-sm"><b>Personalized Care Plans: </b> Flexible service hours, with participants authorized to receive up to eight hours per day, based on the Waiver Case Manager's approval.
           </div>
           </li>
         </ul>
          </div>
          <div className="contact-enroll">
           <div className="justify-start items-start md:gap-7 gap-2 inline-flex ">
              <div className="md:w-36 w-12 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Contact Us</div>
               </div>
              <div className="md:w-36 w-10 md:p-3 p-2 rounded-[6px] border md:rounded-lg border-lime-950 justify-center items-center gap-2 flex">
                 <div className="w-28 text-center text-stone-600 md:text-2xl  text-[6px] font-semibold font-['Inter']">Enroll</div>
              </div>
            </div>
          </div>
     </div>
  

     <div className=" w-full">
          <img className=" " src={four} />
          </div>
     <div className=" gap-2  flex flex-col mt-4 mx-4">
          <div className="header font-semibold text-center text-2xl">
          Personal Support Services
          </div>
          <div className="body">
          <ul>
           
           <li>
           <div className="header text-sm"><b> Tailored Assistance: </b>  Our Personal Support Service provides individualized care tailored to your unique needs and preferences.
           </div>
           </li>
           <li>
           <div className="header text-sm"><b> Compassionate Care: </b> Our caregivers are dedicated to providing attentive and empathetic care, creating a nurturing environment where you feel valued and supported.
           </div>
           </li>
           <li>
           <div className="header text-sm"><b>Empowering Independence: </b>Our Personal Support Service is designed to empower you to live life on your terms, while we're here to assist you.
           </div>
           </li>
         </ul>

                </div>
                <div className="contact-enroll">
                <div className="justify-center items-center md:gap-7 gap-2 inline-flex ">
              <div className="md:w-36 w-12 md:p-3  p-2 bg-lime-900 md:rounded-lg rounded-[6px] justify-center items-center md:gap-2 gap-1 flex">
                   <div className="text-center text-white md:text-2xl text-[6px] font-semibold font-['Inter']">Contact Us</div>
               </div>
              <div className="md:w-36 w-10 md:p-3 p-2 rounded-[6px] border md:rounded-lg border-lime-950 justify-center items-center gap-2 flex">
                 <div className="w-28 text-center text-stone-600 md:text-2xl  text-[6px] font-semibold font-['Inter']">Enroll</div>
              </div>
                </div>

                </div>
          </div>
         
       

    
  
    </div>

</div>

















    <Footer />
 
    </div>
  );
};

export default Services;












