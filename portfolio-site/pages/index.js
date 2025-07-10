import Logo from '@/public/logo-as-component.jsx';

const Header = () => {
  return (
  <div className='sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md'>
    <div className="flex p-3 justify-between border bg-black">
      <div className="gap-2.5 flex items-center">
        <div className="bg-gradient-to-r from-purple-500 via-orange-300 to-purple-500 bg-clip-text text-transparent text-xl px-0.5 py-1.5 font-bol sm:text-2xl md:3xl">
          Emre Atasavun
        </div>
      </div>

      <ul className="hidden md:flex text-white gap-2.5 items-center">
        <div
          className="group p-[2px] rounded-2xl bg-gradient-to-r from-purple-600 via-purple-400 to-black transition-all duration-500"
          style={{
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundPosition = '100% 50%')}
          onMouseLeave={e => (e.currentTarget.style.backgroundPosition = '0% 50%')}
        >
          <li onClick={() => console.log('aboutme clicked')} className="text-xl bg-black text-white rounded-2xl px-4 py-2 flex justify-center items-center w-full h-full hover:cursor-pointer">
            Who am I?
          </li>
        </div>

        <div
          className="group p-[2px] rounded-2xl bg-gradient-to-r from-purple-600 via-purple-400 to-black transition-all duration-500"
          style={{
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundPosition = '100% 50%')}
          onMouseLeave={e => (e.currentTarget.style.backgroundPosition = '0% 50%')}
        >
          <li onClick={() => console.log('contack clicked')} className="text-xl bg-black text-white rounded-2xl px-4 py-2 flex justify-center items-center w-full h-full hover:cursor-pointer">
            Contact me!
          </li>
        </div>

      </ul>

    </div>
  </div>
  )
}

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-purple-900 to-gray-900">
      <Logo className="w-25 h-25 mb-4 text-purple-400" />
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-orange-300 to-purple-500 bg-clip-text text-transparent">
        Emre Atasavun
      </h1>
      <p className="text-gray-300 mt-4 max-w-xl">
        Full-stack developer focused on building elegant, performant web apps that feel good to use.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          View Projects
        </a>
        <a href="#contact" className="px-5 py-2 border border-purple-400 hover:bg-purple-800 rounded text-white">
          Contact
        </a>
      </div>
    </section>

  )
}


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}
