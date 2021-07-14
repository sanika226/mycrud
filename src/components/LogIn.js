import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/Login.css'
import './Navbar'
import axios from 'axios'

function LogIn(){
    const [employee,setEmployee]=useState([]);
   
    // useEffect(()=>{ 
    //     axios 
    //     .get("http://localhost:8787/api/users")
    //     .then((response)=>{
    //         setEmployee(response.data);
    //         console.log(response);
    //     })
    // },[]);
   
    return (
        <div>
            <section className="container-fluid bg">
                <section className="row justify-content-center">
                    <section className="col-lg-7 col-md-9 col-sm-12 col-xs-12">
                        <form className="form-container ">
                        <div class="mb-3">
                            <h2>Log In</h2>
  <label for="exampleFormControlInput1" class="form-label">Name/UserName</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">password</label>
  <input class="form-control" id="exampleFormControlTextarea1" placeholder="Enter your password"/>
</div>
        

<Link to={`/TaskList`} className="btn btn-primary">Log In</Link><br></br><br></br>
 <Link to={`/RegisterPage`} className="btn btn-info">Register Here</Link>
 <Link to={`/Home`}></Link>


                        </form>

                    </section>

                </section>

            </section>




























        {/* <div className="body">
            <fieldset>
             <form className="">
                 <legend className="text-center fw-bold text-uppercase">Log In</legend>
             <div className="">
  <label for="exampleFormControlInput1" class="form-label">Email/User Name</label>
  <input type="id"
   class="form-control"
   id="exampleFormControlInput1"
   placeholder="Enter Email/User Name"
   name="id"
 />

</div>  
            <div className="">
  <label for="exampleFormControlInput2" class="form-label">Password</label>
  <input type="id"
   class="form-control"
   id="exampleFormControlInput2"
   placeholder="Enter your Password"
   name="id"
/>
</div><br/>

<div>
 <Link to={`/TaskList`} className="btn btn-dark">Log In</Link><br></br><br></br>
 <Link to={`/RegisterPage`} className="btn btn-secondary">Register Here</Link>
 <Link to={`/Home`}></Link>
 </div>
 
 </form>
 </fieldset>
 </div>
 
 */}

        
        </div>
    )
}

export default LogIn
