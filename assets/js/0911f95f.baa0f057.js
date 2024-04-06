"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39287],{3905:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>d});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=t.createContext({}),i=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},o=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=i(a),d=l,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return a?t.createElement(k,s(s({ref:n},o),{},{components:a})):t.createElement(k,s({ref:n},o))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:l,s[1]=p;for(var i=2;i<r;i++)s[i]=a[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54600:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var t=a(87462),l=(a(67294),a(3905));const r={title:"\u4ece\u96f6\u5f00\u59cb\u914d\u7f6evue.js\u7684webpack\u5f00\u53d1\u73af\u5883",ID:"23661",date:"2019-08-27 10:59:00",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23661",type:"blog"},s=void 0,p={permalink:"/docusaurus/blog/23661",editUrl:"https://github.com/lzwdot/docusaurus/blog/2019/08-27-23661.md",source:"@site/blog/2019/08-27-23661.md",title:"\u4ece\u96f6\u5f00\u59cb\u914d\u7f6evue.js\u7684webpack\u5f00\u53d1\u73af\u5883",description:"\u8fd9\u91cc\u4f7f\u7528\u7684webpack@2.3.2 \u7248\u672c",date:"2019-08-27T10:59:00.000Z",formattedDate:"2019\u5e748\u670827\u65e5",tags:[{label:"posts",permalink:"/docusaurus/blog/tags/posts"},{label:"js-css",permalink:"/docusaurus/blog/tags/js-css"}],readingTime:6.895,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"\u4ece\u96f6\u5f00\u59cb\u914d\u7f6evue.js\u7684webpack\u5f00\u53d1\u73af\u5883",ID:"23661",date:"2019-08-27 10:59:00",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23661",type:"blog"},prevItem:{title:"\u4f7f\u7528Node.js\u7684request\u5e93\u505a\u4ee3\u7406",permalink:"/docusaurus/blog/23690"},nextItem:{title:"\u6ed1\u52a8\u9519\u8bef\u63d0\u793a\uff1aUnable to preventDefault inside passive event listener due to target being treated as passive",permalink:"/docusaurus/blog/23656"}},c={authorsImageUrls:[void 0]},i=[{value:"\u5b89\u88c5webpack",id:"\u5b89\u88c5webpack",level:3},{value:"\u914d\u7f6ewebpack",id:"\u914d\u7f6ewebpack",level:3},{value:"\u52a0\u5165css\u5904\u7406\u914d\u7f6e",id:"\u52a0\u5165css\u5904\u7406\u914d\u7f6e",level:3},{value:"\u5b89\u88c5vue\u76f8\u5173\u4f9d\u8d56",id:"\u5b89\u88c5vue\u76f8\u5173\u4f9d\u8d56",level:3},{value:"\u7528\u4e8e\u751f\u4ea7\u73af\u5883",id:"\u7528\u4e8e\u751f\u4ea7\u73af\u5883",level:3}],o={toc:i};function u(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4f7f\u7528\u7684",(0,l.kt)("a",{parentName:"p",href:"mailto:webpack@2.3.2"},"webpack@2.3.2")," \u7248\u672c")),(0,l.kt)("h3",{id:"\u5b89\u88c5webpack"},"\u5b89\u88c5webpack"),(0,l.kt)("p",null,"\u9996\u5148\u9700\u8981\u4f7f\u7528npm\u6765\u521d\u59cb\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm init\n")),(0,l.kt)("p",null,"\u6267\u884c\u540e\uff0c\u4e00\u7cfb\u5217\u7684\u56de\u8f66\u540e\uff0c \u751f\u6210package.json\u6587\u4ef6 \uff0c\u63a5\u7740\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"mailto:webpack@2.3.2"},"webpack@2.3.2")," \u548cwebpack-dev-server\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm install webpack@2.3.2 --save-dev\ncnpm install webpack-dev-server@2.4.2 --save-dev\n")),(0,l.kt)("p",null,"-","-save-dev\u4f1a\u4f5c\u4e3a\u5f00\u53d1\u4f9d\u8d56\u6765\u5b89\u88c5webpack\u3002\u6267\u884c\u4ee5\u4e0a\u64cd\u4f5c\u7684package.json\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "name": "demo",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo "Error: no test specified" && exit 1"\n  },\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "webpack": "^2.3.2",\n    "webpack-dev-server": "^2.4.2"\n  }\n} \n')),(0,l.kt)("h3",{id:"\u914d\u7f6ewebpack"},"\u914d\u7f6ewebpack"),(0,l.kt)("p",null,"\u65b0\u5efawebpack.config.js\u6587\u4ef6\u7528\u6765\u4f5c\u4e3awebpack\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\nvar config = {\n    entry:{  //\u5165\u53e3main.js\u6587\u4ef6\n        main:'./main'\n    },\n    output:{ //\u6253\u5305\u540e\n        path:path.join(__dirname,'./dist'),\n        publicPath:'/dist/',\n        filename:'main.js'\n    }\n}\nmodule.exports=config  \n")),(0,l.kt)("p",null,"\u4ee5\u4e0awebpack\u914d\u7f6e\u6587\u4ef6\u6700\u91cd\u8981\u7684\u4e24\u9879\u5c31\u662fentry\u548coutput\uff0c\u5728entry\u4e2d\u7684main.js\u662f\u914d\u7f6e\u7684\u5165\u53e3\u6587\u4ef6\uff0coutput\u4e2d\u7684main.js\u5219\u662f\u6253\u5305\u540e\u7684\u6587\u4ef6\u3002\u6240\u4ee5\uff0c\u8fd8\u9700\u8981\u4e00\u4e2a\u7a7a\u7684main.js\u5165\u53e3\u6587\u4ef6\uff0c\u73b0\u5728\uff0c\u6211\u4eec\u628awebpack\u4e0enpm\u73af\u5883\u8054\u7cfb\u8d77\u6765\uff0c\u5728package.json\u4e2d\u6dfb\u52a0webpack-dev-server\u542f\u52a8\u811a\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n    "test": "echo "Error: no test specified" && exit 1",\n    "dev": "webpack-dev-server --open --config webpack.config.js"\n }, \n')),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u7684\u914d\u7f6e\u5c31\u5b8c\u6210\u4e86\uff0c\u4e0b\u9762\u5efa\u4e00\u4e2aindex.html\u6587\u4ef6\u4f5c\u4e3a\u9879\u76ee\u7684\u5165\u53e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>webpack</title>\n</head>\n<body>\n    <div id="app">\n        hello world\n    </div>\n    <script type="text/javascript" src="/dist/main.js"><\/script>\n</body>\n</html> \n')),(0,l.kt)("p",null,"\u6267\u884c\u542f\u52a8\u547d\u4ee4\u540e\uff0c\u4f1a\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u9875\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm run dev\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6210\u529f\u6253\u5f00\u4e00\u4e2a hello world\u7684\u9875\u9762\uff0c\u90a3\u4e48\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u6574\u4e2a\u5de5\u4f5c\u6700\u91cd\u8981\u7684\u4e00\u6b65\u4e86\u3002"),(0,l.kt)("h3",{id:"\u52a0\u5165css\u5904\u7406\u914d\u7f6e"},"\u52a0\u5165css\u5904\u7406\u914d\u7f6e"),(0,l.kt)("p",null,"\u5904\u7406css\u7b49\u6837\u5f0f\u6587\u4ef6\u5c31\u9700\u8981\u7528\u5230style-loader\u548ccss-loader\uff0c\u6240\u4ee5\u9700\u8981\u5b89\u88c5\u548c\u914d\u7f6e\u5b83\u4eec\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm install css-loader --save-dev\ncnpm install style-loader --save-dev\ncnpm install extract-text-webpack-plugin@2.1.2 ---save-dev--save-dev\n")),(0,l.kt)("p",null,"\u5229\u7528extract-text-webpack-plugin\u6765\u542f\u7528webpack\u7684\u63d2\u4ef6\u529f\u80fd\u3002\u5728wepack.config.js\u4e2d\u6dfb\u52a0css\u5904\u7406\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var ExtractTextPlugin = require('extract-text-webpack-plugin')\nvar config = {\n    //...\n    module:{\n        rules:[\n            { //\u5904\u7406css\u6587\u4ef6\n                test:/.css$/,\n                use:ExtractTextPlugin.extract({\n                    use:'css-loader',\n                    fallback:'style-loader'\n                })\n            }\n        ]\n    },\n    plugins:[\n        //\u6253\u5305\u751f\u6210\u7684css\u6587\u4ef6\n        new ExtractTextPlugin('main.css')\n    ]\n}\nmodule.exports=config \n")),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2astyle.css\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"#app{\n    font-size: 24px;\n    color: #f50;\n} \n")),(0,l.kt)("p",null,"\u5e76\u5728main.js\u4e2d\u901a\u8fc7 import \u5f15\u5165\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import './style.css'; \n")),(0,l.kt)("p",null,"\u4f7f\u7528 cnpm run dev \u547d\u4ee4\u91cd\u542f\u670d\u52a1\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u53ef\u4ee5\u770b\u5230\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"<link>")," \u5f15\u5165\u7684main.css\u6587\u4ef6\u751f\u6548\uff0c\u9875\u9762\u7684 hello world\u4e5f\u53d8\u5927\u53d8\u7ea2\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5vue\u76f8\u5173\u4f9d\u8d56"},"\u5b89\u88c5vue\u76f8\u5173\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5904\u7406.vue\u540e\u7f00\u6587\u4ef6\u548cES6\u8bed\u8a00\u8f6c\u6362\u7b49\uff0c\u9700\u8981\u5b89\u88c5\u76f8\u5e94\u7684\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm install --save-dev vue\ncnpm install --save-dev vue-loader\ncnpm install --save-dev vue-style-loader\ncnpm install --save-dev vue-template-compiler\ncnpm install --save-dev vue-hot-reload-api\ncnpm install --save-dev babel\ncnpm install --save-dev babel-loader@7.1.5\ncnpm install --save-dev babel-core\ncnpm install --save-dev babel-plugin-transform-runtime\ncnpm install --save-dev babel-preset-es2015\ncnpm install --save-dev babel-runtime \n")),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u914d\u7f6ewebpack.config.js\u6765\u652f\u6301.vue\u6587\u4ef6\u548cES6\u7684\u89e3\u6790\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\nvar ExtractTextPlugin = require('extract-text-webpack-plugin')\nvar VueLoaderPlugin = require('vue-loader/lib/plugin')\nvar config = {\n    entry:{\n        main:'./main'\n    },\n    output:{\n        path:path.join(__dirname,'./dist'),\n        publicPath:'/dist/',\n        filename:'main.js'\n    },\n    module:{\n        rules:[\n            {\n                test:/.vue$/,\n                loader:'vue-loader',\n                options:{\n                    loaders:{\n                        css:ExtractTextPlugin.extract({\n                            use:'css-loader',\n                            fallback:'vue-style-loader'\n                        })\n                    }\n                }\n            },\n            {\n                test:/.js$/,\n                loader:'babel-loader',\n                exclude:/node_modules/\n            },\n            {\n                test:/.css$/,\n                use:ExtractTextPlugin.extract({\n                    use:'css-loader',\n                    fallback:'style-loader'\n                })\n            }\n        ]\n    },\n    plugins:[\n        new ExtractTextPlugin('main.css'),\n        new VueLoaderPlugin()\n    ]\n}\nmodule.exports=config \n")),(0,l.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a.babelrc\u7684\u914d\u7f6e\u6587\u4ef6\uff0cwebpack\u4f1a\u6839\u636e\u6b64\u914d\u7f6e\u6765\u4f7f\u7528babel\u7f16\u8bd1ES6\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "presets":["es2015"],\n    "plugins": ["transform-runtime"],\n    "comments": false\n} \n')),(0,l.kt)("p",null,"\u914d\u7f6e\u597d\u8fd9\u4e9b\u540e\uff0c\u73b0\u5728\u5c31\u53ef\u4ee5\u4f7f\u7528.vue\u6587\u4ef6\u4e86\u3002\u73b0\u5728\u521b\u5efa\u4e00\u4e2aapp.vue\u6587\u4ef6\u5e76\u5199\u5165\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<template>\n    <div>\n        hello {{name}}\n    </div>\n</template>\n<script>\nexport default {\n    data(){\n        return {\n            name:'vue.js'\n        }\n    }\n}\n<\/script>\n<style scoped>\n    div{\n        color: #f60;\n        font-size:24px;\n    }\n</style> \n")),(0,l.kt)("p",null,"\u5199\u597d\u4e86\u7ec4\u4ef6\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u5165\u53e3\u6587\u4ef6main.js\u4e2d\u4f7f\u7528\u5b83\uff0c\u6253\u5f00main.js\u6587\u4ef6\uff0c\u66ff\u6362\u6210\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue';\nimport App  from './app.vue';\nnew Vue({\n    el:'#app',\n    render:h=>h(App)\n}) \n")),(0,l.kt)("p",null,"\u91cd\u542f\u670d\u52a1\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u53ef\u4ee5\u770b\u5230\u9875\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},'<div id="app">')," \u5df2\u7ecf\u88ab\u7ec4\u4ef6\u66ff\u6362\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<div data-v-381730fa>hello vue.js</div> \n")),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684main.css\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"div[data-v-381730fa]{\n     color: #f60;\n     font-size:24px;\n}\n")),(0,l.kt)("h3",{id:"\u7528\u4e8e\u751f\u4ea7\u73af\u5883"},"\u7528\u4e8e\u751f\u4ea7\u73af\u5883"),(0,l.kt)("p",null,"\u5b89\u88c5url-loader\u548cfile-loader\u6765\u5904\u7406\u56fe\u7247\uff0c\u5b57\u4f53\u7b49\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm install --save-dev url-loader\ncnpm install --save-dev file-loader\n")),(0,l.kt)("p",null,"\u5728webpack.config.js\u6dfb\u52a0\u914d\u7f6e\uff0c?limit=1024\u662f\u6307\u6587\u4ef6\u5c0f\u4e8e1kb\uff0c\u5c31\u4ee5base64\u7684\u5f62\u5f0f\u52a0\u8f7d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var config = {\n    //...\n    module:{\n        rules:[\n            //...\n            {\n                test:/.(gif|jpg|png|woff|svg|eot|ttf)??.*$/,\n                loader:'url-loader?limit=1024'\n            },\n           //..\n        ]\n    },\n}; \n")),(0,l.kt)("p",null,"\u653e\u7f6e\u4e00\u5f20\u56fe\u7247./images/image.png\uff0c\u5e76\u5728app.vue\u4e2d\u52a0\u8f7d\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},' <template>\n    <div>\n        hello {{name}}\n        <p>\n            <img src="/./images/image.gif" alt="">\n        </p>\n    </div>\n</template>\n')),(0,l.kt)("p",null,"\u91cd\u542f\u670d\u52a1\u540e\uff0c\u6d4f\u89c8\u5668\u9875\u9762\u4e0a\u5c06\u663e\u793a\u56fe\u7247\uff0c\u5f53\u7136\uff0c\u8fd9\u53ea\u662f\u6d4b\u8bd5\uff0c\u66f4\u91cd\u8981\u7684\u662f\u628a\u6240\u6709\u7684\u9759\u6001\u8d44\u6e90\u6253\u5305\u538b\u7f29\u3002\u9700\u8981\u5b89\u88c5\u4e0b\u9762\u4e24\u4e2a\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm install --save-dev webpack-merge\ncnpm install --save-dev html-webpack-plugin\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u5207\u6362\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2awebpack.prod.config.js\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u5728package.json\u4e2d\u52a0\u5165\u4e00\u4e2abuild\u7684\u811a\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n    "test": "echo "Error: no test specified" && exit 1",\n    "dev": "webpack-dev-server --open --config webpack.config.js",\n    "build": "webpack --progress --hide-modules --config webpack.prod.config.js"\n }, \n')),(0,l.kt)("p",null,"\u5148\u6765\u770b\u4e0bwebpack.prod.config.js\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var webpack= require('webpack');\nvar HtmlwebpackPlugin = require('html-webpack-plugin');\nvar ExtractTextPlugin = require('extract-text-webpack-plugin');\nvar merge = require('webpack-merge');\nvar webpackBaseConfig = require('./webpack.config.js');\nvar VueLoaderPlugin = require('vue-loader/lib/plugin')\n//\u6e05\u7a7a\u57fa\u672c\u914d\u7f6e\u7684\u63d2\u4ef6\u5217\u8868\nwebpackBaseConfig.plugins=[];\nmodule.exports = merge(webpackBaseConfig,{\n    output:{\n        publicPath:'/dist/',\n        //\u5c06\u5165\u53e3\u6587\u4ef6main.js\u91cd\u547d\u540d\u4e3ahash\u503c\u7684\u6587\u4ef6\u540d\n        filename:'[name].[hash].js'\n    },\n    plugins:[\n        new ExtractTextPlugin({\n            filename:'[name].[hash].css',\n            allChunks:true\n        }),\n        //\u5b9a\u4e49\u5f53\u524dnode\u73af\u5883\u4e3a\u751f\u4ea7\u73af\u5883\n        new webpack.DefinePlugin({\n            'process.env':{\n                NODE_ENV:'\"production\"'\n            }\n        }),\n        //\u538b\u7f29js\n        new webpack.optimize.UglifyJsPlugin({\n            compress:{\n                warnings:false\n            }\n        }),\n        //\u63d0\u53d6\u6a21\u677f\uff0c\u5e76\u4fdd\u5b58\u5165\u53e3 html\u6587\u4ef6\n        new HtmlwebpackPlugin({\n            filename:'../index_prod.html',\n            template:'./index.ejs',\n            inject:false\n        }),\n        //\u52a0\u8f7dvue\u76f8\u5173\u63d2\u4ef6\n        new VueLoaderPlugin()\n    ]\n}) \n")),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u770b\u51fa\uff0c\u8fd8\u9700\u8981\u4e00\u4e2aindex.ejs\u7684\u6a21\u677f\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Webpack App</title>\n    <link rel="stylesheet" href="<%= htmlWebpackPlugin.files.css[0] %>">\n</head>\n<body>\n    <div id="app"></div>\n    <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[0] %>"><\/script>\n</body>\n</html>\n')),(0,l.kt)("p",null,"\u6700\u540e\u6267\u884c\u6253\u5305\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cnpm run bulid\n")),(0,l.kt)("p",null,"\u4f1a\u751f\u6210\u4e00\u4e2adist\u7684\u76ee\u5f55\uff08\u5305\u542b\u9759\u6001\u8d44\u6599\uff09\u548cindex","_","prod.html\u6587\u4ef6\uff0c\u5728\u6d4f\u89c8\u5668\u901a\u8fc7\u8bbf\u95ee\u4e00\u4e0b\u94fe\u63a5\u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"http://localhost:8080/index_prod.html \n")),(0,l.kt)("p",null,"\u597d\u4e86\uff0cvue.js\u7684webpack\u5f00\u53d1\u73af\u5883\u57fa\u672c\u914d\u7f6e\u5c31\u662f\u8fd9\u6837\u5b50\u4e86\u3002"))}u.isMDXComponent=!0}}]);