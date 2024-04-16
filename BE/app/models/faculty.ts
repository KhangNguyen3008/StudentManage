import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, hasManyThrough, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Contribution from './contribution.js'


export default class Faculty extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare name:string

  @manyToMany(() => User)
  declare user: ManyToMany<typeof User>

  @hasMany(()=>Contribution)
  declare contribution :HasMany<typeof Contribution>

  @column()
  declare isrequest: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}