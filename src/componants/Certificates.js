import React from 'react';
import jscerti from '../assets/jscerti_page-0001.jpg';
import pythoncerti from '../assets/pythoncer_page-0001.jpg';
import htmlcsscerti from '../assets/htmlcsscerti_page-0001.jpg';
import pythongooglecerti from '../assets/Copy of certi Sai Rajesh Bende_page-0001.jpg';

function Certificates() {
  return (
    <>
      <div class= "flex-row sm:flex-row md:flex lg:flex justify-center  gap-4 p-4  ">

  

        

     

        <div class="group cursor-pointer relative py-2 ">
          <img
            src={jscerti}
            alt="Image 1"
            class=" h-52 w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          
        </div>
        <div class="group cursor-pointer relative py-2 ">
          <img
            src={pythoncerti}
            alt="Image 1"
            class="h-52 w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          
        </div>
        <div class="group cursor-pointer relative py-2 ">
          <img
            src={htmlcsscerti}
            alt="Image 1"
            class="h-52 w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          
        </div>
       
        

        
        

      

        

      

       


       
      </div>
      <div class= "flex-row sm:flex-row md:flex lg:flex justify-center  gap-4 p-4 ">

  

        

     

        <div class="group cursor-pointer relative ">
          <img
            src={pythongooglecerti}
            alt="Image 1"
            class="h-52 w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          
        </div>
        
       
        

        
        

      

        

      

       


       
      </div>
    </>
  )
}

export default Certificates