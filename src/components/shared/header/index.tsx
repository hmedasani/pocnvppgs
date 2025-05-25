import React from 'react'
import Brand from './Brand'
import TopNav from './TopNav'
import UserNav from './UserNav'

export default function Header() {
    return (
        <header className='flex justify-between p-4 items-center'>
            <Brand />
            <TopNav />
            <UserNav />
        </header>
    )
}
