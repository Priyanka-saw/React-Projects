import React from 'react'

function Navbar() {
  return (
    <nav className='container flex items-center justify-between'>
        <div className="logo">
            <img src="/src/assets/hand-icon.png" alt="" />
        </div>
        <ul className='flex items-center gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar