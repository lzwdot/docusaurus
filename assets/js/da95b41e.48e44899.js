"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[48945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=c(r),m=s,f=y["".concat(u,".").concat(m)]||y[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const o={title:"promise \u548c setTimeout \u7684\u987a\u5e8f !25819",ID:"25819",date:"2020-10-20 17:01:06",categories:["async","js-asyn"],tags:["async","js-asyn"],authors:["lzw"],slug:"/25819",type:"issues"},a="promise \u548c setTimeout \u7684\u987a\u5e8f",i={unversionedId:"async/25819",id:"async/25819",title:"promise \u548c setTimeout \u7684\u987a\u5e8f !25819",description:"\u5fae\u4efb\u52a1\u6267\u884c\u65f6\u673a\u6bd4\u5b8f\u4efb\u52a1\u8981\u65e9",source:"@site/issues/async/25819.md",sourceDirName:"async",slug:"/25819",permalink:"/docusaurus/issues/25819",draft:!1,tags:[{label:"async",permalink:"/docusaurus/issues/tags/async"},{label:"js-asyn",permalink:"/docusaurus/issues/tags/js-asyn"}],version:"current",frontMatter:{title:"promise \u548c setTimeout \u7684\u987a\u5e8f !25819",ID:"25819",date:"2020-10-20 17:01:06",categories:["async","js-asyn"],tags:["async","js-asyn"],authors:["lzw"],slug:"/25819",type:"issues"},sidebar:"tutorialSidebar",previous:{title:"async/await \u662f\u8bed\u6cd5\u7cd6\uff0c\u5f02\u6b65\u7684\u672c\u8d28\u8fd8\u662f\u56de\u8c03\u51fd\u6570 !25817",permalink:"/docusaurus/issues/25817"},next:{title:"async/await \u7684\u987a\u5e8f\u95ee\u9898 !25821",permalink:"/docusaurus/issues/25821"}},u={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"promise-\u548c-settimeout-\u7684\u987a\u5e8f"},"promise \u548c setTimeout \u7684\u987a\u5e8f"),(0,s.kt)("p",null,"\u5fae\u4efb\u52a1\u6267\u884c\u65f6\u673a\u6bd4\u5b8f\u4efb\u52a1\u8981\u65e9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"console.log(100)\n// \u5b8f\u4efb\u52a1\nsetTimeout(()=>{\n    console.log(200)\n})\n// \u5fae\u4efb\u52a1\nPromise.resolve().then(()=>{\n    console.log(300)\n})\nconsole.log(400)\n// 100\n// 400\n// 300\n// 200\n")))}p.isMDXComponent=!0}}]);