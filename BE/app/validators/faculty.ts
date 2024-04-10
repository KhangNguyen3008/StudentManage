import vine from '@vinejs/vine'
import { dateTimeRule } from './dateTimeRule.js'
import { VineDateTime } from './dateTimeSchema.js'
export const PostFacultyForm = vine.compile(
    vine.object({
        name:vine.string(),
        userid:vine.number(),
        // closuredate: new VineDateTime,
        // finalclosuredate:new VineDateTime,
    })

)