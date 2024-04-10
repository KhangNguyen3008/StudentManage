
'use client'

import ContributionService from '@/services/ContributionService'
import FacultyService from '@/services/FacultyService'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function CoorIndex() {
    const [contribution, setContribution] = useState()
    const router = useRouter()

    useEffect(() => {
        ContributionService.getContribution().then(x => setContribution(x.data)).catch(e => { })
    }, [])
    if (!contribution) {
        return
    }
    return (
        <div className='container1'>
            <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}> Your Contribution </h1>

            <div className="search-bar">
                <input type="text" placeholder="Search..." />

                <select name="sort-by" style={{ marginRight: '20px' }}>
                    <option value="falculty">Contribution</option>
                </select>

                <select name="sort-by">
                    <option value="default">Sort by Default</option>
                    <option value="date">Sort by Date</option>
                    <option value="title">Sort by Title</option>
                </select>
            </div>
            <div className=''>
                <h1> Content of index</h1>
            </div>
            <div>
                {contribution && contribution.map(x => {
                    return <>
                        <div role='button' onClick={(e => {
                            router.push(`/coordinator/DetailArticle/${x.id}`)
                        })} className='bg-slate-200 p-5 my-2 rounded-md hover:bg-slate-300 hover:cursor-pointer'>

                            <div className='flex justify-between'>
                                <h1>{x.name}</h1>
                                <p>Faculty: {x.faculty.name}</p>
                            </div>
                            <div>
                                <p>Total Deadline: {x.deadline.length}</p>
                            </div>
                        </div>
                    </>
                })}
            </div>
            <div class="pagination">
                <span class="page-index">1</span>
                <span class="page-index">2</span>
                <span class="page-index">3</span>
                <span class="page-index">4</span>
                <span class="page-index">5</span>
                <span class="page-index">6</span>
                <span class="dots">...</span>
                <span class="next">Next &gt;</span>
            </div>
        </div>
    )
}
