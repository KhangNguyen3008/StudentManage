import  fs  from 'fs';
import Faculty from '#models/faculty'
import User from '#models/user'
import { PostFacultyForm } from '#validators/faculty'
import type { HttpContext } from '@adonisjs/core/http'
import Roles from '../Enum/Roles.js'
import { Zone } from 'luxon'
import Contribution from '#models/contribution'
import JSZip from 'jszip'

export default class FacultiesController {
    Get = async ({ request, response, auth }: HttpContext) => {
        let faculty = Faculty.query().preload('user', x => x.orderBy('created_at', 'asc'))
        if (auth.user) {
            if (auth.user.roleId == 3 || auth.user.roleId == 4|| auth.user.roleId == 5) {
                
                let user = await User.query().where('id',auth?.user?.id).preload('faculty').first()
                if(user){
                    
                    user.faculty.map((x)=>{
                        console.log(x.name)
                        faculty.orWhere('id',x.id)
                    })         
                }
            }
         
        }

        const payload = request.qs()

        if(payload.academicyearid!== 'undefined'&&payload.academicyearid){
            faculty.preload('contribution',z=>z.preload('deadline',m=>m.preload('submission')).where('academicyear_id',payload.academicyearid))
        }
        if(!payload.academicyearid){
            faculty.preload('contribution',z=>z.preload('deadline',m=>m.preload('submission')))
        }
        let faculty1 = await faculty
 
        return response.send(faculty1)
    }
    DownloadFile = async ({ response, request }: HttpContext) => {
        const id = request.param('id');
        let faculty = await Faculty.query().where('id',id).preload('contribution').first()
        
        var zip = new JSZip();
        if(Array.isArray(faculty?.contribution)){
            for(const con of faculty?.contribution){
                let contribution = await Contribution.query().where('id', con.id).preload('deadline', x => x.preload('submission', z => z.preload('fileupload'))).first();
                if (contribution && contribution.deadline && Array.isArray(contribution.deadline)) {
                    for (const deadline of contribution.deadline) {
                        if (deadline.submission && Array.isArray(deadline.submission)) {
                            for (const submission of deadline.submission) {
                                if (submission.fileupload && Array.isArray(submission.fileupload)) {
                                    for (const fileupload of submission.fileupload) {
                                        try {
                                            const file = await fs.readFileSync(fileupload.filePath);
                                            zip.file(`${contribution.name}/${fileupload.fileName}`, file, { binary: true });
                                        } catch (e) {
                                            console.log(e);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
       
        let filename = faculty?.name;
        let content = await zip.generateAsync({ type: "nodebuffer", compression: 'DEFLATE' });

        response.header('Content-Type', 'application/zip');
        response.header(
            'Content-disposition',
            `attachment; filename=${filename}.zip`
        );

        // Send the response after generating the zip file
        return response.send(content);
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let faculty = await Faculty.query().where('id', id).preload('contribution').preload('user', x => x.orderBy('created_at', 'asc')).first()
        return response.send(faculty)
    }
    Post = async ({ response, request }: HttpContext) => {
        const payload = await request.validateUsing(PostFacultyForm)

        let oldFaculty =  await Faculty.findBy('name',payload.name)
        if(oldFaculty){
            return response.status(422).send({
                errors:[{
                    message:`faculty is not same name`
                }]
            })
        }
        const faculty = new Faculty()
        faculty.name = payload.name


        faculty.isrequest = payload.isrequest

        await faculty.save()
        const user = await User.find(payload.userid)
        if (user) {
            await faculty.related('user').attach([user.id])
        }
        return faculty

    }

    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostFacultyForm)
        const faculty = await Faculty.find(id)
        if (!faculty) {
            return response.status(422).send({
                errors:[{
                    message:`Faculty not found`
                }]
            })
         
        }
        await faculty.load('user')
        const user = await User.find(payload.userid)
        faculty.name = payload.name
        faculty.isrequest = payload.isrequest
        let olduser = await User.find(faculty.user.find(x => x.roleId == Roles.MARKETING_COORDINATOR)?.id)
        if (olduser && user) {
            if (!(olduser.id == user.id)) {

                await faculty.related('user').detach([olduser.id])
                if (user) {
                    await faculty.related('user').create(user)
                }
            }
        }
        await faculty.save()
        return faculty

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const faculty = await Faculty.find(id)
        if (!faculty) {
            return response.status(422).send({
                errors:[{
                    message:`Faculty not found`
                }]
            })
           
        }
        await faculty.delete()

        return ['', 200]

    }
}