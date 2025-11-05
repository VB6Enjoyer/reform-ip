"use client" // This directive is necessary because next-themes uses React Context and browser APIs (like localStorage).

import * as React from "react"
// Import the actual theme provider and its props from the next-themes library.
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

/**
 * A wrapper component for `next-themes`'s ThemeProvider.
 * This component makes it easy to manage light/dark mode and other themes in a Next.js application.
 * It's set up as a client component because it relies on context and browser storage.
 *
 * @param {ThemeProviderProps} props - Props for the theme provider, including `children`.
 * @returns {React.ReactElement} The NextThemesProvider wrapping the application's children.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Renders the provider from next-themes, passing all props through.
  // This allows the rest of the application to access theme information via the `useTheme` hook.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
