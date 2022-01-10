import React from 'react'

function CategoryHeading({ category }) {
    return (
        <div className="flex justify-between items-center mb-8 border-l-4 border-green-500 pl-4">
            <h1 className="text-4xl font-bold">{category}</h1>
            <h3 className="text-sm font-medium text-green-600">All {category} articles</h3>
            
        </div>
    )
}

export default CategoryHeading
