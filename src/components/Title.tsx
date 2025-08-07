interface Props {
  text: string
}

const Title = ({ text }: Props) => {
  return (
    <div className='pointer-events-none select-none'>
      <h1 className='sm:text-h1 text-h2 absolute top-6 left-0 text-stroke-[0.05rem] text-stroke-light text-transparent opacity-50 xs:whitespace-nowrap xs:leading-default leading-14'>
        {text}
      </h1>
      <h1 className='sm:text-h1 text-h2 absolute sm:top-24 top-20 sm:left-18 left-0 text-stroke-[0.05rem] text-stroke-light text-transparent opacity-30 whitespace-nowrap hidden xs:block'>
        {text}
      </h1>
      <h1 className='sm:text-h1 text-h2 absolute sm:top-42 top-34 sm:left-36 left-0 text-stroke-[0.05rem] text-stroke-light text-transparent opacity-10 whitespace-nowrap hidden xs:block'>
        {text}
      </h1>
    </div>
  )
}

export default Title
