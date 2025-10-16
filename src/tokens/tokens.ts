/**
 * MindSet Design System - Design Tokens (TypeScript)
 * Type-safe access to design tokens
 */

export const tokens = {
  // Scale
  scale: {
    0: '0px',
    12.5: '1px',
    25: '2px',
    50: '4px',
    75: '6px',
    100: '8px',
    150: '12px',
    175: '14px',
    200: '16px',
    250: '20px',
    300: '24px',
    400: '32px',
    500: '40px',
    600: '48px',
    700: '56px',
    800: '64px',
    900: '72px',
    1000: '80px',
    2000: '160px',
    2500: '200px',
  },

  // Typography
  typography: {
    fontFamily: {
      default: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      mono: "'Fira Code', 'Monaco', 'Courier New', monospace",
    },
    fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '20px',
      xl: '24px',
    },
  },

  // Spacing/Gap
  gap: {
    none: '0px',
    '3xs': '2px',
    '2xs': '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '56px',
    '6xl': '64px',
    '7xl': '80px',
  },

  // Border Radius
  radius: {
    none: '0px',
    xs: '4px',
    s: '6px',
    m: '8px',
    l: '12px',
    xl: '16px',
    rounded: '9999px',
  },

  // Stroke Width
  stroke: {
    none: '0px',
    thin: '1px',
    light: '1.25px',
    medium: '1.5px',
    large: '2px',
  },

  // Container Max Widths
  maxWidth: {
    mobile: '480px',
    tabletPortrait: '768px',
    tabletLandscape: '1024px',
    desktop: '1440px',
    desktopLg: '1600px',
    desktopXl: '1980px',
  },
} as const;

// Export types for better TypeScript support
export type Scale = keyof typeof tokens.scale;
export type FontFamily = keyof typeof tokens.typography.fontFamily;
export type FontSize = keyof typeof tokens.typography.fontSize;
export type Gap = keyof typeof tokens.gap;
export type Radius = keyof typeof tokens.radius;
export type Stroke = keyof typeof tokens.stroke;
export type MaxWidth = keyof typeof tokens.maxWidth;

// Helper function to get CSS variable
export const getCSSVar = (name: string): string => `var(--${name})`;

// Helper to create spacing values
export const spacing = {
  none: getCSSVar('gap-none'),
  '3xs': getCSSVar('gap-3xs'),
  '2xs': getCSSVar('gap-2xs'),
  xs: getCSSVar('gap-xs'),
  s: getCSSVar('gap-s'),
  m: getCSSVar('gap-m'),
  l: getCSSVar('gap-l'),
  xl: getCSSVar('gap-xl'),
  '2xl': getCSSVar('gap-2xl'),
  '3xl': getCSSVar('gap-3xl'),
  '4xl': getCSSVar('gap-4xl'),
  '5xl': getCSSVar('gap-5xl'),
  '6xl': getCSSVar('gap-6xl'),
  '7xl': getCSSVar('gap-7xl'),
} as const;

// Color system - semantic tokens
export const colors = {
  // Accent
  accent: {
    default: getCSSVar('color-accent-default'),
    subtle: getCSSVar('color-accent-subtle'),
    strong: getCSSVar('color-accent-strong'),
    lighter: getCSSVar('color-accent-lighter'),
    light: getCSSVar('color-accent-light'),
  },
  
  // Primary
  primary: {
    default: getCSSVar('color-primary-default'),
    inverted: getCSSVar('color-primary-inverted'),
    subtle: getCSSVar('color-primary-subtle'),
    light: getCSSVar('color-primary-light'),
  },
  
  // Surface
  surface: {
    background: getCSSVar('color-surface-background'),
    backgroundInverted: getCSSVar('color-surface-background-inverted'),
    layer: getCSSVar('color-surface-layer'),
    layerStrong: getCSSVar('color-surface-layer-strong'),
    layerStronger: getCSSVar('color-surface-layer-stronger'),
    elevated: getCSSVar('color-surface-elevated'),
    accent: getCSSVar('color-surface-accent'),
    input: getCSSVar('color-surface-input'),
  },
  
  // Content/Text
  content: {
    heading: getCSSVar('color-content-heading'),
    primary: getCSSVar('color-content-primary'),
    secondary: getCSSVar('color-content-secondary'),
    disabled: getCSSVar('color-content-disabled'),
    inverted: getCSSVar('color-content-inverted'),
    accent: getCSSVar('color-content-accent'),
    error: getCSSVar('color-content-error'),
    success: getCSSVar('color-content-success'),
    warning: getCSSVar('color-content-warning'),
  },
  
  // Content On Inverted
  contentOnInverted: {
    heading: getCSSVar('color-content-on-inverted-heading'),
    primary: getCSSVar('color-content-on-inverted-primary'),
    secondary: getCSSVar('color-content-on-inverted-secondary'),
    disabled: getCSSVar('color-content-on-inverted-disabled'),
    accent: getCSSVar('color-content-on-inverted-accent'),
  },
  
  // Icon
  icon: {
    primary: getCSSVar('color-icon-primary'),
    secondary: getCSSVar('color-icon-secondary'),
    disabled: getCSSVar('color-icon-disabled'),
    inverted: getCSSVar('color-icon-inverted'),
    accent: getCSSVar('color-icon-accent'),
    accentSubtle: getCSSVar('color-icon-accent-subtle'),
    accentStrong: getCSSVar('color-icon-accent-strong'),
    error: getCSSVar('color-icon-error'),
    success: getCSSVar('color-icon-success'),
    warning: getCSSVar('color-icon-warning'),
  },
  
  // Stroke/Border
  stroke: {
    subtle: getCSSVar('color-stroke-subtle'),
    medium: getCSSVar('color-stroke-medium'),
    strong: getCSSVar('color-stroke-strong'),
    alphaSubtle: getCSSVar('color-stroke-alpha-subtle'),
    alphaMedium: getCSSVar('color-stroke-alpha-medium'),
    alphaStrong: getCSSVar('color-stroke-alpha-strong'),
  },
  
  // Feedback
  feedback: {
    negative: {
      light: getCSSVar('color-feedback-negative-light'),
      default: getCSSVar('color-feedback-negative-default'),
      strong: getCSSVar('color-feedback-negative-strong'),
    },
    positive: {
      light: getCSSVar('color-feedback-positive-light'),
      default: getCSSVar('color-feedback-positive-default'),
      strong: getCSSVar('color-feedback-positive-strong'),
    },
    warning: {
      light: getCSSVar('color-feedback-warning-light'),
      default: getCSSVar('color-feedback-warning-default'),
      strong: getCSSVar('color-feedback-warning-strong'),
    },
  },
  
  // Build System
  build: {
    action: getCSSVar('color-build-action'),
    data: getCSSVar('color-build-data'),
    function: getCSSVar('color-build-function'),
    input: getCSSVar('color-build-input'),
    workflow: getCSSVar('color-build-workflow'),
  },
} as const;

export default tokens;
