import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Deadline from './deadline.js'
import Submission from './submission.js'

export default class Fileupload extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare submissionId: number

  @belongsTo(() => Submission)
  declare submission: BelongsTo<typeof Submission>

  @column()
  declare filePath: string
  
  @column()
  declare fileName: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}