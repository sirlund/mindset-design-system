import type { Meta, StoryObj } from '@storybook/react';
import './tokens.css';

const meta: Meta = {
  title: 'Design Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Helper components for displaying tokens
const TokenGrid = ({ children, columns = 4 }: { children: React.ReactNode; columns?: number }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: 'var(--gap-m)',
    marginBottom: 'var(--gap-xl)',
  }}>
    {children}
  </div>
);

const TokenCard = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: 'var(--gap-m)',
    border: '1px solid var(--color-stroke-subtle)',
    borderRadius: 'var(--radius-m)',
    backgroundColor: 'var(--color-surface-elevated)',
  }}>
    {children}
  </div>
);

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <TokenCard>
    <div style={{
      width: '100%',
      height: '80px',
      backgroundColor: color,
      borderRadius: 'var(--radius-s)',
      marginBottom: 'var(--gap-s)',
      border: '1px solid var(--color-stroke-subtle)',
    }} />
    <div style={{
      fontSize: 'var(--font-size-s)',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--color-content-secondary)',
    }}>
      {name}
    </div>
  </TokenCard>
);

const SpacingBox = ({ size, name }: { size: string; name: string }) => (
  <TokenCard>
    <div style={{
      width: size,
      height: size,
      backgroundColor: 'var(--color-accent-default)',
      marginBottom: 'var(--gap-s)',
      borderRadius: 'var(--radius-xs)',
    }} />
    <div style={{
      fontSize: 'var(--font-size-s)',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--color-content-secondary)',
    }}>
      {name}
    </div>
    <div style={{
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-content-disabled)',
    }}>
      {size}
    </div>
  </TokenCard>
);

const RadiusBox = ({ radius, name }: { radius: string; name: string }) => (
  <TokenCard>
    <div style={{
      width: '80px',
      height: '80px',
      backgroundColor: 'var(--color-accent-default)',
      borderRadius: radius,
      marginBottom: 'var(--gap-s)',
    }} />
    <div style={{
      fontSize: 'var(--font-size-s)',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--color-content-secondary)',
    }}>
      {name}
    </div>
    <div style={{
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-content-disabled)',
    }}>
      {radius}
    </div>
  </TokenCard>
);

const TypographyExample = ({ size, name }: { size: string; name: string }) => (
  <TokenCard>
    <div style={{
      fontSize: size,
      fontFamily: 'var(--font-family-default)',
      marginBottom: 'var(--gap-xs)',
      color: 'var(--color-content-heading)',
    }}>
      The quick brown fox jumps
    </div>
    <div style={{
      fontSize: 'var(--font-size-s)',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--color-content-secondary)',
    }}>
      {name}
    </div>
    <div style={{
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-content-disabled)',
    }}>
      {size}
    </div>
  </TokenCard>
);

