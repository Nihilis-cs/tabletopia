'use client'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider';
import SideBar from '@/components/SideBar';
import { AuthProvider } from './Auth';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
            <AuthProvider >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SideBar>
                        <div className="container mx-auto mt-8">
                            <main>{children}</main>
                        </div>
                    </SideBar>
                </ThemeProvider>
            </AuthProvider>
            </body>
        </html>
    );
}
