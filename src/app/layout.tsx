import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import './styles/globals.scss'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Mygovexpert',
  description:
    'We help you navigate the Government Bureaucracy to get All Your Benefits'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
