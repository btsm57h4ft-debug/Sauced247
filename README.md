# 🔥 SAUCED247 - Premium Resale Clothing Store

A modern, responsive e-commerce website showcasing your clothing collection for resale. Customers can browse items and place orders directly through Snapchat.

## Features

✨ **Beautiful Product Showcase**
- Clean, professional design
- Grid layout that adjusts to any screen size
- Smooth hover effects and animations
- Product images with emoji placeholders (ready to add real images)

📱 **Mobile Responsive**
- Works perfectly on phones, tablets, and desktops
- Touch-friendly buttons for easy ordering

🔗 **Direct Snapchat Integration**
- Each product has a "Order on Snapchat" button
- Clicking opens a direct link to your Snapchat DM
- Customers can discuss sizes, colors, and place orders

## Quick Start

### 1. Update Your Snapchat Username
Open `script.js` and find this line:
```javascript
const SNAPCHAT_USERNAME = "sauced247";
```
Replace `"sauced247"` with your actual Snapchat username.

### 2. Add Your Products
In `script.js`, the `products` array contains all items. Each product needs:
- `title`: Item name
- `size`: Available sizes
- `price`: Price in USD
- `description`: Brief description
- `emoji`: Icon to represent the item

Example:
```javascript
{
    id: 1,
    title: "Vintage Band Tee",
    size: "M / L / XL",
    price: "$15",
    description: "Classic vintage band t-shirt, great condition",
    emoji: "👕"
}
```

### 3. Deploy Your Website

#### Option A: GitHub Pages (FREE & RECOMMENDED)
1. Go to your repository: https://github.com/btsm57h4ft-debug/Sauced247
2. Click **Settings** (top right)
3. Scroll down to **"Pages"** section
4. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
5. Click **Save**
6. Your site will be live at: `https://btsm57h4ft-debug.github.io/Sauced247/`

#### Option B: Netlify (Also FREE)
1. Visit https://netlify.com
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your Sauced247 repository
5. Deploy!

#### Option C: Vercel (Also FREE)
1. Visit https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click Deploy!

## File Structure

```
Sauced247/
├── index.html      (Main webpage)
├── styles.css      (Styling & layout)
├── script.js       (Products & functionality)
└── README.md       (This file)
```

## Customization Tips

### Add Real Product Images
1. Save your product images to the repo
2. In `script.js`, modify each product to add an image:
```javascript
{
    id: 1,
    title: "Vintage Band Tee",
    size: "M / L / XL",
    price: "$15",
    description: "Classic vintage band t-shirt, great condition",
    emoji: "👕",
    image: "images/tee1.jpg"  // Add this line
}
```
3. Update the `renderProducts()` function in `script.js` to display images:
```javascript
<img src="${product.image || 'placeholder.jpg'}" alt="${product.title}">
```

### Change Colors
Edit `styles.css`:
- `#667eea` - Primary blue
- `#764ba2` - Secondary purple
- `#ff6b6b` - Accent red

### Change Font
In `styles.css`, modify:
```css
font-family: 'Arial', sans-serif;
```
Try: 'Roboto', 'Open Sans', 'Montserrat', etc.

## Tips for Success

💡 **Photography Tips:**
- Use good lighting
- Clean, neutral backgrounds
- Show multiple angles
- Include size reference

💡 **Product Descriptions:**
- Be specific about condition (new, like new, good, fair)
- Mention material/brand
- Note any flaws honestly
- Include care instructions

💡 **Snapchat Marketing:**
- Respond quickly to inquiries
- Use Snapchat stories to showcase new items
- Offer bundle deals
- Build customer loyalty

## Website Structure

**index.html** - Contains the HTML structure with:
- Navigation bar with your branding
- Hero section with call-to-action
- Products grid that loads from JavaScript
- Footer

**script.js** - Contains:
- Product database (easily editable)
- Snapchat username (change this to yours)
- Functions to render products dynamically
- Smooth scroll functionality

**styles.css** - Contains:
- Responsive design (works on all devices)
- Color scheme and branding
- Card animations and hover effects
- Mobile optimizations

---

## Support & Next Steps

✅ Your website is ready to deploy!
✅ Follow the "Deploy Your Website" section above
✅ Share the link with customers

**Questions?** Check the HTML/CSS/JavaScript files - they're well-commented!

---

**Made with ❤️ for Sauced247**
Last updated: June 2026
