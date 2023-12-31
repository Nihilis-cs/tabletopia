import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider';
import SideBar from '@/components/SideBar';
// import './i18n';

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html>
            <body suppressHydrationWarning={true}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SideBar>
                        <div className="container mx-auto my-4 overflow-auto">
                            <div className='relative'>
                                <div className='absolute inset-0'>
                                    <main>{children}</main>
                                </div>
                            </div>
                        </div>
                    </SideBar>
                </ThemeProvider>
            </body>
        </html>
    );
}
