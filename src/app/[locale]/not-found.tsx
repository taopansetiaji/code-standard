'use client'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}
