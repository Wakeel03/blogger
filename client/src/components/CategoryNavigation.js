import React from 'react'
import { BiSearch } from 'react-icons/bi'

function CategoryNavigation() {
    return (
        <div className="mb-12 h-8 border-b-[1px] border-gray-200 flex items-center justify-between text-gray-500 text-sm">
            <ul className="flex flex-2 h-8 font-medium">
                <li className="mr-8 nav-active hover:cursor-pointer">Popular</li>
                <li className="mr-8">Latest</li>
                <li className="mr-8">Latest</li>
                <li className="mr-8">Latest</li>
                <li className="mr-8">Sports</li>
            </ul>

            <div className="flex flex-1 items-center justify-end mb-2">
                <BiSearch />
                <input className="focus:outline-none ml-4" placeholder="Search" />
            </div>
            
        </div>
    )
}

export default CategoryNavigation
