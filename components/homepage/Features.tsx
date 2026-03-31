import FeatureCard from './FeatureCard'
import Title from './Title'

const Features: React.FC = () => {
  return (
    <section className='mt-16'>
      <Title title='Funcionalidades' />

      <div className='grid md:grid-cols-3 gap-8'>
        <FeatureCard
          title='Domínio customizável'
          description='Torne sua loja mais fácil de encontrar e de compartilhar.'
          imgSrc='/images/card2.png'
        />
        <FeatureCard
          title='Integração com plataformas'
          description='Com poucos cliques, anuncie seus produtos  também no Instagram, Enjoei e OLX.'
          imgSrc='/images/card1.png'
          size={200}
        />
        <FeatureCard
          title='Visualize sua evolução'
          description='Acompanhe o crescimento da sua loja com estatísticas detalhadas.'
          imgSrc='/images/card3.png'
        />
      </div>
    </section>
  )
}

export default Features
