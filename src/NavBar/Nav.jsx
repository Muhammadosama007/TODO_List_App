import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <>
    <nav className='flex justify-between p-3 text-2xl  bg-blue-800 text-white '>
        <div className='hover:font-bold'>
            <h1>My TodoList App</h1>
        </div>
        <div className='hover:font-bold'>
            <Link to={'/'}>Customize App</Link>
        </div>
    </nav>
    </>
  )
}

export default Nav