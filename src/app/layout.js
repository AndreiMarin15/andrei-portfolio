import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './navbar'
import Navbar from "./navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Misael Andrei Marin',
  description: 'Misael Andrei Marin - Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar/>
        {children}
      
      </body>
    </html>
  )
}
