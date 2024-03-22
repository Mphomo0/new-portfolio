import Link from 'next/link'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className='relative border-t bg-[#0d1224] border-[#353951] text-white'>
      <div className='mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10'>
        <div className='flex justify-center -z-40'>
          <div className='absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <p className='text-sm'>
            © {currentYear} Copyright:&nbsp;
            <Link
              target='_blank'
              href='https://www.mpho-moipolai.co.za/'
              className='text-[#16f2b3]'
            >
              Mpho Moipolai
            </Link>
          </p>
          <div className='flex items-center gap-5'>
            <Link
              target='_blank'
              href='https://www.facebook.com/mbmoipolai'
              className='flex items-center'
            >
              <AiFillFacebook size={30} />
            </Link>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/mpho-moipolai-26b06286/'
              className='flex items-center'
            >
              <AiFillLinkedin size={30} />
            </Link>
            <Link
              target='_blank'
              href='https://github.com/Mphomo0'
              className='flex items-center'
            >
              <AiFillGithub size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
