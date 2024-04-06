"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||u;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<u;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>u,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const u={title:"Vue \u7ec4\u4ef6\u662f\u5982\u4f55\u6e32\u67d3\u548c\u66f4\u65b0\u7684",ID:"27116",date:"2020-12-03 15:46:00",categories:["frame","vuejs-principle"],tags:["frame","vuejs-principle"],authors:["lzw"],slug:"/27116",type:"docs"},l="Vue \u7ec4\u4ef6\u662f\u5982\u4f55\u6e32\u67d3\u548c\u66f4\u65b0\u7684",o={unversionedId:"vuejs-principle/27116",id:"vuejs-principle/27116",title:"Vue \u7ec4\u4ef6\u662f\u5982\u4f55\u6e32\u67d3\u548c\u66f4\u65b0\u7684",description:"\u521d\u6b21\u6e32\u67d3\u8fc7\u7a0b",source:"@site/docs/vuejs-principle/27116.md",sourceDirName:"vuejs-principle",slug:"/27116",permalink:"/docusaurus/docs/27116",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs-principle/27116.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs-principle",permalink:"/docusaurus/docs/tags/vuejs-principle"}],version:"current",frontMatter:{title:"Vue \u7ec4\u4ef6\u662f\u5982\u4f55\u6e32\u67d3\u548c\u66f4\u65b0\u7684",ID:"27116",date:"2020-12-03 15:46:00",categories:["frame","vuejs-principle"],tags:["frame","vuejs-principle"],authors:["lzw"],slug:"/27116",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"Vue \u7ec4\u4ef6\u53ef\u7528 render \u4ee3\u66ff template",permalink:"/docusaurus/docs/27062"},next:{title:"Vue \u7ec4\u4ef6\u662f\u5f02\u6b65\u6e32\u67d3\u7684",permalink:"/docusaurus/docs/27119"}},p={},i=[],c={toc:i};function s(e){let{components:t,...u}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue-\u7ec4\u4ef6\u662f\u5982\u4f55\u6e32\u67d3\u548c\u66f4\u65b0\u7684"},"Vue \u7ec4\u4ef6\u662f\u5982\u4f55\u6e32\u67d3\u548c\u66f4\u65b0\u7684"),(0,a.kt)("p",null,"\u521d\u6b21\u6e32\u67d3\u8fc7\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89e3\u6790\u6a21\u677f\u4e3a render \u51fd\u6570\uff08\u6216\u5728\u5f00\u53d1\u73af\u5883\u5df2\u5b8c\u6210\uff0cvue-loader\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u54cd\u5e94\u5f0f\uff0c\u76d1\u542c data \u5c5e\u6027 getter setter"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884crender \u51fd\u6570\u4f1a\u89e6\u53d1 getter\uff0c\u751f\u6210 vnode\uff0c\u6267\u884c diff \u7b97\u6cd5\u4e2d\u7684patch(elem,vnode)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n    <p>{{message}}</p>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                message:'hello', // \u4f1a\u89e6\u53d1 get\n                city:'\u6df1\u5733' // \u4e0d\u4f1a\u89e6\u53d1 get\uff0c\u56e0\u4e3a\u6a21\u677f\u6ca1\u7528\u5230\uff0c\u548c\u89c6\u56fe\u6ca1\u6709\u5173\u7cfb\n            }\n        }\n    }\n<\/script>\n")),(0,a.kt)("p",null,"\u66f4\u65b0\u8fc7\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539 data\uff0c\u89e6\u53d1 setter\uff08\u6b64\u524d\u5728 getter \u4e2d\u5df2\u88ab\u76d1\u542c\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u6267\u884c render \u51fd\u6570\uff0c\u751f\u6210 newVnode"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c diff \u7b97\u6cd5\u4e2d\u7684 patch(vnode,newVnode)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(83224).Z,width:"1200",height:"750"})),(0,a.kt)("p",null,"\u66f4\u8be6\u60c5\u7684\u63cf\u8ff0\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/45081605"},"https://zhuanlan.zhihu.com/p/45081605")))}s.isMDXComponent=!0},83224:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3672746512-a2a2377db4c43901cf133853896b2293.png"}}]);