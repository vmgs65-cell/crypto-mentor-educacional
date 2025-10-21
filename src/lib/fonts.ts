/**
 * 🎨 Font Configuration for Lasy AI Templates
 * 
 * Optimized font loading to prevent build timeouts.
 * Uses system fonts and Next.js built-in fonts only.
 */

/**
 * Font family configurations for easy use
 * Using system fonts and Next.js built-in fonts to prevent build issues
 */
export const fontFamilies = {
  // Sans-serif fonts - using system fonts for reliability
  geist: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  inter: 'Inter, ui-sans-serif, system-ui, sans-serif',
  
  // Monospace fonts
  geistMono: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, "SF Mono", monospace',
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
    'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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