import ThemeToggle from '@/assets/themes/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Book, Edit3, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function UserNav() {
    return (
        <nav className='flex gap-2 items-center text-center'>
            <ThemeToggle />
            <Button asChild variant="ghost">
                <Link href={"/cart"}>
                    <ShoppingCart />Cart
                </Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href={"/signin"}>
                    <User /> Signin
                </Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href={"/signup"}>
                    <Edit3 /> Signup
                </Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href={"/my-account"}>
                    <Book /> My Account
                </Link>
            </Button>
        </nav>
    )
}

export default UserNav
