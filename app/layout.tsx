import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NavBar, Footer } from './components';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Electronic Shop',
  description: 'Tienda electronica - Pasto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${poppins.className} text-slate-700`}>
        <div className='bg-white flex flex-col min-h-screen'>
          <NavBar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
