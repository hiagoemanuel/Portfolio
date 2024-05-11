import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Hiago Emanuel | Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
