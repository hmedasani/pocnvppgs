import React from 'react'
import { LayoutProps } from '../layout'
import WrapMainContent from '@/components/shared/layout/WrapMainContent'

function UserLayout({ children }: LayoutProps) {
    return (
        <WrapMainContent>
            {children}
        </WrapMainContent>
    )
}

export default UserLayout
