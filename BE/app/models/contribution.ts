import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Faculty from './faculty.js'

export default class Contribution extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare filePath: string
  @column()
  declare fileName: string
  @column()
  declare userId: number
  @column()
  declare title: string
  @column()
  declare content: string
  @belongsTo(()=>User)
  declare user : BelongsTo<typeof User>

  @column()
  declare facultyId: number

  @belongsTo(()=>Faculty)
  declare faculty : BelongsTo<typeof Faculty>
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}