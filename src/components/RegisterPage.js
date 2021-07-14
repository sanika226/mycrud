import React,{useState} from 'react'
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'
import validate from './validation';
import '../css/Registerpage.css';
import UserService from '../service/UserService';
function RegisterPage() {
  
 let history=useHistory();
   const [values,setvalues]=useState({
     name:"",
     email:"",
     password:"",
     cnfrmpassword:"",
     file:""
   })
    const [error,setError]=useState({})
    
   
     const handleChange=(e)=>{
      const {name,value}=e.target 
      setvalues({...values,[name]:value})
    }


    const handlesubmit=(e)=>{
      e.preventDefault();
      setError(validate(values))
    }

   const handleInputsubmit=()=>{
     const {name,email,password,cnfrmpassword,file}=values
   UserService.saveUser("/users",values)
  
    .then((response)=>{
    console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
    history.push("/");
    }
    
    return (
        <div>
         
<section className="container-fluid bg1">
  <section className="row justify-content-center">
    <section className="col-lg-7 col-md-9 col-sm-12 col-xs-12">
      <form className="form">

<div class="modal fade" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are You Sure to countinue</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
        <Link to="/LogIn" type="button" class="btn btn-primary" onClick={handleInputsubmit}>Save changes</Link>
       </div>
   </div> 
   </div>
 </div> 

             
                 <legend className="text-center fw-bold text-uppercase">Register</legend>
             <div className="mb-5 px-4">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="id"
   class="form-control"
   id="exampleFormControlInput1"
   placeholder="Enter your Name"
   name="name"
   value={values.name}
   onChange={handleChange}

  />
  <br/>
  {error.name &&
    <h1 color='secondary'>
           {error.name}
    </h1>}

  
  
</div>  
<div className="mb-5 px-4">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="id"
   class="form-control"
   id="exampleFormControlInput1"
   placeholder="Enter your Email"
   name="email"
   value={values.email}
   onChange={handleChange}
   
  />
  <br/>
  {error.email &&
    <h1 color='secondary'>
           {error.email}
    </h1>}
</div>  
<div className="mb-5 px-4">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="id"
   class="form-control"
   id="exampleFormControlInput1"
   placeholder="Enter your Password"
   name="password"
   value={values.password}
   onChange={handleChange}
   
  />
  <br/>
  {error.password &&
    <h1 color='secondary'>
           {error.password}
    </h1>}
</div>  
            <div className="mb-5 px-4">
  <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
  <input type="name"
   class="form-control"
   id="exampleFormControlInput1"
   placeholder="Enter your Confirm Password"
   name="cnfrmpassword"
   value={values.cnfrmpassword}
   onChange={handleChange}
   />
   <br/>
    {error.cnfrmpassword &&
    <h1 className="" color='secondary'>
           {error.cnfrmpassword}
    </h1>}
</div>

<div class="mb-3">
  <label for="formFile" class="form-label">Upload Your Resume</label>
  <input class="form-control" type="file" id="formFile" name="file" value={values.file} onChange={handleChange}/>
  <br/>
  {error.file &&
  <h1 className="" color="secondary">
    {error.file}
    </h1>}
</div>

<button onClick={handlesubmit} className="btn btn-info" data-bs-toggle="modal" data-bs-target="#register">Submit</button>

        
        </form>
        </section>
        </section>
        </section>
        </div>
    )
}
export default RegisterPage;
