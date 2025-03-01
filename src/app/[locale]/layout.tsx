import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Locale, routing } from '@/i18n/routing'
import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import { TailwindIndicator } from '@/components/atoms/tailwind-indicator'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Providing all messages to the client
  // Side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <main className='flex flex-col min-h-screen max-w-6xl mx-auto'>
        <Header />
        <div className='flex-grow'>{children}</div>
        <Footer />
      </main>
      <TailwindIndicator />
    </NextIntlClientProvider>
  )
}
