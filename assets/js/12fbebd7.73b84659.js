"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"JSX \u57fa\u672c\u77e5\u8bc6\u70b9",ID:"29284",date:"2022-01-23 21:46:27",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29284",type:"docs"},s="JSX \u57fa\u672c\u77e5\u8bc6\u70b9",o={unversionedId:"react-use/29284",id:"react-use/29284",title:"JSX \u57fa\u672c\u77e5\u8bc6\u70b9",description:"\u57fa\u7840\u77e5\u8bc6",source:"@site/docs/react-use/29284.md",sourceDirName:"react-use",slug:"/29284",permalink:"/docusaurus/docs/29284",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-use/29284.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-use",permalink:"/docusaurus/docs/tags/react-use"}],version:"current",frontMatter:{title:"JSX \u57fa\u672c\u77e5\u8bc6\u70b9",ID:"29284",date:"2022-01-23 21:46:27",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29284",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"React \u57fa\u7840",permalink:"/docusaurus/docs/react-use/"},next:{title:"React \u4e8b\u4ef6\u548c bind this",permalink:"/docusaurus/docs/29287"}},i={},c=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u6761\u4ef6\u5224\u65ad",id:"\u6761\u4ef6\u5224\u65ad",level:2},{value:"\u6e32\u67d3\u5217\u8868",id:"\u6e32\u67d3\u5217\u8868",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jsx-\u57fa\u672c\u77e5\u8bc6\u70b9"},"JSX \u57fa\u672c\u77e5\u8bc6\u70b9"),(0,a.kt)("p",null,"\u57fa\u7840\u77e5\u8bc6"),(0,a.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u3001\u8868\u8fbe\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"class style"),(0,a.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u548c\u7ec4\u4ef6")),(0,a.kt)("p",null,"\u5217\u5b50\uff0c\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSXBaseDemo.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\nimport List from './ListDemo'\n\nclass JSXBaseDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      name: 'lzw',\n      imgUrl: 'https://gravatar.loli.net/avatar/c0cd88e37cadb689c9c79caa0e9ac1f8?s=128',\n      flag: true\n    }\n  }\n\n  render() {\n    // \u83b7\u53d6\u53d8\u91cf \u63d2\u503c\n    const pElem = <p>{this.state.name}</p>\n    // return pElem\n\n    // \u8868\u8fbe\u5f0f\n    const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>\n    // return exprElem\n\n    // \u5b50\u5143\u7d20\n    const imgElem = <div>\n      <p>\u6211\u7684\u5934\u50cf</p>\n      <img src={this.state.imgUrl} alt=\"\"/>\n    </div>\n    // return imgElem\n\n    // class\n    const classElem = <p className=\"title\">\u8bbe\u7f6e class </p>\n    // return classElem\n\n    // style\n    const styleData = {fontSize: '30px', color: 'red'}\n    let styleElem = <p style={styleData}>\u8bbe\u7f6e style </p>\n    // \u5185\u8054\u5199\u6cd5 \u6ce8\u610f\u662f\uff1a {{}}\n    styleElem = <p style={{fontSize: '50px', color: 'green'}}>\u8bbe\u7f6e style</p>\n    // return styleElem\n\n    // \u539f\u59cb html\n    const rawHtml = '<sapn>\u5bcc\u6587\u672c\u5185\u5bb9<i>\u659c\u4f53</i><b>\u7c97\u4f53</b></sapn>'\n    const rawHtmlData = {\n      __html: rawHtml // \u6ce8\u610f\uff0c\u5fc5\u987b\u662f\u8fd9\u79cd\u683c\u5f0f\n    }\n    const rawHtmlElem = <div>\n      {/*\u663e\u793a html*/}\n      <p dangerouslySetInnerHTML={rawHtmlData}></p>\n      {/*\u663e\u793a\u6e90\u4ee3\u7801*/}\n      <p>{rawHtml}</p>\n    </div>\n    // return rawHtmlElem\n\n    // \u52a0\u8f7d\u7ec4\u4ef6\n    const componentElem = <div>\n      <p>JSX \u4e2d\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6</p>\n      <List/>\n    </div>\n    return componentElem\n  }\n}\n\nexport default JSXBaseDemo\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\u6d4b\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import JSXBaseDemo from "./JSXBaseDemo";\n\nfunction App() {\n  return (\n    <div className="App">     \n      <JSXBaseDemo/>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h2",{id:"\u6761\u4ef6\u5224\u65ad"},"\u6761\u4ef6\u5224\u65ad"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if else "),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u5143\u8868\u8fbe\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u903b\u8f91\u8fd0\u7b97\u7b26 && ||")),(0,a.kt)("p",null,"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\n\nclass ConditionDemo extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      theme: 'black'\n    }\n  }\n\n  render() {\n    const blackBtn = <button className=\"btn-black\">black btn</button>\n    const whiteBtn = <button className=\"btn-white\">white btn</button>\n\n    // if else\n    if (this.state.theme === 'black') {\n      // return blackBtn\n    } else {\n      // return whiteBtn\n    }\n\n    // \u4e09\u5143\u8868\u8fbe\u5f0f\n    // return <div>\n    //   {this.state.theme === 'black' ? blackBtn : whiteBtn}\n    // </div>\n\n    // &&\n    return <div>\n      {this.state.theme === 'black' && blackBtn}\n    </div>\n  }\n}\n\nexport default ConditionDemo\n")),(0,a.kt)("h2",{id:"\u6e32\u67d3\u5217\u8868"},"\u6e32\u67d3\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"map"),(0,a.kt)("li",{parentName:"ul"},"key")),(0,a.kt)("p",null,"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\n\nclass ListDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = [\n      {\n        id: 'id-1',\n        title: '\u6807\u9898-1'\n      },\n      {\n        id: 'id-2',\n        title: '\u6807\u9898-2'\n      },\n      {\n        id: 'id-3',\n        title: '\u6807\u9898-3'\n      }\n    ]\n  }\n\n  render() {\n    return <ul>\n      {\n        // \u7c7b\u4f3c Vue v-for\n        this.state.map(\n          (item, index) => {\n            // \u8fd9\u91cc\u7684 key \u548c Vue \u7684 key \u7c7b\u4f3c\uff0c\u5fc5\u586b\uff0c\u4e0d\u80fd\u662f index \u6216 random\n            return <li key={item.id}>\n              index {index}; title {item.title}\n            </li>\n          }\n        )\n      }\n    </ul>\n  }\n}\n\nexport default ListDemo\n")))}p.isMDXComponent=!0}}]);