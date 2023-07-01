import './Nav.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Nav() {
    const [NavContent , setNavContent] = useState();
    useEffect(()=>{
        setTimeout(()=>{
        if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='admin')
        {
            setNavContent(
                <>
                 {/* Navbar Start */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <a href="" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
        <h2 class="mb-2 text-white">PMS</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                         <span class="navbar-toggler-icon"></span>
                     </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto  p-4 p-lg-0">
                <a class="nav-item nav-link active"><Link to="/user">Admin Home</Link></a>
                <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
                <a class="nav-item nav-link active"><Link to="/manageprojects">Manage Project </Link></a>
                <a class="nav-item nav-link"><Link to="/logout">logout</Link></a>
            </div>
        </div>
    </nav>
    {/* Navbar End */}        
            </>);
           
    }

    else if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')
{
    setNavContent(<>
        {/* Navbar Start */}
<nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
    <a href=""class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
    <h2 class="mb-2 text-white">PMS</h2>
                     </a>
                     <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                         <span class="navbar-toggler-icon"></span>
                     </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
            <a class="nav-item nav-link"><Link to="/logout">logout</Link></a>
        </div>
    </div>
</nav>
{/* Navbar End */}        
        </>);    
}
    else
    {
        setNavContent(<>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
                     <a href="" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                         <h2 class="mb-2 text-white">PMS</h2>
                     </a>
                     <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                         <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarCollapse">
                         <div class="navbar-nav ms-auto p-4 p-lg-0">
                             <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                             <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                             <div class="nav-item dropdown">
                                 <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#F3525B"}} >Pages</a>
                                 <div class="dropdown-menu fade-up m-0">
                                     <a href="" class="dropdown-item">Pricing Plan</a>
                                     <a href="" class="dropdown-item">Features</a>
                                     <a href="" class="dropdown-item">Free Quote</a>
                                     <a href="" class="dropdown-item">Our Team</a>
                                     <a href="" class="dropdown-item">Testimonial</a>
                                     <a href="" class="dropdown-item">404 Page</a>
                                 </div>
                             </div>
                             <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                             <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                             <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                             <a class="nav-item nav-link"><Link to="/login">login</Link></a>
                         </div>
                         </div>
                 </nav>
                 {/* Navbar End */}
                </>);
   }
},10);
},[]);

return (
<>
{NavContent}
</>
);
}
  

export default Nav;