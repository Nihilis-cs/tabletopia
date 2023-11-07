'use client'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { User } from '@supabase/auth-helpers-nextjs'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogFooter, DialogHeader } from './ui/dialog'
import { Label } from '@radix-ui/react-label'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@radix-ui/react-alert-dialog'
import { AlertDialogHeader, AlertDialogFooter } from './ui/alert-dialog'

interface UserAvatarProps {
    user: User | null | undefined;
}
export default function UserAvatar({ user }: UserAvatarProps) {
    return (
        
                <Avatar >
                    <AvatarFallback >
                        <div className="text-primary">
                            {user != null && <p>{user.email}</p>}
                        </div>
                    </AvatarFallback>
                </Avatar>

        //                     <form action="/auth/logout" method="post">
        //                         <Button variant={"outline"} className="px-4 py-2 text-foreground mb-2" >
        //                             Sign out
        //                         </Button>
        //                     </form>

    )
}
