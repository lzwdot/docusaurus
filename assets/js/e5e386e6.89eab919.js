"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=i(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,u(u({ref:t},l),{},{components:r})):n.createElement(d,u({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"react-router \u5982\u4f55\u914d\u7f6e\u61d2\u52a0\u8f7d !29400",ID:"29400",date:"2022-01-28 14:44:42",authors:["lzw"],categories:["frame","react-faq"],tags:["frame","react-faq"],slug:"/29400",type:"issues"},u="react-router \u5982\u4f55\u914d\u7f6e\u61d2\u52a0\u8f7d",s={unversionedId:"frame/29400",id:"frame/29400",title:"react-router \u5982\u4f55\u914d\u7f6e\u61d2\u52a0\u8f7d !29400",description:"",source:"@site/issues/frame/29400.md",sourceDirName:"frame",slug:"/29400",permalink:"/docusaurus/issues/29400",draft:!1,tags:[{label:"frame",permalink:"/docusaurus/issues/tags/frame"},{label:"react-faq",permalink:"/docusaurus/issues/tags/react-faq"}],version:"current",frontMatter:{title:"react-router \u5982\u4f55\u914d\u7f6e\u61d2\u52a0\u8f7d !29400",ID:"29400",date:"2022-01-28 14:44:42",authors:["lzw"],categories:["frame","react-faq"],tags:["frame","react-faq"],slug:"/29400",type:"issues"},sidebar:"tutorialSidebar",previous:{title:"redux \u5982\u4f55\u8fdb\u884c\u5f02\u6b65\u8bf7\u6c42 !29398",permalink:"/docusaurus/issues/29398"},next:{title:"PureComponent \u6709\u4f55\u533a\u522b !29402",permalink:"/docusaurus/issues/29402"}},c={},i=[],l={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-router-\u5982\u4f55\u914d\u7f6e\u61d2\u52a0\u8f7d"},"react-router \u5982\u4f55\u914d\u7f6e\u61d2\u52a0\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React, {Suspense, lazy} from "react";\nimport {BrowserRouter as Router, Switch, Route} from "react-router-dom";\n\nconst Home = lazy(() => import(\'./routes/Home\'))\nconst About = lazy(() => import(\'./routes/About\'))\nconst App = () => (\n  <Router>\n    <Suspense fallback={<div>Loading...</div>}>\n      <Switch>\n        <Route exact path="/" component={Home}></Route>\n        <Route path="/about" component={About}></Route>\n      </Switch>\n    </Suspense>\n  </Router>\n)\n')))}p.isMDXComponent=!0}}]);