/**
 * 🎨 Font Configuration for Lasy AI Templates
 * 
 * Optimized font loading to prevent build timeouts.
 * Only essential fonts are loaded to improve build performance.
 */

// Essential Geist Fonts (Vercel's official fonts) - Only core weights
import '@fontsource/geist-sans/400.css'
import '@fontsource/geist-sans/600.css'
import '@fontsource/geist-mono/400.css'

// Essential Inter font - Only core weights
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'

/**
 * Font family configurations for easy use
 */
export const fontFamilies = {
  // Sans-serif fonts
  geist: '"Geist Sans", ui-sans-serif, system-ui, sans-serif',
  inter: '"Inter", ui-sans-serif, system-ui, sans-serif',
  
  // Monospace fonts
  geistMono: '"Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", monospace',
} as const

/**
 * CSS custom properties for fonts (use in globals.css)
 */
export const fontCSSVars = `
  --font-geist-sans: ${fontFamilies.geist};
  --font-geist-mono: ${fontFamilies.geistMono};
  --font-inter: ${fontFamilies.inter};
`

/**
 * Tailwind CSS font family configuration
 * Add this to your tailwind.config.js
 */
export const tailwindFontConfig = {
  fontFamily: {
    'geist-sans': ['var(--font-geist-sans)'],
    'geist-mono': ['var(--font-geist-mono)'],
    'inter': ['var(--font-inter)'],
  }
}

/**
 * Usage Examples:
 * 
 * 1. In CSS/Tailwind:
 *    className="font-geist-sans"
 *    className="font-geist-mono"
 * 
 * 2. In styled-components:
 *    font-family: ${fontFamilies.geist};
 * 
 * 3. In component styles:
 *    style={{ fontFamily: fontFamilies.geistMono }}
 * 
 * 4. For AI: Essential fonts are available, optimized for build performance
 */