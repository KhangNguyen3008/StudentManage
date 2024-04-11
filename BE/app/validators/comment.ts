import vine from '@vinejs/vine'
import { exists } from './helpers/db.js'
import Submission from '#models/submission'

export const PostCommenttForm = vine.compile(
    vine.object({
        submissionid:vine.number().exists(exists(Submission.table,Submission.primaryKey)),
        content:vine.string(),

    })

)