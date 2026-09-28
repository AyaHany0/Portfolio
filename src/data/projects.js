import sjc from "../assets/projects/sjc.png";
import mathil from "../assets/projects/mathil.png";
import freshcart from "../assets/projects/freshcart.png";
import blooming from "../assets/projects/blooming.png";
import solar from "../assets/projects/solar.png";
import games from "../assets/projects/games.png";
import simon from "../assets/projects/simon.png";
import vivadecor from "../assets/projects/vivadecor.png";
import yummy from "../assets/projects/yummy.png";
import todolist from "../assets/projects/todolist.png";
import john from "../assets/projects/john.png";
import dinafarms from "../assets/projects/dinafarms.png";
import bazel from "../assets/projects/bazel.png";
import weather from "../assets/projects/weather.png";
// Placeholders until real screenshots land — overwrite the PNG, keep the name.
import qurratAyni from "../assets/projects/qurrat-ayni.png";
import helpPlus from "../assets/projects/help-plus.png";
import abnaaBaytik from "../assets/projects/abnaa-baytik.png";
import odooErpClient from "../assets/projects/odoo-erp-client.png";
import multiVendorStorefront from "../assets/projects/multi-vendor-storefront.png";
import streakIt from "../assets/projects/streak-it.png";
import jobSearchApi from "../assets/projects/job-search-api.png";
import asklyApi from "../assets/projects/askly-api.png";

/**
 * Single source of truth for the works grid, the /works/[slug] case studies and
 * the sitemap. Deliberately free of a "use client" directive so it stays
 * importable from server components and from build-time code alike.
 *
 * Two separate technology fields, on purpose:
 *   `tech`  — a small controlled vocabulary that drives the filter buttons.
 *   `stack` — the real library list, shown as chips on the detail page.
 * Collapsing them would either give the filter a dozen near-empty facets or
 * flatten the detail page down to three coarse labels.
 *
 * `slug` is declared rather than derived from `title`: titles drift, and
 * "bazel." carries a trailing period that no slugify helper should have to
 * guess at. A changed slug is a broken URL, so it is written out once here.
 *
 * `verified: false` marks copy that was inferred rather than confirmed by Aya.
 */
