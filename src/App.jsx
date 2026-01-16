/* eslint-disable no-unused-vars */
import {motion} from 'motion/react'
import { useState } from 'react'

import {Link} from 'react-router-dom'

function App() {

  const cards = [
    {
      title: 'Closer',
      description: 'The Chainsmokers ft. Halsey',
      src: '/song-cards/closer.webp',
      ctaText: 'Play',
      ctaLink: 'https://www.youtube.com/watch?v=PT2_F-1esPk',
      content: () => {
        return (
          <p className='text-[10px] text-neutral-500'>
            "Hey, I was doing just fine before I met you
            I drink too much and that's an issue, but I'm okay
            Hey, you tell your friends it was nice to meet them
            But I hope I never see them again"
          </p>
        )
      }
    },
    {
      title: 'Boys',
      description: 'Charlie XCX',
      src: '/song-cards/boys.webp',
      ctaText: 'Play',
      ctaLink: 'https://www.youtube.com/watch?v=mPRy1B4t5YA',
      content: () => {
        return (
          <p className='text-[10px] text-neutral-500'>
            "I was really thinking 'bout boys,
            I was really thinking 'bout boys,
            I was really thinking 'bout boys,
            I was really thinking 'bout boys"
          </p>
        )
      }
    },
    {
      title: 'Firestone',
      description: 'Kygo ft. Conrad Sewell',
      src: '/song-cards/firestone.webp',
      ctaText: 'Play',
      ctaLink: 'https://www.youtube.com/watch?v=9Sc-ir2UwGU',
      content: () => {
        return (
          <p className='text-[10px] text-neutral-500'>
            "I'm a firestone, you're a firestone
            Burning bright through the darkest night
            We're a firestone, you're a firestone
            Together we will burn so bright"
          </p>
        )
      }
    },
    {
      title: 'The Fate of Ophelia',
      description: 'Taylor Swift',
      src: '/song-cards/the-fate-of-ophelia.webp',
      ctaText: 'Play',
      ctaLink: 'https://www.youtube.com/watch?v=ko70cExuzZM',
      content: () => {
        return (
          <p className='text-[10px] text-neutral-500'>
            "Ophelia, what a wicked game to play
            To make me feel this way
            Ophelia, heaven help a fool who falls
            In love with you"
          </p>
        )
      }
    },
    {
      title: 'High on Life',
      description: 'Martin Garrix ft. Bonn',
      src: '/song-cards/high-on-life.webp',
      ctaText: 'Play',
      ctaLink: 'https://www.youtube.com/watch?v=Lpjcm1F8tY8',
      content: () => {
        return (
          <p className='text-[10px] text-neutral-500'>
            "I'm high on life, high on life
            With you by my side, I'm high on life
            We got this feeling, so appealing
            I'm high on life, high on life"
          </p>
        )
      }
    }
  ]

  const [currentCard, setCurrentCard] = useState(null)

  return (
    <div 
      className="bg-blue-500/40 text-black min-h-screen p-4 overflow-hidden flex items-center justify-center font-inter relative"
    >
      {
        currentCard &&
        <motion.div 
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          onClick={ () => setCurrentCard(null) }
          className='fixed inset-0 z-10 bg-black/40 backdrop-blur-sm'
        ></motion.div>
      }
      {
        currentCard && 
        <motion.div 
          layoutId={`card-${currentCard.title}`}
          style={{ willChange: "transform, opacity" }}
          className='
            h-[500px] 
            fixed inset-0 
            z-20 m-auto 
            bg-white/90
            border border-neutral-300
            shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
            w-70 rounded-2xl 
            p-4 flex flex-col 
            gap-4
            overflow-hidden
          '
        >
          <motion.img
            layoutId={`card-image-${currentCard.title}`}
            src={currentCard.src}
            alt={currentCard.title}
            className='h-60 aspect-square rounded-xl' 
          />
          <div className='flex justify-between items-center'>
            <div className='flex flex-col items-start gap-2 mr-4 py-2'>
              <motion.h2 
                layoutId={`card-title-${currentCard.title}`}
                className='font-bold text-lg tracking-tight'
              >
                {currentCard.title}
              </motion.h2>
              <motion.p 
                layoutId={`card-description-${currentCard.title}`}
                className='text-xs text-neutral-500'
              >
                {currentCard.description}
              </motion.p>
            </div>
            <motion.div
              layoutId={`card-ctaText-${currentCard.title}`}
            >
              <Link
                to={currentCard.ctaLink}
                target='_blank'
                className='px-6 py-2 bg-green-500 rounded-full text-xs flex items-center'
                >
                {currentCard.ctaText}
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{
              filter: 'blur(10px)',
              opacity: 0,
            }}
            animate={{
              filter: 'blur(0px)',
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className='h-60 overflow-auto pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]'
          >
            {
              currentCard.content()
            }
          </motion.div>
        </motion.div>
      }
      <div className='max-w-xl mx-auto flex flex-col gap-10'>
        {
          cards.map((card, idx) => 
            <motion.button 
              layoutId={`card-${card.title}`}
              onClick={ () => setCurrentCard(card) }
              key={card.title}
              whileHover={{ 
                y: -8, 
                x: 8, 
                boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className='
                p-4 rounded-lg 
                flex items-center justify-between 
                gap-10 bg-white/40 
                shadow-2xl 
                cursor-pointer
              '
            >
              <div className='flex gap-6 items-center'>
                <motion.img 
                  layoutId={`card-image-${card.title}`}
                  src={card.src}
                  alt={card.title}
                  className='h-15 aspect-square rounded-2xl'
                />
                <div className='flex flex-col items-start gap-2'>
                  <motion.h2 
                    layoutId={`card-title-${card.title}`}
                    className='font-bold text-lg tracking-tight'
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p 
                    layoutId={`card-description-${card.title}`}
                    className='text-xs text-neutral-500'
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.div 
                layoutId={`card-ctaText-${card.title}`}
                className='px-6 py-2 bg-green-500 rounded-full text-xs flex items-center'
              >
                {card.ctaText}
              </motion.div>
            </motion.button>
          )
        }
      </div>
    </div>
  )
}

export default App
