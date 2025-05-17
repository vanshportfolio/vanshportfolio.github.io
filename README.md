# Personal Financial Portfolio Website

A sophisticated, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. The site showcases financial valuations, case competitions, and professional experience with a premium, Apple-inspired design.

## Features

- 🎨 Modern, minimal design inspired by Apple.com
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive layout
- 🎯 Interactive case studies and valuations
- 📊 Dynamic timeline for professional experience
- 📝 Animated contact form with floating labels
- 🌓 Optimized for performance and accessibility

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Headless UI
- **Icons:** Heroicons
- **Font:** Inter (Google Fonts)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/myportfolio.git
   cd myportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Homepage
│   ├── story/             # My Story page
│   ├── valuations/        # Valuations portfolio
│   ├── competitions/      # Case competitions
│   └── contact/           # Contact form
├── components/            # Reusable components
│   └── Navbar.tsx        # Navigation component
└── styles/               # Global styles
    └── globals.css       # Tailwind and custom styles
```

## Customization

1. Update personal information in the respective page components
2. Add your own valuation case studies in `valuations/page.tsx`
3. Modify the color scheme in `globals.css`
4. Add your own images to the `public` directory

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Vansh Sharma
- Email: vsharma5@binghamton.edu
- LinkedIn: [linkedin.com/in/vanshsharma](https://linkedin.com/in/vanshsharma)
- GitHub: [github.com/vanshsharma](https://github.com/vanshsharma)
