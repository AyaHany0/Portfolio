# 🌟 Aya Hany - Portfolio Website

![Home Page](./src/assets/screenshots/screenshot_homepage.jpeg)

Welcome to my personal portfolio website! This is not just a showcase of my work—it's a glimpse into my journey, skills, and dedication as a front-end developer. I’ve designed this site to reflect my personality, creativity, and technical expertise while providing an engaging and user-friendly experience for visitors.

## 🌐 Live Demo

✨ [Visit My Portfolio on Vercel](https://portfolio-oett.vercel.app/)

✨ [Visit My Portfolio on Netlify](https://ayahsportfolio.netlify.app)

---

## 📖 About the Project

I created this portfolio to highlight my growth and passion for web development. It’s a space where potential clients, recruiters, and collaborators can explore my work and understand my skills in depth. From animations to interactivity, every element on this website is a result of my focus on delivering an exceptional user experience.

### 🎨 Purpose & Goals

- **Showcase My Work:** A dedicated section for projects that reflect my capabilities in React.js, Tailwind CSS, and modern libraries.
- **Provide Services Information:** Let visitors know the services I offer in web development.
- **Streamlined Communication:** An easy-to-use contact form powered by EmailJS to facilitate direct communication.
- **Interactive Storytelling:** Leveraging animations and interactive elements to tell my story in an engaging way.

---

## ✨ Features

- **Beautiful Landing Page:** Welcomes visitors with a professional yet friendly design.
- **Dynamic About Section:** Shares my journey, values, and the technologies I excel in.
- **Interactive Project Showcase:** Displays my top projects with detailed descriptions, live links, and technologies used.
- **Services Overview:** A clear presentation of the services I offer, including web design, responsive development, and animations.
- **Credentials Page:** Certificates and qualifications, with one-click copy for the details worth sharing.
- **Contact Form:** Powered by EmailJS, enabling visitors to connect with me seamlessly.
- **Real-Time Notifications:** Thanks to Notistack, visitors receive immediate feedback when they interact with the site.
- **Animations:** Smooth transitions and engaging effects built using GSAP to create a memorable browsing experience.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices to ensure accessibility.
- **Search-Ready:** Server-rendered pages with per-page metadata, canonical URLs, a generated sitemap and `robots.txt`, JSON-LD structured data, and a dynamically generated Open Graph image for link previews.

---

## 🗂️ Project Structure

```
src/
├── app/              # Next.js App Router — one folder per route
│   ├── layout.jsx    # Shared shell: fonts, base metadata, JSON-LD graph
│   ├── providers.jsx # Client-only providers (Notistack), kept out of the pages
│   ├── page.jsx      # Home
│   ├── about/ works/ services/ credentials/ contact/ blog/
│   ├── opengraph-image.jsx  # Generated 1200×630 social preview
│   ├── sitemap.js robots.js # Both generated from src/lib/site.js
│   └── not-found.jsx
├── components/       # One folder per component: JSX + its CSS module
├── lib/
│   ├── site.js       # Single source of truth for URLs, identity, metadata
│   └── animation.js  # Shared GSAP timelines
└── assets/           # Images, icons, screenshots
```

Pages under `app/` stay deliberately thin — each one sets its metadata and
renders the matching component from `components/`. `works/project` and
`blog/articles` are placeholder stubs: they're marked `noindex` and left out of
the sitemap until there's real content behind them.

---

## 🛠️ Technologies Used

This portfolio leverages the following tools and libraries to provide a top-tier experience:

### **Frontend Frameworks & Libraries:**

- **Next.js (App Router):** The backbone of my website — file-based routing, server-rendered pages for SEO, automatic image optimization, and self-hosted fonts.
- **React.js:** Providing a modular and efficient component structure.

### **Styling & Animations:**

- **Tailwind CSS:** To create a modern and responsive design with minimal effort.
- **GSAP (GreenSock Animation Platform):** For dynamic animations that bring the site to life.
- **React Icons:** Adding an aesthetic touch with lightweight, customizable icons.

### **Forms & Validation:**

- **Formik:** Simplifies form handling with minimal boilerplate.
- **Yup:** For robust and flexible form validation.

### **Email Service & Notifications:**

- **EmailJS:** Enables a functional contact form that directly sends messages to my inbox.
- **Notistack:** Provides non-intrusive, responsive notifications for user actions.

---

## ⚡ Performance Notes

A few deliberate choices that keep the site fast:

- **Self-hosted fonts** via `next/font` (`src/app/fonts.js`) instead of a render-blocking Google Fonts import. Roboto ships only the weights the design actually uses — `400`, `500`, `600`, `700` — so `font-semibold` no longer gets synthesised by the browser, and the unused `100`/`300`/`900` weights and italics are gone.
- **`next/image` everywhere** for project screenshots, the profile photo, and icons, so each one is resized, lazily loaded, and served in a modern format.
- **A narrow `browserslist`** (`chrome`/`edge`/`firefox` ≥ 111, `safari` ≥ 16.4) to cut unnecessary transpilation and vendor prefixes from the bundle.
- **Server-rendered pages** by default, with the client boundary pushed down to the handful of components that genuinely need interactivity.

---

## 🚀 Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** and **npm** (for managing dependencies and running the app).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyaHany0/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To build the project for deployment:

```bash
npm run build
```

Then serve the production build locally:

```bash
npm start
```

---

## 💡 Usage

- **Recruiters/Clients:** Explore my skills, projects, and contact me for potential collaborations.
- **Developers:** Get inspired by my design, structure, and choice of libraries. Feel free to fork the repo and customize it for your portfolio!

---

## 🎯 Future Enhancements

I’m continuously working to improve my portfolio. Here are some ideas for future updates:

1. **Real Blog Content:** The `/blog` route and its article template are in place — next step is filling them with tutorials, insights, and experiences in web development.
2. **Project Detail Pages:** `/works/project` is scaffolded and waiting on per-project case studies.
3. **Light Mode:** Enhance accessibility and provide a personalized browsing experience.
4. **Project Filter/Search:** Allow visitors to filter projects by technology or category.
5. **CMS Integration:** Use a headless CMS to easily add new projects and updates.

---

## 🙌 Acknowledgments

Creating this portfolio has been an exciting journey, and I’d like to thank the following:

- The open-source community for providing the amazing tools and libraries I’ve used.
- My mentors, peers, and clients who inspire me to keep learning and growing.
- Design inspiration from platforms like [Dribbble](https://dribbble.com/) and [Behance](https://www.behance.net/).

---

## 📞 Contact

I’d love to hear from you! Whether it’s a potential project, a question, or just to say hi, feel free to reach out:

- **Email:** ayah28603@gmail.com
- **LinkedIn:** [Aya Hany](https://www.linkedin.com/in/ayahany/)

---

## 🖤 Contributing

Contributions are welcome! If you’d like to enhance this project or report an issue, feel free to fork the repository and create a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.
