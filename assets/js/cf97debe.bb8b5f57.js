"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[91839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,s(s({ref:t},i),{},{components:n})):r.createElement(m,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Hooks \u4f7f\u7528\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",ID:"29452",date:"2022-01-29 15:09:05",authors:["lzw"],categories:["frame","react-hooks"],tags:["frame","react-hooks"],slug:"/29452",type:"docs"},s="Hooks \u4f7f\u7528\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",c={unversionedId:"react-hooks/29452",id:"react-hooks/29452",title:"Hooks \u4f7f\u7528\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",description:"\u51e0\u70b9\u6ce8\u610f\u4e8b\u9879",source:"@site/docs/react-hooks/29452.md",sourceDirName:"react-hooks",slug:"/29452",permalink:"/docusaurus/docs/29452",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-hooks/29452.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-hooks",permalink:"/docusaurus/docs/tags/react-hooks"}],version:"current",frontMatter:{title:"Hooks \u4f7f\u7528\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",ID:"29452",date:"2022-01-29 15:09:05",authors:["lzw"],categories:["frame","react-hooks"],tags:["frame","react-hooks"],slug:"/29452",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React Hooks \u7ec4\u4ef6\u903b\u8f91\u590d\u7528",permalink:"/docusaurus/docs/29450"},next:{title:"Vue \u5b66\u4e60",permalink:"/docusaurus/docs/vue-study/"}},u={},l=[{value:"useState \u521d\u59cb\u5316\u503c\uff0c\u53ea\u6709\u7b2c\u4e00\u6b21\u6709\u6548",id:"usestate-\u521d\u59cb\u5316\u503c\u53ea\u6709\u7b2c\u4e00\u6b21\u6709\u6548",level:2},{value:"useEffect \u5185\u90e8\u4e0d\u80fd\u4fee\u6539 state",id:"useeffect-\u5185\u90e8\u4e0d\u80fd\u4fee\u6539-state",level:2},{value:"useEffect \u53ef\u80fd\u51fa\u73b0\u6b7b\u5faa\u73af",id:"useeffect-\u53ef\u80fd\u51fa\u73b0\u6b7b\u5faa\u73af",level:2}],i={toc:l};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hooks-\u4f7f\u7528\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879"},"Hooks \u4f7f\u7528\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u51e0\u70b9\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("h2",{id:"usestate-\u521d\u59cb\u5316\u503c\u53ea\u6709\u7b2c\u4e00\u6b21\u6709\u6548"},"useState \u521d\u59cb\u5316\u503c\uff0c\u53ea\u6709\u7b2c\u4e00\u6b21\u6709\u6548"),(0,a.kt)("p",null,"\u76f4\u63a5\u770b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {useState} from \"react\";\n\n// \u5b50\u7ec4\u4ef6\nfunction Child({userInfo}) {\n  // render: \u521d\u59cb\u5316 state\n  // re-render: \u53ea\u6062\u590d\u521d\u59cb\u5316\u7684 state \u503c\uff0c\u4e0d\u4f1a\u518d\u91cd\u65b0\u8bbe\u7f6e\u65b0\u7684\u503c\n  // \u53ea\u80fd\u7528 setName \u4fee\u6539\n  const [name, setName] = useState(userInfo.name)\n\n  return <div>\n    <p>child, props name:{userInfo.name}</p>\n    <p>child, state name:{name}</p>\n  </div>\n}\n\nfunction UseStateTrap() {\n  const [name, setName] = useState('lzw')\n  const userInfo = {name}\n\n  return <div>\n    <div>\n      parent &nbsp;\n      <button onClick={() => setName('\u5f20\u4e09')}>setName</button>\n    </div>ds\n    <Child userInfo={userInfo}/>\n  </div>\n}\n\nexport default UseStateTrap\n")),(0,a.kt)("p",null,"\u521d\u59cb\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"child, props name:lzw\nchild, state name:lzw\n")),(0,a.kt)("p",null,"\u70b9\u51fb setName \u540e\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"child, props name:\u5f20\u4e09\nchild, state name:lzw\n")),(0,a.kt)("h2",{id:"useeffect-\u5185\u90e8\u4e0d\u80fd\u4fee\u6539-state"},"useEffect \u5185\u90e8\u4e0d\u80fd\u4fee\u6539 state"),(0,a.kt)("p",null,"\u76f4\u63a5\u770b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {useEffect, useState} from \"react\";\n\nfunction UseEffectChangeState() {\n  const [count, setCount] = useState(0)\n\n  // \u6a21\u62df DidMount\n  useEffect(() => {\n    console.log('useEffect...', count)\n\n    // \u5b9a\u65f6\u4efb\u52a1\n    const timer = setInterval(() => {\n      console.log('setInterval...', count)\n      setCount(count + 1)\n    }, 1000)\n\n    // \u6e05\u9664\u5b9a\u65f6\u4efb\u52a1\n    return () => clearInterval(timer)\n  }, []) // \u4f9d\u8d56\u662f []\n\n  // \u4f9d\u8d56\u662f [] \u65f6\uff1a re-render \u4e0d\u4f1a\u91cd\u65b0\u6267\u884c effect \u51fd\u6570\n  // \u6ca1\u6709\u4f9d\u8d56\uff1are-render \u4f1a\u91cd\u65b0\u6267\u884c effect \u51fd\u6570\n\n  return <div>count: {count}</div>\n}\n\nexport default UseEffectChangeState\n")),(0,a.kt)("p",null,"\u63a7\u5236\u53f0\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"useEffect... 0\nsetInterval... 0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {useEffect, useState, useRef} from \"react\";\n\nfunction UseEffectChangeState() {\n  const [count, setCount] = useState(0)\n\n  // \u6a21\u62df DidMount\n  let countRef = useRef(0)//\u89e3\u51b3\u529e\u6cd5\n  useEffect(() => {\n    console.log('useEffect...', count)\n\n    // \u5b9a\u65f6\u4efb\u52a1\n    const timer = setInterval(() => {\n      // console.log('setInterval...', count)\n      // setCount(count + 1)\n      //\u89e3\u51b3\u529e\u6cd5-----\n      console.log('setInterval...', countRef.current)\n      setCount(++countRef.current)\n      //\u89e3\u51b3\u529e\u6cd5-----\n    }, 1000)\n\n    // \u6e05\u9664\u5b9a\u65f6\u4efb\u52a1\n    return () => clearInterval(timer)\n  }, []) // \u4f9d\u8d56\u662f []\n\n  // \u4f9d\u8d56\u662f [] \u65f6\uff1a re-render \u4e0d\u4f1a\u91cd\u65b0\u6267\u884c effect \u51fd\u6570\n  // \u6ca1\u6709\u4f9d\u8d56\uff1are-render \u4f1a\u91cd\u65b0\u6267\u884c effect \u51fd\u6570\n\n  return <div>count: {count}</div>\n}\n\nexport default UseEffectChangeState\n")),(0,a.kt)("h2",{id:"useeffect-\u53ef\u80fd\u51fa\u73b0\u6b7b\u5faa\u73af"},"useEffect \u53ef\u80fd\u51fa\u73b0\u6b7b\u5faa\u73af"),(0,a.kt)("p",null,"\u6b7b\u5faa\u73af\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {useState, useEffect} from \"react\";\nimport axios from \"axios\";\n\n// axios \u8fd4\u9001\u7f51\u7edc\u8bf7\u6c42\nfunction useAxios(url, config = {}) {\n  const [loading, setLoading] = useState(false)\n  const [data, setData] = useState()\n  const [error, setError] = useState()\n\n  useEffect(() => {\n      // \u5229\u7528 axios \u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\n      setLoading(true)\n      axios.get(url) // \u53d1\u9001\u4e00\u4e2a get \u8bf7\u6c42\n        .then(res => setData(res))\n        .catch(err => setError(err))\n        .finally(() => setLoading(false))\n    },\n    [url] // \u53ea\u80fd\u4f7f\u7528\u503c\u7c7b\u578b\uff1aa,b,c \u8fd9\u79cd\uff0c\u7136\u540e\u62fc\u63a5\u6210 const config = {a,b,c}\n    //[url,config] // \u5982\u679c\u4f7f\u7528 config \u5bf9\u8c61\uff0c\u5c31\u56de\u51fa\u73b0\u6b7b\u5faa\u73af\n    // \u6839\u672c\u539f\u56e0\u662f React \u4f7f\u7528 Object.is \u5224\u65ad \u4f9d\u8d56 \u662f\u5426\u53d8\u5316\n    // Object.is(1,1)  // true\n    // Object.is('a','a') // true\n    // Object.is({},{}) // false\n    // Object.is([],[]) // false\n  );\n\n  return [loading, data, error]\n}\n\nexport default useAxios\n")))}f.isMDXComponent=!0}}]);