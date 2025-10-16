import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Oeabo4ON.js";import"./preload-helper-D9Z9MdNV.js";const t=({children:D,variant:I="primary",size:L="medium",disabled:j=!1,loading:a=!1,fullWidth:W=!1,startIcon:T,endIcon:z,onClick:M,type:k="button",className:C="",...N})=>{const P=`btn--${I}`,R=`btn--${L}`,_=["btn",P,R,j?"btn--disabled":"",a?"btn--loading":"",W?"btn--full-width":"",C].filter(Boolean).join(" ");return e.jsxs("button",{type:k,className:_,disabled:j||a,onClick:M,...N,children:[a&&e.jsx("span",{className:"btn__spinner","aria-hidden":"true",children:e.jsx("svg",{className:"btn__spinner-icon",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{className:"btn__spinner-circle",cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})})}),T&&!a&&e.jsx("span",{className:"btn__icon btn__icon--start","aria-hidden":"true",children:T}),e.jsx("span",{className:"btn__content",children:D}),z&&!a&&e.jsx("span",{className:"btn__icon btn__icon--end","aria-hidden":"true",children:z})]})};t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the button"},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'accent' | 'tertiary' | 'text' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'text'"},{name:"literal",value:"'danger'"}]},description:`The variant of the button
- primary: Dark background (inverted)
- accent: Blue background (secondary)
- tertiary: Transparent with border (ghost)
- text: No background or border
- danger: Red for destructive actions`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the button",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the button is in loading state",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the button takes full width",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the text"},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display after the text"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name",defaultValue:{value:"''",computed:!1}}}};const w=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),A=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12,5 19,12 12,19"})]}),U={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`# Button Component

