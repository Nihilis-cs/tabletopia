'use client'

import './globals.css'
import { ReactNode, useState } from "react";
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, FileSpreadsheet, Home } from 'lucide-react';
import { MenuEntry } from '@/types/Menu';
import MenuItem from '@/components/MenuItem';
import { usePathname } from 'next/navigation';



export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(true);
    const pathname = usePathname();
    const menuItems: MenuEntry[] = [
        { key: 0, label: 'Home', icon: <Home />, href: "/" },
        { key: 1, label: 'Sheet models', icon: <FileSpreadsheet />, href: "/sheetmodel" },
        // {key: 2, label: 'Sheet models', icon: <FileSpreadsheet />, href: "/sheetmodel"},
    ]

    return (
        <html>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex">
                        {/*SideBar*/}
                        <div className={` ${open ? "w-20" : "w-60 "} flex flex-col h-screen p-3 bg-black shadow duration-300`} >
                            <div className="space-y-3 flex-col h-full">
                                {/*Toggle open/closed */}
                                <div className="flex mb-auto ">
                                    <Button onClick={() => setOpen(!open)} variant="outline" className='flex-grow border-primary-foreground'>
                                        {open && <ChevronRight className="h-4 w-4" />}
                                        {!open && <ChevronLeft className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <div className="flex-1 flex-grow ">
                                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                                        {menuItems.map((element) => {
                                            return (
                                                <li className="w-full">
                                                    <MenuItem item={element} open={!open} />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*Content*/}
                        <div className="container mx-auto mt-8">
                            <main>{children}</main>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
