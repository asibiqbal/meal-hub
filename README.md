# Meal Hub - A Responsive Meal Discovery & Cart Application

A modern, fully responsive React application that allows users to discover delicious meals and add them to a shopping cart. Built with React 19, Vite, and custom CSS animations.

## Features

✨ **Key Features:**
- 🍽️ Browse delicious meals from TheMealDB API
- 🛒 Add meals to cart with instant feedback
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Beautiful animations and transitions
- 🌙 Dark theme with gradient backgrounds
- 🍔 Hamburger menu for mobile devices
- 💫 Smooth hover effects and interactive elements
- ✅ Order confirmation with toast notifications

## Responsive Design Breakpoints

### Large Screens (1024px and above)
- **Meal Grid:** 3 columns layout
- **Layout:** Side-by-side (cart on the right, meals on the left)
- **Cart Section:** Sticky positioned on the right, visible at all times
- **Navigation:** Full horizontal menu with underline hover effects

### Medium Screens (768px - 1024px)
- **Meal Grid:** 2 columns layout
- **Layout:** Side-by-side maintained
- **Cart Section:** Visible on the right with optimized width
- **Navigation:** Full horizontal menu with responsive padding

### Mobile Screens (Below 768px)
- **Meal Grid:** 1 column layout
- **Layout:** Stacked vertical layout
- **Cart Section:** Positioned ABOVE the meals section
- **Navigation:** Hamburger menu with animated icon

### Extra Small Screens (Below 480px)
- **Meal Grid:** 1 column with reduced spacing
- **Padding:** Optimized for small screen real estate
- **Typography:** Reduced font sizes for better readability
- **Cart Section:** Full width with condensed layout

## Design & Styling Details

### Color Palette
- **Primary Background:** Dark Blue Gradient (#1a1a2e to #16213e)
- **Secondary Background:** Deep Blue (#0f3460)
- **Accent Color:** Golden Yellow (#f3ba3d)
- **Text:** White and light variations
- **Gradients:** Multi-directional gradients for depth

### Animations & Effects

1. **Meal Cards:**
   - `fadeInUp` - Smooth entrance animation with staggered delay
   - `scaleIn` - Image scaling effect on load
   - Hover effect: Lift up with scale (translateY & scale transform)
   - Glow effect: Dynamic shadow on hover
   - Border color transition on interaction

2. **Buttons:**
   - Smooth color transitions
   - Scale transformation on hover/active
   - Shimmer effect with overlay animation
   - Box shadow expansion on interaction

3. **Navigation:**
   - Slide-in animations for logo
   - Underline animation on menu items
   - Hamburger menu rotation animation
   - Smooth menu expansion/collapse (max-height transition)

4. **Cart Section:**
   - Slide-down animation for heading
   - Slide-in animation for cart items (from left)
   - Sticky positioning with transform effects

### Typography
- **Font Family:** Roboto (Google Fonts - 100-900 weights)
- **Logo:** Bold, 1.8rem on large screens with text-shadow
- **Headings:** 1.3rem - 1.4rem, bold weight (700)
- **Body Text:** 0.95rem - 1rem with 1.6 line-height for readability
- **Text Shadow:** Applied to titles for depth

### Responsive Units
- All measurements use **rem units** for better scalability
- Gap and padding adjusted per breakpoint
- Max-width containers (1200px for navbar, 1400px for content)
- Flexible spacing based on viewport

### Interactive Elements
- **Buttons:** Border-based primary style, fill on hover
- **Links:** Smooth underline animation on hover
- **Forms:** Outline-free design with border focus
- **Transitions:** 0.3s cubic-bezier for smooth animations

### Box Shadows
- **Subtle:** `0 4px 20px rgba(243, 186, 61, 0.15)` for navbar
- **Hover:** `0 15px 40px rgba(243, 186, 61, 0.2)` for meal cards
- **Focus:** `0 8px 20px rgba(243, 186, 61, 0.4)` for buttons

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Toastify** - Toast notifications
- **CSS3** - Custom styling with animations
- **HTML5** - Semantic markup
- **TheMealDB API** - Meal data source

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
meal-hub/
├── src/
│   ├── component/
│   │   ├── Count/
│   │   │   └── Count.jsx
│   │   ├── Item/
│   │   │   ├── Item.jsx
│   │   │   └── Item.css
│   │   ├── Meals/
│   │   │   ├── Meals.jsx
│   │   │   └── Meals.css
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── navbar.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. **Data Fetching:** Meals are fetched from TheMealDB API using React's `use()` hook
2. **State Management:** Cart items are managed using useState
3. **Responsive Rendering:** CSS media queries handle all breakpoint changes
4. **Animations:** CSS keyframes and transitions create smooth effects
5. **Mobile Menu:** State-based toggle for hamburger menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

**Design & Styling:** Developed with assistance from AI for UI/UX optimization, responsive design patterns, and animation implementations.

## License

MIT License - Feel free to use this project for learning and development purposes.

## Author

Created as part of a React learning journey with focus on responsive design and modern CSS animations.

---

**Enjoy discovering meals! 🍽️✨**
