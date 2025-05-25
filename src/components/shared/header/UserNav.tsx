import Link from 'next/link'
import React from 'react'

function UserNav() {
    return (
        <nav className='flex gap-4'>
            <Link href={"/signin"}>Signin</Link>
            <Link href={"/signup"}>Signup</Link>
            <Link href={"/my-account"}>My Account</Link>
        </nav>
    )
}

export default UserNav
