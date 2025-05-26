import React from 'react'
import { LayoutProps } from '../layout'
import WrapMainContent from '@/components/shared/layout/WrapMainContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Home"
}

function Layout({ children }: LayoutProps) {
    return (
        <WrapMainContent>
            {children}
        </WrapMainContent>
    )
}

export default Layout
