import vine from '@vinejs/vine'
import { VineDateTime } from './dateTimeSchema.js'
import { exists } from './helpers/db.js'
import Contribution from '#models/contribution'
export const PostDeadlineForm = vine.compile(
    vine.object({
        name:vine.string(),
        contributionid:vine.number().exists(exists(Contribution.table,Contribution.primaryKey)),
        description:vine.string().nullable(),
        closuredate: new VineDateTime,
        finalclosuredate:new VineDateTime,
    })

)