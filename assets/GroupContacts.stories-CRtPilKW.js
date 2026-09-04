import{r as E,j as _}from"./iframe-DgyisLKw.js";import{G as h}from"./GroupContacts-CiikUZ_h.js";import{c as e}from"./viewports-Dj-R7mLd.js";import"./preload-helper-C1FmrZbK.js";import"./Check-DbNmD7_Y.js";import"./Box-CuqX4Kl5.js";import"./Grid2-BtizGVnr.js";const y=Array.from({length:12},(c,r)=>({id:`p${r+1}`,name:"Naresh Kumar",selected:r%5!==1}));function D(c){const[r,k]=E.useState(y);return _.jsx(h,{...c,contacts:r,onToggleContact:M=>k(j=>j.map(t=>t.id===M.id?{...t,selected:!t.selected}:t))})}const q={id:"groups-groupcontacts",title:"Groups/Group Contacts",component:D,parameters:{layout:"fullscreen"},args:{groupName:"Sales"}},a={parameters:{viewport:{defaultViewport:"desktop",viewports:e}}},o={parameters:{viewport:{defaultViewport:"tabletPortrait",viewports:e}}},s={parameters:{viewport:{defaultViewport:"tabletLandscape",viewports:e}}},p={parameters:{viewport:{defaultViewport:"mobilePortrait",viewports:e}}},n={parameters:{viewport:{defaultViewport:"mobileLandscape",viewports:e}}},i={args:{groupName:"Sales",subGroupName:"Sales Planning"}},z=["Desktop","TabletPortrait","TabletLandscape","MobilePortrait","MobileLandscape","ForSubGroup"];var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop",
      viewports: customViewports
    }
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,w,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletPortrait",
      viewports: customViewports
    }
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,g,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletLandscape",
      viewports: customViewports
    }
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var V,S,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobilePortrait",
      viewports: customViewports
    }
  }
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var G,L,x;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobileLandscape",
      viewports: customViewports
    }
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var N,C,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    groupName: "Sales",
    subGroupName: "Sales Planning"
  }
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};export{a as Desktop,i as ForSubGroup,n as MobileLandscape,p as MobilePortrait,s as TabletLandscape,o as TabletPortrait,z as __namedExportsOrder,q as default};
