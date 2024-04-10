import React from 'react'
import '../../../../globals.css';
import StudentIndex from '@/components/pages/StudentIndex';
import CoorIndex from '@/components/pages/CoorIndex';
import SubmissionDetail from '@/components/pages/SubmissionDetail';

function Index({params}) {

  return (
    <>
        <SubmissionDetail id={params.id}/>
    </>
  )
}

export default Index