const Header = () => {
  return (
    <div className="flex p-2.5 justify-between border bg-black">
      <div className="flex items-center font-serif">
        <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">To-be Professional Fullstacker</p>
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
          <li className="text-xl bg-black text-white rounded-2xl px-4 py-2 flex justify-center items-center w-full h-full">
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
          <li className="text-xl bg-black text-white rounded-2xl px-4 py-2 flex justify-center items-center w-full h-full">
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
