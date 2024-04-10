import Fileupload from '#models/fileupload'
import Submission from '#models/submission'
import { PostSubmissionForm } from '#validators/submmission'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class SubmmissionsController {
    Get = async ({ response }: HttpContext) => {
        let submission = await Submission.query().preload('user')
        return response.send(submission)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().where('id', id).preload('user').first()
        return response.send(submission)
    }
    GetByDeadlineId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().preload('fileupload').preload('user').where('deadline_id',id)
        return response.send(submission)
    }
    DownloadFile = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().where('id', id).preload('deadline',x=>x.preload('submission',z=>z.preload('fileupload'))).first()


        return response.send(submission)
    }
    Post = async ({ response, request, auth }: HttpContext) => {
        const payload = await request.validateUsing(PostSubmissionForm)
        const submission = new Submission()
        submission.title = payload.title
        submission.content = payload.content
        submission.deadlineId = payload.deadlineid
        submission.userId = auth.user?.id || -1
      


        payload.file.map(async (x) => {
            await x.move(app.makePath('public/uploads'))
            const fileupload = new Fileupload()
            fileupload.fileName = x.fileName || "image"
            fileupload.filePath = `/public/uploads/${x.fileName}` || ""
            fileupload.submissionId = submission.id
            await submission.related('fileupload').create(fileupload)
        })
        await submission.save()

        return submission

    }

    // Put = async ({ response, request }: HttpContext) => {
    //     const id = request.param('id')
    //     const payload = await request.validateUsing(PostFacultyForm)
    //     const faculty = await Faculty.find(id)
    //     if (!faculty) {
    //         return response.status(400).send(`Faculty not found`)
    //     }
    //     faculty.name = payload.name
    //     faculty.userId = payload.userid

    //     await faculty.save()
    //     return faculty

    // }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(400).send(`submission not found`)
        }
        await submission.delete()

        return ['', 200]

    }
}