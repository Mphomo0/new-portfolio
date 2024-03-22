import ContactForm from './ContactForm'
import { MdAlternateEmail } from 'react-icons/md'
import { bio as personalData } from '@/utils/data/bio'

export default function ContactSection() {
  return (
    <div id='contact' className='my-12 lg:my-16 relative mt-24 text-white'>
      <div className='sticky top-10 mb-24'>
        <div className='w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30'></div>
        <div className='flex items-center justify-start relative'>
          <span className='bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md'>
            CONTACT
          </span>
          <span className='w-full h-[2px] bg-[#1a1443]'></span>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16 mx-auto justify-items-center justify-content-center'>
        <ContactForm />
      </div>
    </div>
  )
}
