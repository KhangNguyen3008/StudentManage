import instance from "@/data/Instance"

export default  {
    getUser : ()=> instance.get('/user') ,
    createUser : (formdata)=> instance.post('/user',formdata) ,
    deleteUser : (id)=> instance.delete(`/user/${id}`) 
}