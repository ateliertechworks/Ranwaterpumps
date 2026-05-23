# RAN Pumps Industries - Landing Page Project

## Project Overview

This is a modern, responsive landing page website for **RAN Pumps Industries**, a leading manufacturer of high-quality pumps and related industrial solutions. The website showcases their product catalog, services, and company expertise.

## Technology Stack

### Frontend
- **React 19** - Modern JavaScript UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Motion (Framer Motion)** - Smooth animations and transitions
- **Lucide React** - Icon library

### Additional Tools
- **Express.js** - Backend API support
- **dotenv** - Environment variable management

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── About.tsx       # Company information section
│   ├── Contact.tsx     # Contact form section
│   ├── Footer.tsx      # Footer with links
│   ├── Gallery.tsx     # Image gallery
│   ├── Hero.tsx        # Hero/banner section
│   ├── Industries.tsx  # Industries served section
│   ├── Navbar.tsx      # Navigation bar
│   ├── ProductGrid.tsx # Product catalog with filtering
│   ├── Stats.tsx       # Statistics display
│   └── WhyChooseUs.tsx # Company benefits section
├── assets/
│   └── images.ts       # Image imports and exports
├── App.tsx             # Main application component
├── constants.ts        # Product data and constants
├── types.ts            # TypeScript type definitions
├── index.css           # Global styles and animations
└── main.tsx            # Application entry point
```

## Key Features

### 1. **Product Catalog**
   - Comprehensive listing of pump products
   - Power range specifications (0.37 kW - 18.5 kW)
   - Category filtering (Submersible, Monobloc, Booster, Accessories)
   - Product descriptions and specifications

### 2. **Product Categories**
   - Single Phase Openwell Submersible Pumps
   - Centrifugal Monobloc Pumps
   - Vertical Submersible Pumps
   - Borewell Submersible Pumps
   - Stainless Steel Borewell Pumps
   - Dewatering Pumps
   - Three Phase Pumps
   - Pressure Booster Pumps
   - Control Panels
   - And more

### 3. **Interactive Features**
   - Smooth animations and transitions using Motion
   - Hover effects on product cards
   - WhatsApp integration for quick inquiries
   - Responsive design for all devices
   - Interactive category filters

### 4. **Responsive Design**
   - Mobile-first approach
   - Breakpoints for tablet and desktop views
   - Touch-friendly interface
   - Optimized images with lazy loading

### 5. **User Experience Elements**
   - Smooth scrolling navigation
   - Animated power range badges
   - Product image zoom on hover
   - Glass-morphism navigation bar
   - Professional gradient backgrounds

## Component Breakdown

| Component | Purpose |
|-----------|---------|
| **Hero** | Eye-catching banner with company intro |
| **Navbar** | Fixed navigation with smooth styling |
| **ProductGrid** | Main product catalog with filtering |
| **Gallery** | Visual showcase of products/facilities |
| **Industries** | Industries served by RAN Pumps |
| **Stats** | Company achievements and statistics |
| **WhyChooseUs** | Competitive advantages |
| **About** | Company background and mission |
| **Contact** | Contact form and information |
| **Footer** | Links and footer information |

## Contact Integration

The website includes WhatsApp integration for direct customer inquiries:
- Pre-filled messages with product details
- Easy quote requests
- Direct WhatsApp chat links

## Development

### Build Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build artifacts
- `npm run lint` - TypeScript type checking

### Environment Setup
- Create `.env.local` file for API keys
- Set `dotenv` for environment configuration

## Color Scheme

- **Primary Blue** (#008FC7)
- **Dark Blue** (#0B3C6D)
- **Aqua Cyan** (#1ECBE1)
- **Light Gray** (#F5F7FA)
- **Text Dark** (#1E293B)

## Typography

- **Heading Font** - "Sora" (600, 700 weights)
- **Body Font** - "Inter" (400, 500, 600 weights)

## Performance Features

- Lazy loading for images
- Optimized animations
- Efficient CSS with Tailwind
- Fast build times with Vite
- Type safety with TypeScript

## Future Enhancements

- AI-powered chatbot for customer support
- Product comparison tool
- Advanced filtering and search
- Product specification downloads
- Customer testimonials section
- Video demonstrations
- Blog/News section

---

**Project Status**: Active Development  
**Last Updated**: May 2026  
**Version**: 0.0.0
