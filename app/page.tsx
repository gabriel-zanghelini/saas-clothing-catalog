import PlansGrid from '@/components/PlansGrid'
import Header from '@/components/homepage/Header'
import HeroSection from '@/components/homepage/HeroSection'
import Features from '@/components/homepage/Features'
import Partners from '@/components/homepage/Partners'

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-36 py-16'>
        <HeroSection />
        <Features />
        <PlansGrid />
        <Partners />
      </div>
    </>
  )
}
