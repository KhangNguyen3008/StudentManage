'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContributionService from '@/services/ContributionService';
import '../layout/footer.css'
export default function StudentIndex() {
    const [contributions, setContributions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); // You can adjust the number of items per page
    const router = useRouter();

    useEffect(() => {
        ContributionService.getContribution().then((response) => {
            setContributions(response.data);
        }).catch((error) => {
            console.error('Error fetching contributions:', error);
        });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentContributions = contributions.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container1'>
            <label for="academic-year">Academic year: </label>
            <select id="academic-year">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
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
                        <div>Status: Submitted</div>
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
