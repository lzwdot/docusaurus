"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[72705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"Vue \u52a8\u6001\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",ID:"26902",date:"2020-11-11 17:08:24",categories:["frame","vuejs-use"],tags:["frame","vuejs-use"],authors:["lzw"],slug:"/26902",type:"docs"},u="Vue \u52a8\u6001\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",s={unversionedId:"vuejs-use/26902",id:"vuejs-use/26902",title:"Vue \u52a8\u6001\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",description:"\u52a8\u6001\u7ec4\u4ef6",source:"@site/docs/vuejs-use/26902.md",sourceDirName:"vuejs-use",slug:"/26902",permalink:"/docusaurus/docs/26902",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs-use/26902.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs-use",permalink:"/docusaurus/docs/tags/vuejs-use"}],version:"current",frontMatter:{title:"Vue \u52a8\u6001\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",ID:"26902",date:"2020-11-11 17:08:24",categories:["frame","vuejs-use"],tags:["frame","vuejs-use"],authors:["lzw"],slug:"/26902",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"Vue \u7684 slot \u662f\u4ec0\u4e48\uff08\u9ad8\u7ea7\uff09",permalink:"/docusaurus/docs/26893"},next:{title:"Vue \u5f02\u6b65\u52a0\u8f7d\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",permalink:"/docusaurus/docs/26919"}},c={},i=[],l={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue-\u52a8\u6001\u7ec4\u4ef6\u9ad8\u7ea7"},"Vue \u52a8\u6001\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09"),(0,a.kt)("p",null,"\u52a8\u6001\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},':is="component-name"')," \u7684\u7528\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u6839\u636e\u6570\u636e\uff0c\u52a8\u6001\u6e32\u67d3\u7684\u573a\u666f\u3002\u5373\u7ec4\u4ef6\u7c7b\u578b\u4e0d\u786e\u5b9a")),(0,a.kt)("p",null,"\u4e3e\u4f8b\u4e00\u4e2a\u52a8\u6001\u7ec4\u4ef6 Dynamic.vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n    <div>\n        \u52a8\u6001\u7ec4\u4ef6\n    </div>\n</template>\n<script>\n    export default {\n        name: "Dynamic"\n    }\n<\/script> \n')),(0,a.kt)("p",null,"\u901a\u8fc7\u52a8\u6001\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},'<componet :is="DynamicName"/>')," \u6765\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n    <div>\n        \x3c!--\u52a8\u6001\u7ec4\u4ef6--\x3e\n        <componet :is=\"DynamicName\"/>\n        <div v-for=\"(val,key) in newsData\" :key=\"key\">\n            <componet :is=\"val.type\"/>\n        </div>\n    </div>\n</template>\n<script>\n    import Dynamic from './Dynamic'\n    export default {\n        name: \"index\",\n        components: {\n            Dynamic\n        },\n        data() {\n            return {\n                DynamicName: 'Dynamic',\n                newsData: {\n                    1: {\n                        type: 'text'\n                    },\n                    2: {\n                        type: 'image'\n                    },\n                    3: {\n                        type: 'video'\n                    }\n                }\n            }\n        }\n    }\n<\/script> \n")))}p.isMDXComponent=!0}}]);