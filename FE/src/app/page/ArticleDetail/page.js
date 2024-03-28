import React from 'react'
import '../../globals.css'
import { FaWeight } from 'react-icons/fa'

function ArticleDetail() {
  return (
    <div className='container'>
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula nibh, blandit a pellentesque et, egestas quis nisi.   </h1>
        <h2>Status: Selected </h2>
        <h2>Closure date: 12/27/2023</h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula nibh, blandit a pellentesque et, egestas quis nisi. Praesent sollicitudin porttitor lectus quis suscipit. Ut porta et ante non iaculis. Quisque a orci in sapien placerat porta. Praesent eu placerat ex. In mattis lacus sem, sed faucibus sapien iaculis vel. Donec non pellentesque mi. Sed in molestie dui. Aliquam erat volutpat. Phasellus a libero varius, elementum nisi luctus, tempor augue. Sed sit amet est pretium, dictum lorem ut, cursus erat. Ut congue massa nec elit vulputate, facilisis posuere tortor rutrum. Ut in urna erat.</h2>
      </div>

      <div>
        <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>Submission List</h1>
        <details>
          <summary class="summary">Submission no.#</summary>
          <div class="table-container">
        <table>
            <tr>
                <td class="left-column">Status:</td>
                <td class="right-column">Selected</td>
            </tr>
            <tr>
                <td class="left-column">Update:</td>
                <td class="right-column">12/26/2023</td>
            </tr>
            <tr>
                <td class="left-column">File Summision:</td>
                <td class="right-column">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.pdf
                </td>
            </tr>
            <tr>
                <td class="left-column">Comment:</td>
                <td class="right-column">
                    <textarea placeholder="Enter your comment" rows="5" cols="50"></textarea>
                </td>
            </tr>
        </table>
        <button class="comment-button">Comment</button>
    </div>
        </details>
        <details>
          <summary class="summary">Submission no.#</summary>
          <div class="table-container">
        <table>
            <tr>
                <td class="left-column">Status:</td>
                <td class="right-column">Selected</td>
            </tr>
            <tr>
                <td class="left-column">Update:</td>
                <td class="right-column">12/26/2023</td>
            </tr>
            <tr>
                <td class="left-column">File Summision:</td>
                <td class="right-column">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.pdf
                </td>
            </tr>
            <tr>
                <td class="left-column">Comment:</td>
                <td class="right-column">
                    <textarea placeholder="Enter your comment" rows="5" cols="50"></textarea>
                </td>
            </tr>
        </table>
        <button class="comment-button">Comment</button>
    </div>
        </details>
        <details>
          <summary class="summary">Submission no.#</summary>
          <div class="table-container">
        <table>
            <tr>
                <td class="left-column">Status:</td>
                <td class="right-column">Selected</td>
            </tr>
            <tr>
                <td class="left-column">Update:</td>
                <td class="right-column">12/26/2023</td>
            </tr>
            <tr>
                <td class="left-column">File Summision:</td>
                <td class="right-column">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.pdf
                </td>
            </tr>
            <tr>
                <td class="left-column">Comment:</td>
                <td class="right-column">
                    <textarea placeholder="Enter your comment" rows="5" cols="50"></textarea>
                </td>
            </tr>
        </table>
        <button class="comment-button">Comment</button>
    </div>
        </details>
      </div>
    </div>

    
  )
}

export default ArticleDetail