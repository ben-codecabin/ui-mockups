// tailwind.config.js
module.exports = {
  content: [
    // Paths to your templates/components that use Tailwind classes
    './src/**/*.{html,vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        // Accent and primary colours
        primary: '#3b82f6',         // Blue accent used for buttons, active states, etc.
        // Backgrounds
        background: '#f3f4f6',       // Main page background
        headerBg: '#f9fafb',         // Header bar background
        sidebarBg: '#ffffff',        // Main sidebar background
        cardBg: '#ffffff',           // Card and white surface background
        // Borders and dividers
        border: '#e5e7eb',           // Used for borders on cards, sidebars, table headers, etc.
        // Text colours
        textPrimary: '#111827',      // Primary text color
        textSecondary: '#4b5563',    // Secondary text color
        // Status and badges
        badgeBasic: '#9ca3af',       // For basic access level badges
        badgePremium: '#3b82f6',     // For premium access level badges
        statusLive: '#10b981',       // For live listing status
        statusSold: '#ef4444',       // For sold status (red)
        statusProspect: '#6b7280',   // For prospect status (gray)
        statusWithdrawn: '#9ca3af',  // For withdrawn status (lighter gray)
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.05)', // For cards and panels
      },
      borderRadius: {
        lg: '10px', // For cards and other rounded elements
      },
      spacing: {
        // You can extend spacing if needed, otherwise Tailwind defaults should suffice.
        // Example: '72': '18rem',
      },
    },
  },
  plugins: [],
}
