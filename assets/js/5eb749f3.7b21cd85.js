"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[61148],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={title:"Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f !29217",ID:"29217",date:"2022-01-19 16:32:14",authors:["lzw"],categories:["js-ts","js-faq"],tags:["js-ts","js-faq"],slug:"/29217",type:"issues"},o="Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f",l={unversionedId:"js-ts/29217",id:"js-ts/29217",title:"Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f !29217",description:"\u6709\u5e8f\u548c\u65e0\u5e8f\uff0c\u5148\u770b\u4e2a\u4f8b\u5b50",source:"@site/issues/js-ts/29217.md",sourceDirName:"js-ts",slug:"/29217",permalink:"/docusaurus/issues/29217",draft:!1,tags:[{label:"js-ts",permalink:"/docusaurus/issues/tags/js-ts"},{label:"js-faq",permalink:"/docusaurus/issues/tags/js-faq"}],version:"current",frontMatter:{title:"Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f !29217",ID:"29217",date:"2022-01-19 16:32:14",authors:["lzw"],categories:["js-ts","js-faq"],tags:["js-ts","js-faq"],slug:"/29217",type:"issues"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u6027\u80fd\u5982\u4f55\u4f18\u5316\uff1f\u4e00\u822c\u4ece\u54ea\u51e0\u4e2a\u65b9\u9762\u8003\u8651\uff1f !26719",permalink:"/docusaurus/issues/26719"},next:{title:"WeakMap \u548c WeakSet !29220",permalink:"/docusaurus/issues/29220"}},i={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"map-\u548c-set-\u6709\u5e8f\u548c\u65e0\u5e8f"},"Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f"),(0,a.kt)("p",null,"\u6709\u5e8f\u548c\u65e0\u5e8f\uff0c\u5148\u770b\u4e2a\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<p class=\"container\" style=\"color: red\" id=\"p1\">\n    <img src=\"xxx\" alt=\"xxx.png\">\n    <span>123</span>\n</p>\n<script>\n  // vdom \u865a\u62df dom - \u6a21\u62df\u771f\u662f\u7684 dom \u7ed3\u6784\n  const p = {\n    tag: 'p',\n    props: { // \u65e0\u5e8f\n      id: 'p1',\n      className: 'container',\n      style: 'color:red'\n    },\n    children: [ // \u6709\u5e8f\n      {\n        tag: 'img',\n        props: {\n          alt: 'xxx',\n          src: 'xxx.png'\n        }\n      },\n      {\n        tag: 'span',\n        children: [123]\n      }\n    ]\n  }\n  // js \u4e2d Object \u662f\u65e0\u5e8f\u7684\uff0cArray \u662f\u6709\u6548\u7684\n<\/script>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709\u5e8f\uff1a\u64cd\u4f5c\u6162"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u5e8f\uff1a\u64cd\u4f5c\u5feb\uff0c\u4f46\u65e0\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u7ed3\u5408\u4e24\u8005\u4f18\u70b9\u5462\uff1f - \u4e8c\u53c9\u6811\u3001\u53ca\u5176\u53d8\u79cd")),(0,a.kt)("p",null,"Map \u548c Object \u7684\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API \u4e0d\u540c\uff0cMap \u53ef\u4ee5\u4ee5\u4efb\u610f\u7c7b\u578b\u4e3a key"),(0,a.kt)("li",{parentName:"ul"},"Map \u662f\u6709\u5e8f\u7ed3\u6784\uff08\u91cd\u8981\uff09"),(0,a.kt)("li",{parentName:"ul"},"Map \u64cd\u4f5c\u540c\u6837\u5f88\u5feb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const obj1 = {\n  2: 'hello',\n  1: {x: 100},\n  3: 100,\n}\n\n// Object \u662f\u65e0\u5e8f\u7684\nconsole.log(Object.keys(obj1)) // ['1', '2', '3']\n\n// Object \u6709\u591a\u5feb\uff1f\nfor (let i = 0; i < 1000 * 10000; i++) {\n  obj1[i + ''] = i\n}\nconsole.time('obj find')\nobj1['2000000']\nconsole.timeEnd('obj find') // obj find: 0.0068359375 ms\n\n// Map Api: set,delete,has,forEach,size\nconst m = new Map([\n  ['key1', 'hello'],\n  ['key3', {x: 100}],\n  ['key2', 100],\n])\n\n// Map \u7684 key \u53ef\u4ee5\u4e3a\u4efb\u610f\u7c7b\u578b\nconst obj2 = {name: 'xxx'}\nm.set(obj2, 'object key')\n\nfunction fn() {\n}\n\nm.set(fn, 'fn key')\n\n// \u6bd4\u5982 obj1 \u548c obj2 \u5173\u8054\uff0c\u4f46\u662f\u6ca1\u6709\u5f15\u7528\u5173\u7cfb\uff0c\u4fdd\u6301\u72ec\u7acb\n// m.set(obj1, obj2)\n\n// Map \u662f\u6709\u5e8f\u7684\nm.forEach((value, key) => console.log(key, value)) // \u4fdd\u6301\u987a\u5e8f\u8f93\u51fa\n\n// Map \u6709\u591a\u5feb\uff1f\nfor (let i = 0; i < 1000 * 10000; i++) {\n  m.set(i + '', i)\n}\nconsole.time('map find')\nm.has('2000000')\nconsole.timeEnd('map find') // map find: 0.01416015625 ms\n")),(0,a.kt)("p",null,"Set \u548c Array \u7684\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API \u4e0d\u540c"),(0,a.kt)("li",{parentName:"ul"},"Set \u5143\u7d20\u4e0d\u80fd\u91cd\u590d"),(0,a.kt)("li",{parentName:"ul"},"Set \u662f\u65e0\u5e8f\u7ed3\u6784\uff0c\u64cd\u4f5c\u5f88\u5feb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3, 4]\nconst set = new Set([1, 2, 2, 3, 4])\n\n// Map Api: add,delete,has,forEach,\nset.forEach(val => console.log(val))\n\n// Set \u5143\u7d20\u662f\u4e0d\u80fd\u91cd\u590d\u7684\uff08\u6570\u7ec4\u53bb\u91cd\uff09\nconsole.log(set) // Set(4){1, 2, 3, 4}\n\n// Set \u662f\u65e0\u5e8f\u7684\uff08\u5feb\uff09\uff0carr \u662f\u6709\u5e8f\u7684\uff08\u6162\uff09\nfor (let i = 0; i < 100 * 10000; i++) {\n  arr.push(i)\n}\nconsole.time('arr unshift')\narr.unshift('a') // \u5bfc\u81f4\u6240\u6709\u5143\u7d20\u540e\u79fb\uff0c\u6240\u4ee5\u6162\nconsole.timeEnd('arr unshift') // arr unshift: 0.25390625 ms\nconsole.time('arr push')\narr.push('b')\nconsole.timeEnd('arr push') // arr push: 0.005859375 ms\nconsole.time('arr find')\narr.includes('20000')\nconsole.timeEnd('arr find') // arr find: 0.89794921875 ms\n\nfor (let i = 0; i < 100 * 10000; i++) {\n  set.add(i)\n}\nconsole.time('set add')\nset.add('a')\nconsole.timeEnd('set add') // set add: 0.00390625 ms\nconsole.time('set find')\nset.has('20000')\nconsole.timeEnd('set find') // set find: 0.005859375 ms\n")))}u.isMDXComponent=!0}}]);