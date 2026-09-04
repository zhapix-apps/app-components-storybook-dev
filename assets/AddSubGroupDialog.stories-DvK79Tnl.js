import{r as h,j as e}from"./iframe-DgyisLKw.js";import{u as O,D as Q,a as H,T as f,b as J,B as j}from"./TextField-DfWfl8bf.js";import{u as K,T as t,c as s}from"./viewports-Dj-R7mLd.js";import{G as r}from"./Grid2-BtizGVnr.js";import"./preload-helper-C1FmrZbK.js";import"./Grow-D2Bo_cwJ.js";import"./index-ChXtkqiy.js";import"./Menu-CBskCVZZ.js";import"./useControlled-DYNviTsd.js";function g({open:d,groupName:B,onClose:b,onAdd:l}){const F=K(),I=O(F.breakpoints.down("sm")),[a,w]=h.useState(""),[x,v]=h.useState(""),R=()=>{a.trim()&&(l==null||l({subGroupName:a.trim(),description:x.trim()}),w(""),v(""))};return e.jsxs(Q,{open:d,onClose:b,fullScreen:I,fullWidth:!0,maxWidth:"sm",children:[e.jsxs(H,{sx:{pt:3},children:[e.jsx(t,{variant:"h6",sx:{mb:3},children:"Add Sub Group"}),e.jsxs(r,{container:!0,spacing:2.5,alignItems:"center",children:[e.jsx(r,{size:{xs:12,sm:4},children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"Group Name"})}),e.jsx(r,{size:{xs:12,sm:8},children:e.jsx(t,{variant:"subtitle2",children:B})}),e.jsx(r,{size:{xs:12,sm:4},children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"Sub Group Name"})}),e.jsx(r,{size:{xs:12,sm:8},children:e.jsx(f,{value:a,onChange:m=>w(m.target.value),placeholder:"e.g. Sales Planning",required:!0,autoFocus:!0,fullWidth:!0,size:"small"})}),e.jsx(r,{size:{xs:12,sm:4},children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"Sub Group Description"})}),e.jsx(r,{size:{xs:12,sm:8},children:e.jsx(f,{value:x,onChange:m=>v(m.target.value),placeholder:"What is this sub group for?",multiline:!0,minRows:3,fullWidth:!0,size:"small"})})]})]}),e.jsxs(J,{sx:{px:3,pb:3},children:[e.jsx(j,{onClick:b,variant:"outlined",color:"inherit",children:"Cancel"}),e.jsx(j,{onClick:R,variant:"contained",disabled:!a.trim(),children:"Add"})]})]})}g.__docgenInfo={description:`Add Sub Group screen. Group Name is shown read-only for context
(the sub-group always belongs to the group it was opened from).`,methods:[],displayName:"AddSubGroupDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},groupName:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: { subGroupName: string; description: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ subGroupName: string; description: string }",signature:{properties:[{key:"subGroupName",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""}}};const ae={title:"Groups/AddSubGroupDialog",component:g,parameters:{layout:"fullscreen"},args:{open:!0,groupName:"Sales",onClose:()=>{}}},o={parameters:{viewport:{defaultViewport:"desktop",viewports:s}}},i={parameters:{viewport:{defaultViewport:"tabletPortrait",viewports:s}}},n={parameters:{viewport:{defaultViewport:"tabletLandscape",viewports:s}}},p={parameters:{viewport:{defaultViewport:"mobilePortrait",viewports:s}}},u={parameters:{viewport:{defaultViewport:"mobileLandscape",viewports:s}}},c={render:d=>e.jsx(g,{...d})},oe=["Desktop","TabletPortrait","TabletLandscape","MobilePortrait","MobileLandscape","Prefilled"];var y,S,G;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
      viewports: customViewports
    }
  }
}`,...(G=(S=o.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var V,T,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'tabletPortrait',
      viewports: customViewports
    }
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,P,k;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'tabletLandscape',
      viewports: customViewports
    }
  }
}`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var z,L,q;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobilePortrait',
      viewports: customViewports
    }
  }
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var C,A,M;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobileLandscape',
      viewports: customViewports
    }
  }
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,_,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <AddSubGroupDialog {...args} />
}`,...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};export{o as Desktop,u as MobileLandscape,p as MobilePortrait,c as Prefilled,n as TabletLandscape,i as TabletPortrait,oe as __namedExportsOrder,ae as default};
