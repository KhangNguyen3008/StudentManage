import Faculty from '#models/faculty'
import vine from '@vinejs/vine'
import { exists } from './helpers/db.js'


export const PostContributionForm = vine.compile(
    vine.object({
        facultyid:vine.number().exists(exists(Faculty.table,Faculty.primaryKey)),
        // file:vine.file({extnames:['png','jpg','docs']}),
        name:vine.string(),
        description:vine.string().nullable(),
        // content:vine.string() 

    })

)