import React from 'react'

function PostPreviewOneColumn({ column, thumbnail, title, author, date, description, tags }) {
    return (
        <div className="flex-col max-h-72 mb-8">
            {thumbnail && <img className="max-w-[50%] rounded-md mb-6 object-cover" src="https://vidooly.com/blog/wp-content/uploads/2015/01/How-to-optimise-your-YouTube-Thumbnails.png" alt="thumbnail" />}

            <div className={`flex-1 flex-col max-w-[50%] mr-6 ${column === 'right' ? "ml-6" : "mr-6"} `}>
                <h1 className={`${thumbnail ? "text-2xl" : "text-xl"} font-bold mb-6`}>Introducing Segment Data Lakes: How to start using advanced analytics</h1>
                <div className="flex items-center  mb-6 text-sm">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" alt="author" />
                    <span className="font-medium ml-8">Nicole Nearhood on September 8th 2020</span>
                </div>
                <p className="mb-6 text-gray-500 leading-8 whitespace-normal">We're excited to announce the launch of Segment Data Lakes, a new turnket customer data lake that provides the data engineering foundation needed to power data science and advanced analystics.</p>
                <ul className="text-xs font-medium">
                    <li className="w-fit px-3 py-1 rounded text-green-900 bg-green-400">Company</li>
                </ul>
            </div>
        </div>
    )
}

export default PostPreviewOneColumn
