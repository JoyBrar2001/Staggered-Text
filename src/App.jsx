import React from 'react'
import { easeOut, motion } from 'framer-motion'

const StaggeredTitle = ({ title,  fontsize, delay, totalDelay }) => {


  let text = title.split('')
  let myLineObj = []
  text.forEach((element, index) => {
    myLineObj.push(
      {
        letter: element,
        index: index,
      }
    )
  })

  return <p style={{fontSize: fontsize}} >
    {myLineObj.map((el) => (
      <motion.span
        className={`inline-block ${el.letter === ' ' ? `w-[10px]` : ''}`}
        initial = {{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0, transition:{duration: 1, delay: delay*el.index + totalDelay, ease: easeOut}}}
      >
        {el.letter}
      </motion.span>
    ))}
  </p>;

}

const App = () => {
  return (
    <div className='bg-[#0e0e0e] min-h-screen mx-auto max-w-md w-full flex flex-col justify-center items-center text-white font-bold text-center gap-5'>
      <div>
        <StaggeredTitle title={"Hi, I'm Joy"} fontsize={50} delay={0.05} totalDelay={0} />
      </div>
      <div className='text-xl font-thin'>
        <StaggeredTitle title='I am an editor, designer, video editor, fronend developer' fontsize={25} delay={0.01} totalDelay={0.5} />
      </div>
      <div className='text-xl font-thin'>
        <StaggeredTitle title='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sequi, cumque consequatur voluptatem possimus reiciendis adipisci facilis dolorem fugit dolore rerum alias iste corporis distinctio. Veritatis, et. Molestiae earum minima ipsam reprehenderit autem, vel veniam ipsum laboriosam aliquam modi harum!' fontsize={15} delay={0.01} totalDelay={1} />
      </div>
    </div>
  )
}

export default App
