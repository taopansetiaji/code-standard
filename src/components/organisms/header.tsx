import React from 'react'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LanguageChanger from '../molecules/language-changer'
import ThemeChanger from '../molecules/theme-changer'

const Header = () => {
  const t = useTranslations('Navigation')

  return (
    <header className='sticky top-0 w-full border-b'>
      <div className='h-14 flex items-center justify-between'>
        <Link href={'/'}>{t('home')}</Link>
        <div className='flex space-x-4'>
          <ThemeChanger />
          <LanguageChanger />
        </div>
      </div>
    </header>
  )
}

export default Header
