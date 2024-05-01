import { Briefcase, HomeIcon, MessageSquare, SearchIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignInButton, SignedIn,SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Header = () => {
return (
    <div className="flex items-center p-2 max-w-6xl mx-auto  rounded-lg ">
            <Image 
                    className='rounded-lg'
                    src="/LinkedIn_logo_initials.png" 
                    width={40} 
                    height={40} 
                    alt='logo'
            />
            <div className="flex-1 ml-2">
                    <form action="" className='flex items-center max-w-96 bg-gray-100 rounded-lg'>
                            <SearchIcon className='h-4 text-gray-600 mx-2' />
                            <input type="text" placeholder='Search' className='bg-transparent flex-1 outline-none py-2' />
                    </form>
            </div>

            <div className="flex items-center space-x-4 px-6">
                <Link href='/' className='icon'>
                    <div>
                        <HomeIcon className=''/>  
                        <p>Home</p>
                    </div>
                </Link> 
                <Link href='/' className='icon'>
                    <div >
                        <UsersIcon/>  
                        <p>Network</p>
                    </div>
                </Link> 
                <Link href='/' className='icon'>
                    <div >
                        <Briefcase/>  
                        <p>Jobs</p>
                    </div>
                </Link> 
                <Link href='/' className='icon'>
                    <div >
                        <MessageSquare/>  
                        <p>Messages</p>
                    </div>
                </Link> 
                {/* User button based on auth */}
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <Button asChild variant='secondary'>
                        <SignInButton />
                    </Button>
                </SignedOut>
                
            </div>
    </div>
)
}

export default Header