// Stories
export const Colors: StoryObj = {
  render: () => (
    <div style={{ padding: 'var(--gap-xl)' }}>
      <h2 style={{ marginBottom: 'var(--gap-l)', color: 'var(--color-content-heading)' }}>
        System Colors
      </h2>
      
      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Accent Colors
      </h3>
      <TokenGrid columns={5}>
        <ColorSwatch color="var(--color-accent-lighter)" name="accent-lighter" />
        <ColorSwatch color="var(--color-accent-light)" name="accent-light" />
        <ColorSwatch color="var(--color-accent-default)" name="accent-default" />
        <ColorSwatch color="var(--color-accent-subtle)" name="accent-subtle" />
        <ColorSwatch color="var(--color-accent-strong)" name="accent-strong" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Primary Colors
      </h3>
      <TokenGrid columns={4}>
        <ColorSwatch color="var(--color-primary-light)" name="primary-light" />
        <ColorSwatch color="var(--color-primary-subtle)" name="primary-subtle" />
        <ColorSwatch color="var(--color-primary-default)" name="primary-default" />
        <ColorSwatch color="var(--color-primary-inverted)" name="primary-inverted" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Surface Colors
      </h3>
      <TokenGrid columns={4}>
        <ColorSwatch color="var(--color-surface-background)" name="surface-background" />
        <ColorSwatch color="var(--color-surface-layer)" name="surface-layer" />
        <ColorSwatch color="var(--color-surface-layer-strong)" name="surface-layer-strong" />
        <ColorSwatch color="var(--color-surface-elevated)" name="surface-elevated" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Feedback Colors
      </h3>
      <TokenGrid columns={3}>
        <ColorSwatch color="var(--color-feedback-negative-light)" name="negative-light" />
        <ColorSwatch color="var(--color-feedback-negative-default)" name="negative-default" />
        <ColorSwatch color="var(--color-feedback-negative-strong)" name="negative-strong" />
      </TokenGrid>
      <TokenGrid columns={3}>
        <ColorSwatch color="var(--color-feedback-positive-light)" name="positive-light" />
        <ColorSwatch color="var(--color-feedback-positive-default)" name="positive-default" />
        <ColorSwatch color="var(--color-feedback-positive-strong)" name="positive-strong" />
      </TokenGrid>
      <TokenGrid columns={3}>
        <ColorSwatch color="var(--color-feedback-warning-light)" name="warning-light" />
        <ColorSwatch color="var(--color-feedback-warning-default)" name="warning-default" />
        <ColorSwatch color="var(--color-feedback-warning-strong)" name="warning-strong" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Grey Scale
      </h3>
      <TokenGrid columns={7}>
        <ColorSwatch color="var(--color-grey-100)" name="grey-100" />
        <ColorSwatch color="var(--color-grey-200)" name="grey-200" />
        <ColorSwatch color="var(--color-grey-300)" name="grey-300" />
        <ColorSwatch color="var(--color-grey-400)" name="grey-400" />
        <ColorSwatch color="var(--color-grey-500)" name="grey-500" />
        <ColorSwatch color="var(--color-grey-600)" name="grey-600" />
        <ColorSwatch color="var(--color-grey-700)" name="grey-700" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Blue Scale
      </h3>
      <TokenGrid columns={7}>
        <ColorSwatch color="var(--color-blue-100)" name="blue-100" />
        <ColorSwatch color="var(--color-blue-200)" name="blue-200" />
        <ColorSwatch color="var(--color-blue-300)" name="blue-300" />
        <ColorSwatch color="var(--color-blue-400)" name="blue-400" />
        <ColorSwatch color="var(--color-blue-500)" name="blue-500" />
        <ColorSwatch color="var(--color-blue-600)" name="blue-600" />
        <ColorSwatch color="var(--color-blue-700)" name="blue-700" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Build System Colors
      </h3>
      <TokenGrid columns={5}>
        <ColorSwatch color="var(--color-build-action)" name="build-action" />
        <ColorSwatch color="var(--color-build-data)" name="build-data" />
        <ColorSwatch color="var(--color-build-function)" name="build-function" />
        <ColorSwatch color="var(--color-build-input)" name="build-input" />
        <ColorSwatch color="var(--color-build-workflow)" name="build-workflow" />
      </TokenGrid>
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div style={{ padding: 'var(--gap-xl)' }}>
      <h2 style={{ marginBottom: 'var(--gap-l)', color: 'var(--color-content-heading)' }}>
        Spacing / Gap
      </h2>
      <TokenGrid columns={7}>
        <SpacingBox size="var(--gap-3xs)" name="gap-3xs" />
        <SpacingBox size="var(--gap-2xs)" name="gap-2xs" />
        <SpacingBox size="var(--gap-xs)" name="gap-xs" />
        <SpacingBox size="var(--gap-s)" name="gap-s" />
        <SpacingBox size="var(--gap-m)" name="gap-m" />
        <SpacingBox size="var(--gap-l)" name="gap-l" />
        <SpacingBox size="var(--gap-xl)" name="gap-xl" />
      </TokenGrid>
      <TokenGrid columns={7}>
        <SpacingBox size="var(--gap-2xl)" name="gap-2xl" />
        <SpacingBox size="var(--gap-3xl)" name="gap-3xl" />
        <SpacingBox size="var(--gap-4xl)" name="gap-4xl" />
        <SpacingBox size="var(--gap-5xl)" name="gap-5xl" />
        <SpacingBox size="var(--gap-6xl)" name="gap-6xl" />
        <SpacingBox size="var(--gap-7xl)" name="gap-7xl" />
      </TokenGrid>
    </div>
  ),
};

