"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"React \u4e8b\u4ef6\u548c bind this",ID:"29287",date:"2022-01-24 16:14:34",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29287",type:"docs"},i="React \u4e8b\u4ef6\u548c bind this",c={unversionedId:"react-use/29287",id:"react-use/29287",title:"React \u4e8b\u4ef6\u548c bind this",description:"\u4e8b\u4ef6",source:"@site/docs/react-use/29287.md",sourceDirName:"react-use",slug:"/29287",permalink:"/docusaurus/docs/29287",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-use/29287.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-use",permalink:"/docusaurus/docs/tags/react-use"}],version:"current",frontMatter:{title:"React \u4e8b\u4ef6\u548c bind this",ID:"29287",date:"2022-01-24 16:14:34",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29287",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"JSX \u57fa\u672c\u77e5\u8bc6\u70b9",permalink:"/docusaurus/docs/29284"},next:{title:"React \u8868\u5355\u77e5\u8bc6\u70b9",permalink:"/docusaurus/docs/29290"}},l={},s=[],u={toc:s};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-\u4e8b\u4ef6\u548c-bind-this"},"React \u4e8b\u4ef6\u548c bind this"),(0,a.kt)("p",null,"\u4e8b\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bind this"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8e event \u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u4f20\u9012\u81ea\u5b9a\u4e49\u53c2\u6570")),(0,a.kt)("p",null,"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\n\nclass ListDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: 'lzw.',\n      list: [\n        {\n          id: 'id-1',\n          title: '\u6807\u9898-1'\n        },\n        {\n          id: 'id-2',\n          title: '\u6807\u9898-2'\n        },\n        {\n          id: 'id-3',\n          title: '\u6807\u9898-3'\n        }\n      ]\n    }\n\n    // \u4fee\u6539\u65b9\u6cd5\u7684 this \u6307\u5411\n    this.clickHandler1 = this.clickHandler1.bind(this)\n  }\n\n  render() {\n    // this - \u4f7f\u7528 bind\n    // return <p onClick={this.clickHandler1}>\n    //   {this.state.name}\n    // </p>\n\n    // this - \u4f7f\u7528\u9759\u6001\u65b9\u6cd5\n    // return <p onClick={this.clickHandler2}>\n    //   {this.state.name}\n    // </p>\n\n    // event\n    // return <a href=\"https://lzwdot.github.io/docusaurus\" onClick={this.clickHandler3}>\n    //   click me\n    // </a>\n\n    // \u4f20\u53c2 - \u7528 bind(this,a,b)\n    return <ul>\n      {\n        this.state.list.map((item, index) => {\n          return <li key={item.id} onClick={this.clickHandler4.bind(this, item.id, item.title)}>\n            index {index}; title {item.title}\n          </li>\n        })\n      }\n    </ul>\n  }\n\n  clickHandler1() {\n    console.log('this', this) // this \u9ed8\u8ba4\u662f undefined\n    this.setState({\n      name: 'lzw.1'\n    })\n  }\n\n  // \u9759\u6001\u65b9\u6cd5\uff0cthis \u6307\u5411\u5f53\u524d\u5b9e\u4f8b\n  clickHandler2 = () => {\n    this.setState({\n      name: 'lzw.2'\n    })\n  }\n\n  // \u83b7\u53d6 event\n  clickHandler3 = (e) => {\n    e.preventDefault() // \u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\n    e.stopPropagation() // \u963b\u6b62\u5192\u6ce1\n    console.log('target', e.target) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5373\u5f53\u524d\u5143\u7d20\u89e6\u53d1\n    console.log('current target', e.currentTarget) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5047\u8c61\uff01\n\n    // \u6ce8\u610f\uff0cevent \u5176\u5b9e\u5c31\u662f React \u5c01\u88c5\u7684\uff0c\u53ef\u4ee5\u770b __proto__.constructor \u662f SyntheticBaseEvent \u7ec4\u5408\u4e8b\u4ef6\n    console.log('event', e) // \u4e0d\u662f\u539f\u751f\u7684 Event\uff0c\u539f\u751f\u7684\u662f MouseEvent\n    console.log('event.__proto__.constructor', e.__proto__.constructor)\n\n    // \u539f\u751f event \u5982\u4e0b\uff0c\u5176 __proto__.constructor \u662f MouseEvent\n    console.log('nativeEvent', e.nativeEvent)\n    console.log('nativeEvent', e.nativeEvent.target) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5373\u5f53\u524d\u5143\u7d20\u89e6\u53d1\n    console.log('nativeEvent', e.nativeEvent.currentTarget) // \u6307\u5411 root \u5143\u7d20\n\n    // 1\u3001event \u662f SyntheticBaseEvent\uff0c\u6a21\u62df\u51fa\u6765 DOM \u4e8b\u4ef6\u6240\u6709\u80fd\u529b\n    // 2\u3001e.nativeEvent \u662f\u539f\u751f\u4e8b\u4ef6\u5bf9\u8c61\n    // 3\u3001\u6240\u6709\u7684\u4e8b\u4ef6\uff0c\u6302\u8f7d\u5230 root \u5143\u7d20\n    // 4\u3001\u548c DOM \u4e8b\u4ef6\u4e0d\u4e00\u6837\uff0c\u548c Vue \u4e8b\u4ef6\u4e5f\u4e0d\u4e00\u6837\n  }\n\n  // \u63a5\u6536\u53c2\u6570\n  clickHandler4 = (id, title, e) => {\n    console.log(id, title)\n    console.log('event', e) // \u6700\u540e\u8ffd\u52a0 event \u53c2\u6570\u5373\u53ef\u4f7f\u7528\n  }\n}\n\nexport default ListDemo\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React 16 \u7ed1\u5b9a document"),(0,a.kt)("li",{parentName:"ul"},"React 17 \u4e8b\u4ef6\u7ed1\u5b9a\u5230 root \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u6837\u6539\u8fdb\u6709\u5229\u4e8e\u591a\u4e2a React \u7248\u672c\u5e76\u5b58\uff0c\u4f8b\u5982\u5fae\u524d\u7aef")),(0,a.kt)("p",null,"\u5927\u6982\u5c31\u662f\u8fd9\u6837\u7684 "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"react",src:n(155).Z,width:"1080",height:"727"})))}p.isMDXComponent=!0},155:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/react-945dd88ba1f47ecac1b9f27c15d8b312-9df2bcf4cbc351223541c46edc8e4fb9.png"}}]);