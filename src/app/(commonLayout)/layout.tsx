import { Navbar } from '@/components/home/Navbar'
import React from 'react'

export default function CommonLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
