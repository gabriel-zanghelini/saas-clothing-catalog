import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { Tenant } from '@/types/database.types'

/**
 * Extract subdomain from hostname
 * Examples:
 * - boutique-a.yourapp.com -> boutique-a
 * - boutique-a.localhost:3000 -> boutique-a
 * - localhost:3000 -> null
 * - www.yourapp.com -> null
 */
export function extractSubdomain(hostname: string): string | null {
  // Remove port if present
  const host = hostname.split(':')[0]
  
  // Split by dots
  const parts = host.split('.')
  
  // If localhost without subdomain, return null
  if (host === 'localhost' || host === '127.0.0.1') {
    return null
  }
  
  // If it's subdomain.localhost, extract subdomain
  if (parts.length === 2 && parts[1] === 'localhost') {
    return parts[0]
  }
  
  // For production domains (subdomain.yourapp.com)
  if (parts.length >= 3) {
    const subdomain = parts[0]
    // Ignore www
    if (subdomain === 'www') {
      return null
    }
    return subdomain
  }
  
  return null
}

/**
 * Get current tenant from request headers
 * This is set by middleware
 */
export async function getCurrentTenant(): Promise<Tenant | null> {
  const headersList = await headers()
  const tenantSlug = headersList.get('x-tenant-slug')
  
  if (!tenantSlug) {
    return null
  }
  
  const supabase = await createClient()
  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('subdomain', tenantSlug)
    .single()
  
  return tenant
}

/**
 * Get tenant by subdomain
 */
export async function getTenantBySubdomain(subdomain: string): Promise<Tenant | null> {
  const supabase = await createClient()
  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('subdomain', subdomain)
    .single()
  
  return tenant
}

/**
 * Get tenant by custom domain
 */
export async function getTenantByCustomDomain(domain: string): Promise<Tenant | null> {
  const supabase = await createClient()
  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('custom_domain', domain)
    .single()
  
  return tenant
}

/**
 * Validate if a subdomain is available
 */
export async function isSubdomainAvailable(subdomain: string): Promise<boolean> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('tenants')
    .select('id')
    .eq('subdomain', subdomain)
    .single()
  
  return data === null
}
