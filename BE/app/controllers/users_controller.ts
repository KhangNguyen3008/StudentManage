import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    Get = async ({response}:HttpContext) => {
        let user = await User.query().preload('role')        
        return response.send(user)
    }
}