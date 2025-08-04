import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='h-screen'>
      <div className='h-full flex-center relative'>
        <div className='pointer-events-none select-none'>
          <h1 className='absolute top-6 left-0 text-stroke-[0.05rem] text-stroke-light text-transparent opacity-50'>
            GET TO KNOW ME
          </h1>
          <h1 className='absolute top-24 left-18 text-stroke-[0.05rem] text-stroke-light text-transparent opacity-30'>
            GET TO KNOW ME
          </h1>
          <h1 className='absolute top-42 left-36 text-stroke-[0.05rem] text-stroke-light text-transparent opacity-10'>
            GET TO KNOW ME
          </h1>
        </div>

        <div className='relative flex justify-center items-baseline gap-12'>
          <p className='px-8 py-6 max-w-72'>
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
            className='aspect-[4/5] object-cover max-w-64'
          />
        </div>
      </div>
    </section>
  )
}

export default About
