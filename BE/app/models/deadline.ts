import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Contribution from './contribution.js'
import Submission from './submission.js'

export default class Deadline extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare closureDate: DateTime

  @column()
  declare finalclosureDate: DateTime

  @column()
  declare contributionId: number

  @belongsTo(()=> Contribution)
  declare contribution: BelongsTo<typeof Contribution>

  @hasMany(()=>Submission)
  declare submission: HasMany<typeof Submission>
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}