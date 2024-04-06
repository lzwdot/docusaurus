"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44523],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=i(t),m=o,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(g,u(u({ref:r},c),{},{components:t})):n.createElement(g,u({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35781:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={title:"supervisor\u5b89\u88c5\u4ee5\u53ca\u914d\u7f6e\u5e38\u89c1\u95ee\u9898",ID:"20415",date:"2018-08-02 19:13:01",categories:["server","linux"],tags:["server","linux"],authors:["lzw"],slug:"/20415",type:"blog"},u=void 0,s={permalink:"/docusaurus/blog/20415",editUrl:"https://github.com/lzwdot/docusaurus/blog/2018/08-02-20415.md",source:"@site/blog/2018/08-02-20415.md",title:"supervisor\u5b89\u88c5\u4ee5\u53ca\u914d\u7f6e\u5e38\u89c1\u95ee\u9898",description:"1\u3001\u9996\u5148\u6211\u4eec\u8981\u660e\u786e\u95ee\u9898\u51fa\u5728supervisor\u4e0a\u8fd8\u662f\u542f\u52a8\u7684\u7a0b\u5e8f\u4e0a\uff0c\u53ef\u4ee5\u7528ps -ef | grep supervisord\u67e5\u770b\u662f\u5426\u542f\u52a8\uff0c\u5728\u7528ps\u67e5\u770b\u81ea\u5df1\u7684\u8fdb\u7a0b\u6709\u6ca1\u6709\u542f\u52a8\uff1b",date:"2018-08-02T19:13:01.000Z",formattedDate:"2018\u5e748\u67082\u65e5",tags:[{label:"server",permalink:"/docusaurus/blog/tags/server"},{label:"linux",permalink:"/docusaurus/blog/tags/linux"}],readingTime:4.3,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"supervisor\u5b89\u88c5\u4ee5\u53ca\u914d\u7f6e\u5e38\u89c1\u95ee\u9898",ID:"20415",date:"2018-08-02 19:13:01",categories:["server","linux"],tags:["server","linux"],authors:["lzw"],slug:"/20415",type:"blog"},prevItem:{title:"JMeter\u63a5\u53e3\u6d4b\u8bd5\uff0cResponse Data\u8fd4\u56de\u4e2d\u6587\u4e71\u7801\u548cjson\u6570\u636e\u8f6c\u7801",permalink:"/docusaurus/blog/21997"},nextItem:{title:"supervisor\u5b89\u88c5\u914d\u7f6e\u4ee5\u53caLaravel\u961f\u5217\u8bbe\u7f6e",permalink:"/docusaurus/blog/20413"}},l={authorsImageUrls:[void 0]},i=[],c={toc:i};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);