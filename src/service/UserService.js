import http from '../http-common'


const saveUser =(url,data)=>{
    return http.post(`${url}`,data)
}

const getData=(url,data)=>{
    return http.get(`${url}`,data)
}

const getAllData=(url)=>{
    return http.get(`${url}`)
}

const updateData=(url,id,data)=>{
    return http.put(`${url}/${id}`,data)
}

const deleteData=(id)=>{
    return http.delete(`/tasks/deleteData/${id}`)
}

export default {saveUser,getData, getAllData,updateData,deleteData};