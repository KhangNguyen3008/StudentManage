import Role from '#models/role'
import type { HttpContext } from '@adonisjs/core/http'

export default class RolesController {
    Get = async ({response}:HttpContext) => {
        let roles = await Role.all()
        return response.send(roles)
    }
}