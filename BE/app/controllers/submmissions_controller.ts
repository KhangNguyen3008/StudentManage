import  fs  from 'fs';
import Contribution from '#models/contribution'
import Deadline from '#models/deadline'
import Faculty from '#models/faculty'
import Fileupload from '#models/fileupload'
import Submission from '#models/submission'
import { PostSubmissionForm, PutSubmissionForm, PutSubmissionStatusForm } from '#validators/submmission'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class SubmmissionsController {
    Get = async ({ response,auth }: HttpContext) => {
        let submission =  Submission.query().preload('user').preload('comment').preload('fileupload')
        if(auth.isAuthenticated){
            if(auth.user?.roleId ==4 || auth.user?.roleId==5 ){
                submission.where('status_id',2)
            }
        }
        let submission1 = await submission
        return response.send(submission1)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().where('id', id).preload('fileupload').preload('user').first()
        return response.send(submission)
    }
    GetByDeadlineId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().preload('fileupload').preload('user').preload('comment').where('deadline_id',id)
        return response.send(submission)
    }

    Post = async ({ response, request, auth }: HttpContext) => {
        const payload = await request.validateUsing(PostSubmissionForm)
        const submission = new Submission()
        submission.title = payload.title
        submission.content = payload.content
        submission.deadlineId = payload.deadlineid
        submission.userId = auth.user?.id || -1
        submission.statusId = 1


        payload.file.map(async (x) => {
            await x.move(app.makePath('public/uploads'))
            const fileupload = new Fileupload()
            fileupload.fileName = x.fileName || "image"
            fileupload.filePath = x.filePath || ""
            fileupload.submissionId = submission.id
            await submission.related('fileupload').create(fileupload)
        })
        await submission.save()

        return submission

    }

    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PutSubmissionForm)
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(422).send({
                errors:[{
                    message:`Submission not found`
                }]
            })
           
        }
        submission.title = payload.title
        submission.content = payload.content
        submission.statusId = payload.statusid
        if(payload.file){
            payload.file.map(async (x) => {
                await x.move(app.makePath('public/uploads'))
                const fileupload = new Fileupload()
                fileupload.fileName = x.fileName || "image"
                fileupload.filePath = x.filePath || ""
                fileupload.submissionId = submission.id
                
                await submission.related('fileupload').create(fileupload)
            })
        }


        await submission.save()
        return submission

    }
    PutStatus = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PutSubmissionStatusForm)
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(422).send({
                errors:[{
                    message:`Submission not found`
                }]
            })
           
        }
        submission.statusId = payload.statusid


        await submission.save()
        return submission

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(422).send({
                errors:[{
                    message:`Submission not found`
                }]
            })
        }
        await submission.delete()

        return ['', 200]

    }
    DeleteFile = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const fileupload = await Fileupload.find(id)
        if (!fileupload) {
            return response.status(422).send({
                errors:[{
                    message:`File not found`
                }]
            })
        }
        fs.unlinkSync(fileupload.filePath)
        await fileupload.delete()
        
        return ['', 200]

    }
}