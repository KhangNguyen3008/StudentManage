import { DateTime } from 'luxon'
import { BaseModel, afterSave, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Fileupload from './fileupload.js'
import Deadline from './deadline.js'
import Comment from './comment.js'
import Contribution from './contribution.js'
import Faculty from './faculty.js'
import mail from '@adonisjs/mail/services/main'
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

  @afterSave()
  public static async Sendmail (submission:Submission) {

    const contribution = await Contribution.query().where(x=>x.preload('deadline').where('id',submission.deadlineId).first()).preload('deadline',x=>x.where('id',submission.deadlineId).first()).first()
    const faculty = await Faculty.query().where(x=>x.preload('contribution').where('id',contribution?.facultyId||-1)).preload('user').first()
    const newsubmission = await Submission.query().where('id',submission.id).preload('user').first()
    await mail.send((message) => {
        message 
          .to(faculty?.user?.email|| '')
          .from('WET@fpt.edu.vn')
          .subject('new Submission')
          .html(`${newsubmission?.user.fullName} was submited in deadline ${contribution?.deadline[0].name} <a href="http://localhost:3000/coordinator/submission/detail/${submission.deadlineId}">Click this link to view submission</a>`)
          
          
      })
  }
}