import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./navbar.jsx";
import {Analytics} from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Misael Andrei Marin',
  description: "Discover the work of Andrei Marin, a 4th-year undergraduate excelling in Web and Mobile Development. His portfolio showcases his proficiency in technologies like MERN, Kotlin, FluF, SERN, and MEVN, Andrei's work reflects his strong foundation and eagerness to embrace new technologies. His portfolio not only showcases an extensive resume of academic and personal projects but also his enthusiasm for learning emerging stacks and technologies. Whether you're a potential employer, a prospective client, or a fellow professional, Andrei's portfolio offers a fresh perspective on web and mobile development from an emerging talent in the field, and is a testament to the continuous learning and growth in the ever-evolving field of web and mobile development.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
