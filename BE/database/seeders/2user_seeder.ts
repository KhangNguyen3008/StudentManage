import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '../../app/Enum/Roles.js'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email:'admin@gmail.com',
        password:'passwordtest',
        roleId:Roles.ADMIN,
        fullName:'admin'
      },
      {
        email:'mm@gmail.com',
        password:'passwordtest',
        roleId:Roles.MAKETING_MANAGER,
        fullName:'marketing manager'
      },
      {
        email:'mc@gmail.com',
        password:'passwordtest',
        roleId:Roles.MAKETING_COORDINATOR,
        fullName:'marketing coordinator'
      },
      {
        email:'student@gmail.com',
        password:'passwordtest',
        roleId:Roles.STUDENT,
        fullName :'student'
      }
    ])
  }
}