"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u6ed1\u52a8\u9519\u8bef\u63d0\u793a\uff1aUnable to preventDefault inside passive event listener due to target being treated as passive",ID:"23656",date:"2019-08-23 11:12:49",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23656",type:"blog"},s=void 0,l={permalink:"/docusaurus/blog/23656",editUrl:"https://github.com/lzwdot/docusaurus/blog/2019/08-23-23656.md",source:"@site/blog/2019/08-23-23656.md",title:"\u6ed1\u52a8\u9519\u8bef\u63d0\u793a\uff1aUnable to preventDefault inside passive event listener due to target being treated as passive",description:"\u5173\u4e8e\u8fd9\u4e2a\u9519\u8bef\u63d0\u793a\u7f51\u4e0a\u7684\u6587\u7ae0\u5f88\u591a\uff0c\u6839\u636e\u641c\u7d22\u548c\u81ea\u5df1\u6d4b\u8bd5\u7684\u7ed3\u679c\u60c5\u51b5\uff0c\u5229\u7528touch-action\u65b9\u6cd5\u89e3\u51b3\u6bd4\u8f83\u7a33\u7684\u4e00\u79cd\uff1a",date:"2019-08-23T11:12:49.000Z",formattedDate:"2019\u5e748\u670823\u65e5",tags:[{label:"posts",permalink:"/docusaurus/blog/tags/posts"},{label:"js-css",permalink:"/docusaurus/blog/tags/js-css"}],readingTime:.835,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"\u6ed1\u52a8\u9519\u8bef\u63d0\u793a\uff1aUnable to preventDefault inside passive event listener due to target being treated as passive",ID:"23656",date:"2019-08-23 11:12:49",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23656",type:"blog"},prevItem:{title:"\u4ece\u96f6\u5f00\u59cb\u914d\u7f6evue.js\u7684webpack\u5f00\u53d1\u73af\u5883",permalink:"/docusaurus/blog/23661"},nextItem:{title:"\u89e3\u51b3chrome\u4e0d\u652f\u6301form.submit\u7684\u95ee\u9898",permalink:"/docusaurus/blog/23600"}},u={authorsImageUrls:[void 0]},c=[],i={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e2a\u9519\u8bef\u63d0\u793a\u7f51\u4e0a\u7684\u6587\u7ae0\u5f88\u591a\uff0c\u6839\u636e\u641c\u7d22\u548c\u81ea\u5df1\u6d4b\u8bd5\u7684\u7ed3\u679c\u60c5\u51b5\uff0c\u5229\u7528touch-action\u65b9\u6cd5\u89e3\u51b3\u6bd4\u8f83\u7a33\u7684\u4e00\u79cd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"html {\n    touch-action: none;\n}\n")),(0,a.kt)("p",null,"\u8fd8\u6709\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f\u4f7f\u7528passive:false\uff0c\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"document.addEventListener('touchmove',function(e){//\n    e.preventDefault();\n},{\n    passive:false\n}) \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u6bb5\u4ee3\u7801\u672c\u6765\u53ea\u662f\u89e3\u51b3\u9519\u8bef\u63d0\u793a\u95ee\u9898\uff0c\u6709\u6ca1\u6709\u8ddf\u6211\u4e00\u6837\uff0c\u4ee5\u4e3a\u662f\u89e3\u51b3\u65b9\u6848\uff0c\u5c31\u76f4\u63a5\u590d\u5236\u4e86\uff0c\u7136\u540e\u9875\u9762\u4e0d\u52a8\u4e86\uff0c\u53c8\u5230\u5904\u641c\u7d22... ?")),(0,a.kt)("p",null,"\u5176\u5b9e\u8fd9\u4e2a passive:false \u5c31\u662f\u544a\u8bc9\u6d4f\u89c8\u5668\uff0c\u8981\u9a6c\u4e0a\u4f7f\u7528 e.preventDefault() \u6765\u963b\u6b62\u4e86 touchmove \u9ed8\u8ba4\u884c\u4e3a\uff08\u65e2\u6ed1\u52a8\u884c\u4e3a\uff09\uff0c\u6240\u4ee5\uff0c\u51fa\u73b0\u9875\u9762\u65e0\u6cd5\u6ed1\u52a8\u5c5e\u4e8e\u6b63\u5e38"))}p.isMDXComponent=!0}}]);