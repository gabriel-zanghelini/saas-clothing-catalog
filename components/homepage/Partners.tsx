const Partners: React.FC = () => {
  return (
    <section className='mt-16 p-8 bg-white rounded-lg shadow-md'>
      <h2 className='text-gray-600 text-2xl font-bold mb-6'>
        Conheça alguns parceiros
      </h2>
      <p className='text-gray-600 mb-6'>
        Esses são exemplos de lojas criadas por nossos parceiros usando nossa
        plataforma
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='http://boutique-a.localhost:3000/products'
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium rounded transition-colors'
        >
          Vintage Boutique
        </a>
        <a
          href='http://modern-shop.localhost:3000/products'
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium rounded transition-colors'
        >
          Modern Threads
        </a>
        <a
          href='http://designer-hub.localhost:3000/products'
          target='_blank'
          rel='noopener noreferrer'
          className='px-6 py-2 bg-pink-100 hover:bg-pink-200 text-pink-800 font-medium rounded transition-colors'
        >
          Designer Resale
        </a>
      </div>
      <p className='text-sm text-gray-500 mt-4'>
        Note: Demo links work on localhost. Configure your hosts file for local
        testing.
      </p>
    </section>
  )
}

export default Partners
