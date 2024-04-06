"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[30264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"js\u65f6\u95f4\u51e0\u5929\u524d\uff0c\u51e0\u5c0f\u65f6\u524d\uff0c\u51e0\u5206\u949f\u524d",ID:"23306",date:"2019-05-26 16:57:26",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23306",type:"blog"},o=void 0,s={permalink:"/docusaurus/blog/23306",editUrl:"https://github.com/lzwdot/docusaurus/blog/2019/05-26-23306.md",source:"@site/blog/2019/05-26-23306.md",title:"js\u65f6\u95f4\u51e0\u5929\u524d\uff0c\u51e0\u5c0f\u65f6\u524d\uff0c\u51e0\u5206\u949f\u524d",description:"\u7b80\u5355\u5199\u6cd5",date:"2019-05-26T16:57:26.000Z",formattedDate:"2019\u5e745\u670826\u65e5",tags:[{label:"posts",permalink:"/docusaurus/blog/tags/posts"},{label:"js-css",permalink:"/docusaurus/blog/tags/js-css"}],readingTime:2.415,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"js\u65f6\u95f4\u51e0\u5929\u524d\uff0c\u51e0\u5c0f\u65f6\u524d\uff0c\u51e0\u5206\u949f\u524d",ID:"23306",date:"2019-05-26 16:57:26",categories:["posts","js-css"],tags:["posts","js-css"],authors:["lzw"],slug:"/23306",type:"blog"},prevItem:{title:"\u7b80\u5355\u7684js\u5012\u8ba1\u65f6\u51fd\u6570",permalink:"/docusaurus/blog/23524"},nextItem:{title:"js\u4e2dcontains\u548cindexOf\u7684\u4f7f\u7528",permalink:"/docusaurus/blog/23297"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7b80\u5355\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function FormatTime(timestamp) {\n    var mistiming = Math.round(new Date() / 1000) - timestamp;\n    var postfix = mistiming > 0 ? '\u524d' : '\u540e'\n    mistiming = Math.abs(mistiming)\n    var arrr = ['\u5e74', '\u4e2a\u6708', '\u661f\u671f', '\u5929', '\u5c0f\u65f6', '\u5206\u949f', '\u79d2'];\n    var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];\n    for (var i = 0; i < 7; i++) {\n        var inm = Math.floor(mistiming / arrn[i])\n        if (inm != 0) {\n            return inm + arrr[i] + postfix\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u66f4\u60f3\u8be6\u7ec6\u5199\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var Time = {\n    // \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u6233\n  getUnix: function () {\n        var date = new Date();\n        return date.getTime();\n    },\n    // \u83b7\u53d6\u4eca\u59290\u70b90\u52060\u79d2\u7684\u65f6\u95f4\u6233\n  getTodayUnix: function () {\n        var date = new Date();\n        date.setHours(0); //\u8bbe\u7f6e\u6307\u5b9a\u65f6\u95f4\u7684\u5c0f\u65f6\u5b57\u6bb5\n  date.setMinutes(0);\n        date.setSeconds(0);\n        date.setMilliseconds(0);\n        return date.getTime();\n    },\n    // \u83b7\u53d6\u4eca\u5e741\u67081\u65e50\u70b90\u52060\u79d2\u7684\u65f6\u95f4\u6233\n  getYearUnix: function () {\n        var date = new Date();\n        date.setMonth(0)\n        date.setDate(1);\n        date.setHours(0);\n        date.setMinutes(0);\n        date.setSeconds(0);\n        date.setMilliseconds(0);\n        return date.getTime();\n    },\n    // \u83b7\u53d6\u6807\u51c6\u5e74\u6708\u65e5\n  getLastDate: function (time) {\n        var date = new Date(time);\n        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;\n        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();\n        return date.getFullYear() + '-' + month + '-' + day\n    },\n    // \u8f6c\u6362\u65f6\u95f4\n  getFormatTime: function (timestamp) {\n        var now = this.getUnix(); //\u5f53\u524d\u65f6\u95f4\u6233\n  var today = this.getTodayUnix(); //\u4eca\u59290\u70b9\u65f6\u95f4\u6233\n  var year = this.getYearUnix(); //\u4eca\u5e740\u70b9\u65f6\u95f4\u6233\n  var timer = (now - timestamp) / 1000; //\u8f6c\u5316\u4e3a\u79d2\u7ea7\u65f6\u95f4\u6233\n  var tip = '';\n        // 1\u5206\u949f\u4ee5\u524d\uff0c\u663e\u793a\u201c\u521a\u521a\u201d\u3002\n  // 1\u5206\u949f~1\u5c0f\u65f6\u4e4b\u95f4\uff0c\u663e\u793a\u201cxx\u5206\u949f\u524d\u201d\u3002\n  // 1\u5c0f\u65f6~1\u5929\u4e4b\u95f4\uff0c\u663e\u793a\u201cxx\u5c0f\u65f6\u524d\u201d\u3002\n  // 1\u5929~1\u4e2a\u6708\uff0831\u5929\uff09\u4e4b\u95f4\uff0c\u663e\u793a\u201cxx\u5929\u524d\u201d\u3002\n  // \u5927\u4e8e1\u4e2a\u6708\uff0c\u663e\u793a\u201cxx\u5e74xx\u6708xx\u65e5\u201d\u3002\n  if (timer <= 0) {\n            tip = '\u521a\u521a';\n        } else if (Math.floor(timer / 60) <= 0) {\n            tip = '\u521a\u521a'\n  } else if (timer < 3600) {\n            tip = Math.floor(timer / 60) + '\u5206\u949f\u524d';\n        } else if (timer >= 3600 && (timestamp - today >= 0)) {\n            tip = Math.floor(timer / 3600) + '\u5c0f\u65f6\u524d'\n  } else if (timer / 86400 <= 31) {\n            tip = Math.ceil(timer / 86400) + '\u5929\u524d'\n  } else {\n            tip = this.getLastDate(timestamp);\n        }\n        return tip;\n    }\n}\n")))}m.isMDXComponent=!0}}]);