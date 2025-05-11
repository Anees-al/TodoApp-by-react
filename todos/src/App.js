import React from 'react'
import Todos from './component/Todos'
import {motion} from 'framer-motion'

const App = () => {
  return (
    <div>
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5,delay:1}}>TODO APP</motion.h1>
      <Todos/>
    </div>
  )
}

export default App
