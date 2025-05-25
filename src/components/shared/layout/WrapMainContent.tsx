import { LayoutProps } from '@/app/layout'
import React from 'react'

function WrapMainContent({ children }: LayoutProps) {
    return (
        <main className='flex flex-1 p-4'>
            {children}
        </main>
    )
}

export default WrapMainContent
