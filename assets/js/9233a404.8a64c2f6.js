"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=u(t),d=i,f=h["".concat(p,".").concat(d)]||h[d]||c[d]||a;return t?r.createElement(f,s(s({ref:n},l),{},{components:t})):r.createElement(f,s({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},93509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a={title:"LeetCode\uff1a215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20 !29460",ID:29460,date:"2022-02-13 11:52:26",authors:["lzw"],tags:["program","algorithm"],slug:"/29460",type:"issues"},s=void 0,o={unversionedId:"program/29460",id:"program/29460",title:"LeetCode\uff1a215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20 !29460",description:"\u4f7f\u7528\u6700\u5c0f\u5806\u65b9\u6cd5",source:"@site/issues/program/29460.md",sourceDirName:"program",slug:"/29460",permalink:"/docusaurus/issues/29460",draft:!1,tags:[{label:"program",permalink:"/docusaurus/issues/tags/program"},{label:"algorithm",permalink:"/docusaurus/issues/tags/algorithm"}],version:"current",frontMatter:{title:"LeetCode\uff1a215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20 !29460",ID:29460,date:"2022-02-13 11:52:26",authors:["lzw"],tags:["program","algorithm"],slug:"/29460",type:"issues"},sidebar:"tutorialSidebar",previous:{title:"LeetCode\uff1a43. \u5b57\u7b26\u4e32\u76f8\u4e58 !29459",permalink:"/docusaurus/issues/29459"},next:{title:"LeetCode\uff1a347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20 !29462",permalink:"/docusaurus/issues/29462"}},p={},u=[],l={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528\u6700\u5c0f\u5806\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * JavaScript \u5b9e\u73b0\uff1a\u6700\u5c0f\u5806\u7c7b\n * \u63d2\u5165\n * \u5220\u9664\n * \u8fd4\u56de\u5806\u5934\n * \u8fd4\u56de\u5806\u957f\n */\n\nclass MinHeap {\n    constructor() {\n        this.heap = []\n    }\n\n    swap(i1, i2) {\n        // \u4ea4\u6362\u4e24\u4e2a\u503c\n        const temp = this.heap[i1]\n        this.heap[i1] = this.heap[i2]\n        this.heap[i2] = temp\n    }\n\n    getParentIndex(i) {\n        // \u83b7\u53d6\u7236\u5143\u7d20\u7684\u7d22\u5f15\u503c (index-1)/2\n        // \u7c7b\u4f3c Math.floor((index-1/2))\n        return (i - 1) >> 1\n    }\n\n    getLeftIndex(i) {\n        // \u83b7\u53d6\u5de6\u5143\u7d20\u7684\u7d22\u5f15\u503c i*2+1\n        // \u7c7b\u4f3c Math.floor((index-1/2))\n        return i * 2 + 1\n    }\n\n    getRightIndex(i) {\n        // \u83b7\u53d6\u53f3\u5143\u7d20\u7684\u7d22\u5f15\u503c i*2+2\n        // \u7c7b\u4f3c Math.floor((index-1/2))\n        return i * 2 + 2\n    }\n\n    shiftUp(index) {\n        if (index === 0) return;\n\n        const parentIndex = this.getParentIndex(index)\n\n        // \u8f83\u5c0f\u7684\u503c \u4e0a\u79fb\n        if (this.heap[index] < this.heap[parentIndex]) {\n            this.swap(index, parentIndex)\n            this.shiftUp(parentIndex)\n        }\n    }\n\n    shiftDown(index) {\n        const leftIndex = this.getLeftIndex(index)\n        const rightIndex = this.getRightIndex(index)\n\n        // \u8f83\u5927\u7684\u503c \u4e0b\u79fb\n        if (this.heap[index] > this.heap[leftIndex]) {\n            this.swap(index, leftIndex)\n            this.shiftDown(leftIndex)\n        }\n\n        // \u8f83\u5927\u7684\u503c \u4e0b\u79fb\n        if (this.heap[index] > this.heap[rightIndex]) {\n            this.swap(index, rightIndex)\n            this.shiftDown(rightIndex)\n        }\n    }\n\n    insert(val) {\n        // \u63d2\u5165\u65b0\u503c\n        this.heap.push(val)\n        this.shiftUp(this.heap.length - 1)\n    }\n    pop() {\n        // \u5220\u9664\u503c\uff0c\u7528\u5806\u5c3e\u66ff\u6362\u5806\u9876\n        this.heap[0] = this.heap.pop()\n\n        // \u7136\u540e\u628a\u8f83\u5927\u503c\u4e0b\u79fb\n        this.shiftDown(0)\n    }\n    peek() {\n        // \u8fd4\u56de\u5806\u9876\n        return this.heap[0]\n    }\n\n    size() {\n        // \u8fd4\u56de\u5806\u5bb9\u91cf\n        return this.heap.length\n    }\n}\n\n/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar findKthLargest = function (nums, k) {\n    const heap = new MinHeap()\n\n    nums.forEach(n => {\n        heap.insert(n)\n        if (heap.size() > k) {\n            heap.pop()\n        }\n\n        console.log(heap)\n    })\n\n    return heap.peek()\n};\n")))}c.isMDXComponent=!0}}]);