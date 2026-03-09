# Shatis Singh - Developer Portfolio

A creative, modern, multi-page developer portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Multi-page structure**: Home, About, Projects, Services, Resume, Contact
- **Dark/Light mode toggle**
- **Smooth animations** with Framer Motion
- **Responsive design** for mobile, tablet, and desktop
- **Contact form** with EmailJS integration
- **Freelance services**
- **Easy to add new projects** via `src/data/projects.js`

## Tech Stack

- **React 18** (Vite)
- **Tailwind CSS**
- **React Router**
- **Framer Motion**
- **EmailJS** (Contact form)
- **React Icons**

## Setup Instructions

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Configure EmailJS (optional)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service, template, and get your keys
3. Copy `.env.example` to `.env`
4. Add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Add your resume

Resume is at `public/Resume_Shatis_ws.pdf`. Replace with your own if needed.

### 4. Update project links

Edit `src/data/projects.js` to add your real GitHub and demo URLs.

## Development

```bash
npm run dev
```

Runs the app at [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Outputs to the `dist` folder.

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Import Project** and select your repo
4. Vercel will auto-detect Vite - click **Deploy**
5. Add environment variables (EmailJS keys) in Project Settings → Environment Variables

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Adding New Projects

Edit `src/data/projects.js`:

```js
{
  id: 6,
  title: "Your Project",
  description: "Description here",
  tech: ["React", "Node.js"],
  image: "/images/your-project.jpg",
  github: "https://github.com/you/repo",
  demo: "https://your-demo.com",
  featured: true, // Show on home page
}
```

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/   # Reusable UI components
│   ├── data/         # projects.js, resume.js
│   ├── pages/        # Route pages
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## License

MIT
