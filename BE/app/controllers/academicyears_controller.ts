 import Academicyear from '#models/academicyear'
import { PostAcademicyearForm } from '#validators/academicyear'
import type { HttpContext } from '@adonisjs/core/http'

export default class AcademicyearsController {
    Get = async ({ response, auth }: HttpContext) => {
        let academicyear =await Academicyear.query()

        
        return response.send(academicyear)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let academicyear = await Academicyear.query().where('id', id).first()
        return response.send(academicyear)
    }
    Post = async ({ response, request }: HttpContext) => {
        const payload = await request.validateUsing(PostAcademicyearForm)

        let oldAcademicyear=  await Academicyear.findBy('name',payload.name)
        if(oldAcademicyear){
            return response.status(422).send({
                errors:[{
                    message:`Acdemic year is not same name`
                }]
            })
        }
        if(payload.begindate>payload.enddate){
            return response.status(422).send({
                errors:[{
                    message:`begin date must less than end date`
                }]
            })
        }
        const year = new Academicyear()
        year.name = payload.name
        year.beginDate = payload.begindate
        year.endDate = payload.enddate
        year.description = payload.description ||""
        

        await year.save()

        return year

    }

    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostAcademicyearForm)
        const year = await Academicyear.find(id)
        if (!year) {
            return response.status(422).send({
                errors:[{
                    message:`academic year not found`
                }]
            })
         
        }
        if(payload.begindate>payload.enddate){
            return response.status(422).send({
                errors:[{
                    message:`begin date must less than end date`
                }]
            })
        }
        year.name = payload.name
        year.beginDate = payload.begindate
        year.endDate = payload.enddate
        year.description = payload.description ||""
        await year.save()
        return year

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const academicyear = await Academicyear.find(id)
        if (!academicyear) {
            return response.status(422).send({
                errors:[{
                    message:`Academic year not found`
                }]
            })
           
        }
        await academicyear.delete()

        return ['', 200]

    }
}