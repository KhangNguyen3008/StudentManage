import React from 'react'
import '../../globals.css';

function Index() {
  return (
    <>
        <div className='container1'>
            <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}> Your Articles </h1>

            <div className="search-bar">
                <input type="text" placeholder="Search..." />

                <select name="sort-by" style={{ marginRight: '20px' }}>
                    <option value="falculty">Falculty</option>
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
    </>
  )
}

export default Index