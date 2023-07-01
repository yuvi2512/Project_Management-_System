import './Manageproject.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { apiurlproject } from '../apiurlproject'
import { useNavigate } from 'react-router-dom';

function Manageproject() {

  const [ ptitle , setptitle ] = useState();
  const [ pstream , setpstream ] = useState();
  const [ pdescription , setpdescription ] = useState();
  const [ output , setOutput ] = useState();
  const [ projectDetails , setprojectDetails ] = useState([]);
  const navigate =useNavigate();
  
  useEffect(()=>{
   
    axios.get(apiurlproject+"fetch").then((response)=>{
     setprojectDetails(response.data);
    }).catch((error)=>{
     console.log(error);
    });
   });

   const manageProject=(_id)=>{

    let deleteProjectdetails={"data":{"_id":_id}};  
     axios.delete(apiurlproject+"delete",deleteProjectdetails).then((response)=>{
      navigate("/manageprojects");   
     });
    };

  const handleSubmit=()=>{
    
    const ProjectDetails={"ptitle":ptitle,"pstream":pstream,"pdescription":pdescription};

    axios.post(apiurlproject+"save",ProjectDetails).then((response)=>{
        console.log(response);
        setOutput("Project Uploaded successfully...");
        setptitle("");
        setpstream("");
        setpdescription("");
    }).catch((error)=>{
        console.log(error);
    });  
  };

  return (
  <>
    <div class="container-xxl py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                   
                    <h1 class="mb-5">Upload Projects Here!!!</h1>
                    <p class="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                
                </div>
                <div class="col-lg-7">
                    <div class="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                        <form>
                        <font color="blue">{output}</font>
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">

                                    <input type="text" class="form-control border-0" value={ptitle} onChange={e => setptitle(e.target.value)} placeholder="Project Title" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="email" class="form-control border-0" value={pstream} onChange={e => setpstream(e.target.value)} placeholder="Project Stream" style={{"height": "55px"}}/>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="text-area " class="form-control border-0" value={pdescription} onChange={e => setpdescription(e.target.value)}  placeholder="Project Description" style={{"height": "55px"},{"width":"540px"}}/>
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
   
            {/* About Start */}
            <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">View & Manage Project Here!!!</h1>

<table class="table table-bordered">
<tr>
<th>ProjectTitle</th>
<th>ProjectStream</th>
<th>ProjectDescription</th>

</tr>  

{
  projectDetails.map((row)=>(
    <tr>
    <td>{row.ptitle}</td>
    <td>{row.pstream}</td>
    <td>{row.pdescription}</td>
    <td>
    <a onClick={()=>{manageProject(row._id,"delete")}} >    
    <img style={{float : 'right'}} src="./assets/img/delete.png" height="40" width="40" /></a>
    </td>
    </tr>
  ))
}

</table>

              </div>
          </div>
      </div>
      {/* About End */}
  </>
  );

}

export default Manageproject;