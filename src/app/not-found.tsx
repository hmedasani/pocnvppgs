import Brand from '@/components/shared/header/Brand'
import { Metadata } from 'next/types'
import React from 'react'

export const metadata: Metadata = {
    title: "Not-found"
}

function NotFound() {
    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            <h2 className='text-3xl'>Page Not Found!</h2>
            <Brand />
        </div>
    )
}

export default NotFound
