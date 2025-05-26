import React from 'react'
import { LayoutProps } from '@/app/layout'
import { ThemeProvider } from 'next-themes'

function Providers({ children }: LayoutProps) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme='light'
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </>
    )
}

export default Providers
