import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Contribution from './contribution.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Academicyear extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime()
  declare beginDate: DateTime

  @column.dateTime()
  declare endDate: DateTime

  @column()
  declare description: string
  @hasMany(()=>Contribution)
  declare contribution :HasMany<typeof Contribution>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}