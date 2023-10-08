import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My First Tailwind Project',
  description: 'This is my first Tailwind project! 🎉 ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className='bg-gradient-to-b to-cyan-800 from-blue-500 h-screen w-screen'>
          <div>
            
          </div>
        <Header/>
        {children}
        </div>
      </body>
    </html>
  )
}
