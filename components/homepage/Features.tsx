const Features: React.FC = () => {
  return (
    <div className='grid md:grid-cols-3 gap-8 mt-16'>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <div className='text-3xl mb-4'>🏪🏬</div>
        <h3 className='text-indigo-600 text-xl font-semibold mb-2'>
          Seu Subdomínio Próprio
        </h3>
        <p className='text-gray-600'>
          Tenha um subdomínio profissional para sua loja
        </p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md'>
        <div className='text-3xl mb-4'>👕🌟</div>
        <h3 className='text-indigo-600 text-xl font-semibold mb-2'>
          Itens Únicos
        </h3>
        <p className='text-gray-600'>
          Perfeita para peças únicas, vintage e itens de edição limitada
        </p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md'>
        <div className='text-3xl mb-4'>📈📊</div>
        <h3 className='text-indigo-600 text-xl font-semibold mb-2'>
          Visualize sua evolução
        </h3>
        <p className='text-gray-600'>
          Acompanhe o crescimento da sua loja com estatísticas detalhadas
        </p>
      </div>
    </div>
  )
}

export default Features
