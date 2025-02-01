import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <header className='bg-gray-900 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
        <h1 className='text-2xl font-bold cursor-pointer'>
            <span className=''>Real</span>
            <span className=''>Estate</span>
        </h1>
        </Link>
        </div>
        </header>
  )
}
