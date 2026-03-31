import React from 'react'
import Image from 'next/image'
import Card from './Card'

interface FeatureCardProps {
  title: string
  description: string
  imgSrc: string
  size?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imgSrc,
  size = 150,
}) => {
  return (
    <Card>
      <h3 className={`text-2xl font-semibold mb-4`}>{title}</h3>
      <Image
        src={imgSrc}
        alt='Custom URL'
        width={size}
        height={size}
        className='mx-auto mb-4 p-4'
      />
      <p className='text-gray-600'>{description}</p>
    </Card>
  )
}

export default FeatureCard
