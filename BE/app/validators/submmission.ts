import vine from '@vinejs/vine'
import { exists } from './helpers/db.js'
import Submission from '#models/submission'
import Deadline from '#models/deadline'

export const PostSubmissionForm = vine.compile(
    vine.object({
        content:vine.string(),
        deadlineid:vine.number().exists(exists(Deadline.table,Deadline.primaryKey)),
        title:vine.string(),
        file:vine.array(vine.file({extnames:['png','jpg','docx','doc','pdf']})) ,
    })

)

export const PutSubmissionForm = vine.compile(
    vine.object({
        content:vine.string(),
        deadlineid:vine.number().exists(exists(Deadline.table,Deadline.primaryKey)),
        title:vine.string(),
        file:vine.array(vine.file({extnames:['png','jpg','docx','doc','pdf']})).optional() ,
    })

)