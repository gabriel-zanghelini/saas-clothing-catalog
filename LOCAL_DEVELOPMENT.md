# Local Development Setup Guide

Complete guide for setting up the multi-tenant clothing catalog application for local development with subdomain support.

---

## 🚀 Quick Start (TL;DR)

**Get running in 5 minutes:**

1. **Install dependencies**: `npm install`
2. **Set up Supabase**: Create project at [app.supabase.com](https://app.supabase.com), run the 3 migration files in SQL Editor
3. **Environment variables**: Create `.env.local` with your Supabase URL and keys
4. **Hosts file**: Add `127.0.0.1 boutique-a.localhost` (and other subdomains)
5. **Start server**: `npm run dev`
6. **Visit**: `http://boutique-a.localhost:3000/products`

✅ **Expected result**: Product listings with images, filters, and sale statuses

---

## 📋 Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- Basic understanding of Next.js and Supabase

---

## Detailed Setup Instructions

### Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, Supabase clients, and Tailwind CSS.

---

### Step 2: Set Up Supabase

#### Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in your project details (name, database password, region)
4. Wait for provisioning to complete (2-3 minutes)

#### Run Database Migrations

**Option A: Via Supabase Dashboard (Recommended for beginners)**

1. In your Supabase project dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the contents of each migration file **in order**:
   - `supabase/migrations/20240101000000_initial_schema.sql` - Creates tables and enums
   - `supabase/migrations/20240101000001_rls_policies.sql` - Sets up security policies
   - `supabase/migrations/20240101000002_seed_data.sql` - Adds sample data
4. Click **Run** (or press Ctrl+Enter) for each migration

**Option B: Via Supabase CLI**

If you have Supabase CLI installed:

```bash
npx supabase db push
```

---

### Step 3: Configure Environment Variables

1. Copy the example file:

```bash
cp .env.example .env.local
```

2. Get your Supabase credentials:
   - In Supabase dashboard, go to **Settings → API**
   - Find: Project URL, anon (public) key, and service_role key

3. Update `.env.local` with your actual values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Important**: Never commit `.env.local` to git (it's already in `.gitignore`)

---

### Step 4: Configure Local Subdomain Support

To test subdomain routing on localhost, you need to add entries to your system's hosts file.

#### Windows

1. **Open Notepad as Administrator**
   - Press Windows key, type "Notepad"
   - Right-click → "Run as administrator"

2. **Open hosts file**
   - File → Open
   - Navigate to: `C:\Windows\System32\drivers\etc\`
   - Change file type to "All Files (*.*)"
   - Select `hosts` file

3. **Add subdomain entries** at the end of the file:

```
127.0.0.1 boutique-a.localhost
127.0.0.1 modern-shop.localhost
127.0.0.1 designer-hub.localhost
```

4. **Save and close**

#### macOS/Linux

1. Open terminal

2. Edit hosts file with your preferred editor:

```bash
sudo nano /etc/hosts
```

3. Add these lines at the end:

```
127.0.0.1 boutique-a.localhost
127.0.0.1 modern-shop.localhost
127.0.0.1 designer-hub.localhost
```

4. Save and exit:
   - For nano: Press `Ctrl+O`, `Enter`, then `Ctrl+X`
   - For vim: Press `Esc`, type `:wq`, press `Enter`

5. Flush DNS cache (optional but recommended):

```bash
# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemctl restart systemd-resolved
```

---

### Step 5: Run the Development Server

```bash
npm run dev
```

The server will start at:
- Main domain: `http://localhost:3000`
- Network: `http://192.168.x.x:3000`

⚠️ If you see config changes, restart the server with `Ctrl+C` then `npm run dev` again.

---

### Step 6: Test the Application

#### Sample Tenants (from seed data)

The seed data creates 3 demo stores:

1. **Vintage Boutique**
   - URL: [http://boutique-a.localhost:3000/products](http://boutique-a.localhost:3000/products)
   - Subdomain: `boutique-a`
   - Focus: Vintage and pre-owned fashion
   - Sample items: 8 products (dresses, jackets, coats)

2. **Modern Threads**
   - URL: [http://modern-shop.localhost:3000/products](http://modern-shop.localhost:3000/products)
   - Subdomain: `modern-shop`
   - Focus: Contemporary fashion, new items
   - Sample items: 5 products (t-shirts, blazers, sweaters)

3. **Designer Resale**
   - URL: [http://designer-hub.localhost:3000/products](http://designer-hub.localhost:3000/products)
   - Subdomain: `designer-hub`
   - Focus: Luxury designer resale
   - Sample items: 5 products (high-end designer pieces)

#### Main Landing Page

- URL: [http://localhost:3000](http://localhost:3000)
- Features: Home page with signup/login and demo links

#### What You Should See

✅ **Product listings** with beautiful card layouts  
✅ **Product images** from Unsplash  
✅ **Sale status badges** (Available, Sold, Reserved, On Hold)  
✅ **Filters** by category, size, and sale status  
✅ **Single size and color** per item (unique items model)  
✅ **Tenant isolation** - each subdomain shows only its own products  
✅ **Stats** showing available/sold counts  

---

## Creating New Tenants

To add a new tenant for testing:

### Via Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **Table Editor → tenants**
3. Click **Insert row**
4. Fill in the fields:
   - `name`: Display name (e.g., "My Boutique")
   - `slug`: URL-friendly slug (e.g., "my-boutique")
   - `subdomain`: Unique subdomain (e.g., "myboutique")
   - `custom_domain`: (optional) Leave empty for now
5. Click **Save**

### Add to Hosts File

Add the new subdomain to your hosts file:

```
127.0.0.1 myboutique.localhost
```

### Access Your New Tenant

Visit: `http://myboutique.localhost:3000/products`

---

## Adding Products

Products can be added in several ways:

### Via Supabase Dashboard (Easiest)

1. Go to **Table Editor → products**
2. Click **Insert row**
3. Fill in the required fields:
   - `tenant_id`: Select your tenant (copy from tenants table)
   - `name`: Product name
   - `brand`: Brand name
   - `category`: Category (Dress, Shirt, Pants, Jacket, etc.)
   - `price`: Price as decimal (e.g., 49.99)
   - `size`: Select from dropdown (XS, S, M, L, XL, XXL, XXXL, ONE_SIZE)
   - `color`: Color description
   - `sale_status`: Select status (available, sold, reserved, on_hold)
   - `condition`: Select condition (new, like_new, excellent, good, fair)
   - `image_url`: Full URL to image (use Unsplash or your own CDN)
   - `description`: Optional detailed description

### Via SQL

```sql
INSERT INTO products (
  tenant_id, name, brand, category, price, size, color, 
  sale_status, condition, image_url, description
) VALUES (
  'your-tenant-id-here',
  'Vintage Leather Jacket',
  'Schott',
  'Jacket',
  299.99,
  'L',
  'Black',
  'available',
  'excellent',
  'https://images.unsplash.com/photo-example',
  'Classic leather jacket in excellent condition'
);
```

---

## Troubleshooting

### Subdomain Not Working?

**Symptoms**: "This site can't be reached" or redirects to search

**Solutions**:
1. Verify hosts file entry is correct (no typos)
2. Make sure you saved the hosts file with proper admin permissions
3. Clear browser cache and DNS cache
4. Try a different browser or incognito/private mode
5. Restart your browser completely
6. On Windows, run `ipconfig /flushdns` in Command Prompt
7. Verify you're using `.localhost` not `.local`

### Products Not Showing?

**Symptoms**: Empty grid or "No products found"

**Solutions**:
1. Check that all migrations ran successfully in Supabase
2. Verify RLS policies are enabled (Table Editor → Settings → Enable RLS)
3. Check browser console for errors (F12 → Console tab)
4. Ensure tenant exists in database
5. Verify tenant_id matches in products table
6. Check that seed data migration ran (should have ~18 sample products)

### Images Not Loading?

**Symptoms**: Broken image icons or Next.js image errors

**Solutions**:
1. Check `next.config.ts` has `images.unsplash.com` in remotePatterns
2. Restart dev server after config changes
3. Verify image URLs are valid HTTPS URLs
4. Check browser console for specific image errors

### Authentication Errors?

**Symptoms**: "Invalid credentials" or "Missing API keys"

**Solutions**:
1. Verify Supabase credentials in `.env.local` are correct
2. Ensure you're using the correct project URL (not a different project)
3. Verify the anon key matches your project
4. Check for typos or extra spaces in environment variables
5. Restart dev server after changing `.env.local`
6. Make sure `.env.local` is in the project root (not in a subfolder)

### Database Connection Issues?

**Symptoms**: "Failed to fetch" or timeout errors

**Solutions**:
1. Check your internet connection
2. Verify Supabase project is active (not paused)
3. Check Supabase status page: [status.supabase.com](https://status.supabase.com)
4. Verify your IP isn't blocked in Supabase settings
5. Check browser console for specific error messages

### Build or TypeScript Errors?

**Symptoms**: Red underlines or compilation errors

**Solutions**:
1. Run `npm install` to ensure all dependencies are installed
2. Delete `.next` folder and restart dev server
3. Check TypeScript errors in terminal
4. Verify `types/database.types.ts` is present
5. Run `npm run build` to see all errors at once

---

## Next Steps

Once everything is working:

### Explore the Code

- **`app/products/page.tsx`** - Product listing page (Server Component)
- **`components/ProductCard.tsx`** - Individual product display
- **`components/ProductFilters.tsx`** - Filter UI (Client Component)
- **`middleware.ts`** - Subdomain extraction and routing
- **`lib/tenant.ts`** - Tenant resolution utilities
- **`lib/supabase/`** - Supabase client configurations

### Customize Your Store

- Modify product categories in the database
- Update Tailwind styles in components
- Add your own product images
- Customize the tenant name and branding
- Add more filter options

### Add Features

Some ideas for extending the application:
- Product detail pages
- Shopping cart functionality
- Checkout and payment integration
- Order management
- Customer accounts
- Wishlist/favorites
- Product search
- Image galleries
- Admin dashboard
- Email notifications
- Analytics tracking

---

## Production Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add the same variables from your `.env.local`
   - Make sure to add them for all environments (Production, Preview, Development)

4. **Configure Wildcard Domain**
   - Add domain in Vercel: `*.yourapp.com`
   - Configure DNS with your domain provider:
     ```
     Type: CNAME
     Name: *
     Value: cname.vercel-dns.com
     ```

5. **Deploy**
   - Push to main branch
   - Vercel automatically deploys
   - Each tenant accessible at: `boutique-a.yourapp.com`

### Custom Domains Per Tenant

For premium tenants with their own domains:

1. **In Vercel Dashboard**
   - Add the custom domain (e.g., `customstore.com`)
   - Follow Vercel's DNS configuration instructions

2. **In Database**
   - Update the tenant's `custom_domain` field:
     ```sql
     UPDATE tenants 
     SET custom_domain = 'customstore.com' 
     WHERE subdomain = 'tenant-slug';
     ```

3. **Middleware** (already handles this automatically)
   - Looks up tenant by custom_domain if no subdomain match
   - Transparent to the application

---

## Additional Resources

- **Project Overview**: See `README.md`
- **Database Migrations**: Check `supabase/migrations/`
- **Type Definitions**: Review `types/database.types.ts`
- **Implementation Plan**: See `.cursor/plans/`

---

## Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review error messages in browser console (F12)
3. Check terminal output for server errors
4. Verify all setup steps were completed
5. Review the migration files to understand the database structure
6. Check Supabase logs in the dashboard

---

**Happy coding! 🚀**
