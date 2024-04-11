import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Fileupload from './fileupload.js'
import Deadline from './deadline.js'
import Comment from './comment.js'

export default class Submission extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @belongsTo(()=>User)
  declare user : BelongsTo<typeof User>

  @column()
  declare deadlineId: number

  @belongsTo(()=>Deadline)
  declare deadline : BelongsTo<typeof Deadline>

  @column()
  declare title: string

  @column()
  declare content: string


  @hasMany(()=>Comment)
  declare comment:HasMany<typeof Comment>

  @hasMany(()=>Fileupload,{
    foreignKey:'submissionId'
  })
  declare fileupload :HasMany<typeof Fileupload>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}