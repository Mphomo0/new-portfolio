import { Inter } from 'next/font/google'
import './globals.css'
import './css/card.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mpho Moipolai Portfolio',
  description:
    'Examine how creativity and usability converge in my portfolio. I am seasoned full-stack developer with expertise in Next.js, React, and Node.js. My specialty is creating streamlined online solutions. See how I combine elegant front-end design with strong back-end architecture to produce user-friendly experiences by exploring my portfolio. Together, lets make your digital idea a reality!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastContainer />
        <main className='min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white'>
          <Navbar />
          {children}
          <Footer />
        </main>
        <ScrollToTopButton />
      </body>
    </html>
  )
}
