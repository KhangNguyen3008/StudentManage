import instance from "@/data/Instance"

export default  {
    getDeadline : ()=> instance.get('/deadline') ,
    createDeadline : (formdata)=> instance.post('/deadline',formdata) ,
    updateDeadline : (id,formdata)=> instance.put(`/deadline/${id}`,formdata) ,
    deleteDeadline : (id)=> instance.delete(`/deadline/${id}`) ,
    getDeadlineById : (id)=> instance.get(`/deadline/${id}`) ,
}