import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Icons for demonstration
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'MindSet Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `# Button Component

**From MindSet Design System**
**Figma Node ID:** \`90:1131\`
**Total Variants:** 80

The primary button component with support for 4 types, 4 sizes, and 5 states.

## Design System Properties

### Type (4 options)
- **Primary** - Main call-to-action buttons
- **Secondary** - Accent/secondary actions (maps to Figma "Accent (Secondary)")
- **Ghost** - Tertiary actions with minimal styling (maps to Figma "Ghost (Tertiary)")
- **Outline** - Outline style variant (custom implementation)

### Size (4 options)
- **XSmall** - Extra small for compact UIs (~24px height)
- **Small** - Small buttons for dense layouts (~32px height)
- **Medium** - Default size for most use cases (~40px height)
- **Large** - Large buttons for emphasis (~48px height)

### States
All buttons support: Default, Hover, Active, Focus, and Disabled states

### Features
- Configurable left and right icons
- Action/dropdown indicator support
- Loading state
- Full width option
- Accessible keyboard navigation

See [MINDSET_DESIGN_SYSTEM.md](../../../MINDSET_DESIGN_SYSTEM.md) for complete documentation.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'The visual style variant (Primary, Secondary/Accent, Ghost/Tertiary, Outline)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size (Figma sizes: XSmall, Small, Medium, Large)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state - one of 5 interactive states in design system',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state with spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button takes full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    startIcon: {
      control: { type: 'object' },
      description: 'Icon to display before text (maps to Left Icon property)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endIcon: {
      control: { type: 'object' },
      description: 'Icon to display after text (maps to Action property when showing dropdown)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Button text content (maps to Label property in Figma)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variants
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

// With Icons
export const WithStartIcon: Story = {
  args: {
    children: 'Add Item',
    startIcon: <PlusIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Continue',
    endIcon: <ArrowRightIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Action',
    startIcon: <PlusIcon />,
    endIcon: <ArrowRightIcon />,
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary (Accent)</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost (Tertiary)</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button type variants from the MindSet Design System. Primary and Secondary (Accent) map directly to Figma variants, while Ghost represents the Tertiary variant.',
      },
    },
  },
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The three main button sizes: Small (~32px), Medium (~40px), and Large (~48px). The design system also includes XSmall (~24px) for compact UIs.',
      },
    },
  },
};

// Design System: All States
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Primary Button States</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Secondary (Accent) Button States</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Ghost (Tertiary) Button States</h4>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="ghost">Default</Button>
          <Button variant="ghost" disabled>Disabled</Button>
          <Button variant="ghost" loading>Loading</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The MindSet Design System defines 5 states for buttons: Default, Hover, Active, Focus, and Disabled. Hover, Active, and Focus are handled automatically via CSS pseudo-classes.',
      },
    },
  },
};

// Design System: Type × Size Matrix
export const DesignSystemMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Primary Buttons - All Sizes</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Secondary (Accent) - All Sizes</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="medium">Medium</Button>
          <Button variant="secondary" size="large">Large</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Ghost (Tertiary) - All Sizes</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="ghost" size="small">Small</Button>
          <Button variant="ghost" size="medium">Medium</Button>
          <Button variant="ghost" size="large">Large</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The complete Type × Size matrix showing all combinations. The Figma component set has 80 total variants (4 types × 4 sizes × 5 states).',
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    children: 'Playground Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to explore all button properties and combinations. Adjust the controls below to see different variants.',
      },
    },
  },
};
