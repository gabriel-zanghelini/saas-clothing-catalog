export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Enums
export enum ProductSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL',
  ONE_SIZE = 'ONE_SIZE',
}

export enum SaleStatus {
  AVAILABLE = 'available',
  SOLD = 'sold',
  RESERVED = 'reserved',
  ON_HOLD = 'on_hold',
}

export enum Condition {
  NEW = 'new',
  LIKE_NEW = 'like_new',
  EXCELLENT = 'excellent',
  GOOD = 'good',
  FAIR = 'fair',
}

// Database types
export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          name: string
          slug: string
          subdomain: string
          custom_domain: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          subdomain: string
          custom_domain?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          subdomain?: string
          custom_domain?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          tenant_id: string
          name: string
          brand: string
          category: string
          price: number
          original_price: number | null
          size: ProductSize
          color: string
          sale_status: SaleStatus
          condition: Condition | null
          image_url: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          brand: string
          category: string
          price: number
          original_price?: number | null
          size: ProductSize
          color: string
          sale_status?: SaleStatus
          condition?: Condition | null
          image_url: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          name?: string
          brand?: string
          category?: string
          price?: number
          original_price?: number | null
          size?: ProductSize
          color?: string
          sale_status?: SaleStatus
          condition?: Condition | null
          image_url?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          tenant_id: string | null
          email: string
          full_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          tenant_id?: string | null
          email: string
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string | null
          email?: string
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// Helper types
export type Tenant = Database['public']['Tables']['tenants']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']
