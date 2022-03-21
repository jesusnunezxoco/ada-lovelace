import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-end'>
      <span>
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" id="logo" />
      </span>
      <a href="/about">About</a>
      <a href="/about">Services</a>
      <a href="/about">Resources</a>
      <a href="/about">Get Involved</a>
    </nav>
  )
}

export default Navbar