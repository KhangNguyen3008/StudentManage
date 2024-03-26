import React from 'react'

function NewArtical() {
  return (
    <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xl">
        <div className="bg-white shadow-2xl p-8 sm:rounded-xl">
          <h1 className="text-3xl font-bold mb-10">
            Submit a new article for this year's magazine
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">
                Title of the article: <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={articleTitle}
                onChange={(event) => setArticleTitle(event.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2">
                Attach a photo for the article (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <label className="block mt-4">
            Article content: <span className="text-red-600">*</span>
          </label>
          <textarea
            className="w-full h-64 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2 mb-4 resize-none"
            value={articleContent}
            onChange={(event) => setArticleContent(event.target.value)}
          ></textarea>

          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={submitArticle}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewArtical