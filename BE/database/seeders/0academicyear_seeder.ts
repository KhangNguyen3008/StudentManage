import Academicyear from '#models/academicyear'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Academicyear.createMany([

      {
        name: '2021 - 2022',
        beginDate: DateTime.fromISO("2021-01-01"),
        endDate: DateTime.fromISO("2022-01-01")
      },
      {
        name: '2022 - 2023',
        beginDate: DateTime.fromISO("2022-01-01"),
        endDate: DateTime.fromISO("2023-01-01")
      }, 
      {
        name: '2023 - 2024',
        beginDate: DateTime.fromISO("2023-01-01"),
        endDate: DateTime.fromISO("2024-01-01")
      }, 

    ])
  }
}