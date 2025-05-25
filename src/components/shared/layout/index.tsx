import { LayoutProps } from '@/app/layout'
import React from 'react'

function WrapWholePage({ children }: LayoutProps) {
    return (
        <div className='flex flex-col h-screen'>
            {children}
        </div>
    )
}

export default WrapWholePage
