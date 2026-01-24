# MindSet Design System

A comprehensive React component library for the MindSet Design System, featuring components extracted from Figma with full specifications.

**Figma Source:** [MindSet Design System](https://www.figma.com/design/XVdVpzEXk8FK4GaXgT1Gi8/%E2%9D%96-MindSet-Design-System)

## Installation

```bash
npm install @sirlund/mindset-ui
```

## Usage

```tsx
// Import styles once in your app root
import '@sirlund/mindset-ui/styles.css';

// Import components
import { Button, Card, Icon } from '@sirlund/mindset-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Card plan="Individual" price={20} />
      <Icon name="check" size="M" />
    </div>
  );
}
```

## Components

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'accent' \| 'tertiary' \| 'text' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading spinner |
| `fullWidth` | `boolean` | `false` | Full width |
| `startIcon` | `ReactNode` | - | Icon before text |
| `endIcon` | `ReactNode` | - | Icon after text |

### Card

Pricing card component for subscription plans.

| Prop | Type | Default |
|------|------|---------|
| `plan` | `'Starter' \| 'Individual' \| 'Teams'` | `'Starter'` |
| `price` | `number` | `0` |
| `seats` | `number` | `1` |

### Icon

| Prop | Type | Default |
|------|------|---------|
| `name` | `IconName` | required |
| `size` | `'XS' \| 'S' \| 'M' \| 'L'` | `'M'` |
| `color` | `string` | `'#29292a'` |

Available icons: `add`, `check`, `close`, `search`, `user`, `settings`, `mail`, `calendar`, `trash`, `pencil`, `arrow-left`, `arrow-right`, `chevron-down`, `chevron-up`, and more.

## Dark Mode

The library supports dark mode via the `data-theme` attribute. Light mode is the default.

```tsx
// Light mode (default)
<html>
  <body>
    <Button variant="primary">Dark background</Button>
  </body>
</html>

// Dark mode - add data-theme="dark" to html or body
<html data-theme="dark">
  <body>
    <Button variant="primary">Light background</Button>
  </body>
</html>
```

## Components Manifest

For programmatic access to component definitions (useful for AI/code generation):

```tsx
// Import as JSON
import manifest from '@sirlund/mindset-ui/manifest';

// Or fetch from CDN
fetch('https://unpkg.com/@sirlund/mindset-ui/dist/components-manifest.json')
  .then(res => res.json())
  .then(manifest => {
    console.log(manifest.components.Button.props);
  });
```

## Design Tokens

The library exports design tokens for consistent styling:

```tsx
import { tokens, colors, spacing, getCSSVar } from '@sirlund/mindset-ui';
```

## Storybook

View the live component documentation:

```bash
git clone https://github.com/sirlund/MindsetDS.git
cd MindsetDS
npm install
npm run storybook
```

## License

MIT
