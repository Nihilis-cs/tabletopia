'use client'

import './globals.css'
import { MenuProps, Layout, Menu, theme, ConfigProvider } from "antd";
import { useState } from "react";
import { FormOutlined, HomeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import Link from 'next/link';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }
    const [open, setOpen] = useState<boolean>(true);
    const triggerStyle: string = "bg-theme-700 hover:bg-theme-300 rounded-2xl border-theme-300";
    const items: MenuProps['items'] = [
        getItem('Home', 0, <Link href={"/"} ><HomeOutlined /></Link>),
        getItem('Sheet Models', 1, <Link href={"/sheetmodel"} ><FormOutlined /></Link>),
        getItem(<ModeToggle />, 2)
    ];

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
                                <div className="flex mb-auto">
                                    <Button onClick={() => setOpen(!open)} variant="outline" className='flex-grow border-primary-foreground'>
                                        {open && <ChevronRight className="h-4 w-4" />}
                                        {!open && <ChevronLeft className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <div className="flex-1 flex-grow ">
                                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                                        {/*Menu Items */}
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
