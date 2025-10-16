/**
 * MindSet Design System - Design Tokens
 * 
 * This module exports all design tokens for the MindSet Design System.
 * Import the CSS file to make the CSS variables available in your application.
 * 
 * @example
 * ```tsx
 * // Import CSS tokens
 * import '@/tokens';
 * 
 * // Or use TypeScript tokens
 * import { tokens, colors, spacing } from '@/tokens';
 * ```
 */

// Import CSS to make CSS variables available
import './tokens.css';

// Export TypeScript tokens
export { default as tokens, colors, spacing, getCSSVar } from './tokens';
export type { Scale, FontFamily, FontSize, Gap, Radius, Stroke, MaxWidth } from './tokens';
