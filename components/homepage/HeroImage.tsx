'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: 1.1,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 2.5,
        },
      }}
      viewport={{}}
    >
      <Image
        src='/images/sample-screenshot.png'
        alt='Hero Image'
        width={1000}
        height={700}
        className='mx-auto shadow-2xl rounded-md'
      />
    </motion.div>
  )
}

export default HeroImage
