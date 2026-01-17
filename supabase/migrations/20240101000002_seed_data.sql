-- Seed data for development and testing

-- Insert sample tenants
INSERT INTO tenants (id, name, slug, subdomain, created_at, updated_at) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Vintage Boutique', 'vintage-boutique', 'boutique-a', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000002', 'Modern Threads', 'modern-threads', 'modern-shop', NOW(), NOW()),
  ('00000000-0000-0000-0000-000000000003', 'Designer Resale', 'designer-resale', 'designer-hub', NOW(), NOW());

-- Insert sample products for Vintage Boutique (boutique-a)
INSERT INTO products (tenant_id, name, brand, category, price, size, color, sale_status, condition, image_url, description) VALUES
  -- Available items
  ('00000000-0000-0000-0000-000000000001', 'Vintage Floral Maxi Dress', 'Laura Ashley', 'Dress', 89.99, 'M', 'Floral Print', 'available', 'excellent', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', 'Beautiful vintage maxi dress with floral print. Perfect for summer events.'),
  ('00000000-0000-0000-0000-000000000001', 'Classic Denim Jacket', 'Levi''s', 'Jacket', 65.00, 'L', 'Blue', 'available', 'good', 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80', 'Classic Levi''s denim jacket. Slightly worn for that perfect vintage look.'),
  ('00000000-0000-0000-0000-000000000001', 'Silk Blouse', 'Chanel', 'Shirt', 199.00, 'S', 'Cream', 'available', 'like_new', 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80', 'Elegant silk blouse from Chanel. Barely worn, like new condition.'),
  ('00000000-0000-0000-0000-000000000001', 'High-Waisted Wide Leg Pants', 'Zara', 'Pants', 45.00, 'M', 'Black', 'available', 'excellent', 'https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=800&q=80', 'Trendy high-waisted wide leg pants. Perfect for office or casual wear.'),
  ('00000000-0000-0000-0000-000000000001', 'Wool Blend Coat', 'Burberry', 'Jacket', 350.00, 'L', 'Camel', 'available', 'excellent', 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80', 'Luxury Burberry wool coat in classic camel color. Excellent condition.'),
  
  -- Sold items
  ('00000000-0000-0000-0000-000000000001', 'Bohemian Maxi Skirt', 'Free People', 'Skirt', 55.00, 'S', 'Burgundy', 'sold', 'good', 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80', 'Flowy bohemian maxi skirt. Sold to happy customer!'),
  ('00000000-0000-0000-0000-000000000001', 'Leather Bomber Jacket', 'AllSaints', 'Jacket', 185.00, 'M', 'Black', 'sold', 'excellent', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80', 'Genuine leather bomber jacket. Recently sold.'),
  
  -- Reserved items
  ('00000000-0000-0000-0000-000000000001', 'Evening Gown', 'Marchesa', 'Dress', 450.00, 'M', 'Navy Blue', 'reserved', 'like_new', 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80', 'Stunning evening gown, currently reserved for customer.');

-- Insert sample products for Modern Threads (modern-shop)
INSERT INTO products (tenant_id, name, brand, category, price, size, color, sale_status, condition, image_url, description) VALUES
  ('00000000-0000-0000-0000-000000000002', 'Minimalist T-Shirt', 'Everlane', 'Shirt', 28.00, 'M', 'White', 'available', 'new', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', 'Classic white t-shirt, brand new with tags.'),
  ('00000000-0000-0000-0000-000000000002', 'Slim Fit Chinos', 'J.Crew', 'Pants', 68.00, 'L', 'Khaki', 'available', 'new', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80', 'Modern slim fit chinos in versatile khaki color.'),
  ('00000000-0000-0000-0000-000000000002', 'Oversized Blazer', 'COS', 'Jacket', 175.00, 'L', 'Gray', 'available', 'new', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', 'Contemporary oversized blazer in soft gray.'),
  ('00000000-0000-0000-0000-000000000002', 'Knit Sweater', 'Uniqlo', 'Sweater', 39.00, 'XL', 'Navy', 'available', 'new', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', 'Comfortable knit sweater, perfect for layering.'),
  ('00000000-0000-0000-0000-000000000002', 'Midi Wrap Dress', '& Other Stories', 'Dress', 95.00, 'S', 'Green', 'sold', 'new', 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80', 'Elegant wrap dress in forest green.');

-- Insert sample products for Designer Resale (designer-hub)
INSERT INTO products (tenant_id, name, brand, category, price, size, color, sale_status, condition, image_url, description) VALUES
  ('00000000-0000-0000-0000-000000000003', 'Designer Handbag Dress', 'Gucci', 'Dress', 890.00, 'M', 'Red', 'available', 'excellent', 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80', 'Authentic Gucci dress in signature red. Excellent pre-owned condition.'),
  ('00000000-0000-0000-0000-000000000003', 'Luxury Silk Scarf Shirt', 'Hermès', 'Shirt', 650.00, 'S', 'Multi-color', 'available', 'like_new', 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&q=80', 'Hermès silk shirt with iconic scarf print.'),
  ('00000000-0000-0000-0000-000000000003', 'Tailored Wool Trousers', 'Prada', 'Pants', 425.00, 'M', 'Black', 'available', 'excellent', 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80', 'Impeccably tailored Prada wool trousers.'),
  ('00000000-0000-0000-0000-000000000003', 'Cashmere Cardigan', 'Loro Piana', 'Sweater', 780.00, 'L', 'Beige', 'on_hold', 'like_new', 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&q=80', 'Luxurious cashmere cardigan. Currently on hold for client.'),
  ('00000000-0000-0000-0000-000000000003', 'Statement Blazer', 'Saint Laurent', 'Jacket', 1250.00, 'M', 'Black', 'sold', 'excellent', 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80', 'Iconic Saint Laurent blazer. Recently sold.');
