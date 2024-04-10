import CreateDeadline from '@/components/pages/CreateDeadline'
import React from 'react'

export default function page({params}) {
    return (
        <div>
            <CreateDeadline id={params.id}/>
        </div>
    )
}
