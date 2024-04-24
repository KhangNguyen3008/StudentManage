import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'

import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Faculty from './faculty.js'
import Deadline from './deadline.js'
import Academicyear from './academicyear.js'
import Status from './status.js'

export default class Contribution extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string
  @column()
  declare description: string
  @column()
  declare facultyId: number
  
  @column()
  declare academicyearId:number

  @belongsTo(() => Academicyear)
  declare academicyear: BelongsTo<typeof Academicyear>
  
  @column()
  declare statusId:number

  @belongsTo(() => Status)
  declare status: BelongsTo<typeof Status>

  @belongsTo(() => Faculty)
  declare faculty: BelongsTo<typeof Faculty>

  @hasMany(() => Deadline)
  declare deadline: HasMany<typeof Deadline>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}