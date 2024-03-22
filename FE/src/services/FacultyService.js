import instance from "@/data/Instance"

export default  {
    getFaculty : ()=> instance.get('/faculty') ,
    createFaculty : (formdata)=> instance.post('/faculty',formdata) ,
    deleteFaculty : (id)=> instance.delete(`/faculty/${id}`) 
}