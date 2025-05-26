import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brand() {
    return (
        <div className='flex-start'>
            <Link href={"/"} className='flex gap-4 items-center'>
                <Image src={"/images/logo.svg"}
                    alt={APP_NAME} width={60} height={39.97}
                    priority={true}
                />
                <span className="hidden text-4-xl lg:block font-bold pt-1">
                    {APP_NAME}
                </span>
            </Link>
        </div>
    )
}

export default Brand
