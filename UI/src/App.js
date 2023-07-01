import './App.css';
import { Routes,Route } from 'react-router-dom';
import Slider from './SliderComponent/Slider';
import Nav from './NavComponent/Nav';
import Footer from './FooterComponent/Footer';
import Home from './HomeComponent/Home';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout'
import Userhome from './UserhomeComponent/Userhome';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageuersComponent/Manageusers';
import Manageproject from './ManageprojectComponent/Manageproject';
import Register from './RegisterComponent/Register';

function App() {
  return (
    <>  
<Nav/>

      <Slider/>
<Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>  
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/logout" element={<Logout />} ></Route>
      <Route path="/user" element={<Userhome />} ></Route>
      <Route path="/admin" element={<Adminhome />} ></Route>
      <Route path="/manageusers" element={<Manageusers/>}></Route>
      <Route path="/manageprojects" element={<Manageproject/>}></Route>
    </Routes>

<Footer/>

{/* Back to Top*/}
  
<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>


</>
  );
}

export default App;