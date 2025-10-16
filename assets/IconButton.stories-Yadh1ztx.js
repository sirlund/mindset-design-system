import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Oeabo4ON.js";import"./preload-helper-D9Z9MdNV.js";const t=({variant:c="primary",size:v="s",circle:h=!1,disabled:a=!1,children:I,onClick:f})=>{const o="icon-btn",g=[o,`${o}--${c}`,`${o}--${v}`,h?`${o}--circle`:"",a?`${o}--disabled`:""].filter(Boolean).join(" "),j=()=>{if(a)return"var(--color-surface-layer)";switch(c){case"primary":return"var(--color-surface-background-inverted)";case"accent":return"var(--color-accent-default)";case"tertiary":return"transparent";case"text":return"transparent";default:return"var(--color-accent-default)"}},S=()=>{if(a)return"var(--color-content-disabled)";switch(c){case"primary":return"var(--color-content-on-inverted-heading)";case"accent":return"var(--color-content-on-inverted-heading)";case"tertiary":return"var(--color-accent-default)";case"text":return"var(--color-accent-default)";default:return"var(--color-content-on-inverted-heading)"}},B=()=>c==="tertiary"?"var(--stroke-thin) solid var(--color-stroke-medium)":"none";return e.jsx("button",{className:g,disabled:a,onClick:f,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",border:B(),backgroundColor:j(),color:S(),width:v==="s"?"var(--scale-500)":"var(--scale-400)",height:v==="s"?"var(--scale-500)":"var(--scale-400)",borderRadius:h?"50%":"var(--radius-m)",cursor:a?"not-allowed":"pointer",transition:"all 0.2s",padding:0,fontFamily:"var(--font-family-default)"},children:I})},r=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),n=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),s=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),i=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),D={title:"Components/Button/IconButton",component:t,parameters:{layout:"centered",docs:{description:{component:`# IconButton Component

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

See [MINDSET_DESIGN_SYSTEM.md](../../../MINDSET_DESIGN_SYSTEM.md) for complete documentation.`}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost","text"],description:"The visual style variant",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["s","xs"],description:"Icon button size (S=~40px, XS=~32px)",table:{type:{summary:"string"},defaultValue:{summary:"s"}}},circle:{control:{type:"boolean"},description:"Whether the button is circular (true) or square (false)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},l={args:{children:e.jsx(r,{})}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",children:e.jsx(r,{})}),e.jsx(t,{variant:"tertiary",children:e.jsx(r,{})}),e.jsx(t,{variant:"text",children:e.jsx(r,{})})]}),parameters:{docs:{description:{story:"All 4 type variants: Primary, Secondary (Accent), Ghost (Tertiary), and Text."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Square Icon Buttons (Circle=No)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",circle:!1,children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",circle:!1,children:e.jsx(i,{})}),e.jsx(t,{variant:"tertiary",circle:!1,children:e.jsx(s,{})}),e.jsx(t,{variant:"text",circle:!1,children:e.jsx(n,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Circular Icon Buttons (Circle=Yes)"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",circle:!0,children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",circle:!0,children:e.jsx(i,{})}),e.jsx(t,{variant:"tertiary",circle:!0,children:e.jsx(s,{})}),e.jsx(t,{variant:"text",circle:!0,children:e.jsx(n,{})})]})]})]}),parameters:{docs:{description:{story:"IconButtons come in two shapes: Square (with rounded corners) and Circular. Both shapes support all types and sizes."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"primary",size:"s",children:e.jsx(r,{})}),e.jsx("p",{style:{fontSize:"12px",marginTop:"8px"},children:"Small (S)"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"primary",size:"xs",children:e.jsx(r,{})}),e.jsx("p",{style:{fontSize:"12px",marginTop:"8px"},children:"Extra Small (XS)"})]})]}),parameters:{docs:{description:{story:"Two sizes available: S (~40px) and XS (~32px) for compact interfaces."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Primary IconButton States"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"primary",children:e.jsx(r,{})}),e.jsx("p",{style:{fontSize:"12px",marginTop:"8px"},children:"Default"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"primary",disabled:!0,children:e.jsx(r,{})}),e.jsx("p",{style:{fontSize:"12px",marginTop:"8px"},children:"Disabled"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Ghost IconButton States"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"tertiary",children:e.jsx(r,{})}),e.jsx("p",{style:{fontSize:"12px",marginTop:"8px"},children:"Default"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{variant:"tertiary",disabled:!0,children:e.jsx(r,{})}),e.jsx("p",{style:{fontSize:"12px",marginTop:"8px"},children:"Disabled"})]})]})]})]}),parameters:{docs:{description:{story:"IconButtons support 3 states: Default, Hover (handled via CSS), and Disabled."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Square IconButtons"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px"},children:"Size: S"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",size:"s",circle:!1,children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",size:"s",circle:!1,children:e.jsx(i,{})}),e.jsx(t,{variant:"tertiary",size:"s",circle:!1,children:e.jsx(s,{})}),e.jsx(t,{variant:"text",size:"s",circle:!1,children:e.jsx(n,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px"},children:"Size: XS"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",size:"xs",circle:!1,children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",size:"xs",circle:!1,children:e.jsx(i,{})}),e.jsx(t,{variant:"tertiary",size:"xs",circle:!1,children:e.jsx(s,{})}),e.jsx(t,{variant:"text",size:"xs",circle:!1,children:e.jsx(n,{})})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Circular IconButtons"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px"},children:"Size: S"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",size:"s",circle:!0,children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",size:"s",circle:!0,children:e.jsx(i,{})}),e.jsx(t,{variant:"tertiary",size:"s",circle:!0,children:e.jsx(s,{})}),e.jsx(t,{variant:"text",size:"s",circle:!0,children:e.jsx(n,{})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px"},children:"Size: XS"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{variant:"primary",size:"xs",circle:!0,children:e.jsx(r,{})}),e.jsx(t,{variant:"accent",size:"xs",circle:!0,children:e.jsx(i,{})}),e.jsx(t,{variant:"tertiary",size:"xs",circle:!0,children:e.jsx(s,{})}),e.jsx(t,{variant:"text",size:"xs",circle:!0,children:e.jsx(n,{})})]})]})]})]})]}),parameters:{docs:{description:{story:"Complete matrix showing all combinations: 4 types × 2 sizes × 2 shapes = 16 default state variants (48 total with all states)."}}}},m={args:{variant:"primary",size:"s",circle:!1,disabled:!1,children:e.jsx(r,{})},parameters:{docs:{description:{story:"Interactive playground to explore all IconButton properties. Note: Icon cannot be changed in controls."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <SearchIcon />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <IconButton variant="primary">
        <SearchIcon />
      </IconButton>
      <IconButton variant="accent">
        <SearchIcon />
      </IconButton>
      <IconButton variant="tertiary">
        <SearchIcon />
      </IconButton>
      <IconButton variant="text">
        <SearchIcon />
      </IconButton>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 4 type variants: Primary, Secondary (Accent), Ghost (Tertiary), and Text.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Square Icon Buttons (Circle=No)</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <IconButton variant="primary" circle={false}>
            <SearchIcon />
          </IconButton>
          <IconButton variant="accent" circle={false}>
            <EditIcon />
          </IconButton>
          <IconButton variant="tertiary" circle={false}>
            <MenuIcon />
          </IconButton>
          <IconButton variant="text" circle={false}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Circular Icon Buttons (Circle=Yes)</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <IconButton variant="primary" circle={true}>
            <SearchIcon />
          </IconButton>
          <IconButton variant="accent" circle={true}>
            <EditIcon />
          </IconButton>
          <IconButton variant="tertiary" circle={true}>
            <MenuIcon />
          </IconButton>
          <IconButton variant="text" circle={true}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'IconButtons come in two shapes: Square (with rounded corners) and Circular. Both shapes support all types and sizes.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton variant="primary" size="s">
          <SearchIcon />
        </IconButton>
        <p style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Small (S)</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton variant="primary" size="xs">
          <SearchIcon />
        </IconButton>
        <p style={{
        fontSize: '12px',
        marginTop: '8px'
      }}>Extra Small (XS)</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Two sizes available: S (~40px) and XS (~32px) for compact interfaces.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Primary IconButton States</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <IconButton variant="primary">
              <SearchIcon />
            </IconButton>
            <p style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Default</p>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <IconButton variant="primary" disabled>
              <SearchIcon />
            </IconButton>
            <p style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Disabled</p>
          </div>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Ghost IconButton States</h4>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <IconButton variant="tertiary">
              <SearchIcon />
            </IconButton>
            <p style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Default</p>
          </div>
          <div style={{
          textAlign: 'center'
        }}>
            <IconButton variant="tertiary" disabled>
              <SearchIcon />
            </IconButton>
            <p style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Disabled</p>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'IconButtons support 3 states: Default, Hover (handled via CSS), and Disabled.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px'
      }}>Square IconButtons</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <h4 style={{
            marginBottom: '8px',
            fontSize: '14px'
          }}>Size: S</h4>
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>
              <IconButton variant="primary" size="s" circle={false}><SearchIcon /></IconButton>
              <IconButton variant="accent" size="s" circle={false}><EditIcon /></IconButton>
              <IconButton variant="tertiary" size="s" circle={false}><MenuIcon /></IconButton>
              <IconButton variant="text" size="s" circle={false}><CloseIcon /></IconButton>
            </div>
          </div>
          <div>
            <h4 style={{
            marginBottom: '8px',
            fontSize: '14px'
          }}>Size: XS</h4>
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>
              <IconButton variant="primary" size="xs" circle={false}><SearchIcon /></IconButton>
              <IconButton variant="accent" size="xs" circle={false}><EditIcon /></IconButton>
              <IconButton variant="tertiary" size="xs" circle={false}><MenuIcon /></IconButton>
              <IconButton variant="text" size="xs" circle={false}><CloseIcon /></IconButton>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: '16px'
      }}>Circular IconButtons</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div>
            <h4 style={{
            marginBottom: '8px',
            fontSize: '14px'
          }}>Size: S</h4>
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>
              <IconButton variant="primary" size="s" circle={true}><SearchIcon /></IconButton>
              <IconButton variant="accent" size="s" circle={true}><EditIcon /></IconButton>
              <IconButton variant="tertiary" size="s" circle={true}><MenuIcon /></IconButton>
              <IconButton variant="text" size="s" circle={true}><CloseIcon /></IconButton>
            </div>
          </div>
          <div>
            <h4 style={{
            marginBottom: '8px',
            fontSize: '14px'
          }}>Size: XS</h4>
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>
              <IconButton variant="primary" size="xs" circle={true}><SearchIcon /></IconButton>
              <IconButton variant="accent" size="xs" circle={true}><EditIcon /></IconButton>
              <IconButton variant="tertiary" size="xs" circle={true}><MenuIcon /></IconButton>
              <IconButton variant="text" size="xs" circle={true}><CloseIcon /></IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all combinations: 4 types × 2 sizes × 2 shapes = 16 default state variants (48 total with all states).'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 's',
    circle: false,
    disabled: false,
    children: <SearchIcon />
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to explore all IconButton properties. Note: Icon cannot be changed in controls.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const T=["Default","AllTypes","SquareVsCircle","Sizes","States","CompleteMatrix","Playground"];export{d as AllTypes,y as CompleteMatrix,l as Default,m as Playground,x as Sizes,p as SquareVsCircle,u as States,T as __namedExportsOrder,D as default};
