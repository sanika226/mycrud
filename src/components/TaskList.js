import React, { useState,useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import '../css/tasklist.css'
import UserService from '../service/UserService';
import Select from 'react-select'


function TaskList() {
  // const {id}=useParams();
  const [taskList,setTaskList]=useState([]);
  const [updateTask,setUpdateTask]=useState([]);

  const [id,setId]=useState("");

  useEffect(()=>{
  UserService.getAllData("/tasks/getAllData")
  .then((response)=>{
    setTaskList(response.data);
    console.log(response);
  })
  .catch((error)=>{
    console.log(error);
  })
  },[])

  const getTask=(_id)=>{
    setId(_id);
  }

  const handleInputChange=(e,_id)=>{
    setUpdateTask({...updateTask,[e.target.name]:e.target.value})
  }

  const handleEdit=(_id)=>{
    console.log(_id);
    const {taskName,taskInfo}=updateTask
    UserService.updateData(`/tasks/updateData`,id,{taskName,taskInfo})
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error);
    })
    window.location.reload();
  }

  const handleDelete=(_id)=>{
    console.log(_id);
    UserService.deleteData(_id)
    
    .then((response)=>{
      console.log(response)  
      
    })
    .catch((error)=>{
      console.log(error)
    })
}

  // const [options,setOptions]=useState([]);
 const OptionsData =[]
taskList.map((currElem,i)=>{
  const {taskName,taskInfo} =currElem
  return (OptionsData[i]={ value:`${taskName}`,label:`${taskName}`})
})
  const Options=OptionsData;

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  // const searchData=()=>{
  // UserService.getData("/task/getData/")
  // .then((response)=>{
  //   // setOptions(response.data)
  //   console.log(response);
  // })
  // .catch((error)=>{
  //   console.log(error);
  // })
  // }

 
  
    return (
        <div className="body-tasklist bg">
            <h3>Welcome to Task</h3>
            <div class="input-group mb-3 p-5">
  <input type="text" class="form-control" placeholder="Tasks" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <Link to="/AddTask" class="btn btn-info" type="button" id="button-addon2">Add Task</Link>
</div>


<div class="mb-3 p-5">

<Select options={Options} />
           {/* {taskList.map((currElem,i) => (
             const {taskName,taskInfo}=currElem
             return ()
             {label:option.taskName,value:option.taskInfo}
            ))} 
           */}

  </div>

  {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button> */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="text" class="col-form-label">Task Name</label>
            <input type="text" class="form-control" id="recipient-name" name="taskName" value={updateTask.taskName} onChange={handleInputChange}/>
          </div>
          <div class="mb-3">
            <label for="taxt" class="col-form-label">Task Info</label>
            <input class="form-control" id="message-text" name="taskInfo" value={updateTask.taskInfo} onChange={handleInputChange}/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <Link  type="button" class="btn btn-primary" onClick={handleEdit}>Update Task</Link>
      </div>
    </div>
  </div>
</div>




<h2>Tasklist</h2>
<table className=" container table m-4">
  <thead>
    <tr>
      
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {/* {taskList.map((element,id)=>(
     <tr key={id}>
      <td>{element.taskName}</td>
      <td>{element.taskInfo}</td>
      <td><button className="btn" onClick={()=>handleEdit} >Edit</button></td>
      <td><button className="btn" onClick={()=>handleDelete} >Delete</button></td>
})}

       */}
{taskList.map((currElem,index)=>{
  const {_id,taskName,taskInfo}=currElem;
  return(
    <tr key={id}>

    <td>{taskName}</td>
    <td>{taskInfo}</td>
    <td><button  className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>getTask(_id)} >Edit</button></td>
    <td><button className="btn" onClick={()=>handleDelete(_id)} >Delete</button></td>

     </tr>
   )})}
  </tbody>
</table>

        </div>
    )
}

export default TaskList

