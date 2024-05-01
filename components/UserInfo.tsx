import React, { useEffect } from 'react'
import { currentUser } from '@clerk/nextjs/server'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from './ui/button';
// import useSWR from 'swr';

const UserInfo = async () => {
    const user = await currentUser()
    const firstName = user?.firstName
    const lastName = user?.lastName

    return (
        <div className="">
            <Avatar>
                {user?.id ? (
                    <AvatarImage src={ user?.imageUrl} alt="@shadcn" />
                ) : (
                    <AvatarImage src='"https://github.com/shadcn.png"' alt='@shadcn'/>
                )}
                <AvatarFallback>{firstName?.charAt(0)} {lastName?.charAt(0)}</AvatarFallback>
            </Avatar>
    
            <SignedIn>
                <div className="text-center">
                    <p className="font-semibold">
                        {firstName}  {lastName}
                    </p>
                    <p className='text-xs'>
                        @{firstName}{lastName}-{user?.id.slice(-4)}
                    </p>
                </div>
            </SignedIn>

            <SignedOut>
                <div className="text-center space-y-2">
                    <p className="font-semibold">You are not signed in :(</p>
                    <Button asChild className="bg-red-200 text-white">
                        <SignInButton>Sign In</SignInButton>
                    </Button>
                </div>
            </SignedOut>
        </div>
    )
}

export default UserInfo 