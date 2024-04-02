import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '../../app/Enum/Roles.js'
import Role from '#models/role'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      {
        id:Roles.ADMIN,
        name:'ADMIN'
      },
      {
        id:Roles.MAKETING_MANAGER,
        name:'MAKETING_MANAGER'
      },
      {
        id:Roles.MAKETING_COORDINATOR,
        name:'MAKETING_COORDINATOR'
      },
      {
        id:Roles.STUDENT,
        name:'STUDENT'
      },
      {
        id:Roles.GUEST,
        name:'GUEST'
      }
    ])
  }
}