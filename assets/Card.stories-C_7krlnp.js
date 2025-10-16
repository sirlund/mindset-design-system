import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Oeabo4ON.js";import"./preload-helper-D9Z9MdNV.js";const P=({planType:a="Starter"})=>a==="Individual"?e.jsxs("div",{className:"plan-icon plan-icon--individual",children:[e.jsx("div",{className:"plan-icon__square plan-icon__square--top-left"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--bottom-left"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--top-right"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--bottom-right"})]}):a==="Teams"?e.jsxs("div",{className:"plan-icon plan-icon--teams",children:[e.jsx("div",{className:"plan-icon__square plan-icon__square--top-left"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--middle-left"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--bottom-center"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--top-center"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--middle-right"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--center"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--bottom-right"})]}):e.jsxs("div",{className:"plan-icon plan-icon--starter",children:[e.jsx("div",{className:"plan-icon__square plan-icon__square--left"}),e.jsx("div",{className:"plan-icon__square plan-icon__square--right"})]}),s=({plan:a="Starter",price:p=0,pricePeriod:_="/Month",seats:u=1,canEditSeats:x=!1,nextBillingAmount:h=0,renewalDate:v="Sep 07, 2024",className:f="",onActionClick:g})=>{const j=()=>{switch(a){case"Individual":return 20;case"Teams":return 49;default:return 0}},m=()=>a==="Starter"||a==="Individual"?"Upgrade to Teams unlock multiple seats":"",N=()=>a==="Teams"?p*u:h,S=p||j(),y=N();return e.jsx("div",{className:`card ${f}`,children:e.jsxs("div",{className:"card__container",children:[e.jsxs("div",{className:"card__header",children:[e.jsxs("div",{className:"card__header-title",children:[e.jsx("div",{className:"card__header-icon",children:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z",stroke:"#6d6d6e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 13.2H12.01M8.8 13.2H8.81M15.2 13.2H15.21",stroke:"#6d6d6e",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("div",{className:"card__header-text",children:"Plan"})]}),e.jsx("div",{className:"card__header-action",children:e.jsx("button",{className:"card__action-button",onClick:g,children:e.jsx("span",{className:"card__action-text",children:"Edit"})})})]}),e.jsx("div",{className:"card__body",children:e.jsxs("div",{className:"card__content",children:[e.jsxs("div",{className:"card__plan",children:[e.jsx("div",{className:"card__plan-icon",children:e.jsx(P,{planType:a})}),e.jsx("div",{className:"card__plan-name",children:a})]}),e.jsxs("div",{className:"card__price-section",children:[e.jsxs("div",{className:"card__price",children:[e.jsx("span",{className:"card__price-currency",children:"$"}),e.jsx("span",{className:"card__price-amount",children:S}),e.jsx("span",{className:"card__price-period",children:_})]}),e.jsxs("div",{className:"card__seats",children:[e.jsx("div",{className:"card__seats-divider"}),e.jsxs("div",{className:"card__seats-info",children:[e.jsx("div",{className:"card__seats-count",children:a==="Teams"?e.jsxs("div",{className:"card__seats-teams",children:[e.jsx("span",{className:"card__seats-multiplier",children:"x"}),e.jsx("span",{className:"card__seats-number",children:u}),e.jsx("span",{className:"card__seats-text",children:"Monthly seats"}),x&&e.jsx("button",{className:"card__seats-edit",children:e.jsx("span",{children:"Edit"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"card__seats-number",children:"1"}),e.jsx("span",{className:"card__seats-text",children:"Monthly seat"})]})}),m()&&e.jsx("div",{className:"card__seats-upgrade",children:m()})]})]})]})]})}),e.jsxs("div",{className:"card__footer",children:[e.jsxs("div",{className:"card__footer-left",children:[e.jsxs("div",{className:"card__footer-price",children:[e.jsx("span",{className:"card__footer-currency",children:"$"}),e.jsx("span",{className:"card__footer-amount",children:y})]}),e.jsx("div",{className:"card__footer-label",children:"Next plan bill"})]}),e.jsxs("div",{className:"card__footer-right",children:[e.jsx("div",{className:"card__footer-renewal",children:"Renews on"}),e.jsx("div",{className:"card__footer-date",children:v})]})]})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{plan:{required:!1,tsType:{name:"union",raw:"'Starter' | 'Individual' | 'Teams'",elements:[{name:"literal",value:"'Starter'"},{name:"literal",value:"'Individual'"},{name:"literal",value:"'Teams'"}]},description:"The plan type",defaultValue:{value:"'Starter'",computed:!1}},price:{required:!1,tsType:{name:"number"},description:"The plan price",defaultValue:{value:"0",computed:!1}},pricePeriod:{required:!1,tsType:{name:"string"},description:"The plan price per period",defaultValue:{value:"'/Month'",computed:!1}},seats:{required:!1,tsType:{name:"number"},description:"Number of seats/users",defaultValue:{value:"1",computed:!1}},canEditSeats:{required:!1,tsType:{name:"boolean"},description:"Whether seats can be edited",defaultValue:{value:"false",computed:!1}},nextBillingAmount:{required:!1,tsType:{name:"number"},description:"Next billing amount",defaultValue:{value:"0",computed:!1}},renewalDate:{required:!1,tsType:{name:"string"},description:"Renewal date",defaultValue:{value:"'Sep 07, 2024'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name",defaultValue:{value:"''",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the action button"}}};const M={title:"Components/Card",component:s,parameters:{layout:"centered",docs:{description:{component:"A customizable plan card component with different plan types, pricing, and seat management."}}},argTypes:{plan:{control:{type:"select"},options:["Starter","Individual","Teams"],description:"The plan type"},price:{control:{type:"number"},description:"The plan price (overrides default)"},pricePeriod:{control:{type:"text"},description:"The price period text"},seats:{control:{type:"number"},description:"Number of seats/users"},canEditSeats:{control:{type:"boolean"},description:"Whether seats can be edited"},nextBillingAmount:{control:{type:"number"},description:"Next billing amount"},renewalDate:{control:{type:"text"},description:"Renewal date"},onActionClick:{action:"action clicked",description:"Click handler for the action button"}},tags:["autodocs"]},r={args:{plan:"Starter"}},n={args:{plan:"Starter",price:0,pricePeriod:"/Month",seats:1,canEditSeats:!1,nextBillingAmount:0,renewalDate:"Sep 07, 2024"}},t={args:{plan:"Individual",price:20,pricePeriod:"/Month",seats:1,canEditSeats:!1,nextBillingAmount:20,renewalDate:"Sep 07, 2024"}},i={args:{plan:"Teams",price:49,pricePeriod:"Per User/Month",seats:4,canEditSeats:!0,nextBillingAmount:196,renewalDate:"Sep 07, 2024"}},c={args:{plan:"Teams",price:49,pricePeriod:"Per User/Month",seats:8,canEditSeats:!0,nextBillingAmount:392,renewalDate:"Sep 07, 2024"}},l={args:{plan:"Individual",price:25,pricePeriod:"/Month",seats:1,canEditSeats:!1,nextBillingAmount:25,renewalDate:"Dec 15, 2024"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",justifyContent:"center",maxWidth:"1200px"},children:[e.jsx(s,{plan:"Starter",price:0,pricePeriod:"/Month",seats:1,canEditSeats:!1,nextBillingAmount:0,renewalDate:"Sep 07, 2024"}),e.jsx(s,{plan:"Individual",price:20,pricePeriod:"/Month",seats:1,canEditSeats:!1,nextBillingAmount:20,renewalDate:"Sep 07, 2024"}),e.jsx(s,{plan:"Teams",price:49,pricePeriod:"Per User/Month",seats:4,canEditSeats:!0,nextBillingAmount:196,renewalDate:"Sep 07, 2024"})]}),parameters:{layout:"padded"}},o={args:{plan:"Individual",price:20,pricePeriod:"/Month",seats:1,canEditSeats:!1,nextBillingAmount:20,renewalDate:"Sep 07, 2024"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Starter'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Starter',
    price: 0,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 0,
    renewalDate: 'Sep 07, 2024'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Individual',
    price: 20,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 20,
    renewalDate: 'Sep 07, 2024'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Teams',
    price: 49,
    pricePeriod: 'Per User/Month',
    seats: 4,
    canEditSeats: true,
    nextBillingAmount: 196,
    renewalDate: 'Sep 07, 2024'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Teams',
    price: 49,
    pricePeriod: 'Per User/Month',
    seats: 8,
    canEditSeats: true,
    nextBillingAmount: 392,
    renewalDate: 'Sep 07, 2024'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Individual',
    price: 25,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 25,
    renewalDate: 'Dec 15, 2024'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px'
  }}>
      <Card plan="Starter" price={0} pricePeriod="/Month" seats={1} canEditSeats={false} nextBillingAmount={0} renewalDate="Sep 07, 2024" />
      <Card plan="Individual" price={20} pricePeriod="/Month" seats={1} canEditSeats={false} nextBillingAmount={20} renewalDate="Sep 07, 2024" />
      <Card plan="Teams" price={49} pricePeriod="Per User/Month" seats={4} canEditSeats={true} nextBillingAmount={196} renewalDate="Sep 07, 2024" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Individual',
    price: 20,
    pricePeriod: '/Month',
    seats: 1,
    canEditSeats: false,
    nextBillingAmount: 20,
    renewalDate: 'Sep 07, 2024'
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Starter","Individual","Teams","TeamsWithMoreSeats","CustomPricing","AllPlans","Playground"];export{d as AllPlans,l as CustomPricing,r as Default,t as Individual,o as Playground,n as Starter,i as Teams,c as TeamsWithMoreSeats,b as __namedExportsOrder,M as default};
