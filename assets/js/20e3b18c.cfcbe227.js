"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},i=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(t),v=o,m=d["".concat(s,".").concat(v)]||d[v]||p[v]||a;return t?r.createElement(m,u(u({ref:n},i),{},{components:t})):r.createElement(m,u({ref:n},i))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"Vue \u4e8b\u4ef6",ID:"26756",date:"2020-11-05 16:41:34",categories:["frame","vuejs-use"],tags:["frame","vuejs-use"],authors:["lzw"],slug:"/26756",type:"docs"},u="Vue \u4e8b\u4ef6",c={unversionedId:"vuejs-use/26756",id:"vuejs-use/26756",title:"Vue \u4e8b\u4ef6",description:"\u5982\u4f55\u4f20\u9012event \u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u3010\u89c2\u5bdf\u3011\u4e8b\u4ef6\u88ab\u7ed1\u5b9a\u5230\u54ea\u91cc\uff1f",source:"@site/docs/vuejs-use/26756.md",sourceDirName:"vuejs-use",slug:"/26756",permalink:"/docusaurus/docs/26756",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs-use/26756.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs-use",permalink:"/docusaurus/docs/tags/vuejs-use"}],version:"current",frontMatter:{title:"Vue \u4e8b\u4ef6",ID:"26756",date:"2020-11-05 16:41:34",categories:["frame","vuejs-use"],tags:["frame","vuejs-use"],authors:["lzw"],slug:"/26756",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"Vue \u5faa\u73af\uff08\u5217\u8868\uff09\u6e32\u67d3",permalink:"/docusaurus/docs/26752"},next:{title:"Vue \u8868\u5355",permalink:"/docusaurus/docs/26763"}},s={},l=[],i={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue-\u4e8b\u4ef6"},"Vue \u4e8b\u4ef6"),(0,o.kt)("p",null,"\u5982\u4f55\u4f20\u9012event \u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u3010\u89c2\u5bdf\u3011\u4e8b\u4ef6\u88ab\u7ed1\u5b9a\u5230\u54ea\u91cc\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n    <div>\n        <p>{{num}}</p>\n        <button @click=\"increment1\">+1</button>\n        <button @click=\"increment2(2, $event)\">+2</button>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            num: 0\n        }\n    },\n    methods: {\n        increment1(event) {\n            // eslint-disable-next-line\n            console.log('event', event, event.__proto__.constructor) // \u662f\u539f\u751f\u7684 event \u5bf9\u8c61\n            // eslint-disable-next-line\n            console.log(event.target)\n            // eslint-disable-next-line\n            console.log(event.currentTarget) // \u6ce8\u610f\uff0c\u4e8b\u4ef6\u662f\u88ab\u6ce8\u518c\u5230\u5f53\u524d\u5143\u7d20\u7684\uff0c\u548c React \u4e0d\u4e00\u6837\n            this.num++\n            // 1. event \u662f\u539f\u751f\u7684\n            // 2. \u4e8b\u4ef6\u88ab\u6302\u8f7d\u5230\u5f53\u524d\u5143\u7d20\n            // \u548c DOM \u4e8b\u4ef6\u4e00\u6837\n        },\n        increment2(val, event) {\n            // eslint-disable-next-line\n            console.log(event.target)\n            this.num = this.num + val\n        },\n        loadHandler() {\n            // do some thing\n        }\n    },\n    mounted() {\n        window.addEventListener('load', this.loadHandler)\n    },\n    beforeDestroy() {\n        //\u3010\u6ce8\u610f\u3011\u7528 vue \u7ed1\u5b9a\u7684\u4e8b\u4ef6\uff0c\u7ec4\u5efa\u9500\u6bc1\u65f6\u4f1a\u81ea\u52a8\u88ab\u89e3\u7ed1\n        // \u81ea\u5df1\u7ed1\u5b9a\u7684\u4e8b\u4ef6\uff0c\u9700\u8981\u81ea\u5df1\u9500\u6bc1\uff01\uff01\uff01\n        window.removeEventListener('load', this.loadHandler)\n    }\n}\n<\/script>\n")),(0,o.kt)("p",null,"\u4e8b\u4ef6\u4fee\u9970\u7b26"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\x3c!-- \u963b\u6b62\u5355\u51fb\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u64ad --\x3e\n<a v-on:click.stop="doThis"></a>\n\x3c!-- \u63d0\u4ea4\u4e8b\u4ef6\u4e0d\u518d\u91cd\u8f7d\u9875\u9762 --\x3e\n<form v-on:submit.prevent="onSubmit"></form>\n\x3c!-- \u4fee\u9970\u7b26\u53ef\u4ee5\u4e32\u8054 --\x3e\n<a v-on:click.stop.prevent="doThat"></a>\n\x3c!-- \u53ea\u6709\u4fee\u9970\u7b26 --\x3e\n<form v-on:submit.prevent></form>\n\x3c!-- \u6dfb\u52a0\u4e8b\u4ef6\u76d1\u542c\u5668\u65f6\u4f7f\u7528\u4e8b\u4ef6\u6355\u83b7\u6a21\u5f0f --\x3e\n\x3c!-- \u5373\u5185\u90e8\u5143\u7d20\u89e6\u53d1\u7684\u4e8b\u4ef6\u5148\u5728\u6b64\u5904\u7406\uff0c\u7136\u540e\u624d\u4ea4\u7531\u5185\u90e8\u5143\u7d20\u8fdb\u884c\u5904\u7406 --\x3e\n<div v-on:click.capture="doThis">...</div>\n\x3c!-- \u53ea\u5f53\u5728 event.target \u662f\u5f53\u524d\u5143\u7d20\u81ea\u8eab\u65f6\u89e6\u53d1\u5904\u7406\u51fd\u6570 --\x3e\n\x3c!-- \u5373\u4e8b\u4ef6\u4e0d\u662f\u4ece\u5185\u90e8\u5143\u7d20\u89e6\u53d1\u7684 --\x3e\n<div v-on:click.self="doThat">...</div>\n')),(0,o.kt)("p",null,"\u6309\u952e\u4fee\u9970\u7b26"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\x3c!-- \u5373\u4f7f Alt \u6216 Shift \u88ab\u4e00\u540c\u6309\u4e0b\u65f6\u4e5f\u4f1a\u89e6\u53d1 --\x3e\n<button v-on:click.ctrl="onClick">A</button>\n\x3c!-- \u6709\u4e14\u53ea\u6709 Ctrl \u88ab\u6309\u4e0b\u7684\u65f6\u5019\u624d\u89e6\u53d1 --\x3e\n<button v-on:click.ctrl.exact="onCtrlClick">A</button>\n\x3c!-- \u6ca1\u6709\u4efb\u4f55\u7cfb\u7edf\u4fee\u9970\u7b26\u88ab\u6309\u4e0b\u7684\u65f6\u5019\u624d\u89e6\u53d1 --\x3e\n<button v-on:click.exact="onClick">A</button>\n')))}p.isMDXComponent=!0}}]);