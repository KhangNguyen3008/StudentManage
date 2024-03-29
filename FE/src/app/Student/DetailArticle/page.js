import React from 'react';
import '../../globals.css';
import { FaWeight } from 'react-icons/fa';

function DetailsArticleS() {
  return (
    <div className='container'>
      <div>
        <h1><b>The Enigmatic Charm of Feline Companions: Exploring the World of Cats</b></h1>
        <h2>Status: Selected </h2>
        <h2>Closure date: 12/27/2023</h2>
        <h2>In this article, we will take you into the magical world of cats. 
            From interesting things about their history and origins to the most adorable and fascinating stories about life with cats, 
            join us to explore the richness and uniqueness of the cat world.</h2>
      </div>

      <div>
        <h1 style={{ fontSize: '18px', color: 'black', fontWeight: 'bold' }}>Submission List</h1>
        <details>
          <summary className="summary">Submission no.#</summary>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td className="left-column">Status:</td>
                  <td className="right-column">Selected</td>
                </tr>
                <tr>
                  <td className="left-column">Update:</td>
                  <td className="right-column">12/26/2023</td>
                </tr>
                <tr>
                  <td className="left-column">File Submission:</td>
                  <td className="right-column">Lorem ipsum dolor sit amet, consectetur adipiscing elit.pdf</td>
                </tr>
                <tr>
                  <td className="left-column">Comment:</td>
                  <td className="right-column">
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
        <details>
          <summary className="summary">Submission no.#</summary>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td className="left-column">Status:</td>
                  <td className="right-column">Selected</td>
                </tr>
                <tr>
                  <td className="left-column">Update:</td>
                  <td className="right-column">12/26/2023</td>
                </tr>
                <tr>
                  <td className="left-column">File Submission:</td>
                  <td className="right-column">Lorem ipsum dolor sit amet, consectetur adipiscing elit.pdf</td>
                </tr>
                <tr>
                  <td className="left-column">Comment:</td>
                  <td className="right-column">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
        <details>
          <summary className="summary">Submission no.#</summary>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td className="left-column">Status:</td>
                  <td className="right-column">Selected</td>
                </tr>
                <tr>
                  <td className="left-column">Update:</td>
                  <td className="right-column">12/26/2023</td>
                </tr>
                <tr>
                  <td className="left-column">File Submission:</td>
                  <td className="right-column">Lorem ipsum dolor sit amet, consectetur adipiscing elit.pdf</td>
                </tr>
                <tr>
                  <td className="left-column">Comment:</td>
                  <td className="right-column">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
}

export default DetailsArticleS;
