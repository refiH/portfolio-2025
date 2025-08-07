import Title from '@/components/Title'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='h-screen'>
      <div className='h-full flex-center relative'>
        <Title text='GET TO KNOW ME' />

        <div className='relative flex flex-col-reverse sm:flex-row justify-center sm:items-baseline items-end sm:gap-12'>
          <p className='xs:text-p text-small px-8 py-6 max-w-72'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis consequatur,
            reiciendis eaque nisi at doloremque mollitia excepturi sed maxime dolorum qui possimus
            natus ipsam architecto labore veritatis similique quis! Voluptatum, minus tempora, nisi
            vitae earum animi quod id culpa ratione et dignissimos qui magnam, fugit nemo possimus?
            Harum, illo?
          </p>

          <Image
            src='/images/meruem.jpg'
            width={800}
            height={800}
            alt='me'
            className='aspect-[4/5] object-cover sm:max-w-64 max-w-40'
          />
        </div>
      </div>
    </section>
  )
}

export default About
