import vine from '@vinejs/vine'
import { VineDateTime } from './dateTimeSchema.js'
export const PostAcademicyearForm = vine.compile(
    vine.object({
        name:vine.string(),
        description:vine.string().nullable(),
        begindate:new VineDateTime,
        enddate:new VineDateTime
        // content:vine.string() 

    })

)