import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  image,
  name,
  description,
  github,
  live,
}) {
  return (
    <div className='flex flex-col bg-[#0d1224] border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <Image
        className='w-full h-auto rounded-t-xl'
        src={image ? image?.src : placeholder}
        width={400}
        height={400}
        alt={name}
      />
      <div className='p-4 md:p-5'>
        <h3 className='text-lg font-bold text-white'>{name}</h3>
        <p className='mt-1 text-white'>{description}</p>
        <Link
          className='mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-violet-500 to-pink-600 mr-2'
          href={live}
        >
          Visit Website
        </Link>
        <Link
          className='mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-pink-500 to-violet-600'
          href={github}
        >
          Source Code
        </Link>
      </div>
    </div>
  )
}
