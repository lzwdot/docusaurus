"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||p;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const p={title:"webpack \u57fa\u7840\u77e5\u8bc6",ID:"28782",date:"2021-12-27 17:25:13",categories:["engineering","webpack-study"],tags:["engineering","webpack-study"],authors:["lzw"],slug:"/28782",type:"docs"},l="webpack \u5b89\u88c5\u548c\u914d\u7f6e",i={unversionedId:"webpack-base/28782",id:"webpack-base/28782",title:"webpack \u57fa\u7840\u77e5\u8bc6",description:"\u5b89\u88c5",source:"@site/docs/webpack-base/28782.md",sourceDirName:"webpack-base",slug:"/28782",permalink:"/docusaurus/docs/28782",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/webpack-base/28782.md",tags:[{label:"engineering",permalink:"/docusaurus/docs/tags/engineering"},{label:"webpack-study",permalink:"/docusaurus/docs/tags/webpack-study"}],version:"current",frontMatter:{title:"webpack \u57fa\u7840\u77e5\u8bc6",ID:"28782",date:"2021-12-27 17:25:13",categories:["engineering","webpack-study"],tags:["engineering","webpack-study"],authors:["lzw"],slug:"/28782",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"webpack \u4e4b babel \u4f7f\u7528",permalink:"/docusaurus/docs/27204"},next:{title:"webpack \u5de5\u7a0b\u73af\u5883",permalink:"/docusaurus/docs/28787"}},o={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webpack-\u5b89\u88c5\u548c\u914d\u7f6e"},"webpack \u5b89\u88c5\u548c\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u5c40\u90e8\u5b89\u88c5\uff08\u63a8\u8350\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init -y # \u521d\u59cb\u5316 npm \u914d\u7f6e\u6587\u4ef6\nnpm install --save-dev webpack # \u5b89\u88c5\u6838\u5fc3\u5e93\nnpm install --save-dev webpack-cli # \u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177\n\n# \u5b89\u88c5\u6307\u5b9a\u7248\u672c\nnpm i -D webpack@4.46.0 webpack-cli@3.3.12 webpack-dev-server@3.11.3\n")),(0,r.kt)("p",null,"\u5168\u5c40\u5b89\u88c5\uff08\u4e0d\u63a8\u8350\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u6240\u6709\u9879\u76ee\u90fd\u4f7f\u7528\u540c\u4e00\u7248\u672c\uff0c\u53ef\u80fd\u9020\u6210\u6253\u5305\u5931\u8d25"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u5b89\u88c5\u6700\u65b0\u7248\u672c\nnpm i -D webpack webpack-cli -g\n\n# \u7248\u672c\nwebpack -v\n\n# \u5378\u8f7d\nnpm uninstall webpack-cli -g\n")),(0,r.kt)("h3",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js")," \uff0c\u6784\u5efa\u540e\u4f1a\u4ea7\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"dis/main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log('test')\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6784\u5efa\u6a21\u5f0f mode=production, \u9ed8\u8ba4\u5f00\u542f\u4ee3\u7801\u538b\u7f29\u63d2\u4ef6")),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e00\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," \u5728\u5f53\u524d\u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u627e ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx webpack\n")),(0,r.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'"dev": "webpack"'),"\uff0c\u547d\u4ee4\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"webpack 4.0")," \u7684 0 \u914d\u7f6e\uff08\u9ed8\u8ba4\u914d\u7f6e\uff09 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\n\n// \u9ed8\u8ba4\u914d\u7f6e\nmodule.exports = {\n  entry: './src/index.js',\n  // \u5165\u53e3 \u5355\u9875\u9762\u5e94\u7528\uff08\u9ed8\u8ba4\uff09 \u591a\u9875\u9762\u5e94\u7528\n  output: {\n    path: path.resolve(__dirname, './dist'), // \u8f93\u51fa\u7684\u6587\u4ef6\u76ee\u5f55\uff0c\u5fc5\u987b\u662f\u7edd\u5bf9\u8def\u5f84\n    filename: 'main.js' // \u8f93\u51fa\u7684\u6587\u4ef6\u540d\u79f0\n  },\n}\n")),(0,r.kt)("p",null,"\u4e00\u822c\u7684\u8bdd\uff0c\u8fd8\u662f\u9700\u8981\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'"dev": "webpack --config ./webapck.dev.js"\n')),(0,r.kt)("p",null,"\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4f1a\u751f\u4ea7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunks"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Hash: bf8f71f17d4a03503396\nVersion: webpack 4.46.0\nTime: 67ms\nBuilt at: 2021/12/28 \u4e0b\u53482:14:27\n   Asset      Size  Chunks             Chunk Names\n    a.js  3.76 KiB       a  [emitted]  a\nindex.js  3.79 KiB   index  [emitted]  index\nEntrypoint index = index.js\nEntrypoint a = a.js\n[./src/a.js] 19 bytes {a} [built]\n[./src/index.js] 23 bytes {index} [built]\n")),(0,r.kt)("p",null,"\u4e00\u4e2a bundle \u5bf9\u5e94\u4e00\u4e2a chunk; \u5bf9\u5e94\u4e00\u4e2a module \u6216\u591a\u4e2a "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"module")," \u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),", \u4e00\u5207\u7686\u6a21\u5757\uff0c\u6bd4\u5982 js,css,img",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk")," \u4ee3\u7801\u7247\u6bb5\uff0c\u53ef\u4ee5\u7531\u4e00\u4e2a\u6a21\u5757\u6216\u8005\u591a\u4e2a\u6a21\u5757\u6784\u6210\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Chunks")," \u4ee3\u7801\u7247\u6bb5\u7ec4",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," \u6253\u5305\u7f16\u8bd1\u540e\u8f93\u51fa\u7684\u6587\u4ef6 ")),(0,r.kt)("p",null,"webpack \u9ed8\u8ba4\u53ea\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," \u7c7b\u578b\u7684\u6a21\u5757\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528 loader"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"loader")," \u8ba9 webpack \u80fd\u591f\u89e3\u6790\u5176\u4ed6\u6587\u4ef6\u7c7b\u578b\uff0c\u4e00\u4e2a loader \u53ea\u505a\u4e00\u4ef6\u4e8b\u60c5\uff0c\u591a\u4e2a loader \u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u987a\u5e8f\u662f\u81ea\u540e\u5f80\u524d\u7684")),(0,r.kt)("p",null,"\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," \u6a21\u5757\u6784\u5efa\uff0c\u5efa\u8bae\u5b89\u88c5\u6837\u5f0f loader\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"css-loader"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"style-loader")," \u7b49\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u4e2d\u6dfb\u52a0\u652f\u6301"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // loader\n  module: {\n    rules: [\n      //...\n      {\n        test: /\\.css$/,\n        // \u591a\u4e2a loader \u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u987a\u5e8f\u662f\u81ea\u540e\u5f80\u524d\u7684\n        use: ['style-loader', 'css-loader']\n      }\n      //...\n    ]\n  }\n}\n")),(0,r.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," \u6269\u5c55 webpack \u529f\u80fd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," \u8ba9 webpack \u80fd\u591f\u8bc6\u522b\u66f4\u591a\u6587\u4ef6\u7c7b\u578b\uff0c\u4e5f\u901a\u8fc7\u63d2\u4ef6\u63a7\u5236\u6784\u5efa\u6d41\u7a0b\uff0c\u4ece\u800c\u6267\u884c\u4e00\u4e9b\u7279\u6b8a\u7684\u4efb\u52a1")),(0,r.kt)("p",null,"\u6bd4\u5982\u4f7f\u7528 html \u6a21\u677f\uff0c\u53ef\u4ee5\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"html-webpack-plugin")," \u63d2\u4ef6\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u4e2d\u6dfb\u52a0\u652f\u6301"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const htmlWebpackPlugin = require('html-webpack-plugin')\n\n// \u9ed8\u8ba4\u914d\u7f6e\nmodule.exports = {     \n  // plugin\n  plugins: [\n    //...\n    new htmlWebpackPlugin({\n      template: './src/index.html',\n      filename: 'index.html'\n    }),\n    //...\n  ]\n}\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.html")," \u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/index.html"),", \u5e76\u81ea\u52a8\u6dfb\u52a0 js \u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n<script defer src="index.js"><\/script><script defer src="a.js"><\/script></head>\n<body>\n  <div id="app">test</div>\n</body>\n</html>\n')))}u.isMDXComponent=!0}}]);