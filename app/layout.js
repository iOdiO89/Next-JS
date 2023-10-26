import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/component/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SunA Blog',
  description: 'Welcome! This is Suna Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
