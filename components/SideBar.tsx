'use client'
import { MenuEntry } from '@/types/Menu';
import { ChevronLeft, ChevronRight, FileSpreadsheet, Home } from 'lucide-react';
import React, { ReactNode, useState } from 'react'
import { Button } from './ui/button';
import MenuItem from './MenuItem';
import UserAvatar from './UserAvatar';
import { useAuth } from '@/app/Auth';

interface SideBarProps {
    children : ReactNode;
    actions? : ReactNode;
}
export default function SideBar({ children, actions }: SideBarProps) {
    const {user, signOut} = useAuth();
    
    const [open, setOpen] = useState<boolean>(true);
    const menuItems: MenuEntry[] = [
        { key: 0, label: 'Home', icon: <Home />, href: "/" },
        { key: 1, label: 'Sheet models', icon: <FileSpreadsheet />, href: "/sheetmodel" },
        // {key: 2, label: 'Sheet models', icon: <FileSpreadsheet />, href: "/sheetmodel"},
    ]


    return (
        <div className="flex">
            {/*SideBar*/}
            <div className={` ${open ? "w-20" : "w-60 "} flex flex-col justify-between h-screen p-3 bg-black shadow duration-300`} >
                <div className="space-y-3 flex-col h-full">
                    {/*Toggle open/closed */}
                    <div className="flex mb-auto ">
                        <Button onClick={() => setOpen(!open)} variant="outline" className='flex-grow border-primary-foreground'>
                            {open && <ChevronRight className="h-4 w-4" />}
                            {!open && <ChevronLeft className="h-4 w-4" />}
                        </Button>
                    </div>
                    {/*Menu content*/}
                    <div className="flex-1 flex-grow ">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            {menuItems.map((element) => {
                                return (
                                    <li className={` ${open ? "mx-auto" : "mx-auto"} w-full`} key={"menu" + element.key} >
                                        <MenuItem item={element} open={!open} key={"menuItem" + element.key} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {/*User Infos*/}
                <div className='mx-auto'>
                    {/* {actions} */}
                    <UserAvatar user={user}/>
                </div>
            </div>
            {/*Content*/}
                {children}
        </div>
    )
}
