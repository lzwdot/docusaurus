"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55146],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),o=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=o(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return a?n.createElement(f,l(l({ref:e},p),{},{components:a})):n.createElement(f,l({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,l=new Array(c);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43681:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const c={title:"React \u7684 batchUpdate \u548c transaction \u673a\u5236",ID:"29363",date:"2022-01-28 09:46:33",authors:["lzw"],categories:["frame","react-principle"],tags:["frame","react-principle"],slug:"/29363",type:"docs"},l="React \u7684 batchUpdate \u548c transaction \u673a\u5236",i={unversionedId:"react-principle/29363",id:"react-principle/29363",title:"React \u7684 batchUpdate \u548c transaction \u673a\u5236",description:"setState \u548c batchUpdate",source:"@site/docs/react-principle/29363.md",sourceDirName:"react-principle",slug:"/29363",permalink:"/docusaurus/docs/29363",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-principle/29363.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-principle",permalink:"/docusaurus/docs/tags/react-principle"}],version:"current",frontMatter:{title:"React \u7684 batchUpdate \u548c transaction \u673a\u5236",ID:"29363",date:"2022-01-28 09:46:33",authors:["lzw"],categories:["frame","react-principle"],tags:["frame","react-principle"],slug:"/29363",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React \u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236",permalink:"/docusaurus/docs/29356"},next:{title:"React \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b",permalink:"/docusaurus/docs/29365"}},s={},o=[{value:"setState \u4e3b\u6d41\u7a0b",id:"setstate-\u4e3b\u6d41\u7a0b",level:2},{value:"batchUpdate \u673a\u5236",id:"batchupdate-\u673a\u5236",level:2},{value:"transaction \u4e8b\u7269\u673a\u5236",id:"transaction-\u4e8b\u7269\u673a\u5236",level:2}],p={toc:o};function u(t){let{components:e,...c}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-\u7684-batchupdate-\u548c-transaction-\u673a\u5236"},"React \u7684 batchUpdate \u548c transaction \u673a\u5236"),(0,r.kt)("p",null,"setState \u548c batchUpdate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5f02\u6b65\uff08\u666e\u901a\u4f7f\u7528\uff09\uff0c\u6709\u65f6\u540c\u6b65\uff08setTimeout\u3001DOM \u4e8b\u4ef6\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u65f6\u5408\u5e76\uff08\u5bf9\u8c61\u5f62\u5f0f\uff09\uff0c\u6709\u65f6\u4e0d\u5408\u5e76\uff08\u51fd\u6570\u5f62\u5f0f\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u8005\u6bd4\u8f83\u597d\u7406\u89e3\uff08\u50cf Object.assign\uff09\uff0c\u4e3b\u8981\u8bb2\u89e3\u524d\u8005")),(0,r.kt)("p",null,"\u6838\u5fc3\u8981\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setState \u4e3b\u6d41\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"batchUpdate \u673a\u5236"),(0,r.kt)("li",{parentName:"ul"},"transaction \u4e8b\u7269\u673a\u5236")),(0,r.kt)("h2",{id:"setstate-\u4e3b\u6d41\u7a0b"},"setState \u4e3b\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"react",src:a(4562).Z,width:"1086",height:"868"})),(0,r.kt)("p",null,"\u5de6\u8fb9\u5206\u652f - \u5f02\u6b65\u6d41\u7a0b\uff08isBatchingUpdates=true\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f00\u59cb\uff1a\u5904\u4e8e batchUpdate\n// isBatchingUpdates = true\nthis.setState({\n  count: this.state.count + 1\n})\nconsole.log('count', this.state.count) // \u5f02\u6b65\u7684\uff0c\u62ff\u4e0d\u5230\u6700\u65b0\u503c\n// \u7ed3\u675f\n// isBatchingUpdates = false\n")),(0,r.kt)("p",null," \u53f3\u8fb9\u5206\u652f - \u540c\u6b65\u6d41\u7a0b\uff08isBatchingUpdates=false\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// setTimeout \u4e2d setState \u662f\u540c\u6b65\u7684\n// \u5f00\u59cb\uff1a\u5904\u4e8e batchUpdate\n// isBatchingUpdates = true\nsetTimeout(() => {\n  // \u6b64\u65f6 isBatchingUpdates \u662f false\n  this.setState({\n    count: this.state.count + 1\n  })\n  console.log('count in setTimeout', this.state.count)\n})\n// \u7ed3\u675f\n// isBatchingUpdates = false\n")),(0,r.kt)("p",null,"setState \u5f02\u6b65\u8fd8\u662f\u540c\u6b65\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setState \u65e0\u6240\u8c13\u5f02\u6b65\u8fd8\u662f\u540c\u6b65"),(0,r.kt)("li",{parentName:"ul"},"\u770b\u662f\u5426\u80fd\u547d\u4e2d batchUpdate \u673a\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u5224\u65ad isBatchingUpdates \u6761\u4ef6")),(0,r.kt)("h2",{id:"batchupdate-\u673a\u5236"},"batchUpdate \u673a\u5236"),(0,r.kt)("p",null,"\u54ea\u4e9b\u80fd\u547d\u4e2d batchUpdate \u673a\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\uff08\u548c\u5b83\u8c03\u7528\u7684\u51fd\u6570\uff09"),(0,r.kt)("li",{parentName:"ul"},"React \u4e2d\u6ce8\u518c\u7684\u4e8b\u4ef6\uff08\u548c\u5b83\u8c03\u7528\u7684\u51fd\u6570\uff09"),(0,r.kt)("li",{parentName:"ul"},"React \u53ef\u4ee5\u201c\u7ba1\u7406\u201d\u7684\u5165\u53e3")),(0,r.kt)("p",null,"\u54ea\u4e9b\u4e0d\u80fd\u547d\u4e2d batchUpdate \u673a\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setTimeout setInterval \u7b49\uff08\u548c\u5b83\u8c03\u7528\u7684\u51fd\u6570\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u7684 DOM \u4e8b\u4ef6\uff08\u548c\u5b83\u8c03\u7528\u7684\u51fd\u6570\uff09"),(0,r.kt)("li",{parentName:"ul"},"React \u201c\u7ba1\u4e0d\u5230\u201d\u7684\u5165\u53e3")),(0,r.kt)("h2",{id:"transaction-\u4e8b\u7269\u673a\u5236"},"transaction \u4e8b\u7269\u673a\u5236"),(0,r.kt)("p",null,"\u6267\u884c\u8fc7\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"increase = () => {\n  // \u5f00\u59cb\uff1a\u5904\u4e8e batchUpdate\n  // isBatchingUpdates = true\n  \n  // \u5176\u4ed6\u64cd\u4f5c\n\n  // \u7ed3\u675f\n  // isBatchingUpdates = false\n}\n")),(0,r.kt)("p",null,"\u6d41\u7a0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"react",src:a(65744).Z,width:"1306",height:"917"})),(0,r.kt)("p",null,"\u6bd4\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"transaction.initialize() = function (){\n  console.log('initialize')\n}\ntransaction.close() = function (){\n  console.log('close')\n}\nfunction method(){\n  console.log('abc')\n}\n\ntransaction.perform(method)\n\n// initialize \n// abc\n// close\n")))}u.isMDXComponent=!0},4562:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/react-20220128104511-5fc82534d3ab4c1edf0f1481059051e4.png"},65744:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/react-20220128112454-7ffc89584b60905904a092297ae43b43.png"}}]);