import{r as f,u as _,j as e}from"./iframe-DgyisLKw.js";import{c as E,g as U,u as z,D as F,a as H,T as y,b as O,B as T}from"./TextField-DfWfl8bf.js";import{d as Q,e as J,s as K,T as v,u as X,c as i}from"./viewports-Dj-R7mLd.js";import{B as Y}from"./Box-CuqX4Kl5.js";import"./preload-helper-C1FmrZbK.js";import"./Grow-D2Bo_cwJ.js";import"./index-ChXtkqiy.js";import"./Menu-CBskCVZZ.js";import"./useControlled-DYNviTsd.js";const Z=s=>{const{classes:t}=s;return J({root:["root"]},U,t)},$=K(v,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(s,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),ee=f.forwardRef(function(t,a){const n=_({props:t,name:"MuiDialogTitle"}),{className:o,id:p,...x}=n,r=n,l=Z(r),{titleId:c=p}=f.useContext(E);return e.jsx($,{component:"h2",className:Q(l.root,o),ownerState:r,ref:a,variant:"h6",id:p??c,...x})});function B({open:s,onClose:t,initialName:a="",initialDescription:n="",onCreate:o}){const p=X(),x=z(p.breakpoints.down("sm")),[r,l]=f.useState(a),[c,b]=f.useState(n),W=()=>{r.trim()&&(o==null||o({name:r.trim(),description:c.trim()}),l(""),b(""))};return e.jsxs(F,{open:s,onClose:t,fullScreen:x,fullWidth:!0,maxWidth:"sm",children:[e.jsx(ee,{children:"Add Group"}),e.jsx(H,{children:e.jsxs(Y,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"92px minmax(0, 1fr)"},columnGap:{xs:0,sm:2},rowGap:2,alignItems:{xs:"stretch",sm:"center"},mt:1},children:[e.jsx(v,{variant:"body2",color:"text.secondary",children:"Group Name"}),a?e.jsx(v,{variant:"subtitle2",sx:{minHeight:40,display:"flex",alignItems:"center"},children:r}):e.jsx(y,{value:r,onChange:h=>l(h.target.value),inputProps:{"aria-label":"Group Name"},required:!0,autoFocus:!0,fullWidth:!0,size:"small"}),e.jsx(v,{variant:"body2",color:"text.secondary",children:"Group Description"}),e.jsx(y,{value:c,onChange:h=>b(h.target.value),inputProps:{"aria-label":"Group Description"},multiline:!0,minRows:3,fullWidth:!0,size:"small"})]})}),e.jsxs(O,{sx:{px:3,pb:2},children:[e.jsx(T,{onClick:t,color:"inherit",children:"Cancel"}),e.jsx(T,{onClick:W,variant:"contained",disabled:!r.trim(),children:"Add"})]})]})}B.__docgenInfo={description:`Add Group screen, presented as a modal on desktop/tablet and a
full-screen sheet on mobile (standard MUI responsive dialog pattern).`,methods:[],displayName:"AddGroupDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},initialName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},initialDescription:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onCreate:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: { name: string; description: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; description: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""}}};const ce={id:"groups-addgroupdialog",title:"Groups/Add Group",component:B,parameters:{layout:"fullscreen"},args:{open:!0,initialName:"Sales",initialDescription:"This group helps to track all the digital interactions in the Sales group",onClose:()=>{}}},d={parameters:{viewport:{defaultViewport:"desktop",viewports:i}}},u={parameters:{viewport:{defaultViewport:"tabletPortrait",viewports:i}}},m={parameters:{viewport:{defaultViewport:"tabletLandscape",viewports:i}}},g={parameters:{viewport:{defaultViewport:"mobilePortrait",viewports:i}}},w={parameters:{viewport:{defaultViewport:"mobileLandscape",viewports:i}}},de=["Desktop","TabletPortrait","TabletLandscape","MobilePortrait","MobileLandscape"];var D,V,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop",
      viewports: customViewports
    }
  }
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var G,P,k;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletPortrait",
      viewports: customViewports
    }
  }
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,S,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletLandscape",
      viewports: customViewports
    }
  }
}`,...(q=(S=m.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var L,M,A;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobilePortrait",
      viewports: customViewports
    }
  }
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var N,R,I;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobileLandscape",
      viewports: customViewports
    }
  }
}`,...(I=(R=w.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};export{d as Desktop,w as MobileLandscape,g as MobilePortrait,m as TabletLandscape,u as TabletPortrait,de as __namedExportsOrder,ce as default};
