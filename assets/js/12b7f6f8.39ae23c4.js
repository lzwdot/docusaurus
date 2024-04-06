"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,s(s({ref:n},l),{},{components:t})):r.createElement(y,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u767e\u5ea6\u5730\u56fe\u53ef\u89c6\u5316\u4e4b3D\u5efa\u7b51",ID:29503,date:"2022-12-10 21:00:35",authors:["lzw"],tags:["codes","data-visual"],slug:"/29503",type:"codes"},s=void 0,i={unversionedId:"data-visual/29503",id:"data-visual/29503",title:"\u767e\u5ea6\u5730\u56fe\u53ef\u89c6\u5316\u4e4b3D\u5efa\u7b51",description:"3D \u5efa\u7b51\uff0c\u8fd9\u91cc\u4f7f\u7528\u5230\u58a8\u5361\u6258\u6295\u5f71\uff1ahttps://zhuanlan.zhihu.com/p/358213607",source:"@site/codes/data-visual/29503.md",sourceDirName:"data-visual",slug:"/29503",permalink:"/docusaurus/codes/29503",draft:!1,tags:[{label:"codes",permalink:"/docusaurus/codes/tags/codes"},{label:"data-visual",permalink:"/docusaurus/codes/tags/data-visual"}],version:"current",frontMatter:{title:"\u767e\u5ea6\u5730\u56fe\u53ef\u89c6\u5316\u4e4b3D\u5efa\u7b51",ID:29503,date:"2022-12-10 21:00:35",authors:["lzw"],tags:["codes","data-visual"],slug:"/29503",type:"codes"},sidebar:"tutorialSidebar",previous:{title:"\u767e\u5ea6\u5730\u56fe\u53ef\u89c6\u5316\u4e4b\u70ab\u9177\u98de\u7ebf\u52a8\u753b",permalink:"/docusaurus/codes/29502"}},p={},c=[],l=(u="HtmlDemo",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"3D \u5efa\u7b51\uff0c\u8fd9\u91cc\u4f7f\u7528\u5230",(0,o.kt)("strong",{parentName:"p"},"\u58a8\u5361\u6258\u6295\u5f71"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/358213607"},"https://zhuanlan.zhihu.com/p/358213607")),(0,o.kt)(l,{mdxType:"HtmlDemo"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n  html,\n  body,\n  #map_container {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .BMap_cpyCtr,\n  .anchorBL {\n    display: none;\n  }\n\n  .btn-wrapper {\n    position: absolute;\n    left: 50px;\n    top: 50px;\n    z-index: 10;\n  }\n</style>\n<div id="map_container"></div>\n<script src="//api.map.baidu.com/api?v=1.0&type=webgl&ak=fgfk77ozjLLfeYbttCBn0q8BjShKxsRM"><\/script>\n<script src="//mapv.baidu.com/gl/examples/static/common.js"><\/script>\n<script src="//mapv.baidu.com/build/mapv.min.js"><\/script>\n<script src="//code.bdstatic.com/npm/mapvgl@1.0.0-beta.159/dist/mapvgl.min.js"><\/script>\n<script src="//code.bdstatic.com/npm/mapvgl@1.0.0-beta.159/dist/mapvgl.threelayers.min.js"><\/script>\n<script>\n  window.addEventListener("load", function () {\n    const cityCenter = mapv.utilCityCenter.getCenterByCityName("\u5317\u4eac");\n    // \u4f7f\u7528 common.js \u521d\u59cb\u5316\n    const map = initMap({\n      tilt: 80,\n      heading: -45.3,\n      center: [106.540547, 29.564858],\n      zoom: 17,\n      // style: purpleStyle,\n    });\n\n    fetch("/data/chongqing.json")\n      .then((res) => res.json())\n      .then((res) => {\n        // \u5b98\u65b9\u4f8b\u5b50 https://mapv.baidu.com/gl/examples/editor.html#shape.html\n        const polygons = [];\n        const len = res.length;\n        for (let i = 0; i < len; i++) {\n          const line = res[i];\n          const polygon = [];\n          const pt = [line[1] * 512, line[2] * 512];\n          for (let j = 3; j < line.length; j += 2) {\n            pt[0] += line[j] / 100 / 2;\n            pt[1] += line[j + 1] / 100 / 2;\n            polygon.push([pt[0], pt[1]]);\n          }\n          polygons.push({\n            geometry: {\n              type: "Polygon",\n              coordinates: [polygon],\n            },\n            properties: {\n              height: line[0] / 2,\n            },\n          });\n        }\n\n        console.log(polygons);\n\n        // ======= \u7ed8\u5236\u5730\u56fe  https://lbs.baidu.com/solutions/mapvdata\n        // 1\u3001\u521d\u59cb\u5316\u56fe\u5c42\n        const view = new mapvgl.View({ map });\n\n        // 2\u3001\u521d\u59cb\u5316\u5bf9\u8c61\n        const shapeLayer = new mapvgl.ShapeLayer({\n          color: "rgba(55, 50, 255, 0.3)", // \u67f1\u72b6\u56fe\u989c\u8272\n          enablePicked: true, // \u662f\u5426\u53ef\u4ee5\u62fe\u53d6\n          selectedIndex: -1, // \u9009\u4e2d\u9879\n          selectedColor: "#ee1111", // \u9009\u4e2d\u9879\u989c\u8272\n          autoSelect: true, // \u6839\u636e\u9f20\u6807\u4f4d\u7f6e\u6765\u81ea\u52a8\u8bbe\u7f6e\u9009\u4e2d\u9879\n          onClick: (e) => {\n            // \u70b9\u51fb\u4e8b\u4ef6\n            console.log(e);\n          },\n          riseTime: 5000,\n        });\n\n        // 3\u3001\u5c06\u5bf9\u8c61\u6dfb\u52a0\u5230\u56fe\u5c42\u4e2d\n        view.addLayer(shapeLayer);\n\n        // 4\u3001\u5c06\u5bf9\u8c61\u4e0e\u6570\u636e\u6e90\u8fdb\u884c\u7ed1\u5b9a\n        shapeLayer.setData(polygons);\n      });\n\n    // data.push({\n    //   geometry: {\n    //     type: \'Polygon\',\n    //     coordinates: [\n    //       [\n    //         // [116.392394, 39.910683],\n    //         // [116.405976, 39.927727],\n    //         // [116.420996, 39.910351]\n    //         /*\n    //          * \u58a8\u5361\u6258\u6295\u5f71\uff0c\u9700\u8981\u4f7f\u7528\u5230 api \u8f6c\u6362 https://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition\n    //          * \u6bd4\u5982\uff1ahttps://api.map.baidu.com/geoconv/v1/?coords=114.21892734521,29.575429778924&from=1&to=6&ak=\u4f60\u7684\u5bc6\u94a5\n    //          */\n    //         // [12958287.560934239, 4826420.121990554],\n    //         // [12959801.63393129, 4828874.558443741],\n    //         // [12961481.9187227, 4826328.322460731]\n    //       ]\n    //     ]\n    //   },\n    //   properties: {\n    //     height: 200, // \u591a\u8fb9\u5f62\u9ad8\u5ea6\n    //   }\n    // });\n  });\n<\/script>\n'))))}m.isMDXComponent=!0}}]);