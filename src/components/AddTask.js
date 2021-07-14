import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../css/Addtask.css'
import UserService from '../service/UserService';

function AddTask() {
  let history=useHistory();
  const [task,setTask]=useState({
     taskName:"",
     taskInfo:""
  });
 
const handleSubmit=(e)=>{
  setTask({...task,[e.target.name]:e.target.value})
}

  const handleInputSubmit=()=>{
    const {taskName,taskInfo}=task
    UserService.saveUser("/tasks",task)
    
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
    history.push("/tasklist");
  }
    return (
        <div>
          <section className="container-fluid bg3">
            <section className="row justify-content-center">
              <section className="col-lg-7 col-md-9 col-sm-12 col-xs-12"> 
              <form className="formaddtask">
<div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are You Sure To Save Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      {/* <div class="modal-body">
      </div> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <Link to="/TaskList" type="button" class="btn btn-primary" onClick={handleInputSubmit}>Save Task</Link>
      </div>
    </div>
  </div>
</div>
      
            <h3>Add Task</h3>
            <legend className="">Task Name</legend>
            <input type="text" placeholder="Task Name" name="taskName" value={task.taskname} onChange={handleSubmit}/><br></br><br></br>
            <legend>Task Info </legend>
            <input type="text" placeholder="Task Info" name="taskInfo" value={task.taskinfo} onChange={handleSubmit} /><br></br><br></br>

            <Link  className="btn btn-info m-4"   data-bs-toggle="modal" data-bs-target="#add">Add Task</Link>
            
            </form>
            </section>
            </section>
            </section>
        </div>
    )
}

export default AddTask
