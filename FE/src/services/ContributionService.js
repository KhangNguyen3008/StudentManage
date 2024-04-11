import instance from "@/data/Instance"

export default  {
    getContribution : ()=> instance.get('/contribution') ,
    downloadfile : (id)=> instance.get(`/contribution/download/${id}`,{ responseType: 'blob' }) ,
    createContribution : (formdata)=> instance.post('/contribution',formdata) ,
    deleteContribution : (id)=> instance.delete(`/contribution/${id}`) ,
    getContributionById : (id)=> instance.get(`/contribution/${id}`) ,
    getContributionByFacId : (id)=> instance.get(`/contribution/fac/${id}`), 
    getContributionByStudent : (id)=> instance.get(`/contribution/student/${id}`) 
}