**From MindSet Design System**
**Figma Node ID:** \`90:1131\`
**Total Variants:** 80

The primary button component with support for 4 types, 4 sizes, and 5 states.

## Design System Properties

### Type (5 options)
- **Primary** - Dark/inverted background for main CTAs (maps to Figma "Primary")
- **Accent** - Blue background for secondary actions (maps to Figma "Accent (Secondary)")
- **Tertiary** - Ghost style with border (maps to Figma "Ghost (Tertiary)")
- **Text** - Minimal text-only button (maps to Figma "Text")
- **Danger** - Red for destructive actions

### Size (4 options)
- **XSmall** - Extra small for compact UIs (24px height)
- **Small** - Small buttons for dense layouts (32px height)
- **Medium** - Default size for most use cases (40px height)
- **Large** - Large buttons for emphasis (48px height)

### States
All buttons support: Default, Hover, Active, Focus, and Disabled states

### Features
- Configurable left and right icons
- Action/dropdown indicator support
- Loading state
- Full width option
- Accessible keyboard navigation

See [MINDSET_DESIGN_SYSTEM.md](../../../MINDSET_DESIGN_SYSTEM.md) for complete documentation.`}}},argTypes:{variant:{control:{type:"select"},options:["primary","accent","tertiary","text","danger"],description:"The visual style variant",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["xsmall","small","medium","large"],description:"Button size from Figma design system",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},disabled:{control:{type:"boolean"},description:"Disabled state - one of 5 interactive states in design system",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:{type:"boolean"},description:"Whether the button takes full width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},startIcon:{control:{type:"object"},description:"Icon to display before text (maps to Left Icon property)",table:{type:{summary:"ReactNode"}}},endIcon:{control:{type:"object"},description:"Icon to display after text (maps to Action property when showing dropdown)",table:{type:{summary:"ReactNode"}}},children:{control:{type:"text"},description:"Button text content (maps to Label property in Figma)",table:{type:{summary:"ReactNode"}}}},tags:["autodocs"]},r={args:{children:"Button"}},n={args:{children:"Primary Button",variant:"primary"},parameters:{docs:{description:{story:"Primary button with dark/inverted background for main CTAs."}}}},s={args:{children:"Accent Button",variant:"accent"},parameters:{docs:{description:{story:"Accent button with blue background for secondary actions."}}}},i={args:{children:"Tertiary Button",variant:"tertiary"},parameters:{docs:{description:{story:"Tertiary button with transparent background and border."}}}},o={args:{children:"Text Button",variant:"text"},parameters:{docs:{description:{story:"Text-only button with no background or border."}}}},l={args:{children:"Danger Button",variant:"danger"}},d={args:{children:"Small Button",size:"small"},tags:["!dev"]},c={args:{children:"Medium Button",size:"medium"},tags:["!dev"]},m={args:{children:"Large Button",size:"large"},tags:["!dev"]},u={args:{children:"Disabled Button",disabled:!0},tags:["!dev"]},p={args:{children:"Loading Button",loading:!0},tags:["!dev"]},y={args:{children:"Add Item",startIcon:e.jsx(w,{})},tags:["!dev"]},g={args:{children:"Continue",endIcon:e.jsx(A,{})},tags:["!dev"]},h={args:{children:"Action",startIcon:e.jsx(w,{}),endIcon:e.jsx(A,{})},tags:["!dev"]},v={args:{children:"Full Width Button",fullWidth:!0},parameters:{layout:"padded"},tags:["!dev"]},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"accent",children:"Accent"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"text",children:"Text"}),e.jsx(t,{variant:"danger",children:"Danger"})]}),parameters:{docs:{description:{story:"All button type variants from the MindSet Design System. Primary and Secondary (Accent) map directly to Figma variants, while Ghost represents the Tertiary variant."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"The three main button sizes: Small (~32px), Medium (~40px), and Large (~48px). The design system also includes XSmall (~24px) for compact UIs."}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Primary Button States"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Default"}),e.jsx(t,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"primary",loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Accent Button States"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"accent",children:"Default"}),e.jsx(t,{variant:"accent",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"accent",loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Tertiary Button States"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"tertiary",children:"Default"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"tertiary",loading:!0,children:"Loading"})]})]})]}),parameters:{docs:{description:{story:"The MindSet Design System defines 5 states for buttons: Default, Hover, Active, Focus, and Disabled. Hover, Active, and Focus are handled automatically via CSS pseudo-classes."}}}},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Primary Buttons - All Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"small",children:"Small"}),e.jsx(t,{variant:"primary",size:"medium",children:"Medium"}),e.jsx(t,{variant:"primary",size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Accent - All Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"accent",size:"xsmall",children:"XSmall"}),e.jsx(t,{variant:"accent",size:"small",children:"Small"}),e.jsx(t,{variant:"accent",size:"medium",children:"Medium"}),e.jsx(t,{variant:"accent",size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Tertiary - All Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"tertiary",size:"xsmall",children:"XSmall"}),e.jsx(t,{variant:"tertiary",size:"small",children:"Small"}),e.jsx(t,{variant:"tertiary",size:"medium",children:"Medium"}),e.jsx(t,{variant:"tertiary",size:"large",children:"Large"})]})]})]}),parameters:{docs:{description:{story:"The complete Type × Size matrix showing all combinations. The Figma component set has 80 total variants (4 types × 4 sizes × 5 states)."}}}},S={args:{children:"Playground Button",variant:"primary",size:"medium",disabled:!1,loading:!1,fullWidth:!1},parameters:{docs:{description:{story:"Interactive playground to explore all button properties and combinations. Adjust the controls below to see different variants."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button with dark/inverted background for main CTAs.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Accent Button',
    variant: 'accent'
  },
  parameters: {
    docs: {
      description: {
        story: 'Accent button with blue background for secondary actions.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button with transparent background and border.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Text Button',
    variant: 'text'
  },
  parameters: {
    docs: {
      description: {
        story: 'Text-only button with no background or border.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    variant: 'danger'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'small'
  },
  tags: ['!dev']
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    size: 'medium'
  },
  tags: ['!dev']
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'large'
  },
  tags: ['!dev']
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  },
  tags: ['!dev']
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    loading: true
  },
  tags: ['!dev']
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Add Item',
    startIcon: <PlusIcon />
  },
  tags: ['!dev']
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Continue',
    endIcon: <ArrowRightIcon />
  },
  tags: ['!dev']
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Action',
    startIcon: <PlusIcon />,
    endIcon: <ArrowRightIcon />
  },
  tags: ['!dev']
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  },
  tags: ['!dev']
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="text">Text</Button>
      <Button variant="danger">Danger</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button type variants from the MindSet Design System. Primary and Secondary (Accent) map directly to Figma variants, while Ghost represents the Tertiary variant.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The three main button sizes: Small (~32px), Medium (~40px), and Large (~48px). The design system also includes XSmall (~24px) for compact UIs.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Primary Button States</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Accent Button States</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <Button variant="accent">Default</Button>
          <Button variant="accent" disabled>Disabled</Button>
          <Button variant="accent" loading>Loading</Button>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Tertiary Button States</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          <Button variant="tertiary">Default</Button>
          <Button variant="tertiary" disabled>Disabled</Button>
          <Button variant="tertiary" loading>Loading</Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The MindSet Design System defines 5 states for buttons: Default, Hover, Active, Focus, and Disabled. Hover, Active, and Focus are handled automatically via CSS pseudo-classes.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Primary Buttons - All Sizes</h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Accent - All Sizes</h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button variant="accent" size="xsmall">XSmall</Button>
          <Button variant="accent" size="small">Small</Button>
          <Button variant="accent" size="medium">Medium</Button>
          <Button variant="accent" size="large">Large</Button>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Tertiary - All Sizes</h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button variant="tertiary" size="xsmall">XSmall</Button>
          <Button variant="tertiary" size="small">Small</Button>
          <Button variant="tertiary" size="medium">Medium</Button>
          <Button variant="tertiary" size="large">Large</Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The complete Type × Size matrix showing all combinations. The Figma component set has 80 total variants (4 types × 4 sizes × 5 states).'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Playground Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to explore all button properties and combinations. Adjust the controls below to see different variants.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const Y=["Default","Primary","Accent","Tertiary","Text","Danger","Small","Medium","Large","Disabled","Loading","WithStartIcon","WithEndIcon","WithBothIcons","FullWidth","AllVariants","AllSizes","AllStates","DesignSystemMatrix","Playground"];export{s as Accent,f as AllSizes,b as AllStates,x as AllVariants,l as Danger,r as Default,B as DesignSystemMatrix,u as Disabled,v as FullWidth,m as Large,p as Loading,c as Medium,S as Playground,n as Primary,d as Small,i as Tertiary,o as Text,h as WithBothIcons,g as WithEndIcon,y as WithStartIcon,Y as __namedExportsOrder,U as default};
