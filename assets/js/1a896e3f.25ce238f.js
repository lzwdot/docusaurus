"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[59557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(p,".").concat(d)]||m[d]||i[d]||s;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>i,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"SSR \u548c Tree-shaking \u7684\u4f18\u5316",ID:"29250",date:"2022-01-21 16:58:46",authors:["lzw"],categories:["frame","vuejs3-base"],tags:["frame","vuejs3-base"],slug:"/29250",type:"docs"},o="SSR \u548c Tree-shaking \u7684\u4f18\u5316",l={unversionedId:"vuejs3-base/29250",id:"vuejs3-base/29250",title:"SSR \u548c Tree-shaking \u7684\u4f18\u5316",description:"\u4e5f\u662f\u4f18\u5316\u624b\u6bb5",source:"@site/docs/vuejs3-base/29250.md",sourceDirName:"vuejs3-base",slug:"/29250",permalink:"/docusaurus/docs/29250",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs3-base/29250.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs3-base",permalink:"/docusaurus/docs/tags/vuejs-3-base"}],version:"current",frontMatter:{title:"SSR \u548c Tree-shaking \u7684\u4f18\u5316",ID:"29250",date:"2022-01-21 16:58:46",authors:["lzw"],categories:["frame","vuejs3-base"],tags:["frame","vuejs3-base"],slug:"/29250",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f HoistStatic \u548c CacheHandler",permalink:"/docusaurus/docs/29248"},next:{title:"Vite \u4e3a\u4ec0\u4e48\u542f\u52a8\u975e\u5e38\u5feb",permalink:"/docusaurus/docs/29256"}},p={},u=[{value:"SSR \u4f18\u5316",id:"ssr-\u4f18\u5316",level:2},{value:"Tree-shaking \u7684\u4f18\u5316",id:"tree-shaking-\u7684\u4f18\u5316",level:2}],c={toc:u};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssr-\u548c-tree-shaking-\u7684\u4f18\u5316"},"SSR \u548c Tree-shaking \u7684\u4f18\u5316"),(0,a.kt)("p",null,"\u4e5f\u662f\u4f18\u5316\u624b\u6bb5"),(0,a.kt)("h2",{id:"ssr-\u4f18\u5316"},"SSR \u4f18\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9759\u6001\u8282\u70b9\u76f4\u63a5\u8f93\u51fa\uff0c\u7ed5\u8fc7\u4e86 vdom"),(0,a.kt)("li",{parentName:"ul"},"\u52a8\u6001\u8282\u70b9\uff0c\u8fd8\u662f\u9700\u8981\u52a8\u6001\u6e32\u67d3")),(0,a.kt)("p",null,"\u8fd8\u662f\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://vue-next-template-explorer.netlify.app/"},"https://vue-next-template-explorer.netlify.app/")," \u8fd9\u4e2a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <span>hello vue3</span>\n  <span>hello vue3</span>\n  <span>hello vue3</span>\n  <span>{{ mgs }}</span>\n</div>\n")),(0,a.kt)("p",null,"\u751f\u6210 AST \u6811"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"\n\nexport function render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (_openBlock(), _createElementBlock("div", null, [\n    _createElementVNode("span", null, "hello vue3"),\n    _createElementVNode("span", null, "hello vue3"),\n    _createElementVNode("span", null, "hello vue3"),\n    _createElementVNode("span", null, _toDisplayString(_ctx.mgs), 1 /* TEXT */)\n  ]))\n}\n\n// Check the console for the AST\n')),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Options")," \u91cc\u52fe\u9009 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR"),"\uff0c AST \u6811\u53d8\u5316"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9759\u6001\u8282\u70b9\u76f4\u63a5\u8f93\u51fa\uff0c\u7ed5\u8fc7\u4e86 vdom")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { mergeProps as _mergeProps } from "vue"\nimport { ssrRenderAttrs as _ssrRenderAttrs, ssrInterpolate as _ssrInterpolate } from "vue/server-renderer"\n\nexport function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {\n  const _cssVars = { style: { color: _ctx.color }}\n  _push(`<div${\n    _ssrRenderAttrs(_mergeProps(_attrs, _cssVars))\n  }><span>hello vue3</span><span>hello vue3</span><span>hello vue3</span><span>${\n    _ssrInterpolate(_ctx.mgs)\n  }</span></div>`)\n}\n\n// Check the console for the AST\n')),(0,a.kt)("h2",{id:"tree-shaking-\u7684\u4f18\u5316"},"Tree-shaking \u7684\u4f18\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u65f6\uff0c\u6839\u636e\u4e0d\u540c\u7684\u60c5\u51b5\uff0c\u5f15\u5165\u4e0d\u540c\u7684 API")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u7528\u5230 reactive\uff0c\u7f16\u8bd1\u65f6\u53ea\u4f1a\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"reactive"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {toRefs, reactive} from 'vue'\n\nexport default { \n  setup() {\n    // \u5bf9\u8c61\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff0c\u4f7f\u7528 reactive\n    const state = reactive({\n      name: 'lzw.',\n      age: 20\n    })\n    return state\n  }\n}\n")))}i.isMDXComponent=!0}}]);