'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SaleStatus } from '@/types/database.types'

interface ProductFiltersProps {
  categories: string[]
  sizes: string[]
}

export function ProductFilters({ categories, sizes }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          {categories.length > 0 && (
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Category
              </label>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchParams.get('category') || ''}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Size Filter */}
          {sizes.length > 0 && (
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Size
              </label>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchParams.get('size') || ''}
                onChange={(e) => handleFilterChange('size', e.target.value)}
              >
                <option value="">All Sizes</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Sale Status Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Status
            </label>
            <select
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchParams.get('sale_status') || ''}
              onChange={(e) => handleFilterChange('sale_status', e.target.value)}
            >
              <option value="">All Status</option>
              <option value={SaleStatus.AVAILABLE}>Available</option>
              <option value={SaleStatus.SOLD}>Sold</option>
              <option value={SaleStatus.RESERVED}>Reserved</option>
              <option value={SaleStatus.ON_HOLD}>On Hold</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
