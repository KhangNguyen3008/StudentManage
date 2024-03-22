import Faculty from '#models/faculty'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Faculty.createMany([
      {
        name:'IT',
        userId:3,
        isrequest:false
      },
      {
        name:'Bussiness',
        userId:3,
        isrequest:false
      }
    ])
  }
}