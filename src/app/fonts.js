import { Montserrat, Roboto } from "next/font/google";

// Replaces the render-blocking Google Fonts @import that index.css used to carry.
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

// The declared set was wrong in both directions: 100, 300 and 900 are never used
// anywhere, italics are used nowhere at all, and 600 — which `font-semibold`
// asks for 25 times — was missing, so the browser had to synthesise it.
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});
