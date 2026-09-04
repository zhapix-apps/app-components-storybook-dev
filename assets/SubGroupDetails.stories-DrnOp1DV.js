import{j as e,r as o}from"./iframe-DgyisLKw.js";import{a as U,u as X,T as r,B as Y,c}from"./viewports-Dj-R7mLd.js";import{u as Z,D as ee,a as te,T as j,b as se,B as re}from"./TextField-DfWfl8bf.js";import{G as s}from"./Grid2-BtizGVnr.js";import{B as l}from"./Box-CuqX4Kl5.js";import{I as v}from"./IconButton-Uf-1QEYQ.js";import"./preload-helper-C1FmrZbK.js";import"./Grow-D2Bo_cwJ.js";import"./index-ChXtkqiy.js";import"./Menu-CBskCVZZ.js";import"./useControlled-DYNviTsd.js";const y=U(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");function S({count:f,label:t,onClick:p}){return e.jsxs(Y,{onClick:p,"aria-label":`View ${t}`,sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:.5,p:1,borderRadius:2},children:[e.jsx(l,{sx:{width:40,height:40,borderRadius:"50%",border:"1.5px solid",borderColor:"primary.main",color:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:f}),e.jsx(r,{variant:"caption",color:"text.secondary",children:t})]})}function O({open:f,subGroup:t,onClose:p,onSave:a,onOpenChannels:A,onOpenContacts:Q}){const $=X(),H=Z($.breakpoints.down("sm")),[J,w]=o.useState(!1),[C,z]=o.useState(!1),[i,b]=o.useState(t.name),[d,D]=o.useState(t.description??"");o.useEffect(()=>{b(t.name),D(t.description??"")},[t]);const V=()=>{w(!1),a==null||a({name:i,description:d})},K=()=>{z(!1),a==null||a({name:i,description:d})};return e.jsxs(ee,{open:f,onClose:p,fullScreen:H,fullWidth:!0,maxWidth:"md",children:[e.jsx(te,{sx:{pt:3},children:e.jsxs(s,{container:!0,spacing:{xs:3,sm:2},children:[e.jsxs(s,{size:{xs:12,sm:8},children:[e.jsx(r,{variant:"h6",sx:{mb:3},children:"Sub Group Details"}),e.jsxs(s,{container:!0,spacing:2.5,alignItems:"center",children:[e.jsx(s,{size:{xs:12,sm:4},children:e.jsx(r,{variant:"body2",color:"text.secondary",children:"Goal Name"})}),e.jsx(s,{size:{xs:12,sm:8},children:J?e.jsx(j,{value:i,onChange:n=>b(n.target.value),onBlur:V,autoFocus:!0,size:"small",fullWidth:!0}):e.jsxs(l,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(r,{variant:"subtitle2",children:t.name}),e.jsx(v,{size:"small","aria-label":"Edit sub goal name",onClick:()=>w(!0),children:e.jsx(y,{fontSize:"inherit"})})]})}),e.jsx(s,{size:{xs:12,sm:4},children:e.jsx(r,{variant:"body2",color:"text.secondary",children:"Sub Goal Name"})}),e.jsx(s,{size:{xs:12,sm:8},children:C?e.jsx(j,{value:i,onChange:n=>b(n.target.value),onBlur:V,autoFocus:!0,size:"small",fullWidth:!0}):e.jsxs(l,{sx:{display:"flex",alignItems:"flex-start",gap:.5},children:[e.jsx(r,{variant:"subtitle2",children:i}),e.jsx(v,{size:"small","aria-label":"Edit sub goal name",onClick:()=>w(!0),children:e.jsx(y,{fontSize:"inherit"})})]})}),e.jsx(s,{size:{xs:12,sm:4},children:e.jsx(r,{variant:"body2",color:"text.secondary",children:"Sub Goal Description"})}),e.jsx(s,{size:{xs:12,sm:8},children:C?e.jsx(j,{value:d,onChange:n=>D(n.target.value),onBlur:K,autoFocus:!0,multiline:!0,minRows:2,size:"small",fullWidth:!0}):e.jsxs(l,{sx:{display:"flex",alignItems:"flex-start",gap:.5},children:[e.jsx(r,{variant:"body2",children:d}),e.jsx(v,{size:"small","aria-label":"Edit sub goal description",onClick:()=>z(!0),children:e.jsx(y,{fontSize:"inherit"})})]})})]})]}),e.jsx(s,{size:{xs:12,sm:4},children:e.jsxs(l,{sx:{display:"flex",flexDirection:{xs:"row",sm:"column"},justifyContent:{xs:"center",sm:"flex-start"},alignItems:{sm:"flex-end"},gap:2,mt:{xs:0,sm:5}},children:[e.jsx(S,{count:t.channelCount??0,label:"Channels",onClick:A}),e.jsx(S,{count:t.contactCount??0,label:"Contacts",onClick:Q})]})})]})}),e.jsx(se,{sx:{px:3,pb:3},children:e.jsx(re,{onClick:p,variant:"contained",children:"Close"})})]})}O.__docgenInfo={description:`Sub Group Details: read-only parent group plus editable sub-group
name and description, with links to channels and contacts.`,methods:[],displayName:"SubGroupDetails",props:{open:{required:!0,tsType:{name:"boolean"},description:""},subGroup:{required:!0,tsType:{name:"SubGroup"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: { name: string; description: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; description: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},onOpenChannels:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenContacts:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae={id:"sg1",groupName:"Sales",name:"Sales Planning",description:"All the interactions related to the planning of the sales activities",channelCount:3,contactCount:4},he={title:"Groups/SubGroupDetails",component:O,parameters:{layout:"fullscreen"},args:{open:!0,subGroup:ae,onClose:()=>{}}},u={parameters:{viewport:{defaultViewport:"desktop",viewports:c}}},m={parameters:{viewport:{defaultViewport:"tabletPortrait",viewports:c}}},x={parameters:{viewport:{defaultViewport:"tabletLandscape",viewports:c}}},g={parameters:{viewport:{defaultViewport:"mobilePortrait",viewports:c}}},h={parameters:{viewport:{defaultViewport:"mobileLandscape",viewports:c}}},fe=["Desktop","TabletPortrait","TabletLandscape","MobilePortrait","MobileLandscape"];var T,k,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop",
      viewports: customViewports
    }
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var I,E,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletPortrait",
      viewports: customViewports
    }
  }
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,q,N;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletLandscape",
      viewports: customViewports
    }
  }
}`,...(N=(q=x.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var G,M,W;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobilePortrait",
      viewports: customViewports
    }
  }
}`,...(W=(M=g.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var F,R,_;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobileLandscape",
      viewports: customViewports
    }
  }
}`,...(_=(R=h.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};export{u as Desktop,h as MobileLandscape,g as MobilePortrait,x as TabletLandscape,m as TabletPortrait,fe as __namedExportsOrder,he as default};
