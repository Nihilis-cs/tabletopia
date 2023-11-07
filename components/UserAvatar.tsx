'use client'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { User } from '@supabase/auth-helpers-nextjs'

interface UserAvatarProps {
    user: User | null | undefined;
}
export default function UserAvatar( { user } : UserAvatarProps) {
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Avatar >
                    <AvatarFallback >
                        <div className="text-primary">
                            {user != null && <p>{user.email}</p>}
                            {user == null && <p>Rip</p>}
                        </div>
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
                {(user != null && user != undefined) && <p>{user.email}</p>}
                <ModeToggle />
                {!user ? (
                    <Link href={'/login'}>
                        <Button variant={"secondary"} size={"sm"}>
                            <span className=''>Login</span>
                        </Button>
                    </Link>) 
                : (
                    <Button variant={"secondary"} size={"sm"} >
                        <span className=''>Logout</span>
                    </Button>
                )}
            </PopoverContent>
        </Popover>
    )
}
