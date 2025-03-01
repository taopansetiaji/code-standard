import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className='mt-auto py-4 text-center border-t'>
      <p className='text-sm'>{t('copyright')}</p>
    </footer>
  )
}

export default Footer
