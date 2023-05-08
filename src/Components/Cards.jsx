import Image from "next/image"

export const Cards = ({link, paragraph, title}) => {
  return (
    <div className='flex flex-row justify-between w-full items-center min-h-56'>
      <div className='flex flex-col min-h-56 w-full'>
        <Image
          className='flex justify-center items-start object-contain h-full w-full'
          src={link}
          alt='Logo'
          width={300}
          height={300}
        />
        <h1 className='py-4 text-2xl lg:text-4xl font-bold flex-nowrap w-full'>
         {title} →
        </h1>
        <p className='text-left text-white/60 w-full text-sm lg:text-lg'>
          {paragraph}
        </p>
      </div>
    </div>
  )
}
