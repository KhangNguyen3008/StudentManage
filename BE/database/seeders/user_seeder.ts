import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '../../app/Enum/Roles.js'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email:'admin@gmail.com',
        password:'passwordtest',
        roleId:Roles.ADMIN
      },
      {
        email:'mm@gmail.com',
        password:'passwordtest',
        roleId:Roles.MAKETING_MANAGER
      },
      {
        email:'mc@gmail.com',
        password:'passwordtest',
        roleId:Roles.MAKETING_COORDINATOR
      },
      {
        email:'student@gmail.com',
        password:'passwordtest',
        roleId:Roles.STUDENT
      }
    ])
  }
}