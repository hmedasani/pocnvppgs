import { APP_NAME } from '@/lib/constants'
import React from 'react'

export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer className='flex justify-center'>
            <div className="p-4">
                &copy;{currentYear} {APP_NAME}. Al rights reserved.
            </div>
        </footer>
    )
}
