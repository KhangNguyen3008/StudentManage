import Contribution from '#models/contribution'
import User from '#models/user';
import { PostContributionForm } from '#validators/contribution'

import type { HttpContext } from '@adonisjs/core/http'


import fs from "fs"
import JSZip from "jszip";
export default class ContributionsController {
    Get = async ({ response, auth }: HttpContext) => {
        let contribution =  Contribution.query().preload('faculty').preload('deadline')
        if (auth?.user) {
            let user = await User.find(auth.user.id)
            if (user) {
                await user.load('faculty')
                contribution.where('faculty_id',user.faculty[0]?.id)
            }
         
        }
        let contributon1 = await contribution
        return response.send(contributon1)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('faculty').preload('deadline', x => x.preload('submission')).where('id', id).first()
        return response.send(contribution)
    }
    DownloadFile = async ({ response, request }: HttpContext) => {
        const id = request.param('id');
        let contribution = await Contribution.query().where('id', id).preload('deadline', x => x.preload('submission', z => z.preload('fileupload'))).first();
        var zip = new JSZip();

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

        let filename = contribution?.name;
        let content = await zip.generateAsync({ type: "nodebuffer", compression: 'DEFLATE' });

        response.header('Content-Type', 'application/zip');
        response.header(
            'Content-disposition',
            `attachment; filename=${filename}.zip`
        );

        // Send the response after generating the zip file
        return response.send(content);
    }
    GetByStudent = async ({ response, request, auth }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('faculty').where('faculty_id', id).where('user_id', auth.user?.id || '-1')
        return response.send(contribution)
    }

    GetByfacId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('faculty', (x) => x.where('id', id))
        return response.send(contribution)
    }
    Post = async ({ response, request, auth }: HttpContext) => {
        const payload = await request.validateUsing(PostContributionForm)
        const contribution = new Contribution()
        contribution.description = payload.description || ""
        contribution.name = payload.name
        contribution.facultyId = payload.facultyid
        contribution.beginDate =payload.begindate
        contribution.endDate =payload.enddate
        await contribution.save()
        return contribution
    }
    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostContributionForm)
        const contribution = await Contribution.find(id)
        if (!contribution) {
            return response.status(400).send(`Contribution not found`)
        }
        contribution.name = payload.name
        contribution.facultyId = payload.facultyid
        contribution.description = payload.description || ""
        contribution.beginDate =payload.begindate
        contribution.endDate =payload.enddate
        await contribution.save()

        return contribution

    }
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