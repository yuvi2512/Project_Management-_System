import './Contact.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function Contact() {

  useEffect(()=>{
    const api_url="http://localhost:3001/user/testapi";  
    axios.get(api_url).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
  });  

  return (
    <>
   {/* Contact Start */}
   <div className="container-fluid overflow-hidden py-5 px-lg-0">
   <div className="container about py-5 px-lg-0">
       <div className="row g-5 mx-lg-0">
           <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{"minHeight": "400px"}}>
               <div className="position-relative h-100">
                   <img className="position-absolute img-fluid w-100 h-100" src="assets/img/no3.webp" style={{"objectFit":" cover"}} alt=""/>
               </div>
           </div>
           <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
               <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
               <h1 className="mb-5">Project Management System,Contact Page</h1>
               <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
               
               <a href="" className="btn btn-primary py-3 px-5">Explore More</a>
           </div>
       </div>
   </div>
</div>
{/* Contact End */}
     </>	
  );
}

export default Contact;