import{r as T,j as E}from"./iframe-DgyisLKw.js";import{G as q}from"./GroupChannels-CiTGdGmz.js";import{c as e}from"./viewports-Dj-R7mLd.js";import"./preload-helper-C1FmrZbK.js";import"./Box-CuqX4Kl5.js";import"./Check-DbNmD7_Y.js";import"./Grid2-BtizGVnr.js";const D=[{id:"ch1",kind:"whatsapp",label:"Whatsapp",selected:!0},{id:"ch2",kind:"sms",label:"SMS",selected:!0},{id:"ch3",kind:"email",label:"Email",selected:!0},{id:"ch4",kind:"cliq",label:"Cliq",selected:!0},{id:"ch5",kind:"projects",label:"Projects",selected:!0},{id:"ch6",kind:"slack",label:"Slack",selected:!0},{id:"ch7",kind:"call",label:"Call",selected:!0},{id:"ch8",kind:"zoom",label:"Zoom",selected:!0}];function F(C){const[x,j]=T.useState(D);return E.jsx(q,{...C,channels:x,onToggleChannel:M=>j(N=>N.map(r=>r.id===M.id?{...r,selected:!r.selected}:r))})}const Z={id:"groups-groupchannels",title:"Groups/Group Channels",component:F,parameters:{layout:"fullscreen"},args:{groupName:"Sales"}},t={parameters:{viewport:{defaultViewport:"desktop",viewports:e}}},a={parameters:{viewport:{defaultViewport:"tabletPortrait",viewports:e}}},s={parameters:{viewport:{defaultViewport:"tabletLandscape",viewports:e}}},o={parameters:{viewport:{defaultViewport:"mobilePortrait",viewports:e}}},p={parameters:{viewport:{defaultViewport:"mobileLandscape",viewports:e}}},n={args:{groupName:"Sales",subGroupName:"Sales Planning"}},A=["Desktop","TabletPortrait","TabletLandscape","MobilePortrait","MobileLandscape","ForSubGroup"];var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop",
      viewports: customViewports
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletPortrait",
      viewports: customViewports
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,b,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tabletLandscape",
      viewports: customViewports
    }
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobilePortrait",
      viewports: customViewports
    }
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var V,h,k;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobileLandscape",
      viewports: customViewports
    }
  }
}`,...(k=(h=p.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var P,G,L;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    groupName: "Sales",
    subGroupName: "Sales Planning"
  }
}`,...(L=(G=n.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};export{t as Desktop,n as ForSubGroup,p as MobileLandscape,o as MobilePortrait,s as TabletLandscape,a as TabletPortrait,A as __namedExportsOrder,Z as default};
