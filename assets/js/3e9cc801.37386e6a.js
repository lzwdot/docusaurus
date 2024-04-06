"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[39960],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),u=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=u(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return t?a.createElement(v,l(l({ref:r},i),{},{components:t})):a.createElement(v,l({ref:r},i))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68105:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const s={title:"supervisor\u5b89\u88c5\u914d\u7f6e\u4ee5\u53caLaravel\u961f\u5217\u8bbe\u7f6e",ID:"20413",date:"2018-08-02 19:11:34",categories:["server","php-usage"],tags:["server","php-usage"],authors:["lzw"],slug:"/20413",type:"blog"},l=void 0,o={permalink:"/docusaurus/blog/20413",editUrl:"https://github.com/lzwdot/docusaurus/blog/2018/08-02-20413.md",source:"@site/blog/2018/08-02-20413.md",title:"supervisor\u5b89\u88c5\u914d\u7f6e\u4ee5\u53caLaravel\u961f\u5217\u8bbe\u7f6e",description:"\u5b89\u88c5",date:"2018-08-02T19:11:34.000Z",formattedDate:"2018\u5e748\u67082\u65e5",tags:[{label:"server",permalink:"/docusaurus/blog/tags/server"},{label:"php-usage",permalink:"/docusaurus/blog/tags/php-usage"}],readingTime:1.56,hasTruncateMarker:!0,authors:[{name:"lzw.",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{title:"supervisor\u5b89\u88c5\u914d\u7f6e\u4ee5\u53caLaravel\u961f\u5217\u8bbe\u7f6e",ID:"20413",date:"2018-08-02 19:11:34",categories:["server","php-usage"],tags:["server","php-usage"],authors:["lzw"],slug:"/20413",type:"blog"},prevItem:{title:"supervisor\u5b89\u88c5\u4ee5\u53ca\u914d\u7f6e\u5e38\u89c1\u95ee\u9898",permalink:"/docusaurus/blog/20415"},nextItem:{title:"css\u5c5e\u6027white-space\u3001word-wrap\u548cword-break",permalink:"/docusaurus/blog/18405"}},p={authorsImageUrls:[void 0]},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u81ea\u52a8\u542f\u52a8",id:"\u81ea\u52a8\u542f\u52a8",level:3},{value:"\u8bbe\u7f6e Laravel \u961f\u5217",id:"\u8bbe\u7f6e-laravel-\u961f\u5217",level:3}],i={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("p",null,"\u65b9\u6cd51\uff1a\u5148\u5b89\u88c5 Python \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"easy_install"),"\uff0c\u518d\u901a\u8fc7 easy","_","install \u5b89\u88c5 supervisor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# yum install python-setuptools\n# easy_install supervisor\n")),(0,n.kt)("p",null,"\u65b9\u6cd52\uff1a\u4f7f\u7528pip\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# sudo pip install supervisor\n")),(0,n.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,"\u751f\u6210\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u5efa\u7acb\u76f8\u5e94\u76ee\u5f55\uff0c\u7ba1\u7406 supervisor \u542f\u52a8\u8fdb\u7a0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# echo_supervisord_conf > /etc/supervisord.conf\n# mkdir -p /etc/supervisor/conf.d/\n")),(0,n.kt)("p",null,"\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/supervisord.conf"),"\uff0c\u4fee\u6539 ","[","include","]"," \uff08",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f","[","include","]","\u524d\u9762\u7684\u201d;\u201d\u4e5f\u8981\u53bb\u6389"),"\uff09\u533a\u5757\u5185\u5bb9\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"[include]\nfiles = /etc/supervisor/conf.d/*.conf\n")),(0,n.kt)("p",null,"\u8fd9\u6837\uff0c supervisor \u4f1a\u52a0\u8f7d /etc/supervisor/conf.d/ \u4e0b\u7684\u6240\u6709 .conf \u6587\u4ef6"),(0,n.kt)("h3",{id:"\u81ea\u52a8\u542f\u52a8"},"\u81ea\u52a8\u542f\u52a8"),(0,n.kt)("p",null,"\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Supervisor/initscripts"},"https://github.com/Supervisor/initscripts")," \u4e0b\u8f7d CentOS \u4f7f\u7528\u7684\u81ea\u52a8\u542f\u52a8\u670d\u52a1\u811a\u672c ",(0,n.kt)("inlineCode",{parentName:"p"},"centos-systemd-etcs")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# wget -O /usr/lib/systemd/system/supervisord.service  https://github.com/Supervisor/initscripts/raw/master/centos-systemd-etcs\n")),(0,n.kt)("p",null,"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"supervisord")," \u670d\u52a1\u8bbe\u4e3a\u81ea\u542f\u52a8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# systemctl enable supervisord.service\n")),(0,n.kt)("p",null,"\u8f93\u5165 supervisorctl \u547d\u4ee4\u53ef\u4ee5\u8fdb\u5165 supervisor \u63a7\u5236\u53f0"),(0,n.kt)("h3",{id:"\u8bbe\u7f6e-laravel-\u961f\u5217"},"\u8bbe\u7f6e Laravel \u961f\u5217"),(0,n.kt)("p",null,"\u65b0\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/supervisor/conf.d/laravel-work.conf")," \u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"[program:laravel-worker]\nprocess_name=%(program_name)s_%(process_num)02d\ncommand=/usr/local/php/bin/php /data/wwwroot/app.com/artisan queue:work database --sleep=3 --tries=3 --daemon\nautostart=true\nautorestart=true\nuser=www\nnumprocs=8\nredirect_stderr=true\nstdout_logfile=/data/wwwroot/app.com/storage/logs/queue.log\n")),(0,n.kt)("p",null,"\u8fd9\u91cc\u5f00\u542f\u4e86 8 \u4e2a queue:work \u8fdb\u7a0b\uff0c\u5e76\u76d1\u89c6\u4ed6\u4eec\uff0c\u5982\u679c\u5931\u8d25\u7684\u8bdd\uff0c\u81ea\u52a8\u91cd\u542f\uff1b\u5728\u9879\u76ee\u7684 storage/logs/queue.log \u8bb0\u5f55\u65e5\u5fd7\u3002"),(0,n.kt)("p",null,"\u542f\u52a8 supervisor \u670d\u52a1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# supervisord\n")),(0,n.kt)("p",null,"\u81f3\u6b64\uff0c supervisor \u5b89\u88c5\u53ca Laravel \u961f\u5217\u8bbe\u7f6e\u5b8c\u6bd5"),(0,n.kt)("p",null,"\u5982\u679c\u4ee5\u540e\u914d\u7f6e\u6587\u4ef6\u6709\u4fee\u6539\uff0c\u6216\u8005\u65b0\u589e\uff0c\u8fdb\u5165 supervisor \u63a7\u5236\u53f0\uff0c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"# supervisorctl\nsupervisorctl> reread\nsupervisorctl> update\nsupervisorctl> start laravel-worker:*\n\u6216\u8005\n# supervisorctl reread\n# supervisorctl update\n# supervisorctl start laravel-worker:*\n")))}c.isMDXComponent=!0}}]);