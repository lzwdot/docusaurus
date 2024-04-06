"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[42171],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||i[m]||s;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88288:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>i,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const s={title:"\u4ec0\u4e48\u662f React Render Props",ID:"29337",date:"2022-01-26 16:36:35",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29337",type:"docs"},a="\u4ec0\u4e48\u662fReact Render Props",p={unversionedId:"react-use/29337",id:"react-use/29337",title:"\u4ec0\u4e48\u662f React Render Props",description:"Render & Props",source:"@site/docs/react-use/29337.md",sourceDirName:"react-use",slug:"/29337",permalink:"/docusaurus/docs/29337",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-use/29337.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-use",permalink:"/docusaurus/docs/tags/react-use"}],version:"current",frontMatter:{title:"\u4ec0\u4e48\u662f React Render Props",ID:"29337",date:"2022-01-26 16:36:35",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29337",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React \u9ad8\u9636\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",permalink:"/docusaurus/docs/29334"},next:{title:"Redux \u7684\u4f7f\u7528",permalink:"/docusaurus/docs/29340"}},c={},u=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"HOC vs Render Props",id:"hoc-vs-render-props",level:2}],l={toc:u};function i(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ec0\u4e48\u662freact-render-props"},"\u4ec0\u4e48\u662fReact Render Props"),(0,o.kt)("p",null,"Render & Props"),(0,o.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Render Props \u7684\u6838\u5fc3\u601d\u60f3\n// \u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u5c06 class \u7ec4\u4ef6\u7684 state \u4f5c\u4e3a props \u4f20\u9012\u7ed9\u7eaf\u51fd\u6570\u7ec4\u4ef6\nimport React from "react";\n\nclass Factory extends React.Component {\n  constructor() {\n    this.state = {\n      // state \u5373\u591a\u4e2a\u7ec4\u4ef6\u7684\u516c\u5171\u903b\u8f91\u7684\u6570\u636e\n    }\n  }\n\n  // \u4fee\u6539 state\n  render() {\n    return <div>\n      {this.props.render(this.state)}\n    </div>\n  }\n}\n\nconst App = ()=>(\n  <Factory render={\n    // render \u662f\u4e00\u4e2a\u51fd\u6570\u7ec4\u4ef6\n    (props) => <p>{props.a} {props.b} ...</p>\n  } />\n)\n')),(0,o.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"RenderPropDemo.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\nimport PropTypes from 'prop-types'\n\nclass Mouse extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      x: 0,\n      y: 0\n    }\n  }\n\n  handleMouseMove = (e) => {\n    this.setState({\n      x: e.clientX,\n      y: e.clientY\n    })\n  }\n\n  render() {\n    return (\n      <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>\n        {/*\u5c06\u5f53\u524d state \u4f5c\u4e3a props\uff0c\u4f20\u9012\u7ed9 render \uff08render \u662f\u4e00\u4e2a\u51fd\u6570\u7ec4\u4ef6\uff09*/}\n        {this.props.render(this.state)}\n      </div>\n    )\n  }\n}\n\nMouse.propTypes = {\n  render: PropTypes.func.isRequired // \u5fc5\u987b\u63a5\u6536\u4e00\u4e2a render \u5c5e\u6027\uff0c\u800c\u4e14\u51fd\u6570\n}\n\nconst App = (props) => (\n  <div style={{height: '500px'}}>\n    <p>a:{props.a}</p>\n    <Mouse render={\n      // render \u662f\u4e00\u4e2a\u51fd\u6570\u7ec4\u4ef6\n      ({x, y}) => <h1>The Mouse position is ({x},{y})</h1>\n    }/>\n  </div>\n)\n\n// \u5b9a\u4e49\u4e86 Mouse \u7ec4\u4ef6\uff0c\u53ea\u6709\u83b7\u53d6 x y \u7684\u80fd\u529b\n// \u81f3\u4e8e Mouse \u7ec4\u4ef6\u5982\u4f55\u6e32\u67d3\uff0cApp \u8bf4\u4e86\u7b97\uff0c\u901a\u8fc7 render prop \u7684\u65b9\u5f0f\u544a\u8bc9 Mouse \u7ec4\u4ef6\n\n\nexport default App\n")),(0,o.kt)("p",null,"\u6d4b\u8bd5\u4f7f\u7528 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<RenderPropDemo a="456"/>\n')),(0,o.kt)("h2",{id:"hoc-vs-render-props"},"HOC vs Render Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HOC\uff1a\u6a21\u5f0f\u7b80\u5355\uff0c\u4f46\u4f1a\u589e\u52a0\u7ec4\u4ef6\u5c42\u7ea7"),(0,o.kt)("li",{parentName:"ul"},"Render Props\uff1a\u4ee3\u7801\u7b80\u6d01\uff0c\u5b66\u4e60\u6210\u672c\u8f83\u9ad8"),(0,o.kt)("li",{parentName:"ul"},"\u6309\u9700\u4f7f\u7528")))}i.isMDXComponent=!0}}]);