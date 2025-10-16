import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-Oeabo4ON.js";import"./preload-helper-D9Z9MdNV.js";const t=({type:n="default",size:l="l",singleButton:o=!1,selected:s=!1,onChange:r,children:a})=>{const j={l:"var(--scale-600)",s:"var(--scale-500)",xs:"var(--scale-400)"},b={l:"var(--gap-m)",s:"var(--gap-s)",xs:"var(--gap-xs)"},C={l:"var(--font-size-m)",s:"var(--font-size-s)",xs:"var(--font-size-xs)"};return e.jsx("button",{onClick:()=>r?.(!s),style:{display:"inline-flex",alignItems:"center",justifyContent:"center",height:j[l],padding:n==="iconOnly"?"0":`0 ${b[l]}`,minWidth:n==="iconOnly"?j[l]:"auto",backgroundColor:s?"var(--color-accent-default)":"var(--color-surface-layer)",color:s?"var(--color-content-on-inverted-heading)":"var(--color-content-primary)",border:"var(--stroke-thin) solid",borderColor:s?"var(--color-accent-default)":"var(--color-stroke-subtle)",borderRadius:o?"var(--radius-m)":"0",borderLeftWidth:o?"var(--stroke-thin)":"0",cursor:"pointer",transition:"all 0.2s",fontWeight:500,fontSize:C[l],fontFamily:"var(--font-family-default)"},onMouseEnter:m=>{s||(m.currentTarget.style.backgroundColor="var(--color-surface-layer-strong)")},onMouseLeave:m=>{s||(m.currentTarget.style.backgroundColor="var(--color-surface-layer)")},children:a})},c=({children:n,style:l})=>e.jsx("div",{style:{display:"inline-flex",borderRadius:"var(--radius-m)",overflow:"hidden",...l},children:n}),g=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}),e.jsx("path",{d:"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"})]}),B=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"19",y1:"4",x2:"10",y2:"4"}),e.jsx("line",{x1:"14",y1:"20",x2:"5",y2:"20"}),e.jsx("line",{x1:"15",y1:"4",x2:"9",y2:"20"})]}),T=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}),e.jsx("line",{x1:"4",y1:"21",x2:"20",y2:"21"})]}),S=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"17",y1:"10",x2:"3",y2:"10"}),e.jsx("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),e.jsx("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),e.jsx("line",{x1:"17",y1:"18",x2:"3",y2:"18"})]}),v=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"10",x2:"6",y2:"10"}),e.jsx("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),e.jsx("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),e.jsx("line",{x1:"18",y1:"18",x2:"6",y2:"18"})]}),z=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"21",y1:"10",x2:"7",y2:"10"}),e.jsx("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),e.jsx("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),e.jsx("line",{x1:"21",y1:"18",x2:"7",y2:"18"})]}),w={title:"Components/Button/ToggleButton",component:t,parameters:{layout:"centered",docs:{description:{component:`# ToggleButton Component

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

See [MINDSET_DESIGN_SYSTEM.md](../../../MINDSET_DESIGN_SYSTEM.md) for complete documentation.`}}},argTypes:{type:{control:{type:"select"},options:["default","iconOnly"],description:"Toggle button type (with label or icon-only)",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["l","s","xs"],description:"Toggle button size (L=48px, S=40px, XS=32px)",table:{type:{summary:"string"},defaultValue:{summary:"l"}}},singleButton:{control:{type:"boolean"},description:"Whether this is a standalone button (true) or part of a group (false)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},selected:{control:{type:"boolean"},description:"Whether the button is in selected/active state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},d={args:{children:"Toggle",selected:!1,singleButton:!0}},u={render:()=>{const[n,l]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Default Type - Standalone"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"default",size:"l",singleButton:!0,selected:n,onChange:l,children:"Subscribe"}),e.jsx(t,{type:"default",size:"s",singleButton:!0,selected:n,onChange:l,children:"Subscribe"}),e.jsx(t,{type:"default",size:"xs",singleButton:!0,selected:n,onChange:l,children:"Subscribe"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"IconOnly Type - Standalone"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"iconOnly",size:"l",singleButton:!0,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsx(t,{type:"iconOnly",size:"s",singleButton:!0,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsx(t,{type:"iconOnly",size:"xs",singleButton:!0,selected:n,onChange:l,children:e.jsx(g,{})})]})]})]})},parameters:{docs:{description:{story:"Standalone toggle buttons (Single Button=Yes) with full border radius. Available in both Default and IconOnly types across all sizes."}}}},p={render:()=>{const[n,l]=i.useState(!1),[o,s]=i.useState(!1),[r,a]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Large Size (L)"}),e.jsxs(c,{children:[e.jsx(t,{type:"iconOnly",size:"l",singleButton:!1,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsx(t,{type:"iconOnly",size:"l",singleButton:!1,selected:o,onChange:s,children:e.jsx(B,{})}),e.jsx(t,{type:"iconOnly",size:"l",singleButton:!1,selected:r,onChange:a,children:e.jsx(T,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Small Size (S)"}),e.jsxs(c,{children:[e.jsx(t,{type:"iconOnly",size:"s",singleButton:!1,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsx(t,{type:"iconOnly",size:"s",singleButton:!1,selected:o,onChange:s,children:e.jsx(B,{})}),e.jsx(t,{type:"iconOnly",size:"s",singleButton:!1,selected:r,onChange:a,children:e.jsx(T,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Extra Small Size (XS)"}),e.jsxs(c,{children:[e.jsx(t,{type:"iconOnly",size:"xs",singleButton:!1,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsx(t,{type:"iconOnly",size:"xs",singleButton:!1,selected:o,onChange:s,children:e.jsx(B,{})}),e.jsx(t,{type:"iconOnly",size:"xs",singleButton:!1,selected:r,onChange:a,children:e.jsx(T,{})})]})]})]})},parameters:{docs:{description:{story:"Classic text formatting toolbar with Bold, Italic, and Underline toggles. IconOnly type in a button group (Single Button=No)."}}}},x={render:()=>{const[n,l]=i.useState("left");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Text Alignment - Large"}),e.jsxs(c,{children:[e.jsx(t,{type:"iconOnly",size:"l",singleButton:!1,selected:n==="left",onChange:()=>l("left"),children:e.jsx(S,{})}),e.jsx(t,{type:"iconOnly",size:"l",singleButton:!1,selected:n==="center",onChange:()=>l("center"),children:e.jsx(v,{})}),e.jsx(t,{type:"iconOnly",size:"l",singleButton:!1,selected:n==="right",onChange:()=>l("right"),children:e.jsx(z,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Text Alignment - Small"}),e.jsxs(c,{children:[e.jsx(t,{type:"iconOnly",size:"s",singleButton:!1,selected:n==="left",onChange:()=>l("left"),children:e.jsx(S,{})}),e.jsx(t,{type:"iconOnly",size:"s",singleButton:!1,selected:n==="center",onChange:()=>l("center"),children:e.jsx(v,{})}),e.jsx(t,{type:"iconOnly",size:"s",singleButton:!1,selected:n==="right",onChange:()=>l("right"),children:e.jsx(z,{})})]})]})]})},parameters:{docs:{description:{story:"Mutually exclusive selection group for text alignment. Only one option can be selected at a time."}}}},y={render:()=>{const[n,l]=i.useState(!1),[o,s]=i.useState(!0),[r,a]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Filter Group - Large"}),e.jsxs(c,{children:[e.jsx(t,{type:"default",size:"l",singleButton:!1,selected:n,onChange:l,children:"Active"}),e.jsx(t,{type:"default",size:"l",singleButton:!1,selected:o,onChange:s,children:"Pending"}),e.jsx(t,{type:"default",size:"l",singleButton:!1,selected:r,onChange:a,children:"Archived"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Filter Group - Small"}),e.jsxs(c,{children:[e.jsx(t,{type:"default",size:"s",singleButton:!1,selected:n,onChange:l,children:"Active"}),e.jsx(t,{type:"default",size:"s",singleButton:!1,selected:o,onChange:s,children:"Pending"}),e.jsx(t,{type:"default",size:"s",singleButton:!1,selected:r,onChange:a,children:"Archived"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Filter Group - Extra Small"}),e.jsxs(c,{children:[e.jsx(t,{type:"default",size:"xs",singleButton:!1,selected:n,onChange:l,children:"Active"}),e.jsx(t,{type:"default",size:"xs",singleButton:!1,selected:o,onChange:s,children:"Pending"}),e.jsx(t,{type:"default",size:"xs",singleButton:!1,selected:r,onChange:a,children:"Archived"})]})]})]})},parameters:{docs:{description:{story:"Default type toggle buttons with text labels. Useful for filters and multi-select options. Multiple buttons can be selected simultaneously."}}}},h={render:()=>{const[n,l]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{type:"iconOnly",size:"l",singleButton:!0,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsxs("p",{style:{fontSize:"12px",marginTop:"8px"},children:["Large (L)",e.jsx("br",{}),"48px"]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{type:"iconOnly",size:"s",singleButton:!0,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsxs("p",{style:{fontSize:"12px",marginTop:"8px"},children:["Small (S)",e.jsx("br",{}),"40px"]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{type:"iconOnly",size:"xs",singleButton:!0,selected:n,onChange:l,children:e.jsx(g,{})}),e.jsxs("p",{style:{fontSize:"12px",marginTop:"8px"},children:["Extra Small (XS)",e.jsx("br",{}),"32px"]})]})]})},parameters:{docs:{description:{story:"Size comparison showing all three available sizes: Large (48px), Small (40px), and Extra Small (32px)."}}}},f={render:n=>{const[l,o]=i.useState(n.selected||!1);return e.jsx(t,{...n,selected:l,onChange:o,children:n.children})},args:{type:"default",size:"l",singleButton:!0,selected:!1,children:"Toggle Me"},parameters:{docs:{description:{story:"Interactive playground to explore all ToggleButton properties. Use the controls below to experiment with different configurations."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Toggle',
    selected: false,
    singleButton: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <h4 style={{
          marginBottom: '12px'
        }}>Default Type - Standalone</h4>
          <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center'
        }}>
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
          <h4 style={{
          marginBottom: '12px'
        }}>IconOnly Type - Standalone</h4>
          <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center'
        }}>
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
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Standalone toggle buttons (Single Button=Yes) with full border radius. Available in both Default and IconOnly types across all sizes.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <h4 style={{
          marginBottom: '12px'
        }}>Large Size (L)</h4>
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
          <h4 style={{
          marginBottom: '12px'
        }}>Small Size (S)</h4>
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
          <h4 style={{
          marginBottom: '12px'
        }}>Extra Small Size (XS)</h4>
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
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic text formatting toolbar with Bold, Italic, and Underline toggles. IconOnly type in a button group (Single Button=No).'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('left');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'flex-start'
    }}>
        <div>
          <h4 style={{
          marginBottom: '12px'
        }}>Text Alignment - Large</h4>
          <ToggleButtonGroup>
            <ToggleButton type="iconOnly" size="l" singleButton={false} selected={alignment === 'left'} onChange={() => setAlignment('left')}>
              <AlignLeftIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="l" singleButton={false} selected={alignment === 'center'} onChange={() => setAlignment('center')}>
              <AlignCenterIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="l" singleButton={false} selected={alignment === 'right'} onChange={() => setAlignment('right')}>
              <AlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <h4 style={{
          marginBottom: '12px'
        }}>Text Alignment - Small</h4>
          <ToggleButtonGroup>
            <ToggleButton type="iconOnly" size="s" singleButton={false} selected={alignment === 'left'} onChange={() => setAlignment('left')}>
              <AlignLeftIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="s" singleButton={false} selected={alignment === 'center'} onChange={() => setAlignment('center')}>
              <AlignCenterIcon />
            </ToggleButton>
            <ToggleButton type="iconOnly" size="s" singleButton={false} selected={alignment === 'right'} onChange={() => setAlignment('right')}>
              <AlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Mutually exclusive selection group for text alignment. Only one option can be selected at a time.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filter1, setFilter1] = useState(false);
    const [filter2, setFilter2] = useState(true);
    const [filter3, setFilter3] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'flex-start'
    }}>
        <div>
          <h4 style={{
          marginBottom: '12px'
        }}>Filter Group - Large</h4>
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
          <h4 style={{
          marginBottom: '12px'
        }}>Filter Group - Small</h4>
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
          <h4 style={{
          marginBottom: '12px'
        }}>Filter Group - Extra Small</h4>
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
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default type toggle buttons with text labels. Useful for filters and multi-select options. Multiple buttons can be selected simultaneously.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <ToggleButton type="iconOnly" size="l" singleButton={true} selected={selected} onChange={setSelected}>
            <BoldIcon />
          </ToggleButton>
          <p style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>Large (L)<br />48px</p>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <ToggleButton type="iconOnly" size="s" singleButton={true} selected={selected} onChange={setSelected}>
            <BoldIcon />
          </ToggleButton>
          <p style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>Small (S)<br />40px</p>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <ToggleButton type="iconOnly" size="xs" singleButton={true} selected={selected} onChange={setSelected}>
            <BoldIcon />
          </ToggleButton>
          <p style={{
          fontSize: '12px',
          marginTop: '8px'
        }}>Extra Small (XS)<br />32px</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Size comparison showing all three available sizes: Large (48px), Small (40px), and Extra Small (32px).'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState(args.selected || false);
    return <ToggleButton {...args} selected={selected} onChange={setSelected}>
        {args.children}
      </ToggleButton>;
  },
  args: {
    type: 'default',
    size: 'l',
    singleButton: true,
    selected: false,
    children: 'Toggle Me'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to explore all ToggleButton properties. Use the controls below to experiment with different configurations.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const F=["Default","SingleButtons","TextFormattingToolbar","AlignmentControls","DefaultTypeWithLabels","AllSizes","Playground"];export{x as AlignmentControls,h as AllSizes,d as Default,y as DefaultTypeWithLabels,f as Playground,u as SingleButtons,p as TextFormattingToolbar,F as __namedExportsOrder,w as default};
