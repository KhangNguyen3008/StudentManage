import React from 'react'
import ChartFaculty from '../ui/ChartFaculty'
import ChartComment from '../ui/ChartComment'

export default function Statistical() {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-3/5 gap-20 flex justify-center'>
          <div className='max-w-[450px]'>
            <ChartFaculty />
          </div>
          <div className='max-w-[450px]'>
            <ChartComment />
          </div>
        </div>
      </div>

    </div>
  )
}
