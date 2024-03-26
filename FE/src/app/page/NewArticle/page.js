import React from 'react'
import './style.css'
import { ClassNames } from '@emotion/react'

function NewArticle() {
  return (
    <>
      <div className='container'>
        <h3 style={{ fontSize: '24px', color: 'darkslategray', lineHeight: '2.5' }}>Add new Article for this year magazine (2023)</h3>
        <h4>Closure Date: 12/7/2023</h4>
        <h4 style={{ lineHeight: '1.5' }}>Faculty: Science and engineering</h4>
        <h4>Add article</h4>

        <div className="textbox-container">
            <input type="text" placeholder="Enter your article content"/>
        </div>

        <h4> Article content</h4>
        <div className="large-textbox-container">
            <input type="text" placeholder="Enter your article content"/>
        </div>
        
        <h4>File submission</h4>
        <button class="add-new-button">Add New</button>
        <h1 style={{ fontSize: '24px', color: 'darkslategray', lineHeight: '2.5' }}>Add table here</h1>
        <h4>Accept file types:</h4>
        <h4>Document files: </h4>
        <h4>Image files: </h4>
          <div class="button-container">
            <button class="add-button">Add</button>
            <button class="cancel-button">Cancel</button>
          </div>

        </div>
    </>

  )
}

export default NewArticle