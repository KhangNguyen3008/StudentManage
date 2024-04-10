import Contribution from '#models/contribution'
import { PostContributionForm } from '#validators/contribution'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ContributionsController {
    Get = async ({ response }: HttpContext) => {
        let contribution = await Contribution.query().preload('faculty').preload('deadline')
        return response.send(contribution)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('faculty').preload('deadline',x=>x.preload('submission')).where('id', id).first()
        return response.send(contribution)
    }

    GetByStudent = async ({ response, request,auth }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('faculty').where('faculty_id', id).where('user_id',auth.user?.id ||'-1')
        return response.send(contribution)
    }

    GetByfacId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('faculty',(x)=>x.where('id',id))
        return response.send(contribution)
    }
    Post = async ({ response, request, auth }: HttpContext) => {
        const payload = await request.validateUsing(PostContributionForm)
        const contribution = new Contribution()
        contribution.description = payload.description || ""
        contribution.name = payload.name
        contribution.facultyId=payload.facultyid
        await contribution.save()
        return contribution
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
    //     faculty.closureDate = payload.closuredate
    //     faculty.finalclosureDate = payload.finalclosuredate

    //     await faculty.save()
    //     return faculty

    // }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const contribution = await Contribution.find(id)
        if (!contribution) {
            return response.status(400).send(`Contribution not found`)
        }
        await contribution.delete()

        return ['', 200]

    }
}