import instance from "@/data/Instance"

export default  {
    getSubmission : ()=> instance.get('/submission') ,
    createSubmission : (formdata)=> instance.post('/submission',formdata) ,

    updateSubmission : (formdata)=> instance.post('/submission',formdata) ,
    deleteSubmission : (id)=> instance.delete(`/submission/${id}`) ,
    getSubmissionBydeadline : (id)=> instance.get(`/submission/getbydeadline/${id}`)
}