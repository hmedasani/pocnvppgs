import React from 'react'
import { LayoutProps } from '../layout'

function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-cols h-screen'>
            <main className="flex-1 flex-wrap">
                {children}
            </main>
        </div>
    )
}

export default Layout
