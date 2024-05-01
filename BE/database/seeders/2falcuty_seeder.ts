import Faculty from '#models/faculty'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Faculty.createMany([
      {
        name:'IT',
        isrequest:false,
        // closureDate: DateTime.now().plus({days:6}),
        // finalclosureDate: DateTime.now().plus({days:7})
      },
      {
        name:'Bussiness',
        isrequest:false,
  
      },
      {
        name:'Design',
        isrequest:false,
  
      },
      {
        name:'AI',
        isrequest:false,
  
      },
      {
        name:'IOT',
        isrequest:false,
  
      }
    ])
  }
}