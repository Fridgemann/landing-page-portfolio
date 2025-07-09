const Header = () => {
  return (
    <div className="flex p-2.5 justify-between border bg-black">
      <div className="gap-2.5 flex items-center">
        
        <div className="flex flex-col justify-start text-3xl font-bold text-white">
          Emre Atasavun
          <p className="text-xl">Fullstack Developer</p>
        </div>
      </div>

      <ul className="text-white flex gap-2.5 items-center">
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
  )
}

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
