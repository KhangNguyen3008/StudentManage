import Contribution from '#models/contribution'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Contribution.createMany([
      {
        name:'Comp 1640',
        facultyId:1,
        academicyearId:1,
        description:'new Contribution for IT'
      },
      {
        name:'Comp 1641',
        facultyId:1,
        academicyearId:2,
        description:'new Contribution for IT'
      },
      {
        name:'Comp 1642',
        facultyId:1,
        academicyearId:2,
        description:'new Contribution for IT'
      },
      {
        name:'Comp 1643',
        facultyId:1,
        academicyearId:3,
        description:'new Contribution for IT'
      },
      {
        name:'Comp 1644',
        facultyId:1,
        academicyearId:1,
        description:'new Contribution for IT'
      },
      {
        name:'Buss 1640',
        facultyId:2,
        academicyearId:1,
        description:'new Contribution for Buss'
      },
      {
        name:'Buss 1641',
        facultyId:2,
        academicyearId:2,
        description:'new Contribution for Buss'
      },
      {
        name:'Buss 1642',
        facultyId:2,
        academicyearId:3,
        description:'new Contribution for Buss'
      },
      {
        name:'Buss 1643',
        facultyId:2,
        academicyearId:3,
        description:'new Contribution for Buss'
      },
      {
        name:'Buss 1644',
        facultyId:2,
        academicyearId:1,
        description:'new Contribution for Buss'
      },
      {
        name:'Design 1640',
        facultyId:3,
        academicyearId:1,
        description:'new Contribution for Design'
      },
      {
        name:'Design 1641',
        facultyId:3,
        academicyearId:2,
        description:'new Contribution for Design'
      },
      {
        name:'Design 1642',
        facultyId:3,
        academicyearId:3,
        description:'new Contribution for Design'
      },
      {
        name:'Design 1643',
        facultyId:3,
        academicyearId:3,
        description:'new Contribution for Design'
      },
      {
        name:'Design 1644',
        facultyId:3,
        academicyearId:1,
        description:'new Contribution for Design'
      },
      {
        name:'AI 1640',
        facultyId:4,
        academicyearId:1,
        description:'new Contribution for AI'
      },
      {
        name:'AI 1641',
        facultyId:4,
        academicyearId:2,
        description:'new Contribution for AI'
      },
      {
        name:'AI 1642',
        facultyId:4,
        academicyearId:3,
        description:'new Contribution for AI'
      },
      {
        name:'AI 1643',
        facultyId:4,
        academicyearId:3,
        description:'new Contribution for AI'
      },
      {
        name:'AI 1644',
        facultyId:4,
        academicyearId:1,
        description:'new Contribution for AI'
      },
      {
        name:'IOT 1640',
        facultyId:5,
        academicyearId:1,
        description:'new Contribution for IOT'
      },
      {
        name:'IOT 1641',
        facultyId:5,
        academicyearId:2,
        description:'new Contribution for IOT'
      },
      {
        name:'IOT 1642',
        facultyId:5,
        academicyearId:3,
        description:'new Contribution for IOT'
      },
      {
        name:'IOT 1643',
        facultyId:5,
        academicyearId:3,
        description:'new Contribution for IOT'
      },
      {
        name:'IOT 1644',
        facultyId:5,
        academicyearId:1,
        description:'new Contribution for IOT'
      },
    ])
  }
}