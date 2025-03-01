import { ThemeProvider } from '@/components/ui/theme-provider'
import '../styles/globals.css'
import Header from '@/components/organisms/header'
import { TailwindIndicator } from '@/components/atoms/tailwind-indicator'
import Footer from '@/components/organisms/footer'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex flex-col min-h-screen max-w-6xl mx-auto'>
            <Header />
            <div className='flex-grow'>{children}</div>
            <Footer />
          </main>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
