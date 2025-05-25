import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Brand() {
    return (
        <div>
            <Link href={"/"}>
                <Button className='cursor-pointer'>
                    Logo
                </Button>
            </Link>
        </div>
    )
}

export default Brand
