import Faculty from '#models/faculty'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Faculty.createMany([
      {
        name:'IT',
        userId:3,
        isrequest:false,
        // closureDate: DateTime.now().plus({days:6}),
        // finalclosureDate: DateTime.now().plus({days:7})
      },
      {
        name:'Bussiness',
        userId:3,
        isrequest:false,
  
      }
    ])
  }
}