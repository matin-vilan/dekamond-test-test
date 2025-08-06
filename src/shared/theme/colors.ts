// Colors extracted from your SCSS files
export const colors = {
  // Primary colors (blue)
  primary: {
    500: "#3b82f6", // Main primary color
    600: "#2563eb", // Hover state
    700: "#1d4ed8", // Active state
  },

  // Gray colors
  gray: {
    100: "#f3f4f6", // Active state background
    200: "#e5e7eb", // Border color
    300: "#d1d5db", // Border color
    400: "#9ca3af", // Placeholder, border hover
    500: "#6b7280", // Icon color, helper text
    600: "#64748b", // Disabled text
    700: "#374151", // Text color, label
  },

  // Success colors
  success: {
    500: "#10b981", // Success border
  },

  // Error colors
  error: {
    500: "#ef4444", // Error border, error message
  },

  // Neutral colors
  white: "#ffffff",
  black: "#000000",
  text: "#333333", // Text color
  border: "#e1e5e9", // Input border
  borderHover: "#cbd5e1", // Input hover border
  disabled: "#f8fafc", // Disabled background
  secondary: "#f9fafb", // Secondary button hover
} as const;

// CSS custom properties
export const cssVariables = {
  // Primary colors
  "--color-primary-500": colors.primary[500],
  "--color-primary-600": colors.primary[600],
  "--color-primary-700": colors.primary[700],

  // Gray colors
  "--color-gray-100": colors.gray[100],
  "--color-gray-200": colors.gray[200],
  "--color-gray-300": colors.gray[300],
  "--color-gray-400": colors.gray[400],
  "--color-gray-500": colors.gray[500],
  "--color-gray-600": colors.gray[600],
  "--color-gray-700": colors.gray[700],

  // Status colors
  "--color-success-500": colors.success[500],
  "--color-error-500": colors.error[500],

  // Other colors
  "--color-white": colors.white,
  "--color-black": colors.black,
  "--color-text": colors.text,
  "--color-border": colors.border,
  "--color-border-hover": colors.borderHover,
  "--color-disabled": colors.disabled,
  "--color-secondary": colors.secondary,
} as const;

// Export types
export type ColorPalette = typeof colors;
export type CSSVariables = typeof cssVariables;
