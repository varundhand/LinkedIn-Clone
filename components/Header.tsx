import { Briefcase, HomeIcon, MessageSquare, SearchIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

            <div className="">
                <Link href='/' className='icon'>
                    <HomeIcon/>  
                    <p>Home</p>
                </Link> 
                <Link href='/' className='icon'>
                    <UsersIcon/>  
                    <p>Network</p>
                </Link> 
                <Link href='/' className='icon'>
                    <Briefcase/>  
                    <p>Jobs</p>
                </Link> 
                <Link href='/' className='icon'>
                    <MessageSquare/>  
                    <p>Messages</p>
                </Link> 
                {/* User button based on auth */}
                <button className='flex items-center'>
                    <Image 
                        className='rounded-full'
                        src="/profile.jpg" 
                        width={40} 
                        height={40} 
                        alt='profile'
                    />
                    <p>Me</p>
                </button>
            </div>
    </div>
)
}

export default Header