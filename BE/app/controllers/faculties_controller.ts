import Faculty from '#models/faculty'
import { PostFacultyForm } from '#validators/faculty'
import type { HttpContext } from '@adonisjs/core/http'

export default class FacultiesController {
    Get = async ({ response }: HttpContext) => {
        let faculty = await Faculty.query().preload('user').preload('contribution')
        return response.send(faculty)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let faculty = await Faculty.query().where('id', id).preload('contribution').preload('user').first()
        return response.send(faculty)
    }
    Post = async ({ response, request }: HttpContext) => {
        const payload = await request.validateUsing(PostFacultyForm)
        const faculty = new Faculty()
        faculty.name = payload.name
        faculty.userId = payload.userid


        await faculty.save()

        return faculty

    }

    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostFacultyForm)
        const faculty = await Faculty.find(id)
        if (!faculty) {
            return response.status(400).send(`Faculty not found`)
        }
        faculty.name = payload.name
        faculty.userId = payload.userid

        await faculty.save()
        return faculty

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const faculty = await Faculty.find(id)
        if (!faculty) {
            return response.status(400).send(`Faculty not found`)
        }
        await faculty.delete()

        return ['', 200]

    }
}