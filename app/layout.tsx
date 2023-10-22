'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { MenuProps, Layout, Menu, theme, ConfigProvider } from "antd";
import { useState } from "react";
import { FormOutlined, HomeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Link from 'next/link';

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
    ];

    return (
        <html>
            <body>
                <ConfigProvider
                    theme={
                        {
                            token: {
                                "borderRadius": 12,
                                "colorPrimary": "#6e5181",
                                "colorInfo": "#6e5181",
                                "colorLink": "#6d85a5",
                                "colorSuccess": "#4ab117",
                                "colorWarning": "#e59f15",
                                "colorError": "#da0b0e",
                                "colorTextBase": "#cbd5e1",
                                "sizeStep": 4,
                                "colorBorder": "#4f1446",
                                "colorBgContainer": "#2e0a30",
                                "colorBorderSecondary": "#4f1446",
                            },
                            algorithm: theme.darkAlgorithm,
                            components: {
                                Menu: {
                                    "algorithm": true
                                },
                                Layout: {
                                    bodyBg: "#0d001a",
                                    headerBg: "pink",
                                    siderBg: "#0d001a",
                                    headerPadding: 0,
                                    headerHeight: 50,
                                    triggerBg: "#0d001a",
                                },
                                Button: {
                                    primaryColor: "#cbd5e1"
                                },
                                Card: {
                                    headerBg: "#0d001a",
                                    colorBgContainer: "#0d001a",
                                    actionsBg: "#0d001a",
                                },
                                Select: {
                                    optionActiveBg: "#6e5181",
                                    selectorBg: "#2e0a30",
                                    colorBgElevated: "#2e0a30",
                                    optionSelectedBg: "#4f1446",
                                },
                            },
                        }
                    }
                >

                    <Layout className="h-screen">
                        <Layout hasSider>
                            <Sider
                                trigger={open
                                    ? <div className={triggerStyle}><RightOutlined style={{ color: "#6cb9c9" }} /></div>
                                    : <div className={triggerStyle}><LeftOutlined style={{ color: "#6cb9c9" }} /></div>}
                                collapsible
                                collapsed={open}
                                onCollapse={(value) => setOpen(value)}>
                                <Menu
                                    className="bg-theme-700"
                                    theme="dark"
                                    mode="vertical"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%', color: "#6e5181" }}
                                    items={items} />
                            </Sider>
                            <Layout.Content className={"m-1 p-2 bg-theme-600 rounded-md shadow overflow-auto"}>
                                <main>{children}</main>
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </ConfigProvider>
            </body>
        </html>
    );
}
