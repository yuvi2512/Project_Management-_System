import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';
import {useNavigate} from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ output , setOutput ] = useState();
  
    const handleSubmit=()=>{
      
     const userDetails={"email":email,"password":password};

     axios.post(apiurluser+"login",userDetails).then((response)=>{
        //console.log(response.data);
        setOutput("User register successfully....");
        var obj=response.data.userDetails
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",obj._id);
        localStorage.setItem("name",obj.name);
        localStorage.setItem("email",obj.email);
        localStorage.setItem("mobile",obj.mobile);
        localStorage.setItem("address",obj.address);
        localStorage.setItem("city",obj.city);
        localStorage.setItem("gender",obj.gender);
        localStorage.setItem("info",obj.info);
        localStorage.setItem("role",obj.role);
        
        obj.role=="admin"?navigate("/admin"):navigate("/user");
    }).catch((error)=>{
        //console.log(error);
        setOutput("Invalid user or verify your account....");
        setEmail("");
        setPassword("");
   });  
  
  };    
  return (
  <>
    {/* Login Start */}
    <h1 class="display-5 mb-4">Login <span class="text-primary">Here!!!</span></h1>

<div class="container-xxl py-5">
    <div class="container py-5">
        <div class="row g-5 align-items-center">
            <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
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
                                <input type="email" class="form-control border-0" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your gmail" style={{"height": "55px"}}/>
                            </div>
                            <div class="col-12 col-sm-6">
                                <input type="password" class="form-control border-0" value={password} onChange={e => setPassword(e.target.value)}  placeholder="enter  Password" style={{"height": "55px"}}/>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" onClick={handleSubmit} type="Button">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

    
    {/* Login End */}
  </>
  );
}

export default Login;