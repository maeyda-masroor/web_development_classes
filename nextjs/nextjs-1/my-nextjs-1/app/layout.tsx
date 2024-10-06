import './globals.css';
import Navbar from './components/Navbar';
import {Inter} from 'next/font/google';
import type { Metadata } from 'next';
const inter = Inter({subsets:['latin']})
export const metadata :Metadata={
  title:'Portfolio',
  description:'Portfolio of a software developer',
  keywords:'software developer portfolio'
};
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='max-w-3xl mx-auto py-10'>{children}</main>
      </body>
    </html>
  )
}