export const BorderRadius: StoryObj = {
  render: () => (
    <div style={{ padding: 'var(--gap-xl)' }}>
      <h2 style={{ marginBottom: 'var(--gap-l)', color: 'var(--color-content-heading)' }}>
        Border Radius
      </h2>
      <TokenGrid columns={7}>
        <RadiusBox radius="var(--radius-none)" name="radius-none" />
        <RadiusBox radius="var(--radius-xs)" name="radius-xs" />
        <RadiusBox radius="var(--radius-s)" name="radius-s" />
        <RadiusBox radius="var(--radius-m)" name="radius-m" />
        <RadiusBox radius="var(--radius-l)" name="radius-l" />
        <RadiusBox radius="var(--radius-xl)" name="radius-xl" />
        <RadiusBox radius="var(--radius-rounded)" name="radius-rounded" />
      </TokenGrid>
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div style={{ padding: 'var(--gap-xl)' }}>
      <h2 style={{ marginBottom: 'var(--gap-l)', color: 'var(--color-content-heading)' }}>
        Typography
      </h2>
      
      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Font Sizes
      </h3>
      <TokenGrid columns={5}>
        <TypographyExample size="var(--font-size-xs)" name="font-size-xs" />
        <TypographyExample size="var(--font-size-s)" name="font-size-s" />
        <TypographyExample size="var(--font-size-m)" name="font-size-m" />
        <TypographyExample size="var(--font-size-l)" name="font-size-l" />
        <TypographyExample size="var(--font-size-xl)" name="font-size-xl" />
      </TokenGrid>

      <h3 style={{ marginTop: 'var(--gap-xl)', marginBottom: 'var(--gap-m)', color: 'var(--color-content-primary)' }}>
        Font Families
      </h3>
      <TokenGrid columns={2}>
        <TokenCard>
          <div style={{
            fontSize: 'var(--font-size-l)',
            fontFamily: 'var(--font-family-default)',
            marginBottom: 'var(--gap-xs)',
            color: 'var(--color-content-heading)',
          }}>
            The quick brown fox jumps over the lazy dog
          </div>
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            font-family-default
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            Inter
          </div>
        </TokenCard>
        <TokenCard>
          <div style={{
            fontSize: 'var(--font-size-l)',
            fontFamily: 'var(--font-family-mono)',
            marginBottom: 'var(--gap-xs)',
            color: 'var(--color-content-heading)',
          }}>
            The quick brown fox jumps over the lazy dog
          </div>
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            font-family-mono
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            Fira Code
          </div>
        </TokenCard>
      </TokenGrid>
    </div>
  ),
};

export const Stroke: StoryObj = {
  render: () => (
    <div style={{ padding: 'var(--gap-xl)' }}>
      <h2 style={{ marginBottom: 'var(--gap-l)', color: 'var(--color-content-heading)' }}>
        Stroke Width
      </h2>
      <TokenGrid columns={5}>
        <TokenCard>
          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--color-accent-default)',
            marginBottom: 'var(--gap-s)',
          }} />
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            stroke-none
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            0px
          </div>
        </TokenCard>
        <TokenCard>
          <div style={{
            width: '100%',
            height: 'var(--stroke-thin)',
            backgroundColor: 'var(--color-accent-default)',
            marginBottom: 'var(--gap-s)',
          }} />
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            stroke-thin
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            1px
          </div>
        </TokenCard>
        <TokenCard>
          <div style={{
            width: '100%',
            height: 'var(--stroke-light)',
            backgroundColor: 'var(--color-accent-default)',
            marginBottom: 'var(--gap-s)',
          }} />
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            stroke-light
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            1.25px
          </div>
        </TokenCard>
        <TokenCard>
          <div style={{
            width: '100%',
            height: 'var(--stroke-medium)',
            backgroundColor: 'var(--color-accent-default)',
            marginBottom: 'var(--gap-s)',
          }} />
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            stroke-medium
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            1.5px
          </div>
        </TokenCard>
        <TokenCard>
          <div style={{
            width: '100%',
            height: 'var(--stroke-large)',
            backgroundColor: 'var(--color-accent-default)',
            marginBottom: 'var(--gap-s)',
          }} />
          <div style={{
            fontSize: 'var(--font-size-s)',
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--color-content-secondary)',
          }}>
            stroke-large
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-content-disabled)',
          }}>
            2px
          </div>
        </TokenCard>
      </TokenGrid>
    </div>
  ),
};
