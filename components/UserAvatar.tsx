'use client'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import Link from 'next/link'
import { User } from '@supabase/auth-helpers-nextjs'
import { User2 } from 'lucide-react'

interface UserAvatarProps {
    user: User | null | undefined;
}
export default function UserAvatar({ user }: UserAvatarProps) {
    return (
        <Link href={"/user"}>
            <Avatar >
                <AvatarFallback >
                    <div className="text-primary">
                        <User2 />
                        {/* {user != null && <p>{user.email}</p>} */}
                    </div>
                </AvatarFallback>
            </Avatar>
        </Link>



    )
}
