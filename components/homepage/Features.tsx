import FeatureCard from './FeatureCard'

const Features: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className='text-2xl font-bold mb-8 text-center'>Funcionalidades</h2>

      <div className='grid md:grid-cols-3 gap-8'>
        <FeatureCard
          title='URL personalizável'
          description='Um domínio próprio dá um aspecto profissional para sua marca, torna sua loja mais fácil de encontrar e de compartilhar.'
        />
        <FeatureCard
          title='Integração com plataformas'
          description='Com poucos cliques, anuncie seus produtos no Instagram, Enjoei e OLX. Aumente sua visibilidade e alcance mais clientes sem esforço adicional.'
        />
        <FeatureCard
          title='Visualize sua evolução'
          description='Acompanhe o crescimento da sua loja com estatísticas detalhadas. Veja quais produtos estão vendendo mais, de onde vêm seus clientes e muito mais.'
        />
      </div>
    </div>
  )
}

export default Features
