import Image from 'next/image'
import { Product, SaleStatus } from '@/types/database.types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const isSold = product.sale_status === SaleStatus.SOLD
  const isReserved = product.sale_status === SaleStatus.RESERVED
  const isOnHold = product.sale_status === SaleStatus.ON_HOLD

  const getSaleStatusBadge = () => {
    switch (product.sale_status) {
      case SaleStatus.SOLD:
        return (
          <span className="px-3 py-1 text-xs font-semibold text-white bg-gray-800 rounded-full">
            SOLD
          </span>
        )
      case SaleStatus.RESERVED:
        return (
          <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
            RESERVED
          </span>
        )
      case SaleStatus.ON_HOLD:
        return (
          <span className="px-3 py-1 text-xs font-semibold text-white bg-yellow-600 rounded-full">
            ON HOLD
          </span>
        )
      case SaleStatus.AVAILABLE:
        return (
          <span className="px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full">
            AVAILABLE
          </span>
        )
      default:
        return null
    }
  }

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
      className={`group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isSold || isReserved || isOnHold
          ? 'opacity-75'
          : 'hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 ${
            !isSold && !isReserved && !isOnHold ? 'group-hover:scale-105' : ''
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Sale Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          {getSaleStatusBadge()}
        </div>

        {/* SOLD Overlay */}
        {isSold && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-3xl font-bold tracking-wider transform -rotate-12">
              SOLD
            </span>
          </div>
        )}
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
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          {product.sale_status === SaleStatus.AVAILABLE && (
            <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors">
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
