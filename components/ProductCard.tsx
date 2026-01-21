import Image from 'next/image'
import { Product } from '@/types/database.types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const getConditionColor = () => {
    switch (product.condition) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'like_new':
        return 'bg-green-100 text-green-800'
      case 'excellent':
        return 'bg-teal-100 text-teal-800'
      case 'good':
        return 'bg-yellow-100 text-yellow-800'
      case 'fair':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="p-3">
        {/* Category and Condition Tags */}
        <div className="flex gap-1.5 mb-2">
          <span className="px-1.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
            {product.category}
          </span>
          {product.condition && (
            <span
              className={`px-1.5 py-0.5 text-xs font-medium rounded ${getConditionColor()}`}
            >
              {product.condition.replace('_', ' ').toUpperCase()}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>

        {/* Brand */}
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

        {/* Size and Color */}
        <div className="flex gap-2 mb-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">Size:</span>
            <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded">
              {product.size}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">Color:</span>
            <span className="text-xs font-medium text-gray-700">
              {product.color}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.original_price && product.original_price > product.price ? (
              <>
                <span className="text-sm text-gray-500 line-through font-normal">
                  ${product.original_price.toFixed(2)}
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
