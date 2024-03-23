"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[910],{7293:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),s=t(4848);function a(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=n.filter((e=>e!==t)),l=t?.props.children;return{mdxAdmonitionTitle:l,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??n;return{...e,...a&&{title:a},children:t}}var l=t(8215),o=t(1312),r=t(7559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,l.A)(r.G.common.admonition,r.G.common.admonitionType(n),c.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function m(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:c.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:i,children:a,className:l}=e;return(0,s.jsxs)(d,{type:n,className:l,children:[(0,s.jsx)(u,{title:i,icon:t}),(0,s.jsx)(m,{children:a})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(e){return(0,s.jsx)(h,{...x,...e,className:(0,l.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,s.jsx)(h,{...g,...e,className:(0,l.A)("alert alert--success",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,s.jsx)(h,{...N,...e,className:(0,l.A)("alert alert--info",e.className),children:e.children})}function b(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function H(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const y={icon:(0,s.jsx)(H,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,s.jsx)(b,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:v,tip:p,info:C,warning:function(e){return(0,s.jsx)(h,{...L,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(h,{...y,...e,className:(0,l.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(v,{title:"secondary",...e}),important:e=>(0,s.jsx)(C,{title:"important",...e}),success:e=>(0,s.jsx)(p,{title:"success",...e}),caution:function(e){return(0,s.jsx)(h,{...k,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})}}};function w(e){const n=a(e),t=(i=n.type,_[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),_.info));var i;return(0,s.jsx)(t,{...n})}},2857:(e,n,t)=>{t.d(n,{A:()=>z});var i=t(6540),s=t(8453),a=t(5260),l=t(2364),o=t(4848);function r(e){return(0,o.jsx)("code",{...e})}var c=t(8774);var d=t(8215),u=t(5066),m=t(3427),h=t(2303),f=t(1422);const x={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function v(e){return!!e&&("SUMMARY"===e.tagName||v(e.parentElement))}function j(e,n){return!!e&&(e===n||j(e.parentElement,n))}function g(e){let{summary:n,children:t,...s}=e;(0,m.A)().collectAnchor(s.id);const a=(0,h.A)(),l=(0,i.useRef)(null),{collapsed:r,setCollapsed:c}=(0,f.u)({initialState:!s.open}),[d,g]=(0,i.useState)(s.open),p=i.isValidElement(n)?n:(0,o.jsx)("summary",{children:n??"Details"});return(0,o.jsxs)("details",{...s,ref:l,open:d,"data-collapsed":r,className:(0,u.A)(x.details,a&&x.isBrowser,s.className),onMouseDown:e=>{v(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;v(n)&&j(n,l.current)&&(e.preventDefault(),r?(c(!1),g(!0)):c(!0))},children:[p,(0,o.jsx)(f.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),g(!e)},children:(0,o.jsx)("div",{className:x.collapsibleContent,children:t})})]})}const p={details:"details_b_Ee"},A="alert alert--info";function N(e){let{...n}=e;return(0,o.jsx)(g,{...n,className:(0,d.A)(A,p.details,n.className)})}function C(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),s=(0,o.jsx)(o.Fragment,{children:n.filter((e=>e!==t))});return(0,o.jsx)(N,{...e,summary:t,children:s})}var b=t(1107);function L(e){return(0,o.jsx)(b.A,{...e})}const H={containsTaskList:"containsTaskList_mC6p"};function y(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&H.containsTaskList)}const k={img:"img_ev3q"};var _=t(7293),w=t(418);const T={Head:a.A,details:C,Details:C,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,o.jsx)(r,{...e}):(0,o.jsx)(l.A,{...e})},a:function(e){return(0,o.jsx)(c.A,{...e})},pre:function(e){return(0,o.jsx)(o.Fragment,{children:e.children})},ul:function(e){return(0,o.jsx)("ul",{...e,className:y(e.className)})},li:function(e){return(0,m.A)().collectAnchor(e.id),(0,o.jsx)("li",{...e})},img:function(e){return(0,o.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,k.img))});var n},h1:e=>(0,o.jsx)(L,{as:"h1",...e}),h2:e=>(0,o.jsx)(L,{as:"h2",...e}),h3:e=>(0,o.jsx)(L,{as:"h3",...e}),h4:e=>(0,o.jsx)(L,{as:"h4",...e}),h5:e=>(0,o.jsx)(L,{as:"h5",...e}),h6:e=>(0,o.jsx)(L,{as:"h6",...e}),admonition:_.A,mermaid:w.A};function z(e){let{children:n}=e;return(0,o.jsx)(s.x,{components:T,children:n})}},5195:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(6540),s=t(6342);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>o(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,s.p)(),v=c??x.tableOfContents.minHeadingLevel,j=u??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>l({toc:a(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:j});return d((0,i.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:j}}),[o,r,v,j])),(0,m.jsx)(f,{toc:g,className:t,linkClassName:o,...h})}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(8215),s=t(5195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,i.A)(a.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.A,{...t,linkClassName:o,linkActiveClassName:r})})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var i=t(8215),s=t(1312),a=t(5260),l=t(4848);function o(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(a.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);