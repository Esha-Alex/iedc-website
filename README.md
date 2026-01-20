# IEDC MACE Website

A professional, interactive, and theme-switchable website for the Innovation and Entrepreneurship Development Cell (IEDC) at Mar Athanasius College of Engineering.

## 🎨 Design Features

### Dual Theme Support
The website supports **two complete themes** that users can toggle:

#### Light Theme (Default)
- **Background**: White (#ffffff)
- **Text**: Black (#000000)
- **Highlights/Accents**: Navy Blue (#001f3f)
- **Boxes/Cards**: White with navy blue borders
- **Professional and clean appearance**

#### Dark Theme
- **Background**: Black (#000000)
- **Text**: White (#ffffff)
- **Highlights/Accents**: Yellow/Gold (#FFD700)
- **Boxes/Cards**: Dark gray (#1a1a1a) with yellow accents
- **Modern and eye-friendly for night use**

### Header (Always Black)
- Fixed black background with white text
- **Animated title**: "iEDC MACE" with falling letter animation
- Yellow-highlighted logo box
- Tagline: "innovate | ideate | create"
- Smooth navigation with hover effects

## 📋 Page Sections (Single Page Design)

### 1. Home Section
- **Navy Blue Hero Background**: Full-width background with IEDC Club Briefing
- **Club Briefing Box**: Centered, with semi-transparent background
- **Idea Pitching Area**: Prominent call-to-action with button linking to Google Form
- **Mission & Vision Cards**: Expandable cards that animate on scroll
- **FAQ Section**: Collapsible accordion-style questions with smooth animations

### 2. Events Section
- **Tab System**: Switch between "Upcoming Events" and "Past Events"
- **Event Cards**: Clickable flashcards that open detailed popups
- **Modal Popups**: Full event information in beautiful modal windows
- Smooth hover effects and transitions

### 3. Startup Stories Section
- Success stories from IEDC community
- Logo placeholders for each startup
- Hover animations on cards

### 4. Our Team Section
- **Core Team Display**: 6 main team members
- **"See More" Button**: Opens Execom page in modal
- **Execom Modal**: Shows extended team in popup
- Animated team cards with emoji avatars

### 5. Facilities Section
- **TBI Room**: Technology Business Incubator information
- **KSUM Support**: Kerala Startup Mission details
- Image placeholders with hover effects
- Scroll-triggered animations

### 6. Contact Us Section
- **Contact Information**: Email, Phone, Location
- **Social Media Links**: Facebook, Instagram, LinkedIn, Twitter
- Clean card-based layout
- Interactive hover effects

## 🎯 Key Features

### Interactive Elements
✅ **Theme Toggle**: Floating button to switch between light/dark themes
✅ **Animated Header**: Letters fall into place on page load
✅ **FAQ Accordion**: Click to expand/collapse answers
✅ **Event Modals**: Click event cards for detailed information
✅ **Tab Navigation**: Switch between upcoming/past events
✅ **Smooth Scrolling**: Navigation buttons smoothly scroll to sections
✅ **Mobile Menu**: Hamburger menu for responsive design
✅ **Scroll Animations**: Elements fade in as you scroll

### Animations & Effects
- Letter falling animation in header
- Smooth fade-in on scroll
- Card hover effects (lift and shadow)
- Button ripple effects
- Parallax scrolling on hero section
- Modal slide-in animations
- Tab switching transitions

### Responsive Design
- **Desktop**: Full layout with all features
- **Tablet**: Optimized grid layouts
- **Mobile**: Hamburger menu, stacked sections
- Breakpoints: 1024px, 768px, 480px

## 📁 File Structure

```
IEDC-MACE-Website/
├── index.html       # Main HTML structure
├── styles.css       # All styling (light + dark themes)
├── script.js        # Interactive features
└── README.md        # Documentation
```

## 🛠️ Customization Guide

### Changing Colors

#### Light Theme
Edit in `styles.css`:
```css
.light-theme {
    --accent-color: #001f3f;  /* Navy blue - change this */
}
```

#### Dark Theme
```css
.dark-theme {
    --accent-color: #FFD700;  /* Yellow - change this */
}
```

### Adding Your Logo
Replace the text logo in `index.html`:
```html
<div class="logo-box">
    <img src="your-logo.png" alt="IEDC Logo">
</div>
```

### Updating Google Form Link
In `index.html`, find the Idea Pitching section:
```html
<a href="https://forms.google.com/your-actual-form-link" target="_blank" class="pitch-btn">
```

### Adding Real Images

#### For Team Members
Replace emoji with images:
```html
<div class="team-image">
    <img src="path/to/photo.jpg" alt="Member Name">
</div>
```

#### For Facilities
Replace placeholder:
```html
<div class="facility-image-placeholder">
    <img src="path/to/facility.jpg" alt="TBI Room">
</div>
```

### Adding Events
In `script.js`, edit the arrays:

```javascript
const upcomingEventsData = [
    {
        title: 'Your Event Name',
        date: 'Event Date',
        description: 'Short description',
        details: 'Full details shown in popup',
        icon: '🎯'  // Emoji icon
    }
];
```

### Adding Team Members
In `script.js`:
```javascript
const coreTeam = [
    { 
        name: 'Name', 
        role: 'Position', 
        emoji: '👤' 
    }
];
```

### Updating Contact Information
In `index.html`, find the contact section:
```html
<div class="info-card">
    <div class="info-icon">📧</div>
    <h4>Email</h4>
    <p>your-email@mace.ac.in</p>
</div>
```

### Updating Social Media Links
```html
<a href="https://facebook.com/your-page" class="social-btn">Facebook</a>
```

## 🎨 Design Specifications (As Per Wireframe)

### Color Schemes
✅ **Dark Theme**: Black background + White text + Yellow highlights
✅ **Light Theme**: White background + Black text + Navy blue highlights
✅ **Header**: Always black with white text

### Layout
✅ **Single Page**: All sections on one scrollable page
✅ **Fixed Header**: Sticky navigation at top
✅ **Navy Blue Hero**: Background image section for briefing
✅ **Transparent Boxes**: Semi-transparent containers for content
✅ **Hidden Boundaries**: Cards without visible borders (using subtle shadows)

### Interactive Features
✅ **Theme Toggle**: Users can switch themes
✅ **FAQ Accordion**: Expandable questions
✅ **Event Popups**: Click cards for details
✅ **Execom Modal**: "See More" opens team page
✅ **Smooth Scrolling**: Navigation buttons scroll to sections

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Getting Started

1. **Download all files** (index.html, styles.css, script.js)
2. **Place them in the same folder**
3. **Open index.html** in your browser
4. **Customize content** as needed
5. **Add real images** to replace placeholders
6. **Update Google Form link** for idea pitching
7. **Deploy** to your hosting platform

## 💡 Tips for Deployment

### GitHub Pages
1. Create a repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io/repo-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Get instant deployment
3. Custom domain support available

### Traditional Hosting
1. Upload files via FTP
2. Ensure all files are in the web root
3. Access via your domain

## 🔧 Advanced Customizations

### Adding More FAQ Items
Copy this block in `index.html`:
```html
<div class="faq-item">
    <button class="faq-question">
        <span>Your question?</span>
        <span class="faq-icon">▼</span>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

### Changing Fonts
Current fonts: Poppins (body) + Rajdhani (headings)

To change, update in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then in `styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Adding More Startup Stories
In `script.js`:
```javascript
const startupStories = [
    {
        name: 'Startup Name',
        logo: 'SN',  // 2-letter code
        description: 'Description text'
    }
];
```

## 📊 Performance

- **Lightweight**: Minimal dependencies
- **Fast Loading**: Optimized CSS and JS
- **Smooth Animations**: 60fps transitions
- **Mobile Optimized**: Touch-friendly interactions

## 🎓 Learning Resources

Want to understand the code better?

### HTML Structure
- Semantic HTML5 elements
- Accessibility attributes
- Modal patterns

### CSS Techniques
- CSS Variables for theming
- Flexbox & Grid layouts
- Smooth animations
- Media queries
- Glassmorphism effects

### JavaScript Features
- Theme persistence (localStorage)
- Intersection Observer for scroll animations
- Modal management
- Event delegation
- Dynamic content rendering

## 🤝 Contributing

To modify or enhance:
1. Keep the dual-theme system intact
2. Maintain responsive design
3. Test on multiple devices
4. Follow the existing code structure

## 📞 Support

For questions about customization:
- Check this README
- Review code comments
- Test changes incrementally

## ✨ Special Features

1. **Theme Persistence**: Your theme choice is saved and remembered
2. **Keyboard Support**: ESC closes modals
3. **Smooth Animations**: Professional scroll-triggered effects
4. **Modal System**: Beautiful popups for events and team
5. **Tab Navigation**: Easy switching between content
6. **Mobile Friendly**: Perfect on all screen sizes

## 📝 Content Guidelines

### Writing for Accessibility
- Use clear, simple language
- Keep paragraphs short
- Use headings appropriately
- Provide alt text for images

### SEO Best Practices
- Update title tag with keywords
- Add meta descriptions
- Use semantic HTML
- Optimize images before upload

## 🎯 Next Steps

1. ✅ Replace placeholder content with real data
2. ✅ Add real images for team and facilities
3. ✅ Update contact information
4. ✅ Add actual social media links
5. ✅ Update Google Form link
6. ✅ Test on multiple devices
7. ✅ Deploy to production

---

**Built for IEDC MACE** | Innovate • Ideate • Create

*A professional, interactive website designed to inspire the next generation of entrepreneurs.*
