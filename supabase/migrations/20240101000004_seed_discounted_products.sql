-- Seed discounted products for testing discount functionality
-- These products have original_price > price to show discounts in the UI

-- Insert discounted products for Vintage Boutique (boutique-a)
INSERT INTO products (tenant_id, name, brand, category, price, original_price, size, color, sale_status, condition, image_url, description) VALUES
  -- Products with 20-30% discounts
  ('00000000-0000-0000-0000-000000000001', 'Vintage Leopard Print Blazer', 'Vintage Designer', 'Jacket', 75.00, 110.00, 'M', 'Leopard Print', 'available', 'excellent', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80', 'Stunning vintage leopard print blazer. On sale!'),
  ('00000000-0000-0000-0000-000000000001', 'Floral Embroidered Kimono', 'Anthropologie', 'Jacket', 55.00, 78.00, 'S', 'Pink', 'available', 'like_new', 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80', 'Beautiful embroidered kimono in excellent condition. Special discount.'),
  ('00000000-0000-0000-0000-000000000001', 'Velvet Evening Top', 'Free People', 'Shirt', 42.00, 65.00, 'M', 'Emerald Green', 'available', 'excellent', 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80', 'Luxurious velvet top perfect for evening wear. Limited time offer.'),
  
  -- Products with deeper discounts (30-40%)
  ('00000000-0000-0000-0000-000000000001', 'Statement Floral Midi Dress', 'Reformation', 'Dress', 89.00, 135.00, 'M', 'Pink Floral', 'available', 'excellent', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', 'Gorgeous statement dress with bold floral print. Big savings!'),
  ('00000000-0000-0000-0000-000000000001', 'Corduroy Wide Leg Pants', 'Madewell', 'Pants', 38.00, 58.00, 'L', 'Olive', 'available', 'new', 'https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=800&q=80', 'Trendy corduroy pants. Brand new with tags, heavily discounted.');

-- Insert discounted products for Modern Threads (modern-shop)
INSERT INTO products (tenant_id, name, brand, category, price, original_price, size, color, sale_status, condition, image_url, description) VALUES
  -- Moderate discounts (15-25%)
  ('00000000-0000-0000-0000-000000000002', 'Oversized Cotton Shirt', 'COS', 'Shirt', 42.00, 55.00, 'M', 'Beige', 'available', 'new', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', 'Minimalist oversized shirt. On sale now.'),
  ('00000000-0000-0000-0000-000000000002', 'Structured Shoulder Blazer', 'Arket', 'Jacket', 125.00, 165.00, 'S', 'Black', 'available', 'new', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', 'Classic structured blazer with shoulder pads. Discounted price.'),
  ('00000000-0000-0000-0000-000000000002', 'Ribbed Knit Sweater', 'Arket', 'Sweater', 52.00, 72.00, 'L', 'Cream', 'available', 'new', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', 'Soft ribbed knit sweater. Special sale price.'),
  
  -- Deeper discount
  ('00000000-0000-0000-0000-000000000002', 'Pleated Midi Skirt', 'Massimo Dutti', 'Skirt', 68.00, 98.00, 'M', 'Navy', 'available', 'new', 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80', 'Elegant pleated midi skirt. Save 30% off original price!'),
  ('00000000-0000-0000-0000-000000000002', 'Relaxed Fit Jeans', 'Levi''s', 'Pants', 58.00, 89.00, 'XL', 'Medium Blue', 'available', 'new', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80', 'Comfortable relaxed fit jeans. Great deal!');

-- Insert discounted products for Designer Resale (designer-hub)
INSERT INTO products (tenant_id, name, brand, category, price, original_price, size, color, sale_status, condition, image_url, description) VALUES
  -- Luxury items with discounts (20-30%)
  ('00000000-0000-0000-0000-000000000003', 'Silk Chiffon Blouse', 'Valentino', 'Shirt', 520.00, 750.00, 'S', 'Nude', 'available', 'excellent', 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80', 'Luxurious Valentino silk blouse. Rare find at discounted price.'),
  ('00000000-0000-0000-0000-000000000003', 'Tweed Blazer', 'Chanel', 'Jacket', 1120.00, 1600.00, 'M', 'Black & White', 'available', 'excellent', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', 'Iconic Chanel tweed blazer. Authentic, pre-owned in excellent condition.'),
  ('00000000-0000-0000-0000-000000000003', 'Leather Midi Skirt', 'Celine', 'Skirt', 680.00, 950.00, 'S', 'Black', 'available', 'like_new', 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80', 'Sophisticated Celine leather skirt. Barely worn, like new.'),
  
  -- Significant discount
  ('00000000-0000-0000-0000-000000000003', 'Cashmere Blend Coat', 'Max Mara', 'Jacket', 920.00, 1350.00, 'L', 'Camel', 'available', 'excellent', 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80', 'Luxurious Max Mara cashmere coat. Substantial savings on this classic piece.'),
  ('00000000-0000-0000-0000-000000000003', 'Belted Midi Dress', 'Dior', 'Dress', 780.00, 1200.00, 'M', 'Navy', 'available', 'excellent', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', 'Elegant Dior midi dress with belt. Exceptional value at this price.');
