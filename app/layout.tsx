// Import necessary types and components.
import type React from "react"
import type { Metadata } from "next"
// Import fonts from next/font/google for performance optimization.
import { Geist, Geist_Mono } from "next/font/google"
// Import Vercel Analytics for usage tracking.
import { Analytics } from "@vercel/analytics/next"
// Import global styles.
import "./globals.css"

// Initialize the Geist sans-serif font. The leading underscore is a convention
// to indicate the variable is loaded for its side-effects (e.g., preloading)
// and is likely configured as the default font family in `tailwind.config.js`.
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Define metadata for the application, used for SEO and browser tab information.
export const metadata: Metadata = {
  title: "Reform IP - Advocating for Intellectual Property Reform",
  description:
    "Join the movement to reform intellectual property laws. Discover the economic and human costs of current IP regimes and take action for change.",
  generator: "v0.app", // Indicates the tool used to generate the initial UI.
}

/**
 * The root layout component for the entire application.
 * This component wraps all pages and provides the basic HTML structure.
 * @param {Readonly<{ children: React.ReactNode }>} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout, typically the page content.
 * @returns {React.ReactElement} The root HTML structure of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // The root HTML element, with the language set to English for accessibility and SEO.
    <html lang="en">
      {/* The body element applies the default sans-serif font and anti-aliasing for smoother text rendering. */}
      <body className={`font-sans antialiased`}>
        {/* `children` will be replaced by the content of the current page being rendered. */}
        {children}
        {/* The Vercel Analytics component is included on all pages for usage tracking. */}
        <Analytics />
      </body>
    </html>
  )
}
