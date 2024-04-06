"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(c,".").concat(k)]||m[k]||p[k]||l;return n?a.createElement(d,o(o({ref:t},i),{},{components:n})):a.createElement(d,o({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u8bf7\u63cf\u8ff0 event loop\uff08\u4e8b\u4ef6\u5faa\u73af/\u4e8b\u4ef6\u8f6e\u8be2\uff09\u7684\u673a\u5236\uff0c\u53ef\u753b\u56fe !25763",ID:"25763",date:"2020-10-19 14:45:00",categories:["async","js-asyn"],tags:["async","js-asyn"],authors:["lzw"],slug:"/25763",type:"issues"},o="\u8bf7\u63cf\u8ff0 event loop\uff08\u4e8b\u4ef6\u5faa\u73af/\u4e8b\u4ef6\u8f6e\u8be2\uff09\u7684\u673a\u5236\uff0c\u53ef\u753b\u56fe",s={unversionedId:"async/25763",id:"async/25763",title:"\u8bf7\u63cf\u8ff0 event loop\uff08\u4e8b\u4ef6\u5faa\u73af/\u4e8b\u4ef6\u8f6e\u8be2\uff09\u7684\u673a\u5236\uff0c\u53ef\u753b\u56fe !25763",description:"\u63a8\u8350\u9605\u8bfb\uff1ahttps://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",source:"@site/issues/async/25763.md",sourceDirName:"async",slug:"/25763",permalink:"/docusaurus/issues/25763",draft:!1,tags:[{label:"async",permalink:"/docusaurus/issues/tags/async"},{label:"js-asyn",permalink:"/docusaurus/issues/tags/js-asyn"}],version:"current",frontMatter:{title:"\u8bf7\u63cf\u8ff0 event loop\uff08\u4e8b\u4ef6\u5faa\u73af/\u4e8b\u4ef6\u8f6e\u8be2\uff09\u7684\u673a\u5236\uff0c\u53ef\u753b\u56fe !25763",ID:"25763",date:"2020-10-19 14:45:00",categories:["async","js-asyn"],tags:["async","js-asyn"],authors:["lzw"],slug:"/25763",type:"issues"},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u6b65",permalink:"/docusaurus/issues/async/"},next:{title:"\u5b8f\u4efb\u52a1 macroTask \u548c\u5fae\u4efb\u52a1 microTask !25811",permalink:"/docusaurus/issues/25811"}},c={},u=[],i={toc:u};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bf7\u63cf\u8ff0-event-loop\u4e8b\u4ef6\u5faa\u73af\u4e8b\u4ef6\u8f6e\u8be2\u7684\u673a\u5236\u53ef\u753b\u56fe"},"\u8bf7\u63cf\u8ff0 event loop\uff08\u4e8b\u4ef6\u5faa\u73af/\u4e8b\u4ef6\u8f6e\u8be2\uff09\u7684\u673a\u5236\uff0c\u53ef\u753b\u56fe"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u9605\u8bfb\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"},"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"event-loop",src:n(35970).Z,width:"1115",height:"803"})),(0,r.kt)("p",null,"event loop\uff08\u4e8b\u4ef6\u5faa\u73af/\u4e8b\u4ef6\u8f6e\u8be2\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JS \u662f\u5355\u7ebf\u7a0b\u8fd0\u884c\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u8981\u57fa\u4e8e\u56de\u8c03\u6765\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"event loop \u5c31\u662f\u5f02\u6b65\u56de\u8c03\u7684\u5b9e\u73b0\u539f\u7406")),(0,r.kt)("p",null,"JS \u5982\u4f55\u6267\u884c\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece\u524d\u5230\u540e\uff0c\u4e00\u884c\u4e00\u884c\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e00\u884c\u6267\u884c\u62a5\u9519\uff0c\u5219\u505c\u6b62\u4e0b\u9762\u4ee3\u7801\u7684\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5148\u6267\u884c\u5b8c\u540c\u6b65\u4ee3\u7801\uff0c\u518d\u6267\u884c\u5f02\u6b65")),(0,r.kt)("p",null,"event loop \u7684\u6267\u884c\u8fc7\u7a0b\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Hi')\nsetTimeout(function cb1(){\n    console.log('cb1') // cb1 \u5373 callback\n},5000)\nconsole.log('Bye')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u540c\u6b65\u4ee3\u7801\uff0c\u4e00\u884c\u4e00\u884c\u653e\u5728 Call Stack \u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u9047\u5230\u5f02\u6b65\uff0c\u4f1a\u5148\u201c\u8bb0\u5f55\u201d\u4e0b\uff0c\u7b49\u5f85\u65f6\u673a\uff08\u5b9a\u65f6\uff0c\u7f51\u7edc\u8bf7\u6c42\u7b49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u673a\u5230\u4e86\uff0c\u5c31\u79fb\u52a8\u5230 Callback Queue"),(0,r.kt)("li",{parentName:"ul"},"\u5982 Call Stack \u4e3a\u7a7a\uff08\u5373\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\uff09Event Loop \u5f00\u59cb\u5de5\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u8f6e\u8be2\u67e5\u627e Callback Queue\uff0c\u5982\u6709\u5219\u79fb\u52a8 Call Stack \u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u7136\u540e\u7ee7\u7eed\u8f6e\u8be2\u67e5\u627e\uff08\u6c38\u52a8\u673a\u4e00\u6837\uff09",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("img",{src:n(64179).Z,width:"1280",height:"805"}))),(0,r.kt)("p",null,"DOM \u4e8b\u4ef6\u548c event loop \u7684\u5173\u7cfb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JS \u662f\u5355\u7ebf\u7a0b\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\uff08setTimeout\uff0cajax\u7b49\uff09\u4f7f\u7528\u56de\u8c03\uff0c\u57fa\u4e8e event loop"),(0,r.kt)("li",{parentName:"ul"},"DOM \u4e8b\u4ef6\u4e5f\u4f7f\u7528\u56de\u8c03\uff0c\u57fa\u4e8e event loop")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<button id=\"btn\">\u70b9\u51fb</button>\n<script>\n    console.log('Hi')\n    document.getElementById('btn').addEventListener('click',function(e){\n        console.log('clicked')\n    })\n    console.log('Bye')\n<\/script>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u4ee3\u7801\u901a\u8fc7\u70b9\u51fb\u4e8b\u4ef6\u628a\u56de\u8c03\u51fd\u6570\u79fb\u52a8\u5230 Callback Queue")))}p.isMDXComponent=!0},64179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3989109606-95c820f61df16456f306562aca55914c.png"},35970:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventloop-20220112114734-a79513c6c7c4562116109b4b92022cef.png"}}]);