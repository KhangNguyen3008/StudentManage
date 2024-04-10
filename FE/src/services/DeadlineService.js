import instance from "@/data/Instance"

export default  {
    getDeadline : ()=> instance.get('/deadline') ,
    createDeadline : (formdata)=> instance.post('/deadline',formdata) ,
    updateDeadline : (formdata)=> instance.post('/deadline',formdata) ,
    deleteDeadline : (id)=> instance.delete(`/deadline/${id}`) ,
    getDeadlineById : (id)=> instance.get(`/deadline/${id}`) ,
}