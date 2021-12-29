import React from 'react'
import CategoryNavigation from '../components/CategoryNavigation'
import PostPreviewLarge from '../components/PostPreviewLarge'
import PostPreviewOneColumn from '../components/PostPreviewOneColumn'

function Home() {
    return (
        <>
           <CategoryNavigation /> 
           <section>
            <PostPreviewLarge />
            <PostPreviewOneColumn />
           </section>
        </>
    )
}

export default Home
