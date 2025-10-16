import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Simple IconButton component for documentation purposes
// In a real implementation, this would be a separate component file
interface IconButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
  size?: 's' | 'xs';
  circle?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  size = 's',
  circle = false,
  disabled = false,
  children,
  onClick,
}) => {
  const baseClass = 'icon-btn';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    circle ? `${baseClass}--circle` : '',
    disabled ? `${baseClass}--disabled` : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: variant === 'ghost' ? '1px solid #e0e0e0' : 'none',
        backgroundColor:
          disabled ? '#f0f0f0' :
          variant === 'primary' ? '#5747ea' :
          variant === 'secondary' ? '#00c48c' :
          variant === 'ghost' ? 'transparent' :
          'transparent',
        color:
          disabled ? '#999' :
          variant === 'text' ? '#5747ea' :
          variant === 'ghost' ? '#333' :
          '#fff',
        width: size === 's' ? '40px' : '32px',
        height: size === 's' ? '40px' : '32px',
        borderRadius: circle ? '50%' : '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        padding: 0,
      }}
    >
      {children}
    </button>
  );
};

// Demo icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'MindSet Design System/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `# IconButton Component

**From MindSet Design System**
**Figma Node ID:** \`90:2972\`
**Total Variants:** 48

Icon-only button component with support for 4 types, 2 sizes, 3 states, and 2 shapes (square/circle).

## Design System Properties

### Type (4 options)
- **Primary** - Main icon actions
- **Secondary** - Accent/secondary icon actions (maps to Figma "Accent (secondary)")
- **Ghost** - Subtle icon buttons (maps to Figma "Ghost (Tertiary)")
- **Text** - Text-style icon buttons

### Size (2 options)
- **S** - Small icon button (~40px)
- **XS** - Extra small icon button (~32px)

### Shape (2 options)
- **Circle=No** - Square/rectangular shape with rounded corners
- **Circle=Yes** - Circular shape

### States
All icon buttons support: Default, Hover, and Disabled states

### Features
- Icon swap capability for both sizes
- Square and circular variants
- Accessible and keyboard-navigable
- Supports all button types

**Variant Matrix:** 4 types × 2 sizes × 3 states × 2 shapes = 48 variants

See [MINDSET_DESIGN_SYSTEM.md](../../../MINDSET_DESIGN_SYSTEM.md) for complete documentation.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'text'],
      description: 'The visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'xs'],
      description: 'Icon button size (S=~40px, XS=~32px)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 's' },
      },
    },
    circle: {
      control: { type: 'boolean' },
      description: 'Whether the button is circular (true) or square (false)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    children: <SearchIcon />,
  },
};

// All Variants (Types)
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton variant="primary">
        <SearchIcon />
      </IconButton>
      <IconButton variant="secondary">
        <SearchIcon />
      </IconButton>
      <IconButton variant="ghost">
        <SearchIcon />
      </IconButton>
      <IconButton variant="text">
        <SearchIcon />
      </IconButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All 4 type variants: Primary, Secondary (Accent), Ghost (Tertiary), and Text.',
      },
    },
  },
};

// Square vs Circle
export const SquareVsCircle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Square Icon Buttons (Circle=No)</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <IconButton variant="primary" circle={false}>
            <SearchIcon />
          </IconButton>
          <IconButton variant="secondary" circle={false}>
            <EditIcon />
          </IconButton>
          <IconButton variant="ghost" circle={false}>
            <MenuIcon />
          </IconButton>
          <IconButton variant="text" circle={false}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Circular Icon Buttons (Circle=Yes)</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <IconButton variant="primary" circle={true}>
            <SearchIcon />
          </IconButton>
          <IconButton variant="secondary" circle={true}>
            <EditIcon />
          </IconButton>
          <IconButton variant="ghost" circle={true}>
            <MenuIcon />
          </IconButton>
          <IconButton variant="text" circle={true}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconButtons come in two shapes: Square (with rounded corners) and Circular. Both shapes support all types and sizes.',
      },
    },
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton variant="primary" size="s">
          <SearchIcon />
        </IconButton>
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Small (S)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton variant="primary" size="xs">
          <SearchIcon />
        </IconButton>
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Extra Small (XS)</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Two sizes available: S (~40px) and XS (~32px) for compact interfaces.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Primary IconButton States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="primary">
              <SearchIcon />
            </IconButton>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="primary" disabled>
              <SearchIcon />
            </IconButton>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>Disabled</p>
          </div>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Ghost IconButton States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="ghost">
              <SearchIcon />
            </IconButton>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <IconButton variant="ghost" disabled>
              <SearchIcon />
            </IconButton>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>Disabled</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconButtons support 3 states: Default, Hover (handled via CSS), and Disabled.',
      },
    },
  },
};

// Complete Matrix
export const CompleteMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Square IconButtons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', fontSize: '14px' }}>Size: S</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <IconButton variant="primary" size="s" circle={false}><SearchIcon /></IconButton>
              <IconButton variant="secondary" size="s" circle={false}><EditIcon /></IconButton>
              <IconButton variant="ghost" size="s" circle={false}><MenuIcon /></IconButton>
              <IconButton variant="text" size="s" circle={false}><CloseIcon /></IconButton>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontSize: '14px' }}>Size: XS</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <IconButton variant="primary" size="xs" circle={false}><SearchIcon /></IconButton>
              <IconButton variant="secondary" size="xs" circle={false}><EditIcon /></IconButton>
              <IconButton variant="ghost" size="xs" circle={false}><MenuIcon /></IconButton>
              <IconButton variant="text" size="xs" circle={false}><CloseIcon /></IconButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Circular IconButtons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h4 style={{ marginBottom: '8px', fontSize: '14px' }}>Size: S</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <IconButton variant="primary" size="s" circle={true}><SearchIcon /></IconButton>
              <IconButton variant="secondary" size="s" circle={true}><EditIcon /></IconButton>
              <IconButton variant="ghost" size="s" circle={true}><MenuIcon /></IconButton>
              <IconButton variant="text" size="s" circle={true}><CloseIcon /></IconButton>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px', fontSize: '14px' }}>Size: XS</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <IconButton variant="primary" size="xs" circle={true}><SearchIcon /></IconButton>
              <IconButton variant="secondary" size="xs" circle={true}><EditIcon /></IconButton>
              <IconButton variant="ghost" size="xs" circle={true}><MenuIcon /></IconButton>
              <IconButton variant="text" size="xs" circle={true}><CloseIcon /></IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all combinations: 4 types × 2 sizes × 2 shapes = 16 default state variants (48 total with all states).',
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 's',
    circle: false,
    disabled: false,
    children: <SearchIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to explore all IconButton properties. Note: Icon cannot be changed in controls.',
      },
    },
  },
};
