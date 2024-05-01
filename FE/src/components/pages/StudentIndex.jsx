'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContributionService from '@/services/ContributionService';
import '../layout/footer.css'
import AcademicyearService from '@/services/AcademicyearService';
import AuthService from '@/services/AuthService';
import Time from '../ui/Time';
export default function StudentIndex() {
    const [contributions, setContributions] = useState([]);
    const [user, setUser] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [academicyear, setAcademicyear] = useState('all');
    const [academicyears, setAcademicyears] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(5); // You can adjust the number of items per page
    const router = useRouter();

    useEffect(() => {
        ContributionService.getContribution(academicyear).then((response) => {
            setContributions(response.data);
        }).catch((error) => {
            console.error('Error fetching contributions:', error);
        });
        AuthService.profile().then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.error('Error fetching contributions:', error);
        });
        AcademicyearService.getAcademicyear().then((response) => {setAcademicyears(response.data);})
    }, [academicyear]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentContributions = contributions.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(academicyear)
    return (
        <div className='container1'>
            <label for="academic-year">Academic year: </label>
            
            <select id="academic-year" onChange={(e)=>{setAcademicyear(e.target.value)}} > 
            <option value='all' >All</option>
                {academicyears&&academicyears.map(academicYear =>  <option value={academicYear.id}>{academicYear.name}</option>)}
            </select>

            <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>Your Contribution</h1>

            {/* Search and sorting components */}

            <div className=''>
                <h1>Content of index</h1>
            </div>

            <div>
                {currentContributions.map((contribution) => (
                    <div
                        key={contribution.id}
                        role='button'
                        onClick={() => router.push(`/Student/DetailArticle/${contribution.id}`)}
                        className='bg-slate-200 p-5 my-2 rounded-md hover:bg-slate-300 hover:cursor-pointer'>
                        <div className='flex justify-between'>
                            <h1>{contribution.name}</h1>
                            <p>Faculty: {contribution.faculty.name}</p>
                        </div>
                        <div>Academic Year: {contribution.academicyear.name} </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <span className="page-index" onClick={() => paginate(currentPage - 1)}>&lt;</span>
                {Array.from({ length: Math.ceil(contributions.length / itemsPerPage) }, (_, i) => (
                    <span key={i} className={`page-index ${currentPage === i + 1 ? 'active' : ''}`} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </span>
                ))}
                <span className="page-index" onClick={() => paginate(currentPage + 1)}> &gt;</span>
            </div>
        </div>
    );
}
