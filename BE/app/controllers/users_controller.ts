import User from '#models/user'
import { PostUserForm } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import Roles from '../Enum/Roles.js'

export default class UsersController {
    Get = async ({response}:HttpContext) => {
        let user = await User.query().preload('role')        
        return response.send(user)
    }
    Getmc = async ({response}:HttpContext) => {
        let user = await User.query().preload('role').where('role_id',Roles.MAKETING_COORDINATOR)     
        return response.send(user)
    }
    GetById = async ({response,request}:HttpContext) => {
        const id = request.param('id')
        let user = await User.query().where('id',id).preload('role').first()        
        return response.send(user)
    }
    Post = async ({response,request}:HttpContext) => {
        const payload = await request.validateUsing(PostUserForm)
        if(await User.findBy('email',payload.email)){
            return ['User exits',400]
        }
        const user = new User()
        user.fullName = payload.fullname
        user.email = payload.email
        user.password = payload.password
        user.roleId = payload.role
        await user.save()
        
        return user
        
    }
    Put = async ({response,request}:HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostUserForm)
        const user = await User.find(id)
        if(!user){
            return response.status(400).send(`User not found`) 
        }
        user.fullName = payload.fullname
        user.email = payload.email
        user.password = payload.password
        user.roleId = payload.role
        await user.save()
        return user
        
    } 
    Delete = async ({response,request}:HttpContext) => {
        const id = request.param('id')
        const user = await User.find(id)
        if(!user){
            return response.status(400).send(`User not found`) 
        }
        await user.delete()
        
        return ['',200]
        
    } 

}