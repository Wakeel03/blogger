import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api'
import CategoryHeading from '../components/CategoryHeading'
import CategoryNavigation from '../components/CategoryNavigation'
import PostPreviewLarge from '../components/PostPreviewLarge'
import PostPreviewOneColumn from '../components/PostPreviewOneColumn'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts()
        .then(res => setPosts(res.data.data))
        .catch(error => console.log(error))
    }, [])    

    return (
        <>
           <CategoryNavigation /> 

           <section>
               {posts.map(post => (
                   <PostPreviewLarge key={post.id} id={post.id} title={post.title} description={post.description}/>
               ))}
                {/* <PostPreviewLarge />
                <CategoryHeading />
                <PostPreviewOneColumn /> */}
           </section>
        </>
    )
}

export default Home
