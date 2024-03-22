import instance from "@/data/Instance"

export default  {
    getUser : ()=> instance.get('/user') ,
    getUserMc : ()=> instance.get('/user/mc') ,
    createUser : (formdata)=> instance.post('/user',formdata) ,
    deleteUser : (id)=> instance.delete(`/user/${id}`) 
}