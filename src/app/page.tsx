import Hero from '@/containers/hero'
import About from '@/containers/about'
import Projects from '@/containers/projects'
import Experiences from '@/containers/experiences'
import Contacts from '@/containers/contacts'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contacts />
    </main>
  )
}
