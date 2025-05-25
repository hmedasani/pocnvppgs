import Link from 'next/link'
import React from 'react'

function TopNav() {
    return (
        <nav className='flex gap-4'>
            <Link href={"/about"}>About</Link>
            <Link href={"/products"}>Products</Link>
        </nav>
    )
}

export default TopNav
