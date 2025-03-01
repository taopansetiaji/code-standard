import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <main className='mt-20'>
      <h1 className='text-4xl font-semibold mb-4'>{t('title')}</h1>
      <h2 className='text-xl font-medium mb-1'>{t('subtitle')}</h2>
      <p>{t('desc')}</p>
    </main>
  )
}
