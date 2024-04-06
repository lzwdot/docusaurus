"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"React \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b",ID:"29365",date:"2022-01-28 11:34:57",authors:["lzw"],categories:["frame","react-principle"],tags:["frame","react-principle"],slug:"/29365",type:"docs"},i="React \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b",c={unversionedId:"react-principle/29365",id:"react-principle/29365",title:"React \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b",description:"\u95ee\u9898",source:"@site/docs/react-principle/29365.md",sourceDirName:"react-principle",slug:"/29365",permalink:"/docusaurus/docs/29365",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-principle/29365.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-principle",permalink:"/docusaurus/docs/tags/react-principle"}],version:"current",frontMatter:{title:"React \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b",ID:"29365",date:"2022-01-28 11:34:57",authors:["lzw"],categories:["frame","react-principle"],tags:["frame","react-principle"],slug:"/29365",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React \u7684 batchUpdate \u548c transaction \u673a\u5236",permalink:"/docusaurus/docs/29363"},next:{title:"React Hooks",permalink:"/docusaurus/docs/react-hooks/"}},o={},u=[{value:"\u56de\u987e\u77e5\u8bc6\u70b9",id:"\u56de\u987e\u77e5\u8bc6\u70b9",level:2},{value:"\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b",id:"\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b",level:2}],p={toc:u};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-\u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b"},"React \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSX \u5982\u4f55\u6e32\u67d3\u4e3a\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"setState \u4e4b\u540e\u5982\u4f55\u66f4\u65b0\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u6d41\u7a0b\u662f\u600e\u4e48\u6837")),(0,a.kt)("h2",{id:"\u56de\u987e\u77e5\u8bc6\u70b9"},"\u56de\u987e\u77e5\u8bc6\u70b9"),(0,a.kt)("p",null,"Vue \u7ec4\u4ef6\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vue",src:r(25901).Z,width:"1163",height:"893"})),(0,a.kt)("p",null,"JSX \u672c\u8d28\u548c vdom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JSX \u5373 createElement \u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u4f1a\u751f\u4ea7 vnode"),(0,a.kt)("li",{parentName:"ul"},"patch(elem,vnode) \u548c patch(vnode,newVnode)")),(0,a.kt)("p",null,"\u56de\u987e dirtyComponents "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"react",src:r(4562).Z,width:"1086",height:"868"})),(0,a.kt)("h2",{id:"\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b"},"\u6e32\u67d3\u548c\u66f4\u65b0\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u6e32\u67d3\u8fc7\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"props state"),(0,a.kt)("li",{parentName:"ul"},"render() \u751f\u6210 vnode"),(0,a.kt)("li",{parentName:"ul"},"patch(elem,vnode)\uff0c\u53ef\u80fd\u4e0d\u53eb patch \u540d\u5b57\uff0c\u4f46\u8fc7\u7a0b\u4e00\u6837")),(0,a.kt)("p",null,"\u66f4\u65b0\u8fc7\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setState(newState) --\x3e dirtyComponents\uff08\u53ef\u80fd\u6709\u5b50\u7ec4\u4ef6\uff09"),(0,a.kt)("li",{parentName:"ul"},"render() \u751f\u6210 newVnode"),(0,a.kt)("li",{parentName:"ul"},"patch(elem,newVnode)\uff0c\u53ef\u80fd\u4e0d\u53eb patch \u540d\u5b57\uff0c\u4f46\u8fc7\u7a0b\u4e00\u6837")),(0,a.kt)("p",null,"\u66f4\u65b0\u7684\u4e24\u4e2a\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u8ff0\u7684 patch \u88ab\u62c6\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a"),(0,a.kt)("li",{parentName:"ul"},"reconciliation \u9636\u6bb5 - \u6267\u884c diff \u7b97\u6cd5\uff0c\u7eaf JS \u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ul"},"commit \u9636\u6bb5 - \u5c06 diff \u7ed3\u679c\u6e32\u67d3 DOM ")),(0,a.kt)("p",null,"React fiber"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JS \u662f\u5355\u7ebf\u7a0b\uff0c\u4e14\u548c DOM  \u6e32\u67d3\u5171\u7528\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u7ec4\u4ef6\u8db3\u591f\u590d\u6742\uff0c\u7ec4\u4ef6\u66f4\u65b0\u65f6\u8ba1\u7b97\u548c\u6e32\u67d3\u90fd\u538b\u529b\u5927"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\u518d\u6709 DOM \u64cd\u4f5c\u9700\u6c42\uff08\u52a8\u753b\uff0c\u9f20\u6807\u62d6\u62fd\u7b49\uff09\uff0c\u5c06\u5361\u6bb5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848 fiber"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06 reconciliation \u9636\u6bb5\u8fdb\u884c\u4efb\u52a1\u62c6\u5206\uff08commit \u65e0\u6cd5\u62c6\u5206\uff09"),(0,a.kt)("li",{parentName:"ul"},"DOM \u9700\u8981\u6e32\u67d3\u65f6\u6682\u505c\uff0c\u7a7a\u95f2\u65f6\u6062\u590d"),(0,a.kt)("li",{parentName:"ul"},"window.requestIdleCallback \uff08\u5b58\u5728\u517c\u5bb9\u6027\uff09")))),(0,a.kt)("p",null,"\u5173\u4e8e fiber"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React \u5185\u90e8\u8fd0\u884c\u673a\u5236\uff0c\u5f00\u53d1\u8005\u4f53\u4f1a\u4e0d\u5230"),(0,a.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u80cc\u666f\u548c\u57fa\u672c\u6982\u5ff5\u5373\u53ef")))}s.isMDXComponent=!0},4562:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-20220128104511-5fc82534d3ab4c1edf0f1481059051e4.png"},25901:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vue-20220128113837-4dfa12a1d63526b6d1066ccf11a29527.png"}}]);