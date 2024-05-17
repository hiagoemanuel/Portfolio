'use client'

import Link from 'next/link'
import { useContext, useRef, useState } from 'react'
import { HomeIcon } from './svgs/HomeIcon'
import { UserIcon } from './svgs/UserIcon'
import { BookIcon } from './svgs/BookIcon'
import { TerminalIcon } from './svgs/TerminalIcon'
import { PhoneIcon } from './svgs/PhoneIcon'
import { SunIcon } from './svgs/SunIcon'
import { MoonIcon } from './svgs/MoonIcon'
import { themeContext } from '@/contexts/ThemeContext'

export default function MenuHamburger() {
  const menuRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isDark, setIsDark } = useContext(themeContext)

  const handlerMenu = () => {
    const menu = menuRef.current
    const menuBtn = btnRef.current

    if (!menu || !menuBtn) return

    if (!isOpen) {
      setIsOpen(true)
      menuBtn.classList.add('menu-open')
      const height = menu.scrollHeight + 'px'
      menu.style.height = height
    } else {
      setIsOpen(false)
      menuBtn.classList.remove('menu-open')
      menu.style.height = '3rem'
    }
  }

  return (
    <div
      ref={menuRef}
      className="sm:hidden menu rounded-md flex flex-col-reverse transition-[height] ease-in-out duration-500 overflow-y-hidden fixed left-5 bottom-5"
      style={{ height: '3rem' }}
    >
      <button
        ref={btnRef}
        onClick={handlerMenu}
        className={`menu-btn outline-none z-10 w-12 min-h-12 rounded-md bg-dark dark:bg-light flex flex-col justify-center items-center gap-1 cursor-pointer ${isOpen ? 'relative' : ''}`}
      ></button>
      <nav
        ref={listRef}
        className="transition-[visibility] ease-in-out duration-500 align-top# visible mb-1 flex flex-col gap-1 menu-list"
      >
        <Link
          className="w-12 h-12 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <HomeIcon />
        </Link>
        <Link
          className="w-12 h-12 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <UserIcon />
        </Link>
        <Link
          className="w-12 h-12 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <BookIcon />
        </Link>
        <Link
          className="w-12 h-12 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <TerminalIcon />
        </Link>
        <Link
          className="w-12 h-12 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <PhoneIcon />
        </Link>
        <div
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light cursor-pointer"
          onClick={() => {
            setIsDark(!isDark)
          }}
        >
          {isDark ? (
            <MoonIcon className="h-full bg-dark" />
          ) : (
            <SunIcon className="w-full p-1 bg-light" />
          )}
        </div>
      </nav>
    </div>
  )
}
