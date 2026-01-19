import { createClient } from '@/lib/supabase/server'
import { getCurrentTenant } from '@/lib/tenant'
import { ProductGrid } from '@/components/ProductGrid'
import { ProductFilters } from '@/components/ProductFilters'
import { redirect } from 'next/navigation'
import { SaleStatus } from '@/types/database.types'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const tenant = await getCurrentTenant()
  
  if (!tenant) {
    redirect('/')
  }

  const supabase = await createClient()
  const params = await searchParams
  
  // Build query with filters
  let query = supabase
    .from('products')
    .select('*')
    .eq('tenant_id', tenant.id)
    .eq('sale_status', SaleStatus.AVAILABLE) // Only show available items
    .order('created_at', { ascending: false })

  // Apply filters from search params
  if (params.category) {
    query = query.eq('category', params.category)
  }

  if (params.size) {
    query = query.eq('size', params.size)
  }

  const { data: products, error } = await query

  if (error) {
    console.error('Error fetching products:', error)
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600">Error loading products. Please try again.</p>
      </div>
    )
  }

  // Get unique categories and sizes for filters
  const categories = [...new Set(products?.map((p) => p.category) || [])]
  const sizes = [...new Set(products?.map((p) => p.size) || [])]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {tenant.name}
          </h1>
          <p className="text-gray-600">
            Unique, one-of-a-kind clothing items
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-600">
            <span>
              <strong>{products?.length || 0}</strong> Available Items
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <ProductFilters categories={categories} sizes={sizes} />

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <ProductGrid products={products || []} />
      </div>
    </div>
  )
}
