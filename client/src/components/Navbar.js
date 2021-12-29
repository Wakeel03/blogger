import React from 'react'

function Navbar() {
    return (
        <div className="flex-1 flex justify-between items-center text-sm font-medium">
            <h1 className="flex-1 text-xl lowercase text-blue-500">blogger</h1>
            <ul className="flex-1 flex justify-between">
                <li>Home</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
            <div className="flex-1 flex justify-end">
                <button className="mx-8 font-medium">Log in</button>
                <button className="bg-green-500 text-white w-20 h-8 rounded font-medium">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
