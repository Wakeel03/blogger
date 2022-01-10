import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getPostById } from '../api/index.js'

function Post() {
    const [post, setPost] = useState({})
    let { id } = useParams()

    useEffect(() => {
        console.log(id)
        getPostById(id)
        .then(res => setPost(res.data.data[0]))
        .catch(error => console.log(error))
    }, [id])    

    return (
        <div className="text-center mt-16">
           <h3 className="text-xs mb-2">Published {post.date_created}</h3> 
           <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
           <p className="text-sm font-semibold mb-4">{post.description}</p>
           <ul className="flex mb-8 justify-center">
               <li className="bg-gray-300 px-2 py-1 rounded text-xs flex items-center font-medium mr-2">Branding</li>
               <li className="bg-gray-300 px-2 py-1 rounded text-xs flex items-center font-medium mr-2">Branding</li>
               <li className="bg-gray-300 px-2 py-1 rounded text-xs flex items-center font-medium mr-2">Branding</li>
               <li className="bg-gray-300 px-2 py-1 rounded text-xs flex items-center font-medium mr-2">Branding</li>
           </ul>

            <img className="mx-auto max-w-[70%] rounded-md mb-6 object-cover" src="https://vidooly.com/blog/wp-content/uploads/2015/01/How-to-optimise-your-YouTube-Thumbnails.png" alt="thumbnail" />

            <div className="flex items-center max-w-[55%] mx-auto mb-8 text-sm">
                <img className="h-12 w-12 rounded-full object-cover" src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" alt="author" />
                <span className="font-medium ml-4">Nicole Nearhood</span>

                <div className="flex ml-auto text-xl">
                    <FaFacebook className="text-blue-500 mx-2" />
                    <FaTwitter className="text-blue-500 mx-2" />
                    <FaLinkedin className="text-blue-900 mx-2" />
                </div>
            </div>

            <p className="max-w-[55%] whitespace-normal leading-5 text-left font-semibold text-sm mx-auto mb-4">When I visited Mauritius as a child on family holidays I would see plenty of seashells on the beaches. But on my return to the archipelago to cover stories about the effects of climate change</p>
            <p className="max-w-[55%] whitespace-normal leading-5 text-sm mx-auto text-justify mb-16">{post.content}</p>
        </div>
    )
}

export default Post
