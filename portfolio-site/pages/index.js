import LogoTilt from '@/public/logo-tilt.jsx';
import { Typewriter } from 'react-simple-typewriter';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TechStack } from '@/components/tech-stack';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import Head from 'next/head';



const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeIn',
    },
  }),
}

const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md font-michroma'>
      <div className="flex p-4 justify-between bg-black">
        <div className="gap-2.5 flex items-center">
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-300 bg-clip-text text-transparent text-xl px-0.5 py-1.5 font-bol sm:text-2xl md:3xl hover:cursor-pointer">
            Emre Atasavun
          </div>
        </div>

        <ul className="hidden md:flex text-white gap-2.5 items-center">
          <div
            className="group p-[2px] rounded-2xl bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 transition-all duration-500"
            style={{
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 50%',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundPosition = '100% 50%')}
            onMouseLeave={e => (e.currentTarget.style.backgroundPosition = '0% 50%')}
          >
            <li onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-xl bg-black text-white rounded-2xl px-4 py-2 flex justify-center items-center w-full h-full hover:cursor-pointer">
              Who am I?
            </li>
          </div>
          <div
            className="group p-[2px] rounded-2xl bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 transition-all duration-500"
            style={{
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 50%',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundPosition = '100% 50%')}
            onMouseLeave={e => (e.currentTarget.style.backgroundPosition = '0% 50%')}
          >
            <li onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-xl bg-black text-white rounded-2xl px-4 py-2 flex justify-center items-center w-full h-full hover:cursor-pointer">
              Say hello!
            </li>
          </div>
        </ul>

      </div>
    </div>
  )
}


const MobileComponent = () => {
  return (
    <div className="bg-[url('/topography.png')] bg-repeat bg-center bg-fixed sm:bg-none">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 text-purple-600 font-michroma">
        <LogoTilt className="w-25 h-25 text-purple-400" />
        <h1 className="text-4xl md:text-6xl font-bold text-black mt-5">
          Emre Atasavun
        </h1>
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Aspiring Fullstack Developer.</h1>
        </div>
      </section>
    </div>

  )
}

const DesktopComponent = () => {
  return (
    <AuroraBackground>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 text-purple-600 font-michroma">
        <LogoTilt className="w-25 h-25 text-purple-400" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-5">
          Emre Atasavun
        </h1>
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            <Typewriter
              words={['Aspiring Fullstack Developer.', 'In the pursuit of greatness.']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        </div>
      </section>
    </AuroraBackground>
  )
}

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile(); // run once on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </>
  );
};

const AboutMe = () => {
  const cards = [
    {
      title: 'Learning',
      desc: 'The only constant to me, is the state of learning. Always striving to improve, to understand more, and to create better.',
    },
    {
      title: 'Minimalism',
      desc: 'I believe in solutions that are refined, elegant and do the most with the least complexity. Simplicity is key.',
    },
    {
      title: 'Meaningful Design',
      desc: 'Design should not just be about aesthetics, but about creating a meaningful experience. Every pixel has a purpose.',
    },
  ]

  return (
    <section id="about" className="w-full px-4 py-20 md:py-32 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-purple-400 font-michroma">About Me</h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center max-w-3xl mx-auto mb-12 font-turret">
          I&apos;m a <span className="text-purple-400 font-semibold">full-stack developer</span> who believes in simplicity, clarity, and steady progress.
          Every project is an opportunity to learn, iterate, and grow.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-zinc-300 backdrop-blur-lg p-6 rounded-2xl"
            >

              <h3 className="font-michroma text-xl font-semibold text-purple-500 mb-2">{card.title}</h3>
              <p className="font-turret text-xl text-neutral-800">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 py-20 md:py-32 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-michroma text-3xl md:text-5xl font-bold text-purple-400 mb-6">Let&apos;s get to it!</h2>
        <p className="font-turret text-xl text-gray-300 mb-10">
          A project, a question or a simple hello? I&apos;m always open to new experiences and connections.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* GitHub */}
          <a
            href="https://github.com/fridgemann"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center border-2 border-transparent bg-gradient-to-br from-purple-600 to-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M12 .297a12 12 0 00-3.79 23.399c.6.112.82-.26.82-.577v-2.254c-3.338.726-4.043-1.612-4.043-1.612-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.003 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.839 1.232 1.91 1.232 3.22 0 4.61-2.803 5.625-5.475 5.922.432.372.816 1.103.816 2.222v3.293c0 .319.216.694.825.576A12.004 12.004 0 0012 .297z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/emre-atasavun-125918303/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center border-2 border-transparent bg-gradient-to-br from-purple-600 to-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7c0 .9-.8 1.7-1.7 1.7zm13.5 11.3h-3v-5.4c0-1.3-.5-2.1-1.6-2.1-1 0-1.4.7-1.6 1.3-.1.2-.1.5-.1.8v5.4h-3s.1-8.8 0-9.7h3v1.4c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4v5.8z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:emreatasavun13@gmail.com"
            className="w-16 h-16 flex items-center justify-center border-2 border-transparent bg-gradient-to-br from-purple-600 to-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Emre Atasavun - Fullstack Developer</title>
        <meta name="description" content="I'm a full-stack developer who enjoys building clean, scalable apps with Next.js, Node.js, and PostgreSQL. Passionate about clarity, iteration, and growth." />
        <meta name="google-site-verification" content="imR-XgAaKN6jqTjTVRkDYIj4bUy47COs8ZQCQ5UXQEM" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="favicon.ico" type="image/x-icon" />


        {/* Open Graph */}
        <meta property="og:title" content="Emre Atasavun – Fullstack Developer" />
        <meta
          property="og:description"
          content="I build clean, scalable full-stack apps with Next.js, Node.js, and PostgreSQL."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emreatasavun.com" />
      </Head>
      <Header />
      <Hero />
      <div className='bg-slate-900'>
        <AboutMe />
        <TechStack />
        <Contact />
      </div>
    </>
  )
}
