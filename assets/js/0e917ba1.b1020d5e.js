"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||p;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const p={title:"crypto-js\u4e0ephp\u901a\u8fc7aes\u52a0\u5bc6\u4f20\u8f93",ID:"24382",date:"2020-01-17 11:31:40",categories:["server","php-usage"],tags:["server","php-usage"],authors:["lzw"],slug:"/24382",type:"blog"},o=void 0,s={permalink:"/docusaurus/blog/24382",editUrl:"https://github.com/lzwdot/docusaurus/blog/2020/01-17-24382.md",source:"@site/blog/2020/01-17-24382.md",title:"crypto-js\u4e0ephp\u901a\u8fc7aes\u52a0\u5bc6\u4f20\u8f93",description:"CryptoJS (crypto.js) \u4e3a JavaScript \u63d0\u4f9b\u4e86\u5404\u79cd\u5404\u6837\u7684\u52a0\u5bc6\u7b97\u6cd5\u3002\u76ee\u524d\u5df2\u652f\u6301\u7684\u7b97\u6cd5\u5305\u62ec\uff1a",date:"2020-01-17T11:31:40.000Z",formattedDate:"2020\u5e741\u670817\u65e5",tags:[{label:"server",permalink:"/docusaurus/blog/tags/server"},{label:"php-usage",permalink:"/docusaurus/blog/tags/php-usage"}],readingTime:1.63,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"crypto-js\u4e0ephp\u901a\u8fc7aes\u52a0\u5bc6\u4f20\u8f93",ID:"24382",date:"2020-01-17 11:31:40",categories:["server","php-usage"],tags:["server","php-usage"],authors:["lzw"],slug:"/24382",type:"blog"},prevItem:{title:"\u5b9d\u5854 ecs \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861 slb \u7684\u95ee\u9898",permalink:"/docusaurus/blog/24469"},nextItem:{title:"\u5fae\u4fe1\u6d4f\u89c8\u5668\u201c\u524d\u8fdb\u540e\u9000\u201d\u7684\u5e95\u90e8banner\u6321\u4f4f\u4e86H5\u7684\u5e95\u90e8banner",permalink:"/docusaurus/blog/23828"}},c={authorsImageUrls:[void 0]},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CryptoJS (crypto.js) \u4e3a JavaScript \u63d0\u4f9b\u4e86\u5404\u79cd\u5404\u6837\u7684\u52a0\u5bc6\u7b97\u6cd5\u3002\u76ee\u524d\u5df2\u652f\u6301\u7684\u7b97\u6cd5\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MD5"),(0,a.kt)("li",{parentName:"ul"},"SHA-1"),(0,a.kt)("li",{parentName:"ul"},"SHA-256"),(0,a.kt)("li",{parentName:"ul"},"AES",(0,a.kt)("br",{parentName:"li"}),"....")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u6f14\u793aaes\u5bf9\u79f0\u52a0\u5bc6\u6570\u636e\u4f20\u8f93\uff0c\u4e0b\u9762\u5217\u51facrypto-js\u7684\u51e0\u4e2a\u91cd\u8981\u94fe\u63a5"),(0,a.kt)("p",null,"github\u9879\u76ee\u5730\u5740",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brix/crypto-js"},"https://github.com/brix/crypto-js"),(0,a.kt)("br",{parentName:"p"}),"\n","\u6587\u6863",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brix/crypto-js/blob/master/docs/QuickStartGuide.wiki"},"https://github.com/brix/crypto-js/blob/master/docs/QuickStartGuide.wiki"),(0,a.kt)("br",{parentName:"p"}),"\n","\u6e90\u7801\u5730\u5740",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brix/crypto-js/releases"},"https://github.com/brix/crypto-js/releases")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"js\u524d\u7aef\u6f14\u793a\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script src="./crypto-js-3.1.9-1/crypto-js.js"><\/script>\n<script type="text/javascript">\n    /**\u52a0\u5bc6\n    *\n    * @param data\n    * @returns {string}\n    */\n    function encrypt(data) {\n        let text = JSON.stringify(data);\n        text = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text)).toString();\n        let key = CryptoJS.enc.Utf8.parse(\'1234567887654321\'); //\u4e3a\u4e86\u907f\u514d\u8865\u4f4d\uff0c\u76f4\u63a5\u752816\u4f4d\u7684\u79d8\u94a5\n        let iv = CryptoJS.enc.Utf8.parse(\'1234567887654321\'); //16\u4f4d\u521d\u59cb\u5411\u91cf\n        let encrypted = CryptoJS.AES.encrypt(text, key, {\n            iv: iv,\n            mode: CryptoJS.mode.CBC,\n            padding: CryptoJS.pad.ZeroPadding\n        }).toString();\n        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted)).toString();\n    }\n    /**\u89e3\u5bc6\n    *\n    * @param data\n    * @returns {string}\n    */\n    function decrypt(data) {\n        let encrypted = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data)).toString();\n        let key = CryptoJS.enc.Utf8.parse(\'1234567887654321\'); //\u4e3a\u4e86\u907f\u514d\u8865\u4f4d\uff0c\u76f4\u63a5\u752816\u4f4d\u7684\u79d8\u94a5\n        let iv = CryptoJS.enc.Utf8.parse(\'1234567887654321\'); //16\u4f4d\u521d\u59cb\u5411\u91cf\n        let decrypted = CryptoJS.AES.decrypt(encrypted, key, {\n            iv: iv,\n            mode: CryptoJS.mode.CBC,\n            padding: CryptoJS.pad.ZeroPadding\n        }).toString(CryptoJS.enc.Utf8);\n        return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(decrypted)).toString();\n    }\n    let data = {"username": "admin", "pwd": "passwd"};\n    let encrypt_data = encrypt(data);\n    let decrypt_data = decrypt(encrypt_data);\n    console.log(decrypt_data);\n<\/script>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"php\u540e\u7aef\u6f14\u793a\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\u52a0\u5bc6\n* @param $data\n* @return string\n*/\nfunction encrypt($data)\n{\n    $key = \"1234567887654321\";//\u79d8\u94a5\u5fc5\u987b\u4e3a\uff1a8/16/32\u4f4d\n    $iv = \"1234567887654321\";\n    $base64_str = base64_encode(json_encode($data));\n    $encrypted = openssl_encrypt($base64_str, \"aes-128-cbc\", $key, OPENSSL_ZERO_PADDING, $iv);\n    return base64_encode($encrypted);\n}\n/**\u89e3\u5bc6\n* @param $data\n* @return mixed\n*/\nfunction decrypt($data)\n{\n    $encrypted = base64_decode($data);\n    $key = \"1234567887654321\";//\u79d8\u94a5\u5fc5\u987b\u4e3a\uff1a8/16/32\u4f4d\n    $iv = \"1234567887654321\";\n    $decrypted = openssl_decrypt($encrypted, 'aes-128-cbc', $key, OPENSSL_ZERO_PADDING, $iv);\n    return json_decode(base64_decode($decrypted), true);\n}\n$data = ['username'=>'admin','pwd'=>'admin'];\n$encrypt=encrypt($data);\n$str=decrypt($encrypt);\nvar_dump($str);\n")),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/5619d68bc2d1"},"https://www.jianshu.com/p/5619d68bc2d1")))}u.isMDXComponent=!0}}]);