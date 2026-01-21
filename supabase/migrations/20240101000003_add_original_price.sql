-- Add original_price to support discounted products
-- price = what the customer pays (sale price when discounted)
-- original_price = optional compare-at / pre-discount price (shown crossed out in UI)
ALTER TABLE products
  ADD COLUMN original_price DECIMAL(10, 2) NULL;

-- Ensure original_price is only set when it's greater than price (valid discount)
ALTER TABLE products
  ADD CONSTRAINT products_original_price_valid
  CHECK (original_price IS NULL OR original_price > price);
