# MindSet Design System - Button Components

This document provides comprehensive documentation for the button components from the MindSet Design System as defined in Figma.

**Source:** [MindSet Design System - Figma](https://www.figma.com/design/XVdVpzEXk8FK4GaXgT1Gi8/%E2%9D%96-MindSet-Design-System)

## Overview

The MindSet Design System includes 3 button component sets with a total of 140 variants:

1. **Button** - 80 variants
2. **IconButton** - 48 variants
3. **ToggleButton** - 12 variants

---

## 1. Button Component

**Figma Node ID:** `90:1131`
**Total Variants:** 80

### Properties

#### Type (4 options)
- **Primary** - Main call-to-action buttons
- **Accent (Secondary)** - Secondary actions
- **Ghost (Tertiary)** - Tertiary actions with minimal styling
- **Text** - Text-only buttons for subtle actions

#### Size (4 options)
- **XSmall** - Extra small for compact UIs
- **Small** - Small buttons for dense layouts
- **Medium** - Default size for most use cases
- **Large** - Large buttons for emphasis

#### State (5 options)
- **Default** - Normal resting state
- **Hover** - Mouse hover state
- **Active** - Pressed/clicked state
- **Focus** - Keyboard focus state
- **Disabled** - Inactive state

#### Additional Properties
- **Label** (text) - Button text content (default: "Button")
- **Left Icon** (boolean) - Show/hide left icon (default: true)
- **Action** (boolean) - Show action/dropdown indicator (default: false)
- **Icon Swaps** - Instance swap properties for XS, S, and M size icons

### Variant Matrix

| Type | Sizes | States | Total |
|------|-------|--------|-------|
| Primary | 4 (XS, S, M, L) | 5 | 20 |
| Accent (Secondary) | 4 (XS, S, M, L) | 5 | 20 |
| Ghost (Tertiary) | 4 (XS, S, M, L) | 5 | 20 |
| Text | 4 (XS, S, M, L) | 5 | 20 |
| **Total** | | | **80** |

### Key Variants by Node ID

#### Primary Buttons
- `90:1128` - Type=Primary, Size=Small, State=Default
- `4187:37342` - Type=Primary, Size=XSmall, State=Default
- `90:1129` - Type=Primary, Size=Medium, State=Default
- `90:1126` - Type=Primary, Size=Large, State=Default
- `801:9044` - Type=Primary, Size=Small, State=Focus
- `801:9027` - Type=Primary, Size=Small, State=Active
- `206:22144` - Type=Primary, Size=Small, State=Hover
- `254:3301` - Type=Primary, Size=Small, State=Disabled

#### Accent (Secondary) Buttons
- `90:1130` - Type=Accent (Secondary), Size=Small, State=Default
- `90:1125` - Type=Accent (Secondary), Size=Medium, State=Default
- `90:1127` - Type=Accent (Secondary), Size=Large, State=Default

#### Ghost (Tertiary) Buttons
- `90:1165` - Type=Ghost (Tertiary), Size=Small, State=Default
- `90:1169` - Type=Ghost (Tertiary), Size=Medium, State=Default
- `90:1173` - Type=Ghost (Tertiary), Size=Large, State=Default

#### Text Buttons
- `90:1231` - Type=Text, Size=Small, State=Default
- `90:1235` - Type=Text, Size=Medium, State=Default
- `90:1239` - Type=Text, Size=Large, State=Default

---

## 2. IconButton Component

**Figma Node ID:** `90:2972`
**Total Variants:** 48

### Properties

#### Type (4 options)
- **Primary** - Main icon actions
- **Accent (secondary)** - Secondary icon actions
- **Ghost (Tertiary)** - Subtle icon buttons
- **Text** - Text-style icon buttons

#### Size (2 options)
- **S** - Small icon button
- **XS** - Extra small icon button

#### State (3 options)
- **Default** - Normal state
- **Hover** - Mouse hover state
- **Disabled** - Inactive state

#### Circle (2 options)
- **No** - Square/rectangular shape
- **Yes** - Circular shape

#### Additional Properties
- **SwapXS** - Icon swap for XS size
- **SwapS** - Icon swap for S size

### Variant Matrix

| Type | Sizes | States | Shapes | Total |
|------|-------|--------|--------|-------|
| Primary | 2 (S, XS) | 3 | 2 (Square, Circle) | 12 |
| Accent (secondary) | 2 (S, XS) | 3 | 2 (Square, Circle) | 12 |
| Ghost (Tertiary) | 2 (S, XS) | 3 | 2 (Square, Circle) | 12 |
| Text | 2 (S, XS) | 3 | 2 (Square, Circle) | 12 |
| **Total** | | | | **48** |

### Key Variants by Node ID

#### Square Icon Buttons
- `90:2973` - Type=Primary, State=Default, Circle=No, Size=S
- `90:3213` - Type=Primary, State=Default, Circle=No, Size=XS
- `90:2979` - Type=Accent (secondary), State=Default, Circle=No, Size=S
- `90:2991` - Type=Ghost (Tertiary), State=Default, Circle=No, Size=S
- `90:2985` - Type=Text, State=Default, Circle=No, Size=S

#### Circular Icon Buttons
- `93:4868` - Type=Primary, State=Default, Circle=Yes, Size=S
- `93:4870` - Type=Primary, State=Default, Circle=Yes, Size=XS
- `93:4872` - Type=Accent (secondary), State=Default, Circle=Yes, Size=S
- `93:4880` - Type=Ghost (Tertiary), State=Default, Circle=Yes, Size=S
- `93:4876` - Type=Text, State=Default, Circle=Yes, Size=S

---

## 3. ToggleButton Component

**Figma Node ID:** `454:8432`
**Total Variants:** 12

### Properties

#### Type (2 options)
- **Default** - Standard toggle button with text
- **IconOnly (Toolbar)** - Icon-only toggle for toolbars

#### Size (3 options)
- **L** - Large toggle button
- **S** - Small toggle button
- **XS** - Extra small toggle button

#### Single Button (2 options)
- **No** - Part of a button group
- **Yes** - Standalone toggle button

### Variant Matrix

| Type | Sizes | Single/Group | Total |
|------|-------|--------------|-------|
| Default | 3 (L, S, XS) | 2 (Group, Single) | 6 |
| IconOnly (Toolbar) | 3 (L, S, XS) | 2 (Group, Single) | 6 |
| **Total** | | | **12** |

### Key Variants by Node ID

#### Default Toggle Buttons
- `454:8433` - Type=Default, Size=L, Single Button=No (in group)
- `474:7724` - Type=Default, Size=S, Single Button=No (in group)
- `4117:20690` - Type=Default, Size=XS, Single Button=No (in group)
- `481:14315` - Type=Default, Size=L, Single Button=Yes (standalone)
- `481:14333` - Type=Default, Size=S, Single Button=Yes (standalone)
- `4117:20704` - Type=Default, Size=XS, Single Button=Yes (standalone)

#### IconOnly (Toolbar) Toggle Buttons
- `474:7715` - Type=IconOnly (Toolbar), Size=L, Single Button=No (in group)
- `454:8442` - Type=IconOnly (Toolbar), Size=S, Single Button=No (in group)
- `4117:20697` - Type=IconOnly (Toolbar), Size=XS, Single Button=No (in group)
- `481:14324` - Type=IconOnly (Toolbar), Size=L, Single Button=Yes (standalone)
- `481:14340` - Type=IconOnly (Toolbar), Size=S, Single Button=Yes (standalone)
- `4117:20706` - Type=IconOnly (Toolbar), Size=XS, Single Button=Yes (standalone)

---

## Design Tokens

All button components reference the following design system tokens:

### Text Styles (35 total)
Referenced text styles include:
- **UI-Label/XS, S, M** (Regular & Strong)
- **Body/XS, S, M, L** (Regular & Strong)
- **Heading/H1-H6**

### Effect Styles (6 total)
- **Shadows/Small, Medium, Large**
- **(default):active** - Active state effect
- **():focus** - Focus state effect
- **(outline):active** - Outline active state effect
- **contextmenu** - Context menu shadow
- **testshadow** - Test shadow effect

### Fill Styles (1 total)
- **fade2** - Gradient fill

---

## Implementation Guidelines

### Size Mapping
When implementing these components, use the following size mappings:

| Figma Size | CSS/Component Size | Typical Height |
|------------|-------------------|----------------|
| XSmall (XS) | xs | ~24px |
| Small (S) | sm | ~32px |
| Medium (M) | md | ~40px |
| Large (L) | lg | ~48px |

### Type/Variant Mapping
| Figma Type | Implementation Name |
|------------|-------------------|
| Primary | primary |
| Accent (Secondary) | secondary / accent |
| Ghost (Tertiary) | ghost / tertiary |
| Text | text / link |

### State Implementation
All states should be implemented using CSS pseudo-classes or state props:
- **Default** - Base styles
- **Hover** - `:hover` pseudo-class
- **Active** - `:active` pseudo-class or pressed state
- **Focus** - `:focus` and `:focus-visible` pseudo-classes
- **Disabled** - `disabled` attribute or `aria-disabled`

---

## Component Usage Examples

### Button Component
```tsx
// Primary button, medium size (default)
<Button type="primary" size="medium">
  Click Me
</Button>

// With left icon
<Button type="primary" size="large" leftIcon={<Icon />}>
  Add Item
</Button>

// With action indicator (dropdown)
<Button type="secondary" action={true}>
  More Actions
</Button>

// Disabled state
<Button type="primary" disabled={true}>
  Disabled Button
</Button>
```

### IconButton Component
```tsx
// Square icon button
<IconButton type="primary" size="s" circle={false}>
  <Icon />
</IconButton>

// Circular icon button
<IconButton type="ghost" size="xs" circle={true}>
  <Icon />
</IconButton>
```

### ToggleButton Component
```tsx
// Single toggle button
<ToggleButton type="default" size="l" singleButton={true}>
  Toggle
</ToggleButton>

// Toggle button group (toolbar)
<ToggleButtonGroup>
  <ToggleButton type="iconOnly" size="s" singleButton={false}>
    <Icon1 />
  </ToggleButton>
  <ToggleButton type="iconOnly" size="s" singleButton={false}>
    <Icon2 />
  </ToggleButton>
  <ToggleButton type="iconOnly" size="s" singleButton={false}>
    <Icon3 />
  </ToggleButton>
</ToggleButtonGroup>
```

---

## Summary Statistics

| Component | Variants | Properties | States |
|-----------|----------|------------|--------|
| Button | 80 | Type (4), Size (4), State (5), Icon, Action | 5 |
| IconButton | 48 | Type (4), Size (2), State (3), Circle (2) | 3 |
| ToggleButton | 12 | Type (2), Size (3), Single/Group (2) | N/A |
| **Total** | **140** | | |

---

## Notes

- All components support icon swapping for customization
- The design system uses a consistent color and spacing system
- Focus states include visual indicators for accessibility
- Disabled states reduce opacity and prevent interaction
- All measurements and styles should reference the design tokens

---

**Last Updated:** Based on Figma file version from 2025-10-15
**Design System File:** [MindSet Design System](https://www.figma.com/design/XVdVpzEXk8FK4GaXgT1Gi8)
