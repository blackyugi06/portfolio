# Portfolio Website

A minimalistic portfolio website with dark and light theme support.

## Features

- 🎨 Clean, minimalistic design with dark/light theme toggle
- 📱 Fully responsive layout
- ⚡ Built with React + Vite for blazing fast performance
- 🎭 Smooth animations and transitions
- 🧭 Easy navigation between pages (Home, Resume, Projects, Contact)
- 💅 Styled with Tailwind CSS
- 🔤 Fira Code monospace font for code-like aesthetic

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Replace `[Your Name]` with your name
   - Update the subtitle/tagline
   - Update social media links

2. **Resume Page** (`src/pages/Resume.jsx`):
   - Edit the `experiences` array with your work history
   - Update the `skills` array with your technical skills
   - Modify the `education` array with your educational background
   - Add a link to your PDF resume

3. **Projects Page** (`src/pages/Projects.jsx`):
   - Update the `projects` array with your actual projects
   - Add live demo and GitHub links

4. **Contact Page** (`src/pages/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Add your social media profile links
   - Configure form submission (currently simulated)

### Styling

The theme uses Tailwind CSS with custom configurations:
- Main colors: Black/White for minimalism
- Custom animations defined in `tailwind.config.js`
- Fira Code as the default monospace font

## Tech Stack

- React 18
- Vite
- React Router v6
- Tailwind CSS
- Context API for theme management

## License

Feel free to use this template for your personal portfolio!
