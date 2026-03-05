import PlansGrid from '@/components/PlansGrid'
import Header from '@/components/homepage/Header'
import HeroSection from '@/components/homepage/HeroSection'
import Features from '@/components/homepage/Features'
import Partners from '@/components/homepage/Partners'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto text-center'>
          <Header />
          <HeroSection />
          <Features />
          <PlansGrid />
          <Partners />
        </div>
      </div>
    </div>
  )
}
