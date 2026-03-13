import React from 'react'

interface FeatureCardProps {
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
      <h3 className='text-primary-400 text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}

export default FeatureCard
