import Faculty from '#models/faculty'
import vine from '@vinejs/vine'
import { exists } from './helpers/db.js'


export const PostContributionForm = vine.compile(
    vine.object({
        facultyid:vine.number().exists(exists(Faculty.table,Faculty.primaryKey)),
        file:vine.file({extnames:['png','jpg','docs']}),
        title:vine.string(),
        content:vine.string() 

    })

)