import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls'

function Register() {

  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();     
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    
    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};

    axios.post(apiurluser+"save",userDetails).then((response)=>{
        console.log(response);
        setOutput("User register successfully...");
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setCity("");
        setMobile("");
    }).catch((error)=>{
        console.log(error);
    });  
  };

  return (
  <>
 <h1 class="display-5 mb-4">Register <span class="text-primary">Here!!!</span></h1>

    <div class="container-xxl py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                   
                    <h1 class="mb-5">Register for free</h1>
                    <p class="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <div class="d-flex align-items-center">
                        <i class="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        <div class="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 class="text-primary m-0">XXX XXX XXXX</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                        <form>
                        <font color="blue">{output}</font>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">

                                    <input type="text" class="form-control border-0" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="email" class="form-control border-0" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="password" class="form-control border-0" value={password} onChange={e => setPassword(e.target.value)}  placeholder="Your Password" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                <input type="text" class="form-control border-0"  value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Your Mobile" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                <input type="text" class="form-control border-0"  value={address} onChange={e => setAddress(e.target.value)} placeholder="Your Address" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                <input type="text" class="form-control border-0" placeholder="Your City" value={city} onChange={e => setCity(e.target.value)} style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                Male<input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                                Female<input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" onClick={handleSubmit} type="Button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
        
  </>
  );
}

export default Register;