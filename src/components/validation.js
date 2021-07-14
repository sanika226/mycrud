import React from 'react'

function validation(values) {
 let error={}
const {name,email,password,cnfrmpassword}=values

if(!values.name){
    error.name="Please fill the field"
}
else if(name.length < 2 || name.length > 20){
        error.name="Name should between 2 to 20 letters"
 }
   
    if(!values.email){
        error.email="please fill the field "
    }
    else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        error.email="Invallid email address"
    }

    if(!values.password){
        error.password=" please fiil the field"
    }
    else if(password.length < 5 || password.length > 20){
        error.password="password must between 5 to 20 characters"
    }

    if(!values.cnfrmpassword){
        error.cnfrmpassword="please fill the field"
    }
    else if(values.cnfrmpassword !== values.password){
        error.cnfrmpassword="password is incorrect"
    }

    if(!values.file){
        error.file="please choose the file"
    }
    return error;
}

export default validation
