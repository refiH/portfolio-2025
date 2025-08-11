import Title from '@/components/Title'
import ExperiencesCard from './card'

const Experiences = () => {
  const experiences = [
    {
      companyName: 'PT. Neuronworks',
      title: 'Teaching Factory',
      date: 'Jul 2023 - Sep 2023',
      img: '/images/logo/neuronworks.png',
      desc: 'Designed and developed a landing page for the company. Contributed as a UI/UX Designer and Frontend Developer.',
      imgClass: 'py-4'
    },
    {
      companyName: 'Curaweda',
      title: 'Teaching Factory',
      date: 'Nov 2023 - Des 2023',
      img: '/images/logo/curaweda.png',
      desc: 'Developed a hotel management system web app. Contributed as a Frontend Developer.',
      imgClass: 'py-2'
    },
    {
      companyName: 'PT. Solusi Inovasi Pesat',
      title: 'Internship',
      date: 'Nov 2023 - Jan 2024',
      img: '/images/logo/sip.jpeg',
      desc: 'Developed a project management system web app for the company. Contributed as a UI/UX Designer and Frontend Developer.',
      imgClass: 'py-2'
    },
    {
      companyName: '4 Vision Media',
      title: 'Internship',
      date: 'Jan 2024 - July 2024',
      img: '/images/logo/4vm.png',
      desc: 'Designed and developed a queue management web app. Contributed as a Frontend Developer at first then later as a Fullstack Developer.',
      imgClass: 'py-4'
    },
    {
      companyName: 'MrScraper',
      title: 'Full Time',
      date: 'Aug 2024 - Present',
      img: '/images/logo/mrscraper.png',
      desc: '',
      imgClass: 'py-2'
    }
  ]
  return (
    <section id='experiences' className='xl:min-h-screen overflow-x-clip'>
      <div className='h-full relative flex flex-col sm:gap-80 xs:gap-56 gap-36'>
        <Title text="WHERE I'VE BEEN" />

        <div className='w-full flex flex-col gap-20 lg:gap-28 items-center relative'>
          {experiences.map((exp, i) => (
            <ExperiencesCard
              key={i}
              src={exp.img}
              companyName={exp.companyName}
              title={exp.title}
              desc={exp.desc}
              date={exp.date}
              imgClass={exp.imgClass}
            />
          ))}

          <div className='border border-light border-opacity-35 h-full absolute right-0 top-0 lg:block hidden'>
            <div className='bg-light text-light p-2 absolute -top-4 left-1/2 -translate-x-1/2'></div>
            <div className='bg-light text-light p-2 absolute -bottom-4 left-1/2 -translate-x-1/2'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
