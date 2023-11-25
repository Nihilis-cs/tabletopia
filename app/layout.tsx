import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider';
import SideBar from '@/components/SideBar';

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
                        <div className="container mx-auto mt-8">
                            <main>{children}</main>
                        </div>
                    </SideBar>
                </ThemeProvider>
            </body>
        </html>
    );
}
