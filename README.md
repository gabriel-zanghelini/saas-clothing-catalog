# Multi-Tenant Clothing Catalog SaaS

A modern, multi-tenant SaaS platform for unique clothing catalogs. Perfect for vintage stores, boutiques, resale shops, and limited edition collections where each item is one-of-a-kind.

## Features

- **Multi-Tenant Architecture**: Each store gets their own subdomain (e.g., `boutique.yourapp.com`)
- **Unique Items Model**: Each product is a single, one-of-a-kind piece
- **Real-Time Availability**: Products show as Available, Sold, Reserved, or On Hold
- **Advanced Filtering**: Filter by category, size, sale status, and more
- **Subdomain Routing**: Professional branding with dedicated URLs per tenant
- **Secure & Isolated**: Row-Level Security ensures complete data isolation
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Server-Side Rendering**: Optimized for SEO and performance

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Product Model

Unlike traditional e-commerce platforms, this system is designed for **unique items**:

- Each product has a single size (not an array of sizes)
- Each product has a single color
- No inventory quantities needed
- Perfect for:
  - Vintage clothing stores
  - Resale/consignment shops
  - Boutiques with limited pieces
  - Designer sample sales
  - One-of-a-kind fashion items

## Getting Started

**📖 Full Setup Guide**: See [LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md) for detailed setup instructions with troubleshooting and examples.

### Quick Start (5 minutes)

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Supabase project and run migrations
4. Configure environment variables in `.env.local`
5. Set up local subdomain support (add to hosts file)
6. Run development server: `npm run dev`
7. Visit: `http://boutique-a.localhost:3000/products`

💡 **Tip**: The LOCAL_DEVELOPMENT.md file includes a detailed Quick Start (TL;DR) section at the top for rapid setup, followed by comprehensive step-by-step instructions.

## Database Schema

### Tenants
- Stores/brands with their own subdomain
- Optional custom domain support for premium tier

### Products
- Unique clothing items (not variants)
- Single size and color per item
- Sale status: available, sold, reserved, on_hold
- Condition tracking for resale items

### Profiles
- User accounts linked to tenants
- Support for tenant admins and staff

## Multi-Tenancy

### Subdomain Routing
- Each tenant has a unique subdomain: `tenant.yourapp.com`
- Middleware extracts tenant from hostname
- All data queries are automatically filtered by tenant

### Custom Domains (Future)
- Premium tenants can use their own domain
- Database supports custom domain mapping
- Easy DNS configuration

## Security

- **Row-Level Security (RLS)**: PostgreSQL RLS policies ensure complete tenant isolation
- **Authentication**: Supabase Auth with JWT tokens
- **API Security**: Server-side data fetching with secure credentials

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Configure wildcard domain: `*.yourapp.com`
4. Deploy!

Vercel automatically supports wildcard domains, making multi-tenant deployment seamless.

### DNS Configuration

Add a CNAME record for wildcard subdomain:
```
* → your-app.vercel.app
```

## Project Structure

```
├── app/
│   ├── products/          # Product listing page
│   └── ...
├── components/
│   ├── ProductCard.tsx    # Individual product display
│   ├── ProductGrid.tsx    # Grid layout
│   └── auth/              # Authentication components
├── lib/
│   ├── supabase/          # Supabase client utilities
│   ├── tenant.ts          # Tenant resolution logic
│   └── auth-context.tsx   # Auth context provider
├── supabase/
│   └── migrations/        # Database migrations
├── types/
│   └── database.types.ts  # TypeScript database types
└── middleware.ts          # Subdomain & auth middleware
```

## Development

### Adding a New Tenant

1. Insert into `tenants` table via Supabase dashboard
2. Add subdomain to your hosts file for local testing
3. Access at `http://subdomain.localhost:3000`

### Adding Products

Products can be added via:
- Supabase dashboard (Table Editor)
- Future admin panel (to be implemented)
- Bulk import scripts (to be implemented)

## Roadmap

- [ ] Admin dashboard for managing products
- [ ] Product detail pages
- [ ] Image upload functionality
- [ ] Shopping cart & checkout
- [ ] Payment integration (Stripe)
- [ ] Order management
- [ ] Customer accounts
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Bulk product import
- [ ] Custom domain management UI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, please open an issue on GitHub.
