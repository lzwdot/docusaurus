"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=l(r),b=o,f=m["".concat(c,".").concat(b)]||m[b]||p[b]||a;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u89e3\u51b3chrome\u4e0d\u652f\u6301form.submit\u7684\u95ee\u9898",ID:"23600",date:"2019-08-14 17:50:40",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23600",type:"blog"},s=void 0,u={permalink:"/docusaurus/blog/23600",editUrl:"https://github.com/lzwdot/docusaurus/blog/2019/08-14-23600.md",source:"@site/blog/2019/08-14-23600.md",title:"\u89e3\u51b3chrome\u4e0d\u652f\u6301form.submit\u7684\u95ee\u9898",description:'\u6700\u7b80\u5355\u7684\u601d\u8def\uff0c\u4fee\u6539 type="button" \u6539\u6210 type="submit"',date:"2019-08-14T17:50:40.000Z",formattedDate:"2019\u5e748\u670814\u65e5",tags:[{label:"posts",permalink:"/docusaurus/blog/tags/posts"},{label:"js-css",permalink:"/docusaurus/blog/tags/js-css"}],readingTime:.265,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"\u89e3\u51b3chrome\u4e0d\u652f\u6301form.submit\u7684\u95ee\u9898",ID:"23600",date:"2019-08-14 17:50:40",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23600",type:"blog"},prevItem:{title:"\u6ed1\u52a8\u9519\u8bef\u63d0\u793a\uff1aUnable to preventDefault inside passive event listener due to target being treated as passive",permalink:"/docusaurus/blog/23656"},nextItem:{title:"Security AppScan Standard\u5e38\u89c1\u6f0f\u6d1e",permalink:"/docusaurus/blog/23583"}},c={authorsImageUrls:[void 0]},l=[],i={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'\u6700\u7b80\u5355\u7684\u601d\u8def\uff0c\u4fee\u6539 type="button" \u6539\u6210 type="submit"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<button type=\"button\" data-rel=\"submit\">\u63d0\u4ea4</button>\n$('button[data-rel=\"submit\"]').on('click', function () {\n    //\u9a8c\u8bc1\u6210\u529f\n    if(true){\n        //\u6ce8\u610f\uff0c\u9700\u8981\u5148\u89e3\u7ed1click\uff0c\u4e0d\u7136\u662f\u8fdb\u53bb\u6b7b\u5faa\u73af\n        $(this).attr('type', 'submit').off('click').trigger('click');\n    }\n}\n")))}p.isMDXComponent=!0}}]);