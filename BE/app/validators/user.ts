import vine from '@vinejs/vine'
export const PostUserForm = vine.compile(
    vine.object({
        fullname:vine.string(),
        email: vine.string().email(),
        password: vine.string().minLength(8),
        role:vine.number().positive()
    })

)