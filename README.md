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
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Card title="Example Card">
        Content here
      </Card>
      <Icon name="check" size="md" />
    </div>
  );
}
```

## Components

### Button
- **Variants**: Primary, Accent, Ghost, Text
- **Sizes**: XSmall, Small, Medium, Large
- **States**: Default, Hover, Active, Focus, Disabled

### Card
- Pricing card components with variants

### Icon
- Icon system with multiple sizes

## Design Tokens

The library exports design tokens for consistent styling:

```tsx
import { tokens, colors, spacing, getCSSVar } from '@sirlund/mindset-ui';
```

## Storybook Documentation

View the live component documentation:

```bash
# Clone the repo
git clone https://github.com/sirlund/MindsetDS.git
cd MindsetDS
npm install
npm run storybook
```

## License

MIT

## Team

MindSet Team
