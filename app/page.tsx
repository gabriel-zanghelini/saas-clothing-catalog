import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-linear-to-br bg-gray-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Hero Section */}
          <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
            Venda suas roupas de segunda mão com facilidade
          </h1>
          <p className='text-xl text-gray-600 mb-12'>
            Crie sua própria loja de roupas facilmente com nossa plataforma.
            Perfeita para brechós e venda de itens únicos.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
            <Link
              href='/auth/signup'
              className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg border-2 border-gray-200 transition-colors'
            >
              Crie Sua Loja
            </Link>
            <Link
              href='/auth/login'
              className='px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 transition-colors'
            >
              Já tenho uma loja
            </Link>
          </div>

          {/* Features */}
          <div className='grid md:grid-cols-3 gap-8 mt-16'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl mb-4'>🏪</div>
              <h3 className='text-indigo-600 text-xl font-semibold mb-2'>
                Seu Subdomínio Próprio
              </h3>
              <p className='text-gray-600'>
                Tenha um subdomínio profissional para sua loja
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl mb-4'>👕</div>
              <h3 className='text-indigo-600 text-xl font-semibold mb-2'>
                Itens Únicos
              </h3>
              <p className='text-gray-600'>
                Perfeita para peças únicas, vintage e itens de edição limitada
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-3xl mb-4'>🔒</div>
              <h3 className='text-indigo-600 text-xl font-semibold mb-2'>
                Visualize sua evolução
              </h3>
              <p className='text-gray-600'>
                Acompanhe o crescimento da sua loja com estatísticas detalhadas
              </p>
            </div>
          </div>

          {/* Demo Stores */}
          <div className='mt-16 p-8 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-6'>Demo Stores</h2>
            <p className='text-gray-600 mb-6'>
              Check out these sample stores to see the platform in action:
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
              Note: Demo links work on localhost. Configure your hosts file for
              local testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
