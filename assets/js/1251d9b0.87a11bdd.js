"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},i=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=c(t),f=r,m=i["".concat(l,".").concat(f)]||i[f]||d[f]||u;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,a=new Array(u);a[0]=i;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<u;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}i.displayName="MDXCreateElement"},23316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const u={title:"Vue3 \u548c Vue2 \u7684\u751f\u547d\u5468\u671f\u6709\u4ec0\u4e48\u533a\u522b",ID:"27897",date:"2021-05-13 13:29:18",categories:["frame","vuejs3-base"],tags:["frame","vuejs3-base"],authors:["lzw"],slug:"/27897",type:"docs"},a="Vue3 \u548c Vue2 \u7684\u751f\u547d\u5468\u671f\u6709\u4ec0\u4e48\u533a\u522b",s={unversionedId:"vuejs3-base/27897",id:"vuejs3-base/27897",title:"Vue3 \u548c Vue2 \u7684\u751f\u547d\u5468\u671f\u6709\u4ec0\u4e48\u533a\u522b",description:"Options API \u751f\u547d\u5468\u671f",source:"@site/docs/vuejs3-base/27897.md",sourceDirName:"vuejs3-base",slug:"/27897",permalink:"/docusaurus/docs/27897",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs3-base/27897.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs3-base",permalink:"/docusaurus/docs/tags/vuejs-3-base"}],version:"current",frontMatter:{title:"Vue3 \u548c Vue2 \u7684\u751f\u547d\u5468\u671f\u6709\u4ec0\u4e48\u533a\u522b",ID:"27897",date:"2021-05-13 13:29:18",categories:["frame","vuejs3-base"],tags:["frame","vuejs3-base"],authors:["lzw"],slug:"/27897",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"Vue3 \u5bf9 Vue2 \u6709\u4f18\u52bf\u66f4\u5feb",permalink:"/docusaurus/docs/27891"},next:{title:"\u5982\u4f55\u7406\u89e3 Composition API \u548c Options API",permalink:"/docusaurus/docs/29226"}},l={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vue3-\u548c-vue2-\u7684\u751f\u547d\u5468\u671f\u6709\u4ec0\u4e48\u533a\u522b"},"Vue3 \u548c Vue2 \u7684\u751f\u547d\u5468\u671f\u6709\u4ec0\u4e48\u533a\u522b"),(0,r.kt)("p",null,"Options API \u751f\u547d\u5468\u671f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"beforeDestroy \u6539\u4e3a beforeUnmount"),(0,r.kt)("li",{parentName:"ul"},"destroyed \u6539\u4e3a unmouted"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u6cbf\u7528 Vue2 \u7684\u751f\u547d\u5468\u671f")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"beforeCreate() {\n     console.log('beforeCreate')\n },\n created() {\n     console.log('created')\n },\n beforeMount() {\n     console.log('beforeMount')\n },\n mounted() {\n     console.log('mounted')\n },\n beforeUpdate() {\n     console.log('beforeUpdate')\n },\n updated() {\n     console.log('updated')\n },\n // beforeDestroy \u6539\u540d\n beforeUnmount() {\n     console.log('beforeUnmount')\n },\n // destroyed \u6539\u540d\n unmounted() {\n     console.log('unmounted')\n }\n")),(0,r.kt)("p",null,"\u6253\u5370\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"beforeCreate\ncreated\nbeforeMount\nmounted\nbeforeUpdate\nupdated\nbeforeUnmount\nunmounted\n")),(0,r.kt)("p",null,"Composition API \u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"\u6bd4\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'\nexport default {\n    // \u7b49\u4e8e beforeCreate \u548c created\n    setup() {\n        console.log('setup')\n\n        onBeforeMount(() => {\n            console.log('onBeforeMount')\n        })\n        onMounted(() => {\n            console.log('onMounted')\n        })\n        onBeforeUpdate(() => {\n            console.log('onBeforeUpdate')\n        })\n        onUpdated(() => {\n            console.log('onUpdated')\n        })\n        onBeforeUnmount(() => {\n            console.log('onBeforeUnmount')\n        })\n        onUnmounted(() => {\n            console.log('onUnmounted')\n        })\n\n    },\n}\n")),(0,r.kt)("p",null,"\u6253\u5370\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setup\nonBeforeMount\nonMounted\nonBeforeUpdate\nonUpdated\nonBeforeUnmount\nonUnmounted\n")))}d.isMDXComponent=!0}}]);