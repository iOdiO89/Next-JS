import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/component/header'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'SunA Blog',
  description: 'Welcome! This is Suna Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
