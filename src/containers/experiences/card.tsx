import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  companyName: string
  title: string
  desc: string
  date: string
  imgClass?: string
}

const ExperiencesCard = ({ src, companyName, title, desc, date, imgClass }: Props) => {
  return (
    <div className='flex flex-col justify-center xl:w-2/5 lg:w-1/2 w-full'>
      <div className='h-[128px] bg-white flex-center px-6 py-4 border-8 border-secondary'>
        <Image
          src={src}
          width={800}
          height={800}
          alt={companyName}
          className={`object-contain w-full h-full ${imgClass}`}
        />
      </div>

      <div className='mt-6 sm:mx-12'>
        <h5 className='text-h6 font-semibold flex flex-col xs:flex-row xs:items-center'>
          <span>{companyName}</span>
          <span className='flex-1 border border-light mx-4 xs:block hidden opacity-40'></span>
          <span className='text-p text-light border border-light px-2 py-1 h-fit my-2 xs:my-0 opacity-40'>
            {title}
          </span>
        </h5>
        <div className='text-small lg:hidden flex items-center gap-2 mt-1'>
          <div className='bg-light text-secondary p-2'>
            <Calendar size={14} />
          </div>
          <div>{date}</div>
        </div>
        <p className='text-small mt-4'>{desc}</p>
      </div>

      <div className='text-small absolute right-6 lg:flex gap-4 items-center hidden'>
        <div>{date}</div>
        <div className='bg-light text-secondary p-2'>
          <Calendar size={14} />
        </div>
      </div>
    </div>
  )
}

export default ExperiencesCard
