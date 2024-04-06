"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=u,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},i),{},{components:r})):n.createElement(f,o({ref:t},i))}));function d(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:u,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),u=(r(67294),r(3905));const a={title:"Vue-router \u4f7f\u7528",ID:"26946",date:"2020-11-12 15:05:24",categories:["frame","vuejs-use"],tags:["frame","vuejs-use"],authors:["lzw"],slug:"/26946",type:"docs"},o="Vue-router \u4f7f\u7528",s={unversionedId:"vuejs-use/26946",id:"vuejs-use/26946",title:"Vue-router \u4f7f\u7528",description:"Vue \u8def\u7531\u6a21\u5f0f",source:"@site/docs/vuejs-use/26946.md",sourceDirName:"vuejs-use",slug:"/26946",permalink:"/docusaurus/docs/26946",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs-use/26946.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs-use",permalink:"/docusaurus/docs/tags/vuejs-use"}],version:"current",frontMatter:{title:"Vue-router \u4f7f\u7528",ID:"26946",date:"2020-11-12 15:05:24",categories:["frame","vuejs-use"],tags:["frame","vuejs-use"],authors:["lzw"],slug:"/26946",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"Vuex \u7684\u4f7f\u7528",permalink:"/docusaurus/docs/26941"},next:{title:"Vue \u539f\u7406",permalink:"/docusaurus/docs/vuejs-principle/"}},l={},c=[],i={toc:c};function p(e){let{components:t,...r}=e;return(0,u.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"vue-router-\u4f7f\u7528"},"Vue-router \u4f7f\u7528"),(0,u.kt)("p",null,"Vue \u8def\u7531\u6a21\u5f0f"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"hash \u6a21\u5f0f\uff08\u9ed8\u8ba4\uff09\uff0c\u5982\uff1a",(0,u.kt)("a",{parentName:"li",href:"http://abc.com/#/user/10"},"http://abc.com/#/user/10")),(0,u.kt)("li",{parentName:"ul"},"H5 history \u6a21\u5f0f\uff0c\u5982 ",(0,u.kt)("a",{parentName:"li",href:"http://abc.com/user/20"},"http://abc.com/user/20")),(0,u.kt)("li",{parentName:"ul"},"\u540e\u8005\u9700\u8981 server \u7aef\u652f\u6301\uff0c\u56e0\u6b64\u65e0\u7279\u6b8a\u9700\u6c42\u53ef\u9009\u62e9\u524d\u8005")),(0,u.kt)("p",null,"\u5982 nginx \u914d\u7f6e"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"location / {\n  try_files $uri $uri/ /index.html;\n}\n")),(0,u.kt)("p",null,"Vue-router \u8def\u7531\u914d\u7f6e"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8def\u7531 ",(0,u.kt)("inlineCode",{parentName:"li"},"{path:'/user/:id',component:user}")),(0,u.kt)("li",{parentName:"ul"},"\u61d2\u52a0\u8f7d ",(0,u.kt)("inlineCode",{parentName:"li"},"component:()=>import('./Router')"))))}p.isMDXComponent=!0}}]);