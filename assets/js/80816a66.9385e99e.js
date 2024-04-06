"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"svg \u5165\u95e8",ID:"27973",date:"2021-08-14 15:56:47",categories:["program","charts"],tags:["program","charts"],authors:["lzw"],slug:"/27973",type:"docs"},s="svg \u793a\u4f8b",c={unversionedId:"data-visual/27973",id:"data-visual/27973",title:"svg \u5165\u95e8",description:"",source:"@site/codes/data-visual/27973.md",sourceDirName:"data-visual",slug:"/27973",permalink:"/docusaurus/codes/27973",draft:!1,tags:[{label:"program",permalink:"/docusaurus/codes/tags/program"},{label:"charts",permalink:"/docusaurus/codes/tags/charts"}],version:"current",frontMatter:{title:"svg \u5165\u95e8",ID:"27973",date:"2021-08-14 15:56:47",categories:["program","charts"],tags:["program","charts"],authors:["lzw"],slug:"/27973",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"canvas \u56fe\u7247\u538b\u7f29",permalink:"/docusaurus/codes/27972"},next:{title:"zrender \u5165\u95e8",permalink:"/docusaurus/codes/27975"}},l={},i=[],u=(p="HtmlDemo",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:i};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"svg-\u793a\u4f8b"},"svg \u793a\u4f8b"),(0,o.kt)(u,{mdxType:"HtmlDemo"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<svg width="100%" height="400">\n    \x3c!-- \u77e9\u5f62 --\x3e\n    <rect \n    width="50" \n    height="50" \n    style="fill:red;stroke-width:1px;stroke:rgb(0,0,0)" \n    />\n    \x3c!-- \u7ebf\u6761 --\x3e\n    <line\n        x1="100"\n        y1="100"\n        x2="250"\n        y2="75"\n        style="stroke: blue;stroke-width: 1;"\n    />\n    \x3c!-- \u7ebf\u6761 --\x3e\n    <line\n        x1="250"\n        y1="75"\n        x2="300"\n        y2="100"\n        style="stroke: blue;stroke-width: 1;"\n    />\n    \x3c!-- \u5706 --\x3e\n    <circle \n        cx="200"\n        cy="200"\n        r="50"\n        stroke="green"\n        stroke-width="2"\n        fill="red"\n    />\n    \x3c!-- \u70b9 --\x3e\n    <line\n        x1="300"\n        y1="300"\n        x2="301"\n        y2="301"\n        style="stroke: blue;stroke-width: 1;"\n    />\n</svg>\n'))))}m.isMDXComponent=!0}}]);