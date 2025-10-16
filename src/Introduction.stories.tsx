import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'centered',
    options: {
      showPanel: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * # MindSet Design System
 * 
 * A comprehensive design system built with React, TypeScript, and CSS design tokens.
 * 
 * ## 🎨 Design Principles
 * 
 * - **Consistency**: All components follow the same design language and patterns
 * - **Accessibility**: Built with WCAG 2.1 AA standards in mind
 * - **Flexibility**: Design tokens enable easy theming and customization
 * - **Performance**: Optimized components with minimal dependencies
 * 
 * ## 📦 What's Included
 * 
 * ### Design Tokens
 * Complete set of design tokens exported from Figma:
 * - **Colors**: Base colors, semantic tokens, alpha values
 * - **Typography**: Font families, sizes, weights, line heights
 * - **Spacing**: Consistent gap and padding values
 * - **Dimensions**: Border radius, stroke widths, container max-widths
 * - **Dark Mode**: Automatic theme switching support
 * 
 * ### Components
 * - **Button**: Primary, Accent, Tertiary, Text, and Danger variants
 * - **Card**: Flexible card layouts with headers, body, and footers
 * - **Icon**: Icon components with multiple sizes and colors
 * 
 * ## 🚀 Getting Started
 * 
 * ### Installation
 * 
 * ```bash
 * npm install @mindset/design-system
 * ```
 * 
 * ### Usage
 * 
 * ```tsx
 * import { Button } from '@mindset/design-system';
 * import '@mindset/design-system/tokens';
 * 
 * function App() {
 *   return (
 *     <Button variant="primary" size="medium">
 *       Click me
 *     </Button>
 *   );
 * }
 * ```
 * 
 * ### Using Design Tokens
 * 
 * ```css
 * .my-component {
 *   color: var(--color-accent-default);
 *   padding: var(--gap-m);
 *   border-radius: var(--radius-m);
 *   font-family: var(--font-family-default);
 * }
 * ```
 * 
 * ```tsx
 * import { tokens, spacing, colors } from '@mindset/design-system/tokens';
 * 
 * const MyComponent = () => (
 *   <div style={{ padding: spacing.m, color: colors.accent.default }}>
 *     Content
 *   </div>
 * );
 * ```
 * 
 * ## 🎯 Figma Integration
 * 
 * This design system is directly connected to our Figma file. All components and tokens
 * are synchronized to ensure design-development consistency.
 * 
 * **Figma File**: [MindSet Design System](https://www.figma.com/design/XVdVpzEXk8FK4GaXgT1Gi8)
 * 
 * ## 📖 Documentation
 * 
 * - Browse **Design Tokens** to see all available tokens
 * - Explore **Components** for interactive examples and API documentation
 * - Check component source code for implementation details
 * 
 * ## 🌙 Dark Mode Support
 * 
 * All components automatically adapt to dark mode using CSS custom properties.
 * The system respects the user's OS preference (`prefers-color-scheme`).
 * 
 * ---
 * 
 * Built with ❤️ by the MindSet team
 */

export const Introduction = () => (
  <div style={{
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'var(--font-family-default)',
    lineHeight: 1.6,
  }}>
    <h1 style={{
      fontSize: 'var(--scale-600)',
      marginBottom: 'var(--gap-l)',
      color: 'var(--color-content-primary)',
    }}>
      Welcome to MindSet Design System
    </h1>
    
    <p style={{
      fontSize: 'var(--font-size-l)',
      color: 'var(--color-content-secondary)',
      marginBottom: 'var(--gap-xl)',
    }}>
      A modern, accessible, and flexible design system synchronized with Figma.
    </p>

    <div style={{
      padding: 'var(--gap-l)',
      backgroundColor: 'var(--color-surface-layer)',
      borderRadius: 'var(--radius-m)',
      border: '1px solid var(--color-stroke-subtle)',
      marginBottom: 'var(--gap-xl)',
    }}>
      <h3 style={{ marginTop: 0, color: 'var(--color-content-primary)' }}>
        🚀 Quick Start
      </h3>
      <p style={{ color: 'var(--color-content-secondary)' }}>
        Navigate through the sidebar to explore:
      </p>
      <ul style={{ color: 'var(--color-content-secondary)' }}>
        <li><strong>Design Tokens</strong> - View all colors, spacing, typography, and more</li>
        <li><strong>Components</strong> - Interactive examples with full API documentation</li>
      </ul>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--gap-m)',
    }}>
      <div style={{
        padding: 'var(--gap-m)',
        border: '1px solid var(--color-stroke-subtle)',
        borderRadius: 'var(--radius-s)',
      }}>
        <h4 style={{ marginTop: 0, color: 'var(--color-accent-default)' }}>🎨 Design Tokens</h4>
        <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--color-content-secondary)' }}>
          Complete set of design variables from Figma
        </p>
      </div>
      
      <div style={{
        padding: 'var(--gap-m)',
        border: '1px solid var(--color-stroke-subtle)',
        borderRadius: 'var(--radius-s)',
      }}>
        <h4 style={{ marginTop: 0, color: 'var(--color-accent-default)' }}>⚡ TypeScript</h4>
        <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--color-content-secondary)' }}>
          Fully typed components and tokens
        </p>
      </div>
      
      <div style={{
        padding: 'var(--gap-m)',
        border: '1px solid var(--color-stroke-subtle)',
        borderRadius: 'var(--radius-s)',
      }}>
        <h4 style={{ marginTop: 0, color: 'var(--color-accent-default)' }}>🌙 Dark Mode</h4>
        <p style={{ fontSize: 'var(--font-size-s)', color: 'var(--color-content-secondary)' }}>
          Automatic theme switching support
        </p>
      </div>
    </div>
  </div>
);
