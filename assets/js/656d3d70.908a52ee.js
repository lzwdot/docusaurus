"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",ID:"29311",date:"2022-01-25 15:15:20",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29311",type:"docs"},c="React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",s={unversionedId:"react-use/29311",id:"react-use/29311",title:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",description:"context \u4e0a\u4e0b\u6587\u573a\u666f",source:"@site/docs/react-use/29311.md",sourceDirName:"react-use",slug:"/29311",permalink:"/docusaurus/docs/29311",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-use/29311.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-use",permalink:"/docusaurus/docs/tags/react-use"}],version:"current",frontMatter:{title:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",ID:"29311",date:"2022-01-25 15:15:20",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29311",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React Portals \u4f7f\u7528\u573a\u666f\uff08\u9ad8\u7ea7\uff09",permalink:"/docusaurus/docs/29309"},next:{title:"React \u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",permalink:"/docusaurus/docs/29318"}},u={},i=[],l={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-context-\u7684\u4f7f\u7528\u9ad8\u7ea7"},"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09"),(0,o.kt)("p",null,"context \u4e0a\u4e0b\u6587\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u516c\u5171\u4fe1\u606f\uff08\u8bed\u97f3\uff0c\u4e3b\u9898\uff09\u5982\u4f55\u4f20\u9012\u7ed9\u6bcf\u4e2a\u7ec4\u4ef6\uff1f"),(0,o.kt)("li",{parentName:"ul"},"\u7528 props \u592a\u7e41\u7410"),(0,o.kt)("li",{parentName:"ul"},"\u7528 redux \u5c0f\u9898\u5927\u505a")),(0,o.kt)("p",null,"\u4e00\u4e2a\u66f4\u6539 theme \u914d\u8272\u7684\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\n\n// \u521b\u5efa Context \u586b\u5145\u9ed8\u8ba4\u503c\uff08\u4efb\u610f\u4e00\u4e2a js \u53d8\u91cf\uff09\nconst ThemeContext = React.createContext('light')\n\n// \u5e95\u5c42\u7ec4\u4ef6 - \u51fd\u6570\u5f0f\u7ec4\u4ef6\nfunction ThemeLink(props) {\n  // const theme = this.context // \u4f1a\u62a5\u9519\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u65e2\u6ca1\u6709 this\n\n  // \u51fd\u6570\u5f0f\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 Consumer\n  return <ThemeContext.Consumer>\n    {value => <p>link's theme is {value}</p>}\n  </ThemeContext.Consumer>\n}\n\n// \u5e95\u5c42\u7ec4\u4ef6 - class \u7ec4\u4ef6\nclass ThemeButton extends React.Component {\n  // \u6307\u5b9a contextType \u8bfb\u53d6\u5f53\u524d\u7684 theme context\n  // static contextType = ThemeContext // \u4e5f\u53ef\u4ee5\u7528 ThemeButton.context\n  render() {\n    const theme = this.context // React \u4f1a\u5f80\u4e0a\u627e\u5230\u6700\u8fd1\u7684 theme Provider\uff0c\u7136\u540e\u4f7f\u7528\n    return <div>\n      <p>button's theme is {theme}</p>\n    </div>\n  }\n}\n\nThemeButton.contextType = ThemeContext // \u6307\u5b9a contextType \u8bfb\u53d6\u5f53\u524d theme context\n\n// \u4e2d\u95f4\u7684\u7ec4\u4ef6\u518d\u4e5f\u4e0d\u5fc5\u6307\u660e\u5f80\u4e0b\u4f20\u9012 theme \u4e86\nfunction ToolBar(props) {\n  return (\n    <div>\n      <ThemeButton/>\n      <ThemeLink/>\n    </div>\n  )\n}\n\n// \u6700\u5916\u5c42\u7ec4\u4ef6\nclass ContextDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: 'light'\n    }\n  }\n\n  render() {\n    // \u6570\u636e\u63d0\u4f9b\u8005\n    return <ThemeContext.Provider value={this.state.theme}>\n      {/*\u91cc\u9762\u7684\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u6d88\u8d39\u6570\u636e*/}\n      <ToolBar/>\n      <hr/>\n      <button onClick={this.changeTheme}>change theme</button>\n    </ThemeContext.Provider>\n  }\n\n  changeTheme = () => {\n    this.setState({\n      theme: this.state.theme === 'light' ? 'dark' : 'light'\n    })\n  }\n}\n\nexport default ContextDemo\n")))}p.isMDXComponent=!0}}]);