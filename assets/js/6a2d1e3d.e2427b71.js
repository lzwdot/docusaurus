"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,u(u({ref:t},i),{},{components:r})):n.createElement(f,u({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"React-router \u7684\u4f7f\u7528",ID:"29343",date:"2022-01-27 11:46:10",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29343",type:"docs"},u="React-router \u7684\u4f7f\u7528",c={unversionedId:"react-use/29343",id:"react-use/29343",title:"React-router \u7684\u4f7f\u7528",description:"\u77e5\u8bc6\u70b9",source:"@site/docs/react-use/29343.md",sourceDirName:"react-use",slug:"/29343",permalink:"/docusaurus/docs/29343",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-use/29343.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-use",permalink:"/docusaurus/docs/tags/react-use"}],version:"current",frontMatter:{title:"React-router \u7684\u4f7f\u7528",ID:"29343",date:"2022-01-27 11:46:10",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29343",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"Redux \u7684\u4f7f\u7528",permalink:"/docusaurus/docs/29340"},next:{title:"React \u539f\u7406",permalink:"/docusaurus/docs/react-principle/"}},s={},l=[{value:"\u8def\u7531\u6a21\u5f0f",id:"\u8def\u7531\u6a21\u5f0f",level:2},{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",level:2}],i={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-router-\u7684\u4f7f\u7528"},"React-router \u7684\u4f7f\u7528"),(0,o.kt)("p",null,"\u77e5\u8bc6\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8def\u7531\u6a21   \u5f0f\uff08hash\uff0cH5 history\uff09\uff0c\u540c vue-router"),(0,o.kt)("li",{parentName:"ul"},"\u8def\u7531\u914d\u7f6e\uff08\u52a8\u6001\u8def\u7531\uff0c\u61d2\u52a0\u8f7d\uff09\uff0c\u540c vue-router")),(0,o.kt)("h2",{id:"\u8def\u7531\u6a21\u5f0f"},"\u8def\u7531\u6a21\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hash \u6a21\u5f0f\uff08\u9ed8\u8ba4\uff09\uff0c\u5982\uff1a",(0,o.kt)("a",{parentName:"li",href:"http://abc.com/#/user/10"},"http://abc.com/#/user/10")),(0,o.kt)("li",{parentName:"ul"},"H5 history \u6a21\u5f0f\uff0c\u5982 ",(0,o.kt)("a",{parentName:"li",href:"http://abc.com/user/20"},"http://abc.com/user/20")),(0,o.kt)("li",{parentName:"ul"},"\u540e\u8005\u9700\u8981 server \u7aef\u652f\u6301\uff0c\u56e0\u6b64\u65e0\u7279\u6b8a\u9700\u6c42\u53ef\u9009\u62e9\u524d\u8005")),(0,o.kt)("p",null,"\u5982 nginx \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"location / {\n  try_files $uri $uri/ /index.html;\n}\n")),(0,o.kt)("p",null,"\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n// hash \u6a21\u5f0f\nimport {HashRouter as Router,Switch,Route} from "react-router-dom";\n// H5 history \u6a21\u5f0f\n// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";\n\nfunction RouterComponent() {\n  return (\n    <Router>\n      <Switch>\n        {/*\u9996\u9875*/}\n        <Route exact path="/">\n          <Home />\n        </Route>\n        {/*\u52a8\u6001\u8def\u7531*/}\n        <Route path="/project/:id">\n          <Project />\n        </Route>\n        {/*\u9ed8\u8ba4\u8def\u7531*/}\n        <Route path="*">\n          <NotFound />\n        </Route>\n      </Switch>\n    </Router>\n  )\n}\n')),(0,o.kt)("h2",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),(0,o.kt)("p",null,"\u52a8\u6001\u8def\u7531"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {Link, useParams} from \"react-router-dom\";\n\nfunction Project() {\n  // \u83b7\u53d6 url \u53c2\u6570 \u5982\uff1a'project/100'\n  const {id} = useParams()\n  console.log('id', id)\n\n  return (\n    <div>\n      <Link to=\"/\">\u9996\u9875</Link>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"\u61d2\u52a0\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, {Suspense, lazy} from "react";\nimport {BrowserRouter as Router, Switch, Route} from "react-router-dom";\n\nconst Home = lazy(() => import(\'./routes/Home\'))\nconst About = lazy(() => import(\'./routes/About\'))\nconst App = () => (\n  <Router>\n    <Suspense fallback={<div>Loading...</div>}>\n      <Switch>\n        <Route exact path="/" component={Home}></Route>\n        <Route path="/about" component={About}></Route>\n      </Switch>\n    </Suspense>\n  </Router>\n)\n')))}p.isMDXComponent=!0}}]);