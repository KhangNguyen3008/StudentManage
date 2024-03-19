import vine from '@vinejs/vine'
export const PostFacultyForm = vine.compile(
    vine.object({
        name:vine.string(),
    })

)