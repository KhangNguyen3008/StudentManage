import Comment from '#models/comment'
import { PostCommenttForm } from '#validators/comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
    Get = async ({ response }: HttpContext) => {
        let comment = await Comment.query().preload('user').preload('submission')
        return response.send(comment)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let comment = await Comment.query().where('id', id).preload('submission').preload('user').first()
        return response.send(comment)
    }
    GetBySubId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let comment = await Comment.query().where('id', id).preload('submission').preload('user').first()
        return response.send(comment)
    }
    Post = async ({ response, request,auth }: HttpContext) => {
        const payload = await request.validateUsing(PostCommenttForm)
        const comment = new Comment()
        comment.content = payload.content
        comment.userId = auth.user?.id ||-1
        comment.submissionId = payload.submissionid

        await comment.save()

        return comment

    }

    Put = async ({ response, request,auth }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostCommenttForm)
        const comment = await Comment.find(id)
        if (!comment) {
            return response.status(422).send({
                errors:[{
                    message:`Faculty not found`
                }]
            })  
        }
        comment.content = payload.content
        comment.userId = auth.user?.id ||-1
        comment.submissionId = payload.submissionid

        await comment.save()
        return comment

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const comment = await Comment.find(id)
        if (!comment) {
            return response.status(422).send({
                errors:[{
                    message:'Username Not Found'
                }]
            })
        }
        await comment.delete()

        return ['', 200]

    }
}