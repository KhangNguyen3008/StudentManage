import instance from "@/data/Instance"
const token = localStorage.getItem('token')
export default {
    login: (formdata) => instance.post('/auth/login', formdata),
    profile: () => instance.get('/auth/profile', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }),
}