"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,p(p({ref:t},c),{},{components:n})):a.createElement(m,p({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={title:"Security AppScan Standard\u5e38\u89c1\u6f0f\u6d1e",ID:"23583",date:"2019-08-12 15:43:00",categories:["posts","notes"],tags:["posts","notes"],authors:["lzw"],slug:"/23583",type:"blog"},p=void 0,l={permalink:"/docusaurus/blog/23583",editUrl:"https://github.com/lzwdot/docusaurus/blog/2019/08-12-23583.md",source:"@site/blog/2019/08-12-23583.md",title:"Security AppScan Standard\u5e38\u89c1\u6f0f\u6d1e",description:"\u5df2\u542f\u7528\u76ee\u5f55",date:"2019-08-12T15:43:00.000Z",formattedDate:"2019\u5e748\u670812\u65e5",tags:[{label:"posts",permalink:"/docusaurus/blog/tags/posts"},{label:"notes",permalink:"/docusaurus/blog/tags/notes"}],readingTime:6.445,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"Security AppScan Standard\u5e38\u89c1\u6f0f\u6d1e",ID:"23583",date:"2019-08-12 15:43:00",categories:["posts","notes"],tags:["posts","notes"],authors:["lzw"],slug:"/23583",type:"blog"},prevItem:{title:"\u89e3\u51b3chrome\u4e0d\u652f\u6301form.submit\u7684\u95ee\u9898",permalink:"/docusaurus/blog/23600"},nextItem:{title:"\u7b80\u5355\u7684js\u5012\u8ba1\u65f6\u51fd\u6570",permalink:"/docusaurus/blog/23524"}},s={authorsImageUrls:[void 0]},i=[{value:"\u5df2\u542f\u7528\u76ee\u5f55",id:"\u5df2\u542f\u7528\u76ee\u5f55",level:2},{value:"\u52a0\u5bc6\u4f1a\u8bdd\uff08SSL\uff09Cookie \u4e2d\u7f3a\u5c11 Secure \u5c5e\u6027\uff08PHP\uff09",id:"\u52a0\u5bc6\u4f1a\u8bddsslcookie-\u4e2d\u7f3a\u5c11-secure-\u5c5e\u6027php",level:2},{value:"1. \u8bbe\u7f6esecure",id:"1-\u8bbe\u7f6esecure",level:4},{value:"2. \u8bbe\u7f6ehttponly",id:"2-\u8bbe\u7f6ehttponly",level:4},{value:"\u4e0d\u5b89\u5168\u7684HTTP\u65b9\u6cd5",id:"\u4e0d\u5b89\u5168\u7684http\u65b9\u6cd5",level:2},{value:"\u670d\u52a1\u5668\u7aefBanner\u6cc4\u6f0f",id:"\u670d\u52a1\u5668\u7aefbanner\u6cc4\u6f0f",level:2},{value:"\u4f7f\u7528\u4f2a\u9020\u7684 URL \u8bbe\u7f6e Referer \u5934",id:"\u4f7f\u7528\u4f2a\u9020\u7684-url-\u8bbe\u7f6e-referer-\u5934",level:2},{value:"\u5173\u95edapache\u4e0bicons\u76ee\u5f55\u5217\u8868",id:"\u5173\u95edapache\u4e0bicons\u76ee\u5f55\u5217\u8868",level:2},{value:"Flash \u53c2\u6570 AllowScriptAccess \u5df2\u8bbe\u7f6e\u4e3a always",id:"flash-\u53c2\u6570-allowscriptaccess-\u5df2\u8bbe\u7f6e\u4e3a-always",level:2},{value:"AppScan\u68c0\u6d4b\u5230\u9690\u85cf\u76ee\u5f55",id:"appscan\u68c0\u6d4b\u5230\u9690\u85cf\u76ee\u5f55",level:2},{value:"\u7f3a\u5c11\u8de8\u5e27\u811a\u672c\u7f16\u5236\u9632\u5fa1",id:"\u7f3a\u5c11\u8de8\u5e27\u811a\u672c\u7f16\u5236\u9632\u5fa1",level:2},{value:"\u53d1\u73b0\u53ef\u9ad8\u901f\u7f13\u5b58\u7684 SSL \u9875\u9762",id:"\u53d1\u73b0\u53ef\u9ad8\u901f\u7f13\u5b58\u7684-ssl-\u9875\u9762",level:2},{value:"\u7f3a\u5c11 HTTP Strict-Transport-Security \u5934",id:"\u7f3a\u5c11-http-strict-transport-security-\u5934",level:2},{value:"\u7f3a\u5c11\u201cContent-Security-Policy\u201d\u5934",id:"\u7f3a\u5c11content-security-policy\u5934",level:2},{value:"\u7f3a\u5c11\u201cX-Content-Type-Options\u201d\u5934",id:"\u7f3a\u5c11x-content-type-options\u5934",level:2},{value:"\u7f3a\u5c11\u201cX-XSS-Protection\u201d\u5934",id:"\u7f3a\u5c11x-xss-protection\u5934",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5df2\u542f\u7528\u76ee\u5f55"},"\u5df2\u542f\u7528\u76ee\u5f55"),(0,r.kt)("p",null,"\u9700\u8981\u5173\u95ed\u76ee\u5f55\u6d4f\u89c8\u7d22\u5f15"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache"),"\uff0c \u8fdb\u5165apache\u7684\u914d\u7f6e\u6587\u4ef6 httpd.conf \u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'DocumentRoot "E:/www"\n<Directory "E:/www">\n    ...\n    #Options Indexes FollowSymLinks Includes ExecCGI\n    Options FollowSymLinks Includes ExecCGI #\u53bb\u6389Indexes\n  ...\n</Directory>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx"),"\uff0c \u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6 nginx.conf\uff0c\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"autoindex off;  #\u5f00\u542fnginx\u76ee\u5f55\u6d4f\u89c8\u529f\u80fd,on\u4e3a\u5f00\u542f,off\u4e3a\u5173\u95ed\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u90fd\u9700\u8981\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u624d\u751f\u6548"),(0,r.kt)("h2",{id:"\u52a0\u5bc6\u4f1a\u8bddsslcookie-\u4e2d\u7f3a\u5c11-secure-\u5c5e\u6027php"},"\u52a0\u5bc6\u4f1a\u8bdd\uff08SSL\uff09Cookie \u4e2d\u7f3a\u5c11 Secure \u5c5e\u6027\uff08PHP\uff09"),(0,r.kt)("p",null,"\u4f7f\u7528https\u8bbf\u95ee\u65f6\uff0c \u9700\u8981\u7ed9cookie\u52a0\u4e0aSecure\u548cHttpOnly\u5c5e\u6027\uff0c \u4f46\u9700\u8981\u6ce8\u610f\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bbe\u7f6eHttpOnly=true\u7684cookie\u4e0d\u80fd\u88abjs\u83b7\u53d6\u5230\uff0c\u65e0\u6cd5\u7528document.cookie\u6253\u51facookie\u7684\u5185\u5bb9\u3002")),(0,r.kt)("h4",{id:"1-\u8bbe\u7f6esecure"},"1","."," \u8bbe\u7f6esecure"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230,\u53ea\u8981\u5728",(0,r.kt)("strong",{parentName:"p"},"setcookie"),"\u7b2c\u516d\u4e2a\u53c2\u6570\u8bbe\u7f6e\u4e3atrue,\u5c31\u53ef\u4ee5\u4e86"),(0,r.kt)("h4",{id:"2-\u8bbe\u7f6ehttponly"},"2","."," \u8bbe\u7f6ehttponly"),(0,r.kt)("p",null,"\u57285.1\u548c\u4e4b\u524d\u7684\u7248\u672c\u5728header\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<?php\nheader("Set-Cookie: hidden=value; httpOnly"); \n')),(0,r.kt)("p",null,"\u57285.2\u548c\u66f4\u9ad8\u7684\u7248\u672c\uff0cCookie \u53c2\u6570\u53ef\u4ee5\u5728 php.ini\u6587\u4ef6\u4e2d\u5b9a\u4e49\uff0c\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u6709\u51e0\u4e2a\u9009\u62e9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1","."," \u4fee\u6539php\u5168\u5c40\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'#1) \u76f4\u63a5\u4fee\u6539php.ini\u6587\u4ef6\nsession.cookie_httponly=true\n#2) \u6b64\u914d\u7f6e\u53ef\u4ee5\u5728php\u4ee3\u7801\u4e2d\u4f7f\u7528`ini_set`\u51fd\u6570\u8bbe\u7f6e\nini_set("session.cookie_httponly", 1);\n#3)\uff0c\u5728\u8c03\u7528 session_start()\u4e4b\u524d\u8c03\u7528 session_set_cookie_params()\u51fd\u6570\u8bbe\u7f6e\n<?php\nprivate function startSession($time = 3600, $ses = \'MYSES\') {\n    session_set_cookie_params($time);\n    session_name($ses);\n    session_start();\n    if (isset($_COOKIE[$ses]))\n      #\u7b2c\u4e94\u4e2a\u53c2\u6570 \u8bbe\u7f6e\u4e3atrue\n      setcookie($ses, $_COOKIE[$ses], time() + $time, "/", true);\n}\n?> \n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://php.net/manual/zh/function.session-set-cookie-params.php"},"session","_","set","_","cookie","_","params()"),"\u51fd\u6570",(0,r.kt)("a",{parentName:"p",href:"https://php.net/manual/zh/function.session-start.php"},"session","_","start()")," \u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2","."," \u5728\u8bbe\u7f6ecookie\u65f6\u76f4\u63a5\u6307\u5b9ahttponly")),(0,r.kt)("p",null,"\u524d\u9762\u4ecb\u7ecd\u5728setcookie\u51fd\u6570\u7b2c7\u4e2a\u53c2\u6570",(0,r.kt)("strong",{parentName:"p"},"httponly"),"\u8bbe\u7f6e\u4e3atrue\u5373\u53ef."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",{parentName:"blockquote"},"setcookie\u7684httponly\u53c2\u6570 \u57285.2.0\u7248\u672c\u5f00\u59cb\u624d\u6709")),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/87a72c26db2a"},"https://www.jianshu.com/p/87a72c26db2a")),(0,r.kt)("h2",{id:"\u4e0d\u5b89\u5168\u7684http\u65b9\u6cd5"},"\u4e0d\u5b89\u5168\u7684HTTP\u65b9\u6cd5"),(0,r.kt)("p",null,"\u53ea\u5141\u8bb8post\uff0cget\u7684http\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache"),"\u5728httpd.conf\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Location "/">\n   AllowMethods GET POST\n</Location>\n')),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_allowmethods.html"},"https://httpd.apache.org/docs/2.4/mod/mod","_","allowmethods.html")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx"),"\u5728nginx.conf\u4e2d\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if ($request_method !~ ^(GET|HEAD|POST)$ ) {\n   return 403;\n}\n")),(0,r.kt)("h2",{id:"\u670d\u52a1\u5668\u7aefbanner\u6cc4\u6f0f"},"\u670d\u52a1\u5668\u7aefBanner\u6cc4\u6f0f"),(0,r.kt)("p",null,"\u9690\u85cfserver\u4fe1\u606f\u548c\u7248\u672c\u4fe1\u606f\uff0c nginx\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0 ",(0,r.kt)("a",{parentName:"p",href:"https://lzwdot.github.io/docusaurus/blog/22789"},"https://lzwdot.github.io/docusaurus/blog/22789")),(0,r.kt)("p",null,"Apache\u914d\u7f6e\u9690\u85cf\u7248\u672c\u53f7\uff0c \u5728httpd.conf\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"# \u627e\u5230ServerTokens\u548cServerSignature\u5e76\u4fee\u6539\u4e3a\uff1a\nServerTokens  Prod\nServerSignature  off\n# \u5982\u679c\u6ca1\u6709\u627e\u5230ServerTokens\u548cServerSignature\u53ef\u4ee5\u5728\u6700\u540e\u4e00\u884c\u6dfb\u52a0\n")),(0,r.kt)("p",null,"php\u9690\u85cf\u7248\u672c\u53f7\uff0c\u5728php.ini\u4e2d\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"expose_php=Off\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u4f2a\u9020\u7684-url-\u8bbe\u7f6e-referer-\u5934"},"\u4f7f\u7528\u4f2a\u9020\u7684 URL \u8bbe\u7f6e Referer \u5934"),(0,r.kt)("p",null,"\u5c06\u53ef\u80fd\u5e72\u6270 CSRF \u653b\u51fb\u7684 HTTP \u5934\u9664\u53bb\uff0c\u5e76\u4f7f\u7528\u4f2a\u9020\u7684 URL \u8bbe\u7f6e Referer \u5934\u8fdb\u884c\u8bbf\u95ee\uff0c\u6240\u4ee5\u9700\u8981\u9a8c\u8bc1 Referer \u5934"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u65b9\u5f0f\u53ea\u80fd\u8d77\u5230\u7b80\u5355\u53d1\u9632\u62a4\uff0c Referer \u5934\u662f\u53ef\u4ee5\u4f2a\u9020\u7684\uff0c\u66f4\u63a8\u8350\u4f7f\u7528csrf-token\u8868\u5355\u65b9\u5f0f\u8fdb\u884c\u9632\u62a4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], $_SERVER['SERVER_NAME']) === false) {\n   exit('\u4e0d\u5141\u8bb8\u7684\u8bf7\u6c42');\n}\n")),(0,r.kt)("h2",{id:"\u5173\u95edapache\u4e0bicons\u76ee\u5f55\u5217\u8868"},"\u5173\u95edapache\u4e0bicons\u76ee\u5f55\u5217\u8868"),(0,r.kt)("p",null,"\u4f7f\u7528apache\u670d\u52a1\u5668\uff0c\u5f53\u6211\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"http://localhost/icons/%E6%97%B6%E4%BC%9A%E8%87%AA%E5%8A%A8%E6%98%BE%E7%A4%BA%E8%BF%99%E4%B8%AA%E7%9B%AE%E5%BD%95%E4%B8%8B%E7%9A%84%E6%89%80%E4%BB%A5%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8"},"http://localhost/icons/\u65f6\u4f1a\u81ea\u52a8\u663e\u793a\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6240\u4ee5\u6587\u4ef6\u5217\u8868"),"\uff0c\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u9700\u8981\u5173\u95ed\u76ee\u5f55\u5217\u8868"),(0,r.kt)("p",null,"\u76ee\u5f55",(0,r.kt)("inlineCode",{parentName:"p"},"apache/conf/extra/"),"\u4e0b\u7684\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"httpd-autoindex.conf"),"\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Alias /icons/ "/xampp/apache/icons/"\n<Directory "/xampp/apache/icons">\n    #Options Indexes MultiViews\n    Options MultiViews #\u53bb\u6389Indexes\n    AllowOverride None\n    Require all granted\n</Directory>\n')),(0,r.kt)("h2",{id:"flash-\u53c2\u6570-allowscriptaccess-\u5df2\u8bbe\u7f6e\u4e3a-always"},"Flash \u53c2\u6570 AllowScriptAccess \u5df2\u8bbe\u7f6e\u4e3a always"),(0,r.kt)("p",null,"\u5f53\u663e\u793a\u6709\u8fd9\u4e2a\u6f0f\u6d1e\u65f6\uff0c\u4e00\u822c\u662fjs\u6587\u4ef6\u5305\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},'<param name="allowscriptaccess" value="always" />')," \u53c2\u6570\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"ueditor hird-partywebuploaderwebuploader.js"),"\u6587\u4ef6\u7684\u5927\u69826472\u884c\u3002\u4e00\u822c\u5efa\u8bae\u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'<param name="allowscriptaccess" value="sameDomain" />')),(0,r.kt)("h2",{id:"appscan\u68c0\u6d4b\u5230\u9690\u85cf\u76ee\u5f55"},"AppScan\u68c0\u6d4b\u5230\u9690\u85cf\u76ee\u5f55"),(0,r.kt)("p",null,"\u76f4\u63a5\u8bbf\u95ee\u5728\u7ad9\u70b9\u6839\u76ee\u5f55\u7684css\uff0cimages\u65f6\uff0c\u7cfb\u7edf\u53ef\u80fd\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"403 forbidden")," \uff0c\u8fd9\u65f6\u5b89\u5168\u8f6f\u4ef6\u4f1a\u89c9\u5f97\u662f\u4e00\u4e2a\u4e0d\u5b89\u5168\u7684\u65b9\u5f0f\u914d\u7f6e\u3002\u53ef\u80fd\u7684\u8bdd\uff0c\u8bf7\u53d1\u51fa\u6539\u7528\u201c404 \uff0d \u627e\u4e0d\u5230\u201d\u54cd\u5e94\u72b6\u6001\u4ee3\u7801\uff0c\u800c\u4e0d\u662f\u201c403 \uff0d \u7981\u6b62\u201d\u3002\u8fd9\u9879\u66f4\u6539\u4f1a\u5c06\u7ad9\u70b9\u7684\u76ee\u5f55\u6a21\u7cca\u5316\uff0c\u53ef\u4ee5\u9632\u6b62\u6cc4\u6f0f\u7ad9\u70b9\u7ed3\u6784\u3002\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u65b9\u5f0f\u4e00\u662f\u901a\u8fc7\u81ea\u5b9a\u4e49 403 \u9519\u8bef\u9875\u9762\u8fd4\u56de 404\uff0c\u5373 403 \u7684\u9519\u8bef\u9875\u9762\u627e\u4e0d\u5230"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx")," \u5728 sever \u6a21\u5757\u4e2d\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"location / {\n    ...\n        error_page 403 /404;\n    ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," \u5728 httpd.conf \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorDocument 403 /404")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u4e8c"),"\u662f\u5728css\uff0cimage\u7b49\u76ee\u5f55\u4e2d\u65b0\u5efa\u4e00\u4e2a\u7a7a\u767d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," \u6587\u4ef6\u5373\u53ef"),(0,r.kt)("h2",{id:"\u7f3a\u5c11\u8de8\u5e27\u811a\u672c\u7f16\u5236\u9632\u5fa1"},"\u7f3a\u5c11\u8de8\u5e27\u811a\u672c\u7f16\u5236\u9632\u5fa1"),(0,r.kt)("p",null,"\u4e00\u822c\u4f7f\u7528 X-Frame-Options \u9632\u6b62\uff08\u9650\u5236\uff09\u5728 iFrame \u4e2d\u5d4c\u5165\u9875\u9762\uff0c\u914d\u7f6e\u65b9\u6cd5\u6709\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PHP")," \u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"header('X-Frame-Options:Deny');")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"header('X-Frame-Options:SAMEORIGIN);//\u89c9\u5f97\u7528\u8fd9\u4e2a\u6bd4\u8f83\u597d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header X-Frame-Options SAMEORIGIN")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Header always append X-Frame-Options SAMEORIGIN")),(0,r.kt)("h2",{id:"\u53d1\u73b0\u53ef\u9ad8\u901f\u7f13\u5b58\u7684-ssl-\u9875\u9762"},"\u53d1\u73b0\u53ef\u9ad8\u901f\u7f13\u5b58\u7684 SSL \u9875\u9762"),(0,r.kt)("p",null,"\u4e00\u822c\u5efa\u8bae\u9875\u9762\u6807\u9898\u4e2d\u7684\u201cCache-Control: no-store\u201d\u548c\u201cPragma: no-cache\u201d\u6216\u201cCache-Control: no-cache\u201d\u54cd\u5e94\u4f2a\u6307\u4ee4\u6765\u5b9e\u73b0\u6b64\u64cd\u4f5c\uff0c\u9875\u9762\u6dfb\u52a0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},' <meta http-equiv="Cache-Control" content="no-cache, no-store">\n <meta http-equiv="Pragma" content="no-cache">     \n')),(0,r.kt)("p",null,"\u544a\u77e5\u6d4f\u89c8\u5668\u4e0d\u7f13\u5b58\u9875\u9762\uff1b\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u54cd\u5e94\u8fc7\u671f\u65e5\u671f\u59cb\u7ec8\u4e3a\u8fc7\u671f\uff0c\u5219\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta http-equiv="Expires" content="0">')," \u6d4f\u89c8\u5668\u4f1a\u5728\u8fd9\u6bb5\u65f6\u95f4\u4e4b\u540e\u66f4\u65b0\u7f13\u5b58\u91cc\u7684\u9875\u9762\u3002\u5982\u679c\u4f7f\u7528Laravel\u6846\u67b6\uff0c\u5219\u53ef\u4ee5\u4e2d\u95f4\u4ef6\u6dfb\u52a0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return $next($request)->header('Cache-Control', 'no-cache, no-store')->header('Pragma', 'no-cache');\n")),(0,r.kt)("h2",{id:"\u7f3a\u5c11-http-strict-transport-security-\u5934"},"\u7f3a\u5c11 HTTP Strict-Transport-Security \u5934"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'add_header Strict-Transport-Security "max-age=63072000; includeSubdomains" always;')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains; preload"')),(0,r.kt)("h2",{id:"\u7f3a\u5c11content-security-policy\u5934"},"\u7f3a\u5c11\u201cContent-Security-Policy\u201d\u5934"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762")," \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'add_header Content-Security-Policy "upgrade-insecure-requests;connect-src *";')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Header set Content-Security-Policy \"default-src 'self';\"")),(0,r.kt)("p",null,"\u53c2\u8003\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.uedbox.com/post/56310/"},"https://www.uedbox.com/post/56310/")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/hustskyking/p/upgrade-insecure-requests.html"},"https://www.cnblogs.com/hustskyking/p/upgrade-insecure-requests.html")),(0,r.kt)("h2",{id:"\u7f3a\u5c11x-content-type-options\u5934"},"\u7f3a\u5c11\u201cX-Content-Type-Options\u201d\u5934"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"add_header X-Content-Type-Options nosniff;")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Header always set X-Content-Type-Options nosniff")),(0,r.kt)("h2",{id:"\u7f3a\u5c11x-xss-protection\u5934"},"\u7f3a\u5c11\u201cX-XSS-Protection\u201d\u5934"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762"),"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta http-equiv="Content-Type" content="X-XSS-Protection:1;mode=block" />')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nginx")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'add_header X-XSS-Protection "1; mode=block";')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," ",(0,r.kt)("inlineCode",{parentName:"p"},'\u914d\u7f6e Header always append X-XSS-Protection "1;mode=block"')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u6dfb\u52a0HTTP\u5934\u90e8\u8bbe\uff0cNginx\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://www.jdon.com/idea/htmlcss/7-http-headers-to-secure-your-app.html"},"https://www.jdon.com/idea/htmlcss/7-http-headers-to-secure-your-app.html")," \uff0cApache\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"http://itindex.net/detail/52305-apache-header-%E5%AE%89%E5%85%A8"},"http://itindex.net/detail/52305-apache-header-%E5%AE%89%E5%85%A8"))))}u.isMDXComponent=!0}}]);