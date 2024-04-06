"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[36190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,u(u({ref:t},i),{},{components:r})):n.createElement(k,u({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Redux \u7684\u4f7f\u7528",ID:"29340",date:"2022-01-26 17:12:31",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29340",type:"docs"},u="Redux \u7684\u4f7f\u7528",c={unversionedId:"react-use/29340",id:"react-use/29340",title:"Redux \u7684\u4f7f\u7528",description:"\u77e5\u8bc6\u70b9",source:"@site/docs/react-use/29340.md",sourceDirName:"react-use",slug:"/29340",permalink:"/docusaurus/docs/29340",draft:!1,editUrl:"https://github.com/lzwdot/docusaurus/docs/react-use/29340.md",tags:[{label:"frame",permalink:"/docusaurus/docs/tags/frame"},{label:"react-use",permalink:"/docusaurus/docs/tags/react-use"}],version:"current",frontMatter:{title:"Redux \u7684\u4f7f\u7528",ID:"29340",date:"2022-01-26 17:12:31",authors:["lzw"],categories:["frame","react-use"],tags:["frame","react-use"],slug:"/29340",type:"docs"},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f React Render Props",permalink:"/docusaurus/docs/29337"},next:{title:"React-router \u7684\u4f7f\u7528",permalink:"/docusaurus/docs/29343"}},l={},s=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5355\u9879\u6570\u636e\u6d41\u6982\u8ff0",id:"\u5355\u9879\u6570\u636e\u6d41\u6982\u8ff0",level:2},{value:"react-redux",id:"react-redux",level:2},{value:"\u5f02\u6b65 action",id:"\u5f02\u6b65-action",level:2},{value:"\u4e2d\u95f4\u4ef6\u539f\u7406",id:"\u4e2d\u95f4\u4ef6\u539f\u7406",level:2}],i={toc:s};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redux-\u7684\u4f7f\u7528"},"Redux \u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u77e5\u8bc6\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u672c\u6982\u5ff5 "),(0,a.kt)("li",{parentName:"ul"},"\u5355\u9879\u6570\u636e\u6d41 "),(0,a.kt)("li",{parentName:"ul"},"react-redux"),(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65 action"),(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6")),(0,a.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"store state"),(0,a.kt)("li",{parentName:"ul"},"action"),(0,a.kt)("li",{parentName:"ul"},"reducer")),(0,a.kt)("p",null,"\u5b98\u7f51\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux';\n\n/**\n * \u8fd9\u662f\u4e00\u4e2a reducer\uff0c\u5f62\u5f0f\u4e3a (state, action) => state \u7684\u7eaf\u51fd\u6570\u3002\n * \u63cf\u8ff0\u4e86 action \u5982\u4f55\u628a state \u8f6c\u53d8\u6210\u4e0b\u4e00\u4e2a state\u3002\n *\n * state \u7684\u5f62\u5f0f\u53d6\u51b3\u4e8e\u4f60\uff0c\u53ef\u4ee5\u662f\u57fa\u672c\u7c7b\u578b\u3001\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\n * \u751a\u81f3\u662f Immutable.js \u751f\u6210\u7684\u6570\u636e\u7ed3\u6784\u3002\u60df\u4e00\u7684\u8981\u70b9\u662f\n * \u5f53 state \u53d8\u5316\u65f6\u9700\u8981\u8fd4\u56de\u5168\u65b0\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u4fee\u6539\u4f20\u5165\u7684\u53c2\u6570\u3002\n *\n * \u4e0b\u9762\u4f8b\u5b50\u4f7f\u7528 `switch` \u8bed\u53e5\u548c\u5b57\u7b26\u4e32\u6765\u505a\u5224\u65ad\uff0c\u4f46\u4f60\u53ef\u4ee5\u5199\u5e2e\u52a9\u7c7b(helper)\n * \u6839\u636e\u4e0d\u540c\u7684\u7ea6\u5b9a\uff08\u5982\u65b9\u6cd5\u6620\u5c04\uff09\u6765\u5224\u65ad\uff0c\u53ea\u8981\u9002\u7528\u4f60\u7684\u9879\u76ee\u5373\u53ef\u3002\n */\nfunction counter(state = 0, action) {\n  switch (action.type) {\n  case 'INCREMENT':\n    return state + 1;\n  case 'DECREMENT':\n    return state - 1;\n  default:\n    return state;\n  }\n}\n\n// \u521b\u5efa Redux store \u6765\u5b58\u653e\u5e94\u7528\u7684\u72b6\u6001\u3002\n// API \u662f { subscribe, dispatch, getState }\u3002\nlet store = createStore(counter);\n\n// \u53ef\u4ee5\u624b\u52a8\u8ba2\u9605\u66f4\u65b0\uff0c\u4e5f\u53ef\u4ee5\u4e8b\u4ef6\u7ed1\u5b9a\u5230\u89c6\u56fe\u5c42\u3002\nstore.subscribe(() =>\n  console.log(store.getState())\n);\n\n// \u6539\u53d8\u5185\u90e8 state \u60df\u4e00\u65b9\u6cd5\u662f dispatch \u4e00\u4e2a action\u3002\n// action \u53ef\u4ee5\u88ab\u5e8f\u5217\u5316\uff0c\u7528\u65e5\u8bb0\u8bb0\u5f55\u548c\u50a8\u5b58\u4e0b\u6765\uff0c\u540e\u671f\u8fd8\u53ef\u4ee5\u4ee5\u56de\u653e\u7684\u65b9\u5f0f\u6267\u884c\nstore.dispatch({ type: 'INCREMENT' });\n// 1\nstore.dispatch({ type: 'INCREMENT' });\n// 2\nstore.dispatch({ type: 'DECREMENT' });\n// 1\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u57fa\u672c\u4f8b\u5b50\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/getting-started#basic-example"},"https://redux.js.org/introduction/getting-started#basic-example"))),(0,a.kt)("h2",{id:"\u5355\u9879\u6570\u636e\u6d41\u6982\u8ff0"},"\u5355\u9879\u6570\u636e\u6d41\u6982\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dispatch(action)"),(0,a.kt)("li",{parentName:"ul"},"reducer -> newState"),(0,a.kt)("li",{parentName:"ul"},"subscribe \u89e6\u53d1\u901a\u77e5")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"react",src:r(23167).Z,width:"1005",height:"924"})),(0,a.kt)("h2",{id:"react-redux"},"react-redux"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Provider>")),(0,a.kt)("li",{parentName:"ul"},"connect"),(0,a.kt)("li",{parentName:"ul"},"mapStateToProps mapDispatchToProps")),(0,a.kt)("p",null,"\u7b80\u5355\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport {Provider} from 'react-redux'\nimport {createStore} from 'redux'\nimport todoApp from './reducers'\nimport App from './components/App'\n\nlet store = createStore(todoApp)\n\nexport default function () {\n  return <Provider store={store}>\n    <App/>\n  </Provider>\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b8c\u6574\u4ee3\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos/src"},"https://github.com/reduxjs/redux/tree/master/examples/todos/src"))),(0,a.kt)("h2",{id:"\u5f02\u6b65-action"},"\u5f02\u6b65 action"),(0,a.kt)("p",null,"\u540c\u6b65 action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u540c\u6b65 action\nexport const addTodo = text => {\n  // \u8fd4\u56de action \u5bf9\u8c61\n  return {\n    type: 'ADD_TODO',\n    id: nextTodoId++,\n    text\n  }\n}\n")),(0,a.kt)("p",null,"\u5f02\u6b65 action\uff0c\u5fc5\u987b\u914d\u5408 redux-thunk \u7b49\u4e2d\u95f4\u4ef6\uff0c\u5e38\u7528\u7684\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"redux-thunk"),(0,a.kt)("li",{parentName:"ul"},"redux-promise"),(0,a.kt)("li",{parentName:"ul"},"redux-saga")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {createStore,applyMiddleware} from 'redux'\nimport thunk from \"redux-thunk\";\nimport rootReducer from './reducers'\n\n// \u5f02\u6b65 action\uff0c\u9700\u8981\u5f15\u5165\u4e2d\u95f4\u4ef6 redux-thunk\nlet store = createStore(rootReducer,applyMiddleware(thunk))\n\n//-----------------\n\n// \u5f02\u6b65 action\nexport const addTodoAsync = text => {\n  // \u8fd4\u56de\u51fd\u6570\uff0c\u5176\u4e2d\u6709 dispatch \u53c2\u6570\n  return (dispatch)=>{\n    // ajax \u5f02\u6b65\u83b7\u53d6\u6570\u636e\n    fetch(url).then(res=>{\n      // \u6267\u884c\u5f02\u6b65 action\n      dispatch(addTodo(res.text))\n    })\n  }\n}\n")),(0,a.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u539f\u7406"},"\u4e2d\u95f4\u4ef6\u539f\u7406"),(0,a.kt)("p",null,"\u5728 dispatch \u4e2d\u52a0\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"react",src:r(14566).Z,width:"1824",height:"870"})),(0,a.kt)("p",null,"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {createStore,applyMiddleware} from 'redux'\nimport thunk from \"redux-thunk\";\nimport rootReducer from './reducers'\n\nconst logger = createLogger()\n\n// \u5f02\u6b65 action\uff0c\u9700\u8981\u5f15\u5165\u4e2d\u95f4\u4ef6 redux-thunk\nlet store = createStore(rootReducer,applyMiddleware(thunk,logger))\n\n//-----------------------------\n\n// \u81ea\u5df1\u4fee\u6539 dispatch\uff0c\u589e\u52a0 logger\nlet next = store.dispatch\nstore.dispatch = function dispatchAndLog(action){\n  console.log('dispatching',action)\n  next(action)\n  console.log('next state',store.getState())\n}\n")))}p.isMDXComponent=!0},14566:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-20220127113413-917f07467d4478a6149a82a320543f48.png"},23167:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/react-20220127114343-c18b7653647a6888810d77b2d08f85ac.png"}}]);