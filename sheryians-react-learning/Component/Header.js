"use client"
import Link from 'next/link';
import React from 'react'

const Header = (props) => {
  return (
    <>
      <div className='flex items-center justify-between text-white text-xl px-2 py-2 bg-green-600'>
        <h2>{props.user} logo</h2>

        <div className='flex gap-5'>

          <Link href="/Home">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Course">Course</Link>
          <Link href="/Product">Product</Link>

        </div>
      </div>
    </>
  );
};

export default Header;