export const projects = [
  {
    slug: "sjctanseiq",
    title: "Tanseiq",
    category: "Client work",
    img: sjc,
    imageAlt: "Tanseiq home page",
    summary:
      "An Arabic operations platform for managing Hajj camps, pilgrim housing and field work across Mina and Arafat.",
    overview: [
      "Tanseiq is the operations system that service companies, consultants and administrators use to coordinate Hajj camps in the holy sites. It covers camp readiness and handover, tent and bed allocation for pilgrims, utility follow-up, field reports, notifications and support tickets, with role-based access for every user type.",
      "The front end is a React 19 and TypeScript single-page app built with Vite and Tailwind CSS. Camp and tent maps run on the ArcGIS Maps SDK, data flows through a shared set of typed hooks over Axios, and dashboards combine Recharts, Plotly and pivot tables with Excel and PDF export.",
    ],
    contributions: [
      "Built the Tents Map dashboard for pilgrim housing: an ArcGIS map of Mina slices and tents, bed occupancy, a pilgrims data table, and actions to add, edit, swap, accommodate and remove pilgrims.",
      "Built bulk pilgrim import from Excel — parsing with SheetJS, a preview-and-confirm step, then upload — plus Excel export across the camp review and report pages.",
      "Built workflow pages end to end, including Camps Handover, the Hajj Allocation phases, Receipt Reports, Site Download Requests and Team Work member management.",
      "Rebuilt the data layer around a typed HTTP client with a central error policy, token store and file downloads, then moved the whole app onto it and removed Redux, React Query and global Axios.",
      "Unified the UI by moving modals and form controls from MUI onto a shared design system, icons onto lucide-react and tables onto one shared DataTable.",
      "Set up the GitHub Actions deployment pipeline with a post-deploy health check, and rebuilt the login and password-reset OTP screens from the Figma designs.",
    ],
    soloFeature: {
      title: "Interactive GIS map module",
      body: "The reusable ArcGIS map module was designed and built solo. It loads secured feature layers, lets users switch basemaps, toggle and reorder layers and style labels per layer, and adds multi-field filters, a linked data table, pivot-table statistics, in-map feature editing and screenshot export. The camp, handover and tent dashboards all reuse it.",
    },
    tech: ["react", "typescript", "tailwind"],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ArcGIS Maps SDK",
      "React Router 7",
      "React Hook Form + Zod",
      "Zustand",
      "Radix UI",
      "Axios",
      "SignalR",
      "i18next",
      "Recharts",
      "Plotly",
      "SheetJS",
      "jsPDF",
      "Vitest",
      "GitHub Actions",
    ],
    liveUrl: "https://sjctanseiq.com",
    repoUrl: null,
    verified: true,
  },
  {
    slug: "qurrat-ayni",
    title: "Qurrat Ayni",
    category: "Client work",
    img: qurratAyni,
    imageAlt: "Qurrat Ayni mosque services platform",
    summary:
      "A trilingual mosque-services platform for Saudi Arabia, with live support chat, real-time notifications and per-field content localisation.",
    overview: [
      "Qurrat Ayni serves mosques across Saudi Arabia: donors contribute to mosque projects, imams manage their mosque, followers, projects and maintenance, and administrators oversee mosques, contractors, contributions and support. It runs in Arabic, English and Indonesian with full right-to-left support.",
      "It is a Next.js 16 App Router app with a folder per role, server actions for API calls, TanStack Query for server state and next-intl for localised routes. Real-time features run over SignalR hubs from the .NET backend.",
    ],
    contributions: [
      "Built the admin support-chat board: a conversation list with status tabs, search and counters, a threaded workspace, optimistic replies, and permission-gated status, priority and flagging controls.",
      "Built the floating support widget for signed-in users: their conversations, new conversations by topic, a live thread, and a composer that locks once a conversation is resolved or closed.",
      "Connected the navbar notification bell to the notifications API and a SignalR hub, with an unread badge, typed toasts per notification type, automatic reconnect and a polling fallback.",
      "Built field-level content localisation: LocalizedInput and LocalizedTextarea components and a shared translations dialog that save every language of an entity without wiping untouched locales.",
      "Fixed Arabic, Indonesian and RTL rendering in the shared table and pagination components, and sent the active language on every API call.",
    ],
    soloFeature: {
      title: "Live support chat",
      body: "The support chat was built end to end, from a mock-backed admin screen to the production version on the real chat APIs. A single SignalR hook joins and leaves conversation groups, rejoins after reconnects and falls back to polling while the hub is down. Replies are optimistic, merge with messages the hub pushes, and restore the draft if sending fails.",
    },
    tech: ["react", "nextjs", "typescript", "tailwind"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "next-intl 4",
      "TanStack Query 5",
      "SignalR",
      "Radix UI",
      "React Hook Form 7",
      "Zod 4",
      "Recharts 3",
    ],
    liveUrl: "https://qurrat-ayni.vercel.app",
    repoUrl: null,
    verified: true,
  },
  {
    slug: "help-plus",
    title: "Help Plus",
    category: "Client work",
    img: helpPlus,
    imageAlt: "Help Plus merchant dashboard",
    summary:
      "A bilingual customer-service platform where merchants manage branches, staff, services, appointments and customer feedback from one dashboard.",
    overview: [
      "Help Plus is a customer-service management platform for brands and merchants. The merchant dashboard covers appointments, branches and working hours, services, products and spare parts, staff and roles, departments, tickets and customer ratings, alongside separate admin and manufacturer views.",
      "The front end is a Next.js App Router app in TypeScript with full Arabic and English support. Data comes through server actions over a REST API, forms use React Hook Form and Zod, charts use Recharts, and each dashboard module is gated by the permissions the API returns.",
    ],
    contributions: [
      "Built the Departments module: table and card views, filters, stats cards, and add and edit pages with localised name inputs.",
      "Built the Customer Rating dashboard with summary cards, monthly-review, distribution and trend charts, and a paginated review list with star filters and merchant replies.",
      "Connected the merchant home reports to the API, with filters, loading skeletons, localised month labels and empty states.",
      "Built the service update flow (details, assigned branches, assigned staff) and the staff edit pages (personal data, working hours, appointment stats).",
      "Built a reusable delete-confirmation dialog and rolled it out across around 15 modules.",
      "Built a searchable combobox and replaced plain selects with it across holidays, calendar, appointments, working hours, inventory, products, spare parts and staff.",
    ],
    soloFeature: {
      title: "Customer Rating dashboard",
      body: "The merchant Customer Rating page was built solo, from the route and server actions through the typed API models to every component. Three Recharts views — monthly reviews, rating distribution, and a rating trend against an average reference line — sit above a paginated review feed with star filtering and inline merchant replies, all localised for right-to-left Arabic.",
    },
    tech: ["react", "nextjs", "typescript", "tailwind"],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "next-intl 4",
      "Recharts 3",
      "React Hook Form 7",
      "Zod 4",
      "Radix UI",
      "Axios",
      "FullCalendar 6",
    ],
    liveUrl: "https://help-plus-sa.vercel.app",
    repoUrl: null,
    verified: true,
  },
  {
    slug: "mathil",
    title: "Mathil",
    category: "Client work",
    img: mathil,
    imageAlt: "Mathil web application interface",
    summary:
      "A bilingual regulatory-compliance platform that helps Saudi businesses assess their standing with government regulators and fix violations.",
    overview: [
      "Mathil helps organisations in Saudi Arabia keep up with regulation. Companies register their branches and team, answer compliance questionnaires per regulator, and track their violations, compliance statistics and corrective plans, while administrators manage companies, users and the question bank behind each regulator.",
      "The front end is a React 18 app built with Vite, Tailwind CSS and MUI, in right-to-left Arabic and English. Server data runs through React Query over Axios, forms through Formik and Yup, and charts and PDF reports through Recharts, Chart.js, jsPDF and html2canvas.",
    ],
    contributions: [
      "Built the company dashboard: statistic cards, a violations-by-category chart, a requests table and a branded PDF compliance report generated from the live data.",
      "Built the admin area for companies and users: the companies table, company, user and branch detail pages, company removal and data export.",
      "Built the admin question-bank forms for each regulator — labour, commerce, municipal affairs, personal data protection, and zakat and income — with validation, violation types and penalties that escalate on repeat offences.",
      "Built the branch details and project filter pages, the chat interface components, the services and legal consultation pages, terms and conditions and the 404 page, and translated the login, signup and survey screens.",
    ],
    soloFeature: {
      title: "Team and employee management",
      body: "The Team Work module was built solo: an employee list with delete confirmation, and add and edit forms that assign each member to the company or one of its branches. It has field-level validation, React Query mutations wired to the employee APIs, and a permission-denied modal for users without access.",
    },
    tech: ["react", "javascript", "tailwind"],
    stack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "MUI",
      "React Query",
      "Redux Toolkit",
      "React Router 7",
      "Formik + Yup",
      "Axios",
      "i18next",
      "Socket.IO",
      "jsPDF + html2canvas",
      "Recharts",
      "Chart.js",
    ],
    liveUrl: "https://testing.mathil.sa/",
    repoUrl: null,
    verified: true,
  },
  // {
  //   slug: "abnaa-baytik",
  //   title: "Abnaa Baytik",
  //   category: "Client work",
  //   img: abnaaBaytik,
  //   imageAlt: "Abnaa Baytik land marketplace dashboard",
  //   summary:
  //     "A bilingual land-development marketplace for Saudi Arabia, with dashboards for land owners, investors, developers, engineers, financiers, legal reviewers and admins.",
  //   overview: [
  //     "Abnaa Baytik connects land owners with investors and the companies that develop the land. Owners list plots, investors browse land and request designs and financing, and developer, engineering, financing and legal companies each handle their stage of the request. The whole app runs in Arabic and English.",
  //     "It is a React 19 and TypeScript single-page app built with Vite, React Router, Material UI and Tailwind CSS, with i18next for localisation and Leaflet for maps. Shared data hooks sit over an Axios instance talking to a REST API.",
  //   ],
  //   contributions: [
  //     "Built the shared data layer: useGet and usePost hooks over Axios that handle JSON and multipart uploads, send the active language and report results through toasts.",
  //     "Built the reusable form controls — select, date picker, file upload, checkbox, input — and international phone input with per-country validation via libphonenumber.",
  //     "Built most of the multi-step land-listing form, plus the developer lands, land map and submit-request screens.",
  //     "Built the admin request overviews for developer, engineer, investor and financing requests, the legal-requests and financing-proposal screens, and the app's route tree.",
  //     "Reviewed and merged around 100 team pull requests.",
  //   ],
  //   soloFeature: {
  //     title: "Admin company management",
  //     body: "The admin company flow was built solo: a companies list with add and edit forms, first as static screens and then wired to the API so companies are created, loaded and edited live. The forms use React Hook Form with Zod validation, load company types from the API and are fully translated into Arabic and English.",
  //   },
  //   tech: ["react", "typescript", "tailwind"],
  //   stack: [
  //     "React 19",
  //     "TypeScript 5",
  //     "Vite 7",
  //     "React Router 7",
  //     "Material UI 7",
  //     "Tailwind CSS 4",
  //     "i18next",
  //     "React Hook Form 7",
  //     "Zod",
  //     "Axios",
  //     "React Leaflet",
  //   ],
  //   liveUrl: null,
  //   repoUrl: null,
  //   verified: true,
  // },
  {
    slug: "odoo-erp-client",
    title: "Odoo ERP Web Client",
    category: "Client work",
    img: odooErpClient,
    imageAlt: "Odoo ERP web client help desk screen",
    summary:
      "A server-driven, Arabic-first web client for an Odoo ERP, where the backend describes each screen and the app renders it.",
    overview: [
      "A web front end for a company's Odoo ERP that gives staff one right-to-left interface for HR, attendance, CRM, sales, purchasing, facility management and help desk. Each screen's stages, fields, filters and workflow buttons are described by the backend, so a new screen is a config entry rather than a new page.",
      "It is built with Next.js 16 and React 19 in TypeScript, with Tailwind 4 and shadcn/ui, TanStack Query for server state and Zustand for client state. The browser never calls Odoo directly — every request goes through a backend-for-frontend that attaches the token from an httpOnly cookie.",
    ],
    contributions: [
      "Built the Help Desk module: tickets, my tickets, customers, teams and activities screens, the module home and create actions, all on the generic per-model endpoints.",
      "Built a pipeline stage stepper for the record detail screen that shows where a record sits, with unit tests.",
      "Added stage-based status colours to lists, cards and detail titles, keyed on the stage's position in the pipeline rather than its editable name.",
      "Built a kanban board view with one column per stage and compact cards carrying the server's workflow buttons.",
      "Added second-level access control, so the screens inside a module follow the features its home grants.",
    ],
    soloFeature: {
      title: "Help Desk module",
      body: "The Help Desk module was built largely solo on top of the app's server-driven screen engine — tickets, personal tickets, customers, teams, activities and a module home — together with the stage stepper and stage-coloured statuses, both covered by Vitest tests.",
    },
    tech: ["react", "nextjs", "typescript", "tailwind"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "shadcn/ui",
      "TanStack Query 5",
      "Zustand 5",
      "next-intl 4",
      "React Hook Form 7",
      "Zod 4",
      "Vitest",
    ],
    liveUrl: "https://odoofront.mdarj.org",
    repoUrl: null,
    verified: true,
  },
  {
    slug: "multi-vendor-storefront",
    title: "Multi-Vendor Storefront",
    category: "E-commerce front-end",
    img: multiVendorStorefront,
    imageAlt: "Multi-vendor storefront checkout",
    summary:
      "A bilingual multi-vendor storefront and admin dashboard, built to run end to end on mock APIs before the backend exists.",
    overview: [
      "A reference storefront for multi-vendor e-commerce — catalogue, search, cart, checkout, orders, customer account and an admin dashboard — in Arabic and English. Every feature has an in-memory implementation behind the same interface the real API will use, so the full shopping flow can be demoed with no backend.",
      "It is built with Next.js 16 and React 19 in strict TypeScript with a feature-first structure, TanStack Query and Zustand for state, React Hook Form and Zod for forms, and Tailwind 4 with shadcn/ui. Components are developed in Storybook and tested with Vitest and Testing Library.",
    ],
    contributions: [
      "Built the checkout: address book, guest checkout, per-vendor shipping quotes, a four-step flow held in the URL, and a draft that survives reloads.",
      "Built a gateway-agnostic payments layer with redirect and iframe sessions that never touch card data, a postMessage origin check and confirmation driven by the server's verdict.",
      "Built the cart: stock-limited quantities, server-validated coupons, a free-shipping progress bar and a mini-cart drawer.",
      "Added multi-currency pricing, kept in a cookie so server-rendered prices are right on first paint.",
      "Built type-ahead search and catalogue-derived filters, including a price range that works across currencies and in RTL.",
    ],
    soloFeature: {
      title: "Multi-vendor checkout and payments",
      body: "Checkout was designed and built end to end in five phases: address book and guest checkout, live per-vendor shipping quotes, a stepped checkout with a saved draft, gateway-agnostic payments, and confirmation and failure pages. Money rules are priced by the server, orders are scoped to their owner, and each phase shipped with unit and integration tests.",
    },
    tech: ["react", "nextjs", "typescript", "tailwind"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "shadcn/ui",
      "TanStack Query 5",
      "Zustand 5",
      "next-intl 4",
      "React Hook Form 7",
      "Zod 4",
      "GSAP 3",
      "Vitest",
      "Storybook",
    ],
    liveUrl: "https://ecommerce.mdarj.org",
    repoUrl: null,
    verified: true,
  },
  {
    slug: "streak-it",
    title: "Streak It",
    category: "Full-stack app",
    img: streakIt,
    imageAlt: "Streak It habit tracker",
    summary:
      "A full-stack habit tracker where every check-in needs proof — a tap or a photo — with solo, shared and accountability streaks.",
    overview: [
      "Streak It pairs an Express 5 REST API on PostgreSQL with a Next.js 16 front end. Each habit has a proof type and an optional weekly schedule, and the streak algorithm counts only scheduled days, so a three-times-a-week habit is never broken by the days it wasn't due.",
      "On top sits a social layer: friends, an activity feed with emoji reactions, shared streaks that advance only when every member checks in, and accountability streaks watched by a friend. A badge engine, streak freezes, public profiles and scheduled reminder emails round it out.",
    ],
    contributions: [
      "Built the whole product solo, API and front end.",
      "Wrote a schedule-aware streak algorithm in UTC day maths, with streak freezes and group logic for shared habits.",
      "Designed the Prisma schema for users, habits, check-ins, memberships, friendships, reactions and badges, evolved through four migrations.",
      "Built photo-proof check-ins and avatar uploads through Cloudinary, with in-browser cropping, a per-habit photo gallery and a 30-day heatmap.",
      "Hardened the API with Helmet, rate limiting, input validation and env checks, and scheduled reminder and weekly-digest emails as cron jobs.",
    ],
    soloFeature: null,
    tech: ["react", "nextjs", "typescript", "node", "tailwind"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Framer Motion",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Nodemailer",
      "node-cron",
      "JWT",
    ],
    liveUrl: "https://streak-it-ah.vercel.app/",
    repoUrl: "https://github.com/AyaHany0/streak-it",
    verified: true,
  },
  {
    slug: "fresh-cart",
    title: "Fresh Cart",
    category: "E-commerce front-end",
    img: freshcart,
    imageAlt: "Fresh Cart product listing with cart and wishlist controls",
    summary:
      "A React e-commerce front end with authentication, cart and wishlist management, and a guarded checkout flow.",
    overview: [
      "Fresh Cart is a full e-commerce storefront covering the whole shopping journey: registration and login, browsing products by category and brand, managing a cart and a wishlist, and completing a checkout.",
      "It is the largest single-page application in this collection. Server state is handled with TanStack Query rather than hand-rolled effects, so product and cart data stay cached and consistent across every route.",
    ],
    contributions: [
      "Built the entire application solo, from routing and layout through to the checkout screen.",
      "Implemented JWT authentication with protected routes, decoding the token client-side to keep the session alive across reloads.",
      "Wired every product, cart and wishlist screen to the API through TanStack Query, so cached data stays in sync after each mutation.",
      "Built the registration and login forms with Formik and Yup, including inline validation and server-error surfacing.",
      "Added an offline detector and toast notifications so failed requests explain themselves instead of failing silently.",
    ],
    soloFeature: null,
    tech: ["react", "javascript", "tailwind"],
    stack: [
      "React 18",
      "Vite",
      "TanStack Query",
      "React Router 6",
      "Axios",
      "Formik + Yup",
      "Framer Motion",
      "Flowbite React",
      "JWT",
    ],
    liveUrl: "https://fresh-cart-chi-nine.vercel.app/",
    repoUrl: "https://github.com/AyaHany0/FreshCart",
    verified: true,
  },
  {
    slug: "job-search-api",
    title: "Job Search API",
    category: "Backend API",
    img: jobSearchApi,
    imageAlt: "Job Search API overview",
    summary:
      "A REST API for a job board: companies post jobs, candidates apply, HR reviews applications and admins moderate.",
    overview: [
      "A Node.js and Express backend on MongoDB, organised into user, company, job, application and admin modules — each with its own controller, service and Joi schema — behind shared authentication, authorisation, upload and error-handling middleware.",
      "It covers the full hiring flow: email and Google sign-up, OTP email confirmation and password reset, company profiles with logo and cover uploads, job search with filters and pagination, applications HR can accept or reject, and an Excel export of a company's applications for a given day.",
    ],
    contributions: [
      "Built the API solo.",
      "Built JWT auth with refresh tokens, Google sign-in and OTP email flows, with a scheduled job that clears expired OTPs.",
      "Built the job listing endpoints with search, filters, sorting and pagination.",
      "Generated downloadable per-company application reports with ExcelJS, and handled image uploads through Cloudinary.",
      "Added admin endpoints to ban users and companies and approve companies, and secured the app with Helmet, rate limiting and encrypted phone numbers.",
    ],
    soloFeature: null,
    tech: ["javascript", "node"],
    stack: [
      "Node.js",
      "Express 4",
      "MongoDB + Mongoose 8",
      "Joi",
      "JWT",
      "bcrypt",
      "Cloudinary",
      "Multer",
      "ExcelJS",
      "node-cron",
      "Nodemailer",
      "Helmet",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/AyaHany0/jobSearching",
    verified: true,
  },
  {
    slug: "askly-api",
    title: "Askly API",
    category: "Backend API",
    img: asklyApi,
    imageAlt: "Askly API overview",
    summary:
      "The backend for an anonymous-messaging app: accounts, an anonymous inbox, message reports and admin moderation.",
    overview: [
      "Askly is a Node.js and Express API on MongoDB behind an anonymous-message app: anyone can message a user's public profile, and signed-in users manage their inbox. The code is split into user, message and admin modules, each with its own controller, service and Joi validation layer.",
      "Accounts use soft deletes, confirmation emails and encrypted personal data. Users can report messages, and admins review the reports, resolve them, unban users and promote other admins.",
    ],
    contributions: [
      "Built the API solo.",
      "Built sign-up and sign-in with bcrypt and JWT, plus email confirmation through an event-driven mailer with signed, expiring links.",
      "Added a Mongoose query hook that hides soft-deleted users everywhere, and encrypted phone numbers at rest.",
      "Built the message endpoints: send anonymously, list all, read or unread, mark as read, delete and report.",
      "Added a role-gated admin area for reports, unbanning and admin promotion, with centralised validation and error handling.",
    ],
    soloFeature: null,
    tech: ["javascript", "node"],
    stack: [
      "Node.js",
      "Express 4",
      "MongoDB + Mongoose 8",
      "Joi",
      "JWT",
      "bcrypt",
      "crypto-js",
      "Nodemailer",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/AyaHany0/Askly-BackEnd",
    verified: true,
  },
  {
    slug: "blooming",
    title: "Blooming",
    category: "Marketing site",
    img: blooming,
    imageAlt: "Blooming floral design landing page",
    summary:
      "A responsive florist site showcasing floral designs and arrangements.",
    overview: [
      "Blooming is a responsive marketing site for a florist, built to put the arrangements themselves front and centre with generous imagery and an uncluttered layout.",
      "Written in hand-authored HTML, CSS and JavaScript with no framework, so the whole page ships as static assets.",
    ],
    contributions: [
      "Designed and built the entire site solo.",
      "Wrote the responsive layout from scratch so the gallery reflows cleanly from phone to desktop.",
      "Built the scroll and hover interactions in plain JavaScript, with no animation library.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/Blooming/",
    repoUrl: "https://github.com/AyaHany0/Blooming",
    verified: true,
  },
  {
    slug: "solar-company",
    title: "Solar Company",
    category: "Marketing site",
    img: solar,
    imageAlt: "Solar Company services page",
    summary:
      "A clean, fully responsive website for a solar energy company, covering services, products and contact.",
    overview: [
      "A marketing site for a solar energy company, laying out its services, product range and commitment to green energy across a set of linked pages.",
      "Built with HTML, CSS and JavaScript, with smooth navigation and a working contact form, and optimised to hold up on every screen size.",
    ],
    contributions: [
      "Built the site solo, from the page structure through to the styling.",
      "Implemented the responsive navigation and section layouts.",
      "Built the contact form with client-side validation.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/SolarCompany/",
    repoUrl: "https://github.com/AyaHany0/SolarCompany",
    verified: true,
  },
  {
    slug: "games",
    title: "Games",
    category: "API-driven app",
    img: games,
    imageAlt: "Games listing grouped by category",
    summary:
      "A game browser that pulls live data from an API and organises it into categorised sections.",
    overview: [
      "Games fetches game data from a public API and organises it into browsable categories, with a detail view for each title.",
      "The whole thing is vanilla JavaScript — fetching, rendering and routing between the list and detail views are all hand-written.",
    ],
    contributions: [
      "Built the application solo.",
      "Handled the API integration, including loading and error states while requests are in flight.",
      "Built the category switching and the detail view without a framework or router.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "https://ayahany0.github.io/Games",
    repoUrl: "https://github.com/AyaHany0/Games",
    verified: true,
  },
  {
    slug: "say-simon",
    title: "Say Simon",
    category: "Browser game",
    img: simon,
    imageAlt: "Say Simon memory game board",
    summary:
      "A browser take on the Simon memory game — repeat a growing sequence of lights and sounds.",
    overview: [
      "Say Simon is the classic memory game: watch a sequence of buttons light up, repeat it back, and watch it grow by one each round.",
      "Built in plain JavaScript, with the sequence generation, playback timing and win/lose state all managed by hand.",
    ],
    contributions: [
      "Built the game solo.",
      "Implemented the sequence generation and the timed playback loop.",
      "Wrote the input-matching and game-over logic, plus the score tracking.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/Simon-Game",
    repoUrl: "https://github.com/AyaHany0/Simon-Game",
    verified: true,
  },
  {
    slug: "vivadecor",
    title: "VivaDecor",
    category: "Marketing site",
    img: vivadecor,
    imageAlt: "VivaDecor interior design showcase",
    summary:
      "An interior design site focused on user-friendly navigation and elegant transitions.",
    overview: [
      "VivaDecor is a modern site for an interior design studio, showcasing projects and services with a focus on easy navigation.",
      "Built with HTML, CSS, JavaScript and jQuery, leaning on jQuery for the section transitions and gallery behaviour.",
    ],
    contributions: [
      "Built the site solo.",
      "Implemented the project gallery and the transitions between sections.",
      "Made the layout fully responsive across phone, tablet and desktop.",
    ],
    soloFeature: null,
    tech: ["javascript", "jquery", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://ayahany0.github.io/InteriorDesign",
    repoUrl: "https://github.com/AyaHany0/InteriorDesign",
    verified: true,
  },
  {
    slug: "yummy",
    title: "Yummy",
    category: "API-driven app",
    img: yummy,
    imageAlt: "Yummy recipe browser",
    summary:
      "A responsive recipe app that fetches dishes from an API, complete with descriptions and categories.",
    overview: [
      "Yummy lets you browse and discover recipes pulled live from an API, organised by category, ingredient and area, each with a full description and instructions.",
      "Built in vanilla JavaScript with a responsive layout, so the grid works the same on a phone as on a desktop.",
    ],
    contributions: [
      "Built the application solo.",
      "Integrated the recipe API and built the search across name, ingredient, category and area.",
      "Built the recipe detail view and the responsive card grid.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "https://ayahany0.github.io/Yummy",
    repoUrl: "https://github.com/AyaHany0/Yummy",
    verified: true,
  },
  {
    slug: "to-do-list",
    title: "To Do List",
    category: "Interactive app",
    img: todolist,
    imageAlt: "To Do List task manager",
    summary:
      "A task manager with a considered design and satisfying completion animations.",
    overview: [
      "A to-do app for adding tasks, marking them done and clearing them out, with animations on completion that make the interaction feel worth repeating.",
      "Built with HTML, CSS and JavaScript, with the animation work done in CSS rather than a library.",
    ],
    contributions: [
      "Built the app solo.",
      "Implemented adding, completing and removing tasks, with the list persisted between visits.",
      "Designed and built the completion animations in CSS.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/ToDoList",
    repoUrl: "https://github.com/AyaHany0/ToDoList",
    verified: true,
  },
  {
    slug: "dr-john-watson",
    title: "Dr.John Watson",
    category: "Blog template",
    img: john,
    imageAlt: "Dr. John Watson personal blog",
    summary:
      "A personal blog template following a doctor-turned-developer through his front-end adventures.",
    overview: [
      "A personal blog built around a character premise — Dr. Watson trading his medical bag for code — used as a vehicle for a clean, readable long-form layout.",
      "Built with HTML, CSS and JavaScript, with typography and reading comfort as the main design constraint.",
    ],
    contributions: [
      "Built the site solo.",
      "Designed the article layout and typography scale for long-form reading.",
      "Built the responsive navigation and post listing.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/Dr.JohnWatson",
    repoUrl: "https://github.com/AyaHany0/Dr.JohnWatson",
    verified: true,
  },
  {
    slug: "dina-farms",
    title: "Dina Farms",
    category: "UI component",
    img: dinafarms,
    imageAlt: "Dina Farms product image slider",
    summary:
      "A reusable image slider that adapts to any product lineup by changing the number of images.",
    overview: [
      "A customisable image slider built to drop into any product showcase — the demo features Dina Farms' milk products, but the component adapts to however many images it is given.",
      "Built with HTML, CSS and JavaScript, offering both automatic transitions and manual controls.",
    ],
    contributions: [
      "Built the slider solo, from scratch, with no carousel library.",
      "Wrote the automatic transition loop alongside manual previous/next controls, so the two never fight each other.",
      "Made the image count configurable so the same component works for any product lineup.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/ImageSlider/",
    repoUrl: "https://github.com/AyaHany0/ImageSlider",
    verified: true,
  },
  {
    slug: "bazel",
    title: "bazel.",
    category: "Marketing site",
    img: bazel,
    imageAlt: "bazel. landing page",
    summary:
      "A visually-led landing page built around a clean, responsive interface.",
    overview: [
      "bazel. is a design-forward landing page, built to be immersive without getting in the reader's way.",
      "Built with HTML, CSS and JavaScript, with the emphasis on layout, spacing and type rather than on framework machinery.",
    ],
    contributions: [
      "Designed and built the page solo.",
      "Built the responsive layout and the scroll-triggered reveals.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ayahany0.github.io/bazel",
    repoUrl: "https://github.com/AyaHany0/bazel",
    verified: true,
  },
  {
    slug: "weather",
    title: "Weather",
    category: "API-driven app",
    img: weather,
    imageAlt: "Weather forecast for a searched location",
    summary:
      "A responsive weather app returning real-time conditions for any location.",
    overview: [
      "Weather takes a location and returns the current conditions and a short forecast — temperature, conditions and the supporting detail — pulled live from a weather API.",
      "Built in vanilla JavaScript with a responsive layout that reflows from a single column on a phone to a multi-day row on desktop.",
    ],
    contributions: [
      "Built the application solo.",
      "Integrated the weather API, including the search and the error state for locations that return nothing.",
      "Built the forecast cards and mapped the API's condition codes onto the right icons.",
    ],
    soloFeature: null,
    tech: ["javascript", "htmlcss"],
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "https://ayahany0.github.io/Weather",
    repoUrl: "https://github.com/AyaHany0/Weather",
    verified: true,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

const TECH_LABELS = {
  react: "React",
  nextjs: "Next.js",
  typescript: "TypeScript",
  javascript: "JavaScript",
  node: "Node.js",
  tailwind: "Tailwind",
  jquery: "jQuery",
  htmlcss: "HTML & CSS",
};

// Display order for the filter row. Broadest-first, so the row reads as a
// narrowing sequence rather than an alphabetical dump.
const TECH_ORDER = [
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "node",
  "tailwind",
  "jquery",
  "htmlcss",
];

/**
 * Facets are derived from the data, never hand-listed. A hardcoded list can
 * drift into offering a button that matches nothing — the `.filter(count > 0)`
 * makes that state unrepresentable, which is also why the grid needs no
 * "no results" empty state.
 */
export const techFilters = [
  { id: "all", label: "All", count: projects.length },
  ...TECH_ORDER.map((id) => ({
    id,
    label: TECH_LABELS[id],
    count: projects.filter((project) => project.tech.includes(id)).length,
  })).filter((facet) => facet.count > 0),
];
