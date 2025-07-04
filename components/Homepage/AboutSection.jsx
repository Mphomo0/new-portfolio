import { myBio } from "@/utils/data/bio";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id='about' className='my-12 lg:my-16 relative'>
      <div className='sticky top-10 mb-24'>
        <div className='w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30'></div>
        <div className='flex items-center justify-start relative'>
          <span className='bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md'>
            ABOUT
          </span>
          <span className='w-full h-[2px] bg-[#1a1443]'></span>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
        <div className='order-2 lg:order-1'>
          <p className='font-medium mb-5 text-[#16f2b3] text-xl uppercase'>
            Who I am?
          </p>
          <p className='text-gray-200 text-sm lg:text-lg'>
            {myBio.description}
          </p>
        </div>
        <div className='flex justify-center order-1 lg:order-2'>
          <Image
            src={myBio.profile}
            width={280}
            height={280}
            alt='Mpho Moipolai'
            className='w-auto h-auto rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
}
