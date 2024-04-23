import User from '#models/user'
import { PostUserForm } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import Roles from '../Enum/Roles.js'
import mail from '@adonisjs/mail/services/main'
import Faculty from '#models/faculty'

function generateRandomPassword(length: number): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
export default class UsersController {
    Get = async ({ response }: HttpContext) => {
        let user = await User.query().preload('role')
        return response.send(user)
    }
    Getmc = async ({ response }: HttpContext) => {
        let user = await User.query().preload('role').where('role_id', Roles.MARKETING_COORDINATOR)
        return response.send(user)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let user = await User.query().where('id', id).preload('role').first()
        return response.send(user)
    }
    Post = async ({ response, request }: HttpContext) => {
        const payload = await request.validateUsing(PostUserForm)
        if (await User.findBy('email', payload.email)) {
            return ['User exits', 400]
        }
        let randompass = generateRandomPassword(10)
        const user = new User()
        user.fullName = payload.fullname
        user.email = payload.email
        user.password =randompass


        user.roleId = payload.role
        await user.save()
        await mail.send((message) => {
            message
                .to(user?.email || '')
                .from('WET@fpt.edu.vn')
                .subject('Your password')
                .html(`your password is ${randompass} <a href="http://localhost:3000/login">Click this link to Login</a>`)

        })
        let faculty = await Faculty.find(payload.facultyid)
        if(faculty){
            user.related('faculty').attach([faculty.id])
        }
        
        return user

    }
    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostUserForm)
        const user = await User.find(id)
        if (!user) {
            return response.status(422).send({
                errors: [{
                    message: `User not found`
                }]
            })

        }
        user.fullName = payload.fullname
        user.email = payload.email
        // if (!(user.password === payload.password)) {
        //     user.password = payload.password
        // }
        user.roleId = payload.role
        await user.save()
        return user

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const user = await User.find(id)
        if (!user) {
            return response.status(422).send({
                errors: [{
                    message: `User not found`
                }]
            })
        }
        await user.delete()

        return ['', 200]

    }

}