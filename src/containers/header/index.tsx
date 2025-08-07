import { Palette } from 'lucide-react'

const Header = () => {
  return (
    <header className='w-full fixed left-1/2 -translate-x-1/2 top-0 z-40'>
      <div className='flex justify-between items-center xl:px-0 px-6 pt-6'>
        <button className='italic text-p text-left font-body font-light'>
          <div>Refi</div>
          <div>Hikman</div>
        </button>

        <div className='sm:flex hidden gap-8 text-small'>
          {/* <button>
            <Palette size={16} />
          </button> */}
          <button>about me</button>
          <button>projects</button>
          <button>experiences</button>
          <button>contacts</button>
        </div>
      </div>
    </header>
  )
}

export default Header
