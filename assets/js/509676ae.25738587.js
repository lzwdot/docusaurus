"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createContext({}),u=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=u(n),m=a,d=i["".concat(f,".").concat(m)]||i[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=i;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},47928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u5982\u4f55\u7406\u89e3 ref\u3001toRef \u548c toRefs",ID:"29228",date:"2022-01-20 14:43:34",authors:["lzw"],categories:["frame","vuejs3-base"],tags:["frame","vuejs3-base"],slug:"/29228",type:"docs"},s="\u5982\u4f55\u7406\u89e3 ref\u3001toRef \u548c toRefs",l={unversionedId:"vuejs3-base/29228",id:"vuejs3-base/29228",title:"\u5982\u4f55\u7406\u89e3 ref\u3001toRef \u548c toRefs",description:"ref\u3001toRef \u548c toRefs \u662f\u4ec0\u4e48",source:"@site/docs/vuejs3-base/29228.md",sourceDirName:"vuejs3-base",slug:"/29228",permalink:"/docusaurus/docs/29228",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/vuejs3-base/29228.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"vuejs3-base",permalink:"/docusaurus/docs/tags/vuejs-3-base"}],version:"current",frontMatter:{title:"\u5982\u4f55\u7406\u89e3 ref\u3001toRef \u548c toRefs",ID:"29228",date:"2022-01-20 14:43:34",authors:["lzw"],categories:["frame","vuejs3-base"],tags:["frame","vuejs3-base"],slug:"/29228",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7406\u89e3 Composition API \u548c Options API",permalink:"/docusaurus/docs/29226"},next:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u7528 ref\u3001toRef \u548c toRefs",permalink:"/docusaurus/docs/29232"}},f={},u=[{value:"ref \u662f\u4ec0\u4e48",id:"ref-\u662f\u4ec0\u4e48",level:2},{value:"toRef \u662f\u4ec0\u4e48",id:"toref-\u662f\u4ec0\u4e48",level:2},{value:"toRefs \u662f\u4ec0\u4e48",id:"torefs-\u662f\u4ec0\u4e48",level:2},{value:"ref toRef \u548ctoRefs \u7684\u6700\u4f73\u4f7f\u7528\u65b9\u5f0f",id:"ref-toref-\u548ctorefs-\u7684\u6700\u4f73\u4f7f\u7528\u65b9\u5f0f",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u7406\u89e3-reftoref-\u548c-torefs"},"\u5982\u4f55\u7406\u89e3 ref\u3001toRef \u548c toRefs"),(0,a.kt)("p",null,"ref\u3001toRef \u548c toRefs \u662f\u4ec0\u4e48"),(0,a.kt)("h2",{id:"ref-\u662f\u4ec0\u4e48"},"ref \u662f\u4ec0\u4e48"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u503c\u7c7b\u578b\u7684\u54cd\u5e94\u5f0f\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6a21\u677f\u548c reactive"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 .value \u4fee\u6539\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ref \u83b7\u53d6 dom")),(0,a.kt)("p",null,"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n  <p ref=\"elemRef\">ref demo {{ nameRef }} {{ state.age }}</p>\n</template>\n\n<script>\nimport {ref, reactive, onMounted} from 'vue'\n\nexport default {\n  name: \"Ref\",\n  setup() {\n    // \u503c\u7c7b\u578b \u54cd\u5e94\u5f0f\n    const nameRef = ref('lzw.')\n    const ageRef = ref(20)\n\n    const state = reactive({\n      name: nameRef,\n      age: ageRef\n    })\n\n    // \u901a\u8fc7 .value \u83b7\u53d6\u503c\u4fee\u6539\u503c\n    setTimeout(() => {\n      console.log('ageRef', ageRef.value)\n      ageRef.value = 25 // .value \u4fee\u6539\u503c\n      nameRef.value = 'lzw. A'\n    }, 2000)\n\n    // \u901a\u8fc7 ref \u83b7\u53d6 dom \u5143\u7d20\n    const elemRef = ref(null)\n    onMounted(() => {\n      console.log('elemRef', elemRef.value.innerHTML) // elemRef ref demo lzw. 20\n    })\n\n    return {\n      nameRef,\n      state,\n      elemRef\n    }\n  }\n}\n<\/script>\n")),(0,a.kt)("h2",{id:"toref-\u662f\u4ec0\u4e48"},"toRef \u662f\u4ec0\u4e48"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4e00\u4e2a\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff08reactive \u5c01\u88c5\uff09\u7684 prop\uff08\u5c5e\u6027\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a ref\uff0c\u5177\u6709\u54cd\u5e94\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u8005\u4fdd\u6301\u5f15\u7528\u5173\u7cfb")),(0,a.kt)("p",null,"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n  <p ref=\"elemRef\">toRef demo {{ state.name }}{{ state.age }} - {{ ageRef }}</p>\n</template>\n\n<script>\nimport {toRef, reactive} from 'vue'\n\nexport default {\n  name: \"Ref\",\n  setup() {\n    // \u5bf9\u8c61\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff0c\u4f7f\u7528 reactive\n    const state = reactive({\n      name: 'lzw.',\n      age: 20\n    })\n\n    // toRef \u5982\u679c\u7528\u4e8e\u975e\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u4ea7\u51fa\u7684\u7ed3\u679c\u4e0d\u5177\u5907\u54cd\u5e94\u5f0f\n    // const state = {\n    //   name: 'lzw.',\n    //   age: 20\n    // }\n\n    // \u54cd\u5e94\u5f0f\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff0c\u4f7f\u7528 toRef\n    const ageRef = toRef(state, 'age')\n    setTimeout(() => {\n      state.age = 25 // state.age \u548c ageRef \u4fdd\u6301\u5f15\u7528\u5173\u7cfb\n    }, 1000)\n    setTimeout(() => {\n      ageRef.value = 30  // state.age \u548c ageRef \u4fdd\u6301\u5f15\u7528\u5173\u7cfb\n    }, 1000)\n\n    return {\n      state,\n      ageRef\n    }\n  }\n}\n<\/script>\n")),(0,a.kt)("h2",{id:"torefs-\u662f\u4ec0\u4e48"},"toRefs \u662f\u4ec0\u4e48"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u54cd\u5e94\u662f\u5bf9\u8c61\uff08reactive \u5c01\u88c5\uff09\u8f6c\u4e3a\u666e\u901a\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u6bcf\u4e2a prop\uff08\u5c5e\u6027\uff09 \u90fd\u662f\u5bf9\u5e94\u7684 ref"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u8005\u4fdd\u6301\u5f15\u7528\u5173\u7cfb")),(0,a.kt)("p",null,"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n  <p ref=\"elemRef\">toRefs demo {{ name }} {{ age }}</p>\n</template>\n\n<script>\nimport {toRefs, reactive} from 'vue'\n\nexport default {\n  name: \"toRefs\",\n  setup() {\n    // \u5bf9\u8c61\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff0c\u4f7f\u7528 reactive\n    const state = reactive({\n      name: 'lzw.',\n      age: 20\n    })\n\n    // \u5c06\u54cd\u5e94\u5f0f\u5bf9\u8c61\u53d8\u4e3a\u666e\u901a\u5bf9\u8c61\uff0c\u540c\u65f6\u4fdd\u7559\u54cd\u5e94\u5f0f\n    const stateAsRefs = toRefs(state)\n\n    // \u6bcf\u4e2a\u5c5e\u6027\uff0c\u90fd\u662f ref \u5bf9\u8c61\n    // const {name: nameRef, age: ageRef} = stateAsRefs\n\n    setTimeout(() => {\n      state.age = 25\n    },1000)\n\n    return stateAsRefs\n  }\n}\n<\/script>\n")),(0,a.kt)("h2",{id:"ref-toref-\u548ctorefs-\u7684\u6700\u4f73\u4f7f\u7528\u65b9\u5f0f"},"ref toRef \u548ctoRefs \u7684\u6700\u4f73\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u5408\u5e76\u51fd\u6570\u8fd4\u56de\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u6bd4\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\u51fd\u6570\nfunction useFeatureX() {\n  const state = reactive({\n    x: 1,\n    y: 2\n  })\n\n  // \u8fd4\u56de\u65f6\u8f6c\u4e3a ref\n  return toRefs(state)\n}\n\nexport default {\n  setup() {\n    // \u53ef\u4ee5\u5728\u4e0d\u5931\u53bb\u54cd\u5e94\u6027\u7684\u60c5\u51b5\u4e0b\u7834\u574f\u7ed3\u6784\n    const {x, y} = useFeatureX()\n    return {x, y}\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528 reactive \u505a\u5bf9\u8c61\u7684\u54cd\u5e94\u5f0f\uff0c\u7528 ref \u505a\u503c\u7c7b\u578b\u54cd\u5e94\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"setup \u4e2d\u8fd4\u56de toRefs(state)\uff0c\u6216\u8005 toRef(state,'xxx')"),(0,a.kt)("li",{parentName:"ul"},"ref \u7684\u53d8\u91cf\u547d\u540d\u90fd\u7528 xxxRef"),(0,a.kt)("li",{parentName:"ul"},"\u5408\u5e76\u51fd\u6570\u8fd4\u56de\u54cd\u5e94\u5f0f\u5bf9\u8c61\u65f6\uff0c\u4f7f\u7528 toRefs")))}p.isMDXComponent=!0}}]);