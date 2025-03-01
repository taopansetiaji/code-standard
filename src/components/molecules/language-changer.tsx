'use client'
import React, { useTransition } from 'react'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const LanguageChanger = () => {
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Languages className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' defaultValue={locale}>
        <DropdownMenuItem
          key='en'
          onClick={() => startTransition(() => router.replace('/en'))}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          key='id'
          onClick={() => startTransition(() => router.replace('/id'))}
        >
          Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageChanger
