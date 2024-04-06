"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5141],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"React \u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236",ID:"29356",date:"2022-01-27 16:56:57",authors:["lzw"],categories:["frame","react-principle"],tags:["frame","react-principle"],slug:"/29356",type:"docs"},c="React \u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236",l={unversionedId:"react-principle/29356",id:"react-principle/29356",title:"React \u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236",description:"\u5408\u6210\u4e8b\u4ef6",source:"@site/docs/react-principle/29356.md",sourceDirName:"react-principle",slug:"/29356",permalink:"/docusaurus/docs/29356",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-principle/29356.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-principle",permalink:"/docusaurus/docs/tags/react-principle"}],version:"current",frontMatter:{title:"React \u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236",ID:"29356",date:"2022-01-27 16:56:57",authors:["lzw"],categories:["frame","react-principle"],tags:["frame","react-principle"],slug:"/29356",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React \u4e2d JSX \u7684\u672c\u8d28",permalink:"/docusaurus/docs/29354"},next:{title:"React \u7684 batchUpdate \u548c transaction \u673a\u5236",permalink:"/docusaurus/docs/29363"}},i={},u=[],p={toc:u};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-\u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236"},"React \u7684\u5408\u6210\u4e8b\u4ef6\u673a\u5236"),(0,a.kt)("p",null,"\u5408\u6210\u4e8b\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u4e8b\u4ef6\u6302\u8f7d\u5230 document\uff08\u6216 root \u5143\u7d20\uff09\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"event \u4e0d\u662f\u539f\u751f\u7684\uff0c\u662f SyntheticEvent \u5408\u6210\u4e8b\u4ef6\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u548c Vue \u4e8b\u4ef6\u4e0d\u540c\uff0c\u548c DOM \u4e8b\u4ef6\u4e5f\u4e0d\u540c")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"event \u662f SyntheticBaseEvent\uff0c\u6a21\u62df\u51fa\u6765 DOM \u4e8b\u4ef6\u6240\u6709\u80fd\u529b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6 event\nclickHandler3 = (e) => {\n  e.preventDefault() // \u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\n  e.stopPropagation() // \u963b\u6b62\u5192\u6ce1\n  console.log('target', e.target) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5373\u5f53\u524d\u5143\u7d20\u89e6\u53d1\n  console.log('current target', e.currentTarget) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5047\u8c61\uff01\n\n  // \u6ce8\u610f\uff0cevent \u5176\u5b9e\u5c31\u662f React \u5c01\u88c5\u7684\uff0c\u53ef\u4ee5\u770b __proto__.constructor \u662f SyntheticBaseEvent \u7ec4\u5408\u4e8b\u4ef6\n  console.log('event', e) // \u4e0d\u662f\u539f\u751f\u7684 Event\uff0c\u539f\u751f\u7684\u662f MouseEvent\n  console.log('event.__proto__.constructor', e.__proto__.constructor)\n\n  // \u539f\u751f event \u5982\u4e0b\uff0c\u5176 __proto__.constructor \u662f MouseEvent\n  console.log('nativeEvent', e.nativeEvent)\n  console.log('nativeEvent', e.nativeEvent.target) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5373\u5f53\u524d\u5143\u7d20\u89e6\u53d1\n  console.log('nativeEvent', e.nativeEvent.currentTarget) // \u6307\u5411 root \u5143\u7d20\n\n  // 1\u3001event \u662f SyntheticBaseEvent\uff0c\u6a21\u62df\u51fa\u6765 DOM \u4e8b\u4ef6\u6240\u6709\u80fd\u529b\n  // 2\u3001e.nativeEvent \u662f\u539f\u751f\u4e8b\u4ef6\u5bf9\u8c61\n  // 3\u3001\u6240\u6709\u7684\u4e8b\u4ef6\uff0c\u6302\u8f7d\u5230 root \u5143\u7d20\n  // 4\u3001\u548c DOM \u4e8b\u4ef6\u4e0d\u4e00\u6837\uff0c\u548c Vue \u4e8b\u4ef6\u4e5f\u4e0d\u4e00\u6837\n}\n")),(0,a.kt)("p",null,"\u6d41\u7a0b\u56fe\n",(0,a.kt)("img",{alt:"react",src:r(22567).Z,width:"1671",height:"858"})),(0,a.kt)("p",null,"\u4e3a\u4f55\u8981\u5408\u6210\u4e8b\u4ef6\u673a\u5236\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u517c\u5bb9\u6027\u548c\u8de8\u5e73\u53f0"),(0,a.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u5230 document\uff08\u6216 root \u5143\u7d20\uff09\uff0c\u51cf\u5c11\u5185\u5b58\u6d88\u8017\uff0c\u907f\u514d\u9891\u7e41\u89e3\u7ed1"),(0,a.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u4e8b\u4ef6\u7684\u7edf\u4e00\u7ba1\u7406\uff08\u5982\u4e8b\u7269\u673a\u5236\uff09")),(0,a.kt)("p",null,"React 17 \u4e8b\u4ef6\u7ed1\u5b9a\u5230 root \u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React 16 \u7ed1\u5b9a document"),(0,a.kt)("li",{parentName:"ul"},"React 17 \u4e8b\u4ef6\u7ed1\u5b9a\u5230 root \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u6837\u6539\u8fdb\u6709\u5229\u4e8e\u591a\u4e2a React \u7248\u672c\u5e76\u5b58\uff0c\u4f8b\u5982\u5fae\u524d\u7aef")))}s.isMDXComponent=!0},22567:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-20220127170423-07902542237bbcf19979df84f2b346e6.png"}}]);