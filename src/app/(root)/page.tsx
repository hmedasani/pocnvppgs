import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import React from 'react'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function HomePage() {
    await delay(3000)
    return (
        <div>
            Hello from Home Page
            <Button><User /> Hello Click me</Button>
        </div>
    )
}

export default HomePage
