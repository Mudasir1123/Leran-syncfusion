# Syncfusion React Demo Application

A comprehensive React application showcasing Syncfusion components with dark/light theme toggle, multiple color schemes, and smooth animations.

## 🎨 Features

### Theme System
- **Dark & Light Modes**: Toggle between dark and light themes with smooth transitions
- **Color Schemes**: Choose from Blue, Dark, and Grey color palettes
- **Persistent Storage**: Theme preferences are saved to localStorage

### Components Showcase
- **Multiple Button Types**: Primary, Secondary, Success, Danger, Warning, Info, Outline, Rounded, Small, Large, and Disabled states
- **Chips**: Basic, Action, and Filter chip components
- **Dialogs**: Modal dialog with header, content, and footer
- **Tooltips**: Positioned tooltips (Top, Right, Bottom, Left) with sticky mode
- **Navigation**: Multi-page application with responsive navigation

### Pages
1. **Home** - Welcome page with feature highlights
2. **Components** - Showcase of all UI components
3. **Services** - Service offerings with animated cards
4. **Products** - Product catalog with rating and pricing
5. **Team** - Team members with flip-card animation
6. **Dashboard** - Data visualization and management
7. **About** - About page with team information
8. **Contact** - Contact form with validation

### Design Features
- Responsive grid layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Color-coded badges and status indicators
- Gradient backgrounds and text
- Box shadows and hover effects
- Accessibility features (tooltips, ARIA labels)

## 🚀 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup Steps

```bash
# 1. Navigate to the project directory
cd "c:\Users\mudas\OneDrive\Pictures\react syncfusion\learn"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open browser and navigate to
http://localhost:5173
```

## 📦 Dependencies

### Syncfusion Components
- `@syncfusion/react-buttons` - Button components
- `@syncfusion/react-inputs` - Input fields and forms
- `@syncfusion/react-dropdowns` - Dropdown lists
- `@syncfusion/react-popups` - Dialogs and Tooltips
- `@syncfusion/react-navigations` - Navigation components
- `@syncfusion/react-grids` - Data grids and tables
- `@syncfusion/react-charts` - Charts and visualizations
- `@syncfusion/ej2-react-buttons` - Button and Chip components
- `@syncfusion/ej2-react-layouts` - Layout components

### Other Dependencies
- `react` - Core React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

## 🎯 Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component with theme toggle
├── context/
│   └── ThemeContext.jsx    # Theme management context
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Contact.jsx         # Contact page
│   ├── Dashboard.jsx       # Dashboard page
│   ├── Components.jsx      # Components showcase
│   ├── Services.jsx        # Services page
│   ├── Products.jsx        # Products page
│   └── Team.jsx            # Team page
├── styles/
│   ├── Theme.css           # Global theme variables
│   ├── Home.css            # Home page styles
│   ├── About.css           # About page styles
│   ├── Contact.css         # Contact page styles
│   ├── Components.css      # Components page styles
│   ├── Services.css        # Services page styles
│   ├── Products.css        # Products page styles
│   ├── Team.css            # Team page styles
│   └── Dashboard.css       # Dashboard page styles
├── App.jsx                 # Main App component
├── App.css                 # App global styles
└── main.jsx                # Entry point
```

## 🎨 Theme System

### CSS Variables

#### Light Theme
```css
--bg-primary: #f8fafc
--bg-secondary: #f1f5f9
--bg-tertiary: #e2e8f0
--text-primary: #0f172a
--text-secondary: #334155
--border: #cbd5e1
```

#### Dark Theme
```css
--bg-primary: #0f172a
--bg-secondary: #1e293b
--bg-tertiary: #334155
--text-primary: #f1f5f9
--text-secondary: #cbd5e1
--border: #475569
```

### Color Schemes
- **Blue** - Primary blue (#2563eb)
- **Dark** - Dark grey (#1a1a1a)
- **Grey** - Medium grey (#6b7280)

## ✨ Animations

### Available Animations
- `fadeIn` - Fade in effect
- `slideUp` - Slide up animation
- `slideDown` - Slide down animation
- `slideLeft` - Slide left animation
- `slideRight` - Slide right animation
- `zoomIn` - Zoom in effect
- `pulse` - Pulsing animation
- `bounce` - Bouncing animation

### Usage
```jsx
<div className="slide-up">Content</div>
<div className="fade-in">Content</div>
<div className="zoom-in">Content</div>
```

## 🔧 Customization

### Changing Primary Color
Edit `src/context/ThemeContext.jsx`:
```jsx
const colors = {
  dark: '#1a1a1a',
  light: '#ffffff',
  blue: '#2563eb',
  lightBlue: '#3b82f6',
  grey: '#6b7280',
  lightGrey: '#d1d5db',
};
```

### Adding New Theme Variables
1. Add variables to `src/styles/Theme.css`
2. Update theme data attribute selectors:
```css
[data-theme="dark"] {
  --new-color: #value;
}

[data-theme="light"] {
  --new-color: #value;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to customize and extend this template. Some ideas:
- Add more Syncfusion components
- Create additional pages
- Implement more animations
- Add dark mode to all components
- Integrate backend API

## 📄 License

This project uses Syncfusion components. For licensing information, visit:
https://www.syncfusion.com/products/licensing

## 💡 Tips & Best Practices

1. **Theme Context**: Always use the ThemeContext hook to access current theme and color
   ```jsx
   const { isDarkMode, primaryColor } = useContext(ThemeContext);
   ```

2. **Color Classes**: Use `btn-${primaryColor}` class for dynamic button colors
   ```jsx
   <ButtonComponent className={`btn-primary btn-${primaryColor}`} />
   ```

3. **Animations**: Use animation classes for entrance effects
   ```jsx
   <div className="slide-up">Content</div>
   ```

4. **Responsive Images**: Always use responsive grid layouts
   ```jsx
   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }} />
   ```

5. **Accessibility**: Include tooltips for better UX
   ```jsx
   <TooltipComponent content="Helpful text">
     <button>Hover me</button>
   </TooltipComponent>
   ```

## 🐛 Troubleshooting

### Dark Mode Not Working
- Check that `[data-theme="dark"]` is set on the root element
- Verify ThemeContext provider is wrapping the App

### Components Not Showing
- Ensure Syncfusion CSS imports are included in App.css
- Check that component names match Syncfusion documentation

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project (`npm run build`)
- Check CSS variable scopes

## 📚 Resources

- [Syncfusion React Documentation](https://www.syncfusion.com/react-components)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 🎉 Enjoy!

This template is ready for customization and extension. Happy coding! 🚀
