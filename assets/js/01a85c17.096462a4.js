"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64013],{24524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(67294),n=a(86010),r=a(35155),s=a(1944),c=a(35281),i=a(60147),m=a(26090),o=a(90197);function u(e){let{tags:t,sidebar:a}=e;const u=(0,r.M)();return l.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:u}),l.createElement(o.Z,{tag:"blog_tags_list"}),l.createElement(i.Z,{sidebar:a},l.createElement("h1",null,u),l.createElement(m.Z,{tags:t})))}},13008:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&l.createElement("span",null,m))}},26090:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(35155),r=a(13008);const s="tag_Nnez";function c(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s},l.createElement(r.Z,e))))),l.createElement("hr",null))}function i(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(c,{key:e.letter,letterEntry:e}))))}},35155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(95999);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},60147:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(67294),n=a(86010),r=a(70179),s=a(87524),c=a(39960),i=a(95999),m=a(52263),o=a(76775);const u="sidebar_brwN",g="sidebarItemTitle_r4Q1",d="sidebarItemList_QwSx",b="sidebarItem_lnhn",p="sidebarItemLink_yNGZ",E="sidebarItemLinkActive_oSRm";function h(e){let{sidebar:t}=e;const{siteConfig:{organizationName:a,customFields:r}}=(0,m.Z)(),s=(0,o.TH)();let h="",N="";if(r.createQuestion||r.createPost){const e=1==s.pathname.indexOf("question")?r.createQuestion:r.createPost;h=e.repo?`https://github.com/${a}/${e.repo}/issues`:"",N=e.label}return l.createElement("aside",{className:"col",style:{paddingLeft:0}},h&&N&&l.createElement(c.Z,{className:"col button button--primary margin-bottom--lg shadow--lw",itemProp:"url",to:h},N),l.createElement("nav",{className:(0,n.Z)(u,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(g,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(d,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:b},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:E},e.title)))))))}var N=a(13102);function f(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function k(e){return l.createElement(N.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(k,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function Z(e){const{sidebar:t,toc:a,children:s,...c}=e;t&&t.items.length;return l.createElement(r.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row",style:{justifyContent:"center"}},l.createElement("main",{className:(0,n.Z)("col","col--8"),itemScope:!0,itemType:"http://schema.org/Blog"},s),l.createElement("div",{className:"col col--3"},l.createElement(v,{sidebar:t}),a&&a))))}}}]);