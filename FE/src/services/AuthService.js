import instance from "@/data/Instance"

export default  {
    login : (formdata)=> instance.post('/auth/login',formdata) ,
    profile : ()=> instance.get('/auth/profile') ,
}