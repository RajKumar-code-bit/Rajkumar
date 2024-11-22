import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3Alt, FaGithub, FaHtml5 } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'


const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>
                Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className='p-4'>
                <SiTypescript className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className='p-4'>
                <DiJavascript className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className='p-4'>
                <RiTailwindCssFill className='text-7xl text-blue-800'/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className='p-4'>
                <SiMysql className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className='p-4'>
                <FaGithub className='text-7xl text-white'/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(7)}
                className='p-4'>
                <FaHtml5 className='text-7xl text-orange-700'/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className='p-4'>
                <FaCss3Alt className='text-7xl text-blue-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies