import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// Simple ToggleButton component for documentation purposes
interface ToggleButtonProps {
  type?: 'default' | 'iconOnly';
  size?: 'l' | 's' | 'xs';
  singleButton?: boolean;
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  type = 'default',
  size = 'l',
  singleButton = false,
  selected = false,
  onChange,
  children,
}) => {
  const heights = { l: '48px', s: '40px', xs: '32px' };
  const paddings = { l: '16px', s: '12px', xs: '8px' };

  return (
    <button
      onClick={() => onChange?.(!selected)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: heights[size],
        padding: type === 'iconOnly' ? '0' : `0 ${paddings[size]}`,
        minWidth: type === 'iconOnly' ? heights[size] : 'auto',
        backgroundColor: selected ? '#5747ea' : '#f5f5f5',
        color: selected ? '#fff' : '#333',
        border: '1px solid',
        borderColor: selected ? '#5747ea' : '#e0e0e0',
        borderRadius: singleButton ? '8px' : '0',
        borderLeftWidth: !singleButton ? '0' : '1px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontWeight: 500,
        fontSize: size === 'xs' ? '12px' : size === 's' ? '14px' : '16px',
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.backgroundColor = '#ebebeb';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }
      }}
    >
      {children}
    </button>
  );
};

// Toggle Button Group wrapper
interface ToggleButtonGroupProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ children, style }) => (
  <div
    style={{
      display: 'inline-flex',
      borderRadius: '8px',
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
  </div>
);

// Demo icons
const BoldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
  </svg>
);

const ItalicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="4" x2="10" y2="4"></line>
    <line x1="14" y1="20" x2="5" y2="20"></line>
    <line x1="15" y1="4" x2="9" y2="20"></line>
  </svg>
);

const UnderlineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
    <line x1="4" y1="21" x2="20" y2="21"></line>
  </svg>
);

const AlignLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="17" y1="10" x2="3" y2="10"></line>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="14" x2="3" y2="14"></line>
    <line x1="17" y1="18" x2="3" y2="18"></line>
  </svg>
);

const AlignCenterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="10" x2="6" y2="10"></line>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="14" x2="3" y2="14"></line>
    <line x1="18" y1="18" x2="6" y2="18"></line>
  </svg>
);

const AlignRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="21" y1="10" x2="7" y2="10"></line>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="14" x2="3" y2="14"></line>
    <line x1="21" y1="18" x2="7" y2="18"></line>
  </svg>
);

const meta: Meta<typeof ToggleButton> = {
  title: 'MindSet Design System/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `# ToggleButton Component

**From MindSet Design System**
**Figma Node ID:** \`454:8432\`
**Total Variants:** 12

Toggle button component for selection states, with support for both labeled and icon-only variants.

## Design System Properties

### Type (2 options)
- **Default** - Standard toggle button with text label
- **IconOnly (Toolbar)** - Icon-only toggle for toolbars and compact UIs

### Size (3 options)
- **L** - Large toggle button (~48px height)
- **S** - Small toggle button (~40px height)
- **XS** - Extra small toggle button (~32px height)

### Single Button (2 options)
- **No** - Part of a button group (connected buttons)
- **Yes** - Standalone toggle button (individual with full border radius)

### States
Toggle buttons have two primary states: Selected (active) and Unselected (inactive), with hover and focus states

### Common Use Cases
- Text formatting toolbars (Bold, Italic, Underline)
- Alignment controls (Left, Center, Right)
- View mode toggles (List, Grid, Table)
- Filter toggles in interfaces

**Variant Matrix:** 2 types × 3 sizes × 2 modes = 12 variants

See [MINDSET_DESIGN_SYSTEM.md](../../../MINDSET_DESIGN_SYSTEM.md) for complete documentation.`,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'iconOnly'],
      description: 'Toggle button type (with label or icon-only)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['l', 's', 'xs'],
      description: 'Toggle button size (L=48px, S=40px, XS=32px)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'l' },
      },
    },
    singleButton: {
      control: { type: 'boolean' },
      description: 'Whether this is a standalone button (true) or part of a group (false)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Whether the button is in selected/active state',
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
    children: 'Toggle',
    selected: false,
    singleButton: true,
  },
};

// Single Toggle Buttons
export const SingleButtons: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Default Type - Standalone</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <ToggleButton type="default" size="l" singleButton={true} selected={selected} onChange={setSelected}>
              Subscribe
            </ToggleButton>
            <ToggleButton type="default" size="s" singleButton={true} selected={selected} onChange={setSelected}>
              Subscribe
            </ToggleButton>
            <ToggleButton type="default" size="xs" singleButton={true} selected={selected} onChange={setSelected}>
              Subscribe
            </ToggleButton>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>IconOnly Type - Standalone</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <ToggleButton type="iconOnly" size="l" singleButton={true} selected={selected} onChange={setSelected}>
              <BoldIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="s" singleButton={true} selected={selected} onChange={setSelected}>
              <BoldIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="xs" singleButton={true} selected={selected} onChange={setSelected}>
              <BoldIcon />
            </ToggleButton>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Standalone toggle buttons (Single Button=Yes) with full border radius. Available in both Default and IconOnly types across all sizes.',
      },
    },
  },
};

// Text Formatting Toolbar Example
export const TextFormattingToolbar: Story = {
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Large Size (L)</h4>
          <ToggleButtonGroup>
            <ToggleButton type="iconOnly" size="l" singleButton={false} selected={bold} onChange={setBold}>
              <BoldIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="l" singleButton={false} selected={italic} onChange={setItalic}>
              <ItalicIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="l" singleButton={false} selected={underline} onChange={setUnderline}>
              <UnderlineIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Small Size (S)</h4>
          <ToggleButtonGroup>
            <ToggleButton type="iconOnly" size="s" singleButton={false} selected={bold} onChange={setBold}>
              <BoldIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="s" singleButton={false} selected={italic} onChange={setItalic}>
              <ItalicIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="s" singleButton={false} selected={underline} onChange={setUnderline}>
              <UnderlineIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Extra Small Size (XS)</h4>
          <ToggleButtonGroup>
            <ToggleButton type="iconOnly" size="xs" singleButton={false} selected={bold} onChange={setBold}>
              <BoldIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="xs" singleButton={false} selected={italic} onChange={setItalic}>
              <ItalicIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="xs" singleButton={false} selected={underline} onChange={setUnderline}>
              <UnderlineIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic text formatting toolbar with Bold, Italic, and Underline toggles. IconOnly type in a button group (Single Button=No).',
      },
    },
  },
};

// Alignment Controls Example
export const AlignmentControls: Story = {
  render: () => {
    const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Text Alignment - Large</h4>
          <ToggleButtonGroup>
            <ToggleButton
              type="iconOnly"
              size="l"
              singleButton={false}
              selected={alignment === 'left'}
              onChange={() => setAlignment('left')}
            >
              <AlignLeftIcon />
            </ToggleButton>
            <ToggleButton
              type="iconOnly"
              size="l"
              singleButton={false}
              selected={alignment === 'center'}
              onChange={() => setAlignment('center')}
            >
              <AlignCenterIcon />
            </ToggleButton>
            <ToggleButton
              type="iconOnly"
              size="l"
              singleButton={false}
              selected={alignment === 'right'}
              onChange={() => setAlignment('right')}
            >
              <AlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Text Alignment - Small</h4>
          <ToggleButtonGroup>
            <ToggleButton
              type="iconOnly"
              size="s"
              singleButton={false}
              selected={alignment === 'left'}
              onChange={() => setAlignment('left')}
            >
              <AlignLeftIcon />
            </ToggleButton>
            <ToggleButton
              type="iconOnly"
              size="s"
              singleButton={false}
              selected={alignment === 'center'}
              onChange={() => setAlignment('center')}
            >
              <AlignCenterIcon />
            </ToggleButton>
            <ToggleButton
              type="iconOnly"
              size="s"
              singleButton={false}
              selected={alignment === 'right'}
              onChange={() => setAlignment('right')}
            >
              <AlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Mutually exclusive selection group for text alignment. Only one option can be selected at a time.',
      },
    },
  },
};

// Default Type with Labels
export const DefaultTypeWithLabels: Story = {
  render: () => {
    const [filter1, setFilter1] = useState(false);
    const [filter2, setFilter2] = useState(true);
    const [filter3, setFilter3] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Filter Group - Large</h4>
          <ToggleButtonGroup>
            <ToggleButton type="default" size="l" singleButton={false} selected={filter1} onChange={setFilter1}>
              Active
            </ToggleButton>
            <ToggleButton type="default" size="l" singleButton={false} selected={filter2} onChange={setFilter2}>
              Pending
            </ToggleButton>
            <ToggleButton type="default" size="l" singleButton={false} selected={filter3} onChange={setFilter3}>
              Archived
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Filter Group - Small</h4>
          <ToggleButtonGroup>
            <ToggleButton type="default" size="s" singleButton={false} selected={filter1} onChange={setFilter1}>
              Active
            </ToggleButton>
            <ToggleButton type="default" size="s" singleButton={false} selected={filter2} onChange={setFilter2}>
              Pending
            </ToggleButton>
            <ToggleButton type="default" size="s" singleButton={false} selected={filter3} onChange={setFilter3}>
              Archived
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <h4 style={{ marginBottom: '12px' }}>Filter Group - Extra Small</h4>
          <ToggleButtonGroup>
            <ToggleButton type="default" size="xs" singleButton={false} selected={filter1} onChange={setFilter1}>
              Active
            </ToggleButton>
            <ToggleButton type="default" size="xs" singleButton={false} selected={filter2} onChange={setFilter2}>
              Pending
            </ToggleButton>
            <ToggleButton type="default" size="xs" singleButton={false} selected={filter3} onChange={setFilter3}>
              Archived
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Default type toggle buttons with text labels. Useful for filters and multi-select options. Multiple buttons can be selected simultaneously.',
      },
    },
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <ToggleButton type="iconOnly" size="l" singleButton={true} selected={selected} onChange={setSelected}>
            <BoldIcon />
          </ToggleButton>
          <p style={{ fontSize: '12px', marginTop: '8px' }}>Large (L)<br/>48px</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ToggleButton type="iconOnly" size="s" singleButton={true} selected={selected} onChange={setSelected}>
            <BoldIcon />
          </ToggleButton>
          <p style={{ fontSize: '12px', marginTop: '8px' }}>Small (S)<br/>40px</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ToggleButton type="iconOnly" size="xs" singleButton={true} selected={selected} onChange={setSelected}>
            <BoldIcon />
          </ToggleButton>
          <p style={{ fontSize: '12px', marginTop: '8px' }}>Extra Small (XS)<br/>32px</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Size comparison showing all three available sizes: Large (48px), Small (40px), and Extra Small (32px).',
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selected || false);

    return (
      <ToggleButton {...args} selected={selected} onChange={setSelected}>
        {args.children}
      </ToggleButton>
    );
  },
  args: {
    type: 'default',
    size: 'l',
    singleButton: true,
    selected: false,
    children: 'Toggle Me',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to explore all ToggleButton properties. Use the controls below to experiment with different configurations.',
      },
    },
  },
};
