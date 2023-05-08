import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Cards } from '../Components/Cards'
import { Container, ContainerFooter, ContainerHeader, ContainerInner } from '@/Components/Container'


const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    title: "Spense.com",
    link: "/Assets/Spense.png",
    paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit possimus, delectus veritatis.earum similique laboriosam. adipisicing elit. Velit possimus, delectus veritatis.earum similique laboriosam."
  },
  {
    title: "YelpCamp.com",
    link: "/Assets/YelpCamp.png",
    paragraph: "similique laboriosam repudiandae, sit amet consectetur adipisicing elit. Velit possimus, delectus veritatis.earum Lorem ipsum dolor. similique laboriosam repudiandae, sit amet consectetur."
  }
]

export default function Home() {
  return (
    <>    
      <Container>
        <nav className='flex justify-between items-center py-5 w-full'>
          <span className="text-sm">
            Johnathan Specter
          </span>
          <div className='md:flex flex-row w-[50vw] justify-between items-center hidden'>
            <div className='flex justify-between items-center w-full'>
              <ul className='flex flex-row text-xs gap-5 text-white/60'>
                <Link href="#">
                  <li>
                    Articles
                  </li>
                </Link>
                <Link href="#">
                  <li>
                    Chats
                  </li>
                </Link>
                <Link href="#">
                  <li>
                    Awards
                  </li>
                </Link>
                <Link href="#">
                  <li>
                    About
                  </li>
                </Link>
              </ul>
              <button className='flex flex-row text-sm bg-[#FBE850] py-3 px-5 font-bold text-black/60'>
                Get in touch
              </button>
            </div>
        {/* bars */}
          </div>
            <div className='flex flex-col relative justify-between items-center h-11 w-11 md:hidden cursor-pointer group/item transition-all'>
              <span className='absolute top-[30%] bg-white inline-block rounded-full h-0.5 w-1/2 group-hover/item:animate-spin group-hover/item:w-1/5'>
              
              </span>
              <span className='absolute top-[50%] bg-white inline-block rounded-full h-0.5 w-1/2 group-hover/item:animate-wiggle group-active/item:bg-[#FBE850] group-active/item:animate-bounce group-hover/item:animate-pulse'>
              
              </span>
              <span className='absolute top-[70%] bg-white inline-block rounded-full h-0.5 w-1/2 group-hover/item:animate-wiggle'>
              
              </span>
            </div>
        </nav>
        </Container>
        <main
          className={`flex flex-col min-h-screen`}
          >
        <Container>

        {/* Header */}

          <ContainerHeader
            title="Helping companies build better, scalable software."
            paragraph="Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google Facebook and more."
          />

        {/* Company */}

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full justify-between items-center gap-x-10 px-10 md:px-0 py-10'>
            <div className='flex justify-end md:justify-end lg:justify-start items-center h-10 md:h-20 w-full'>
              <Image 
                className='object-contain scale-125 md:scale-100 justify-self-end'
                src="/Assets/Logos/Walmart.svg"
                alt='Logo'
                width={80}
                height={80}
              />
            </div>
            <div className='flex justify-start md:justify-center items-center h-10 md:h-20 w-full'>
              <Image 
                className='object-contain scale-125 md:scale-125 mt-1'
                src="/Assets/Logos/JP Morgan.svg"
                alt='Logo'
                width={80}
                height={80}
              />
            </div>
            <div className='flex lg:justify-center justify-end md:justify-start items-center h-10 md:h-20 w-full'>
              <Image 
                className='md:object-scale-down scale-125 md:scale-100'
                src="/Assets/Logos/Visa.svg"
                alt='Logo'
                width={60}
                height={60}
              />
            </div>
            <div className='flex lg:justify-center justify-start md:justify-center items-center h-10 md:h-20 w-full'>
              <Image 
                className='object-contain scale-125 md:scale-100'
                src="/Assets/Logos/Tinder.svg"
                alt='Logo'
                width={80}
                height={80}
              />
            </div>
            <div className='flex lg:justify-center justify-end md:justify-center items-center h-10 md:h-20 w-full'>
            <Image  
              className='object-contain scale-125 md:scale-125 mt-2 md:mt-1'
              src="/Assets/Logos/Samsung.svg"
              alt='Logo'
              width={80}
              height={80}
            />
            </div>
            <div className='flex justify-start lg:justify-end md:justify-center items-center h-10 md:h-20 w-full'>
            <Image 
              className='object-contain scale-125 md:scale-100'
              src="/Assets/Logos/Verizon.svg"
              alt='Logo'
              width={80}
              height={80}
            />
            </div>
          </div>

        {/* Cards */}

          <div className='flex flex-col md:flex-row justify-between w-full items-start gap-10 lg:gap-20'>
            { data.map( (data) => {
              return (
                <Cards 
                  title={data.title}
                  link={data.link} 
                  paragraph={data.paragraph}
                />
              )
            }) }
          </div>

        {/* Paragraph Section */}
        </Container>
          <div>
            <div className='flex flex-col md:flex-row justify-start items-start my-10 md:my-20 gap-5 md:gap-10 bg-[#2E3038]'>
              <ContainerInner>
                {/* Left Side */}
                <div className='flex flex-col justify-start w-full items-start gap-5'>
                  <h1 className='text-2xl lg:text-4xl font-bold'>
                    A co-founder at one of the world's largest communities.
                  </h1>
                  <p className='text-md lg:text-ls text-white/60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui ducimus, quae incidunt possimus quidem facere fugiat.
                  </p>
                  <p className='text-md lg:text-ls text-white/60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui ducimus. consectetur adipisicing elit. Consectetur qui ducimus.
                  </p>
                </div>
                {/* Right Side */}
                <div className='flex flex-col justify-start w-full items-start gap-5'>
                  <p className='text-md lg:text-ls text-white/60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui ducimus.
                  </p>
                  <p className='text-md lg:text-ls text-white/60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className='text-md lg:text-ls text-white/60'>
                    quae incidunt possimus quidem facere fugiat reiciendis magnam dolorem ipsum dolor saepe eum quo, ea labore fugit in et repellat nostrum!
                  </p>
                  <p className='text-md lg:text-ls text-white/60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.
                  </p>
                </div>
              </ContainerInner>
            </div>
          </div>
        <Container>
          {/* End - CTA */}  
          <div>
            <div className='flex flex-col justify-start items-start w-full gap-4'>
              <h1 className='text-2xl lg:text-4xl font-bold'>Interested in working with me?</h1>
              <p className='text-white/60 max-w-[20rem] text-sm lg:text-lg'>
                Lorem ipsum dolor laborum sit amet consectetur adipisicing elit. Repellat vero maxime provident laborum.
              </p>
              <button className='flex flex-row text-sm bg-[#FBE850] py-3 px-5 font-bold text-black/60'>
                Get in touch
              </button>
            </div>
          </div>
        </Container>
          {/* Footer */}
        <div className='flex flex-row justify-between items-center mt-10 md:mt-20 gap-5 bg-[#2E3038] w-full'>
          <ContainerFooter>
            <span className="text-sm">
              Johnathan Specter
            </span>
            <div className='flex items-center gap-2'>
              <Image 
                className='object-contain'
                src="/Assets/Social Icons/Github.svg"
                alt='Logo'
                width={20}
                height={20}
              />
              <Image 
                className='object-contain'
                src="/Assets/Social Icons/LinkedIn.svg"
                alt='Logo'
                width={20}
                height={20}
              />
              <Image 
                className='object-contain'
                src="/Assets/Social Icons/Twitter.svg"
                alt='Logo'
                width={20}
                height={20}
              />
            </div>
          </ContainerFooter>
        </div>
      </main>
    </>
  )
}
