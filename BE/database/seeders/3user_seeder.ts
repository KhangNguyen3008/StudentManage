import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '../../app/Enum/Roles.js'
import Faculty from '#models/faculty'

export default class extends BaseSeeder {
  async run() {
    let user = await User.createMany([
      {
        email: 'admin@gmail.com',
        password: 'passwordtest',
        roleId: Roles.ADMIN,
        fullName: 'Admin',

      },
      {
        email: 'mm@gmail.com',
        password: 'passwordtest',
        roleId: Roles.MARKETING_MANAGER,
        fullName: 'Marketing Manager',

      },
      {
        email: 'anhtgcs18069@fpt.edu.vn',
        password: 'passwordtest',
        roleId: Roles.MARKETING_COORDINATOR,
        fullName: 'Marketing Coordinator',

      },
      {
        email: 'co1@gmail.com',
        password: 'passwordtest',
        roleId: Roles.MARKETING_COORDINATOR,
        fullName: 'Marketing Coordinator',

      },
      {
        email: 'co2@gmail.com',
        password: 'passwordtest',
        roleId: Roles.MARKETING_COORDINATOR,
        fullName: 'Marketing Coordinator',

      },
      {
        email: 'co3@gmail.com',
        password: 'passwordtest',
        roleId: Roles.MARKETING_COORDINATOR,
        fullName: 'Marketing Coordinator',

      },
      {
        email: 'co4@gmail.com',
        password: 'passwordtest',
        roleId: Roles.MARKETING_COORDINATOR,
        fullName: 'Marketing Coordinator',

      },
      {
        email: 'co5@gmail.com',
        password: 'passwordtest',
        roleId: Roles.MARKETING_COORDINATOR,
        fullName: 'Marketing Coordinator',

      },
      {
        email: 'student1@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student2@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student3@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student4@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student5@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student6@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student7@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student8@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student9@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student10@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student11@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student12@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student13@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student14@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student15@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student16@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student17@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student18@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student19@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student20@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student21@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student22@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student23@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student24@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'student25@gmail.com',
        password: 'passwordtest',
        roleId: Roles.STUDENT,
        fullName: 'Student',

      },
      {
        email: 'guest1@gmail.com',
        password: 'passwordtest',
        roleId: Roles.GUEST,
        fullName: 'Guest',

      },
      {
        email: 'guest2@gmail.com',
        password: 'passwordtest',
        roleId: Roles.GUEST,
        fullName: 'Guest',

      },
      {
        email: 'guest3@gmail.com',
        password: 'passwordtest',
        roleId: Roles.GUEST,
        fullName: 'Guest',

      },    {
        email: 'guest4@gmail.com',
        password: 'passwordtest',
        roleId: Roles.GUEST,
        fullName: 'Guest',

      },    {
        email: 'guest5@gmail.com',
        password: 'passwordtest',
        roleId: Roles.GUEST,
        fullName: 'Guest',

      }
    ])
    
  }
}