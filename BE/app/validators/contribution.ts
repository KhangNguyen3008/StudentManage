import Faculty from '#models/faculty'
import vine from '@vinejs/vine'
import { exists } from './helpers/db.js'
import { VineDateTime } from './dateTimeSchema.js'
import Academicyear from '#models/academicyear'
import Status from '#models/status'



export const PostContributionForm = vine.compile(
    vine.object({
        facultyid:vine.number().exists(exists(Faculty.table,Faculty.primaryKey)),
        // file:vine.file({extnames:['png','jpg','docs']}),
        name:vine.string(),
        description:vine.string().nullable(),
        academicyear:vine.number().exists(exists(Academicyear.table,Academicyear.primaryKey)),
        statusid:vine.number().exists(exists(Status.table,Status.primaryKey)),
        // content:vine.string() 

    })

)