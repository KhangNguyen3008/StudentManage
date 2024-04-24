import vine from '@vinejs/vine'
import { exists } from './helpers/db.js'
import Faculty from '#models/faculty'
export const PostUserForm = vine.compile(
    vine.object({
        fullname:vine.string(),
        email: vine.string().email(),
        facultyid:vine.number().exists(exists(Faculty.table,Faculty.primaryKey)),
        role:vine.number().positive()
    })

)
export const PutUserForm = vine.compile(
    vine.object({
        fullname:vine.string(),
        email: vine.string().email(),
        password:vine.string(),
        facultyid:vine.number().exists(exists(Faculty.table,Faculty.primaryKey)),
        role:vine.number().positive()
    })

)