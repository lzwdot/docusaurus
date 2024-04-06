"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49984],{3905:(n,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>p});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function c(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},l=Object.keys(n);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var i=t.createContext({}),s=function(n){var e=t.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},d=function(n){var e=s(n.components);return t.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},b=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,l=n.originalType,i=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),b=s(r),p=o,y=b["".concat(i,".").concat(p)]||b[p]||u[p]||l;return r?t.createElement(y,a(a({ref:e},d),{},{components:r})):t.createElement(y,a({ref:e},d))}));function p(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=r.length,a=new Array(l);a[0]=b;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"==typeof n?n:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97086:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const l={title:"echarts \u5165\u95e8",ID:29483,date:"2022-11-10 21:00:46",authors:["lzw"],tags:["codes","data-visual"],slug:"/29483",type:"codes"},a=void 0,c={unversionedId:"data-visual/29483",id:"data-visual/29483",title:"echarts \u5165\u95e8",description:"",source:"@site/codes/data-visual/29483.md",sourceDirName:"data-visual",slug:"/29483",permalink:"/docusaurus/codes/29483",draft:!1,tags:[{label:"codes",permalink:"/docusaurus/codes/tags/codes"},{label:"data-visual",permalink:"/docusaurus/codes/tags/data-visual"}],version:"current",frontMatter:{title:"echarts \u5165\u95e8",ID:29483,date:"2022-11-10 21:00:46",authors:["lzw"],tags:["codes","data-visual"],slug:"/29483",type:"codes"},sidebar:"tutorialSidebar",previous:{title:"antv-l7 \u5165\u95e8",permalink:"/docusaurus/codes/29482"},next:{title:"echarts \u591a\u7cfb\u5217\u6848\u4f8b",permalink:"/docusaurus/codes/29484"}},i={},s=[],d=(u="HtmlDemo",function(n){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)});var u;const b={toc:s};function p(n){let{components:e,...r}=n;return(0,o.kt)("wrapper",(0,t.Z)({},b,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"HtmlDemo"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="chart" style="width:100%;height:400px"></div>\n<script src="//cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.js"><\/script>\n<script>\n  // \u4e2a\u6027\u5316\u914d\u8272 https://echarts.apache.org/v4/zh/theme-builder.html\n  (function (root, factory) {\n    if (typeof define === "function" && define.amd) {\n      // AMD. Register as an anonymous module.\n      define(["exports", "echarts"], factory);\n    } else if (\n      typeof exports === "object" &&\n      typeof exports.nodeName !== "string"\n    ) {\n      // CommonJS\n      factory(exports, require("echarts"));\n    } else {\n      // Browser globals\n      factory({}, root.echarts);\n    }\n  })(this, function (exports, echarts) {\n    var log = function (msg) {\n      if (typeof console !== "undefined") {\n        console && console.error && console.error(msg);\n      }\n    };\n    if (!echarts) {\n      log("ECharts is not Loaded");\n      return;\n    }\n    // \u6ce8\u518c\u4e3b\u9898\u540d\u79f0\n    echarts.registerTheme("vintage", {\n      color: [\n        "#d87c7c",\n        "#919e8b",\n        "#d7ab82",\n        "#6e7074",\n        "#61a0a8",\n        "#efa18d",\n        "#787464",\n        "#cc7e63",\n        "#724e58",\n        "#4b565b",\n      ],\n      backgroundColor: "rgba(254,248,239,1)",\n      textStyle: {},\n      title: {\n        textStyle: {\n          color: "#333333",\n        },\n        subtextStyle: {\n          color: "#aaaaaa",\n        },\n      },\n      line: {\n        itemStyle: {\n          borderWidth: 1,\n        },\n        lineStyle: {\n          width: 2,\n        },\n        symbolSize: 4,\n        symbol: "emptyCircle",\n        smooth: false,\n      },\n      radar: {\n        itemStyle: {\n          borderWidth: 1,\n        },\n        lineStyle: {\n          width: 2,\n        },\n        symbolSize: 4,\n        symbol: "emptyCircle",\n        smooth: false,\n      },\n      bar: {\n        itemStyle: {\n          barBorderWidth: 0,\n          barBorderColor: "#ccc",\n        },\n      },\n      pie: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      scatter: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      boxplot: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      parallel: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      sankey: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      funnel: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      gauge: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n      },\n      candlestick: {\n        itemStyle: {\n          color: "#c23531",\n          color0: "#314656",\n          borderColor: "#c23531",\n          borderColor0: "#314656",\n          borderWidth: 1,\n        },\n      },\n      graph: {\n        itemStyle: {\n          borderWidth: 0,\n          borderColor: "#ccc",\n        },\n        lineStyle: {\n          width: 1,\n          color: "#aaa",\n        },\n        symbolSize: 4,\n        symbol: "emptyCircle",\n        smooth: false,\n        color: [\n          "#d87c7c",\n          "#919e8b",\n          "#d7ab82",\n          "#6e7074",\n          "#61a0a8",\n          "#efa18d",\n          "#787464",\n          "#cc7e63",\n          "#724e58",\n          "#4b565b",\n        ],\n        label: {\n          color: "#eee",\n        },\n      },\n      map: {\n        itemStyle: {\n          normal: {\n            areaColor: "#eeeeee",\n            borderColor: "#444444",\n            borderWidth: 0.5,\n          },\n          emphasis: {\n            areaColor: "rgba(255,215,0,0.8)",\n            borderColor: "#444444",\n            borderWidth: 1,\n          },\n        },\n        label: {\n          normal: {\n            textStyle: {\n              color: "#000000",\n            },\n          },\n          emphasis: {\n            textStyle: {\n              color: "rgb(100,0,0)",\n            },\n          },\n        },\n      },\n      geo: {\n        itemStyle: {\n          normal: {\n            areaColor: "#eeeeee",\n            borderColor: "#444444",\n            borderWidth: 0.5,\n          },\n          emphasis: {\n            areaColor: "rgba(255,215,0,0.8)",\n            borderColor: "#444444",\n            borderWidth: 1,\n          },\n        },\n        label: {\n          normal: {\n            textStyle: {\n              color: "#000000",\n            },\n          },\n          emphasis: {\n            textStyle: {\n              color: "rgb(100,0,0)",\n            },\n          },\n        },\n      },\n      categoryAxis: {\n        axisLine: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisTick: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisLabel: {\n          show: true,\n          textStyle: {\n            color: "#333",\n          },\n        },\n        splitLine: {\n          show: false,\n          lineStyle: {\n            color: ["#ccc"],\n          },\n        },\n        splitArea: {\n          show: false,\n          areaStyle: {\n            color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],\n          },\n        },\n      },\n      valueAxis: {\n        axisLine: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisTick: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisLabel: {\n          show: true,\n          textStyle: {\n            color: "#333",\n          },\n        },\n        splitLine: {\n          show: true,\n          lineStyle: {\n            color: ["#ccc"],\n          },\n        },\n        splitArea: {\n          show: false,\n          areaStyle: {\n            color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],\n          },\n        },\n      },\n      logAxis: {\n        axisLine: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisTick: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisLabel: {\n          show: true,\n          textStyle: {\n            color: "#333",\n          },\n        },\n        splitLine: {\n          show: true,\n          lineStyle: {\n            color: ["#ccc"],\n          },\n        },\n        splitArea: {\n          show: false,\n          areaStyle: {\n            color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],\n          },\n        },\n      },\n      timeAxis: {\n        axisLine: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisTick: {\n          show: true,\n          lineStyle: {\n            color: "#333",\n          },\n        },\n        axisLabel: {\n          show: true,\n          textStyle: {\n            color: "#333",\n          },\n        },\n        splitLine: {\n          show: true,\n          lineStyle: {\n            color: ["#ccc"],\n          },\n        },\n        splitArea: {\n          show: false,\n          areaStyle: {\n            color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"],\n          },\n        },\n      },\n      toolbox: {\n        iconStyle: {\n          normal: {\n            borderColor: "#999999",\n          },\n          emphasis: {\n            borderColor: "#666666",\n          },\n        },\n      },\n      legend: {\n        textStyle: {\n          color: "#333333",\n        },\n      },\n      tooltip: {\n        axisPointer: {\n          lineStyle: {\n            color: "#cccccc",\n            width: 1,\n          },\n          crossStyle: {\n            color: "#cccccc",\n            width: 1,\n          },\n        },\n      },\n      timeline: {\n        lineStyle: {\n          color: "#293c55",\n          width: 1,\n        },\n        itemStyle: {\n          normal: {\n            color: "#293c55",\n            borderWidth: 1,\n          },\n          emphasis: {\n            color: "#a9334c",\n          },\n        },\n        controlStyle: {\n          normal: {\n            color: "#293c55",\n            borderColor: "#293c55",\n            borderWidth: 0.5,\n          },\n          emphasis: {\n            color: "#293c55",\n            borderColor: "#293c55",\n            borderWidth: 0.5,\n          },\n        },\n        checkpointStyle: {\n          color: "#e43c59",\n          borderColor: "rgba(194,53,49,0.5)",\n        },\n        label: {\n          normal: {\n            textStyle: {\n              color: "#293c55",\n            },\n          },\n          emphasis: {\n            textStyle: {\n              color: "#293c55",\n            },\n          },\n        },\n      },\n      visualMap: {\n        color: ["#bf444c", "#d88273", "#f6efa6"],\n      },\n      dataZoom: {\n        backgroundColor: "rgba(47,69,84,0)",\n        dataBackgroundColor: "rgba(47,69,84,0.3)",\n        fillerColor: "rgba(167,183,204,0.4)",\n        handleColor: "#a7b7cc",\n        handleSize: "100%",\n        textStyle: {\n          color: "#333333",\n        },\n      },\n      markPoint: {\n        label: {\n          color: "#eee",\n        },\n        emphasis: {\n          label: {\n            color: "#eee",\n          },\n        },\n      },\n    });\n  });\n\n  window.addEventListener("load", function () {\n    const chartDom = document.getElementById("chart");\n    // \u4e3b\u9898\u540d\u79f0 vintage\uff0c\u9ed8\u8ba4\u53ea\u6709 light | dark\n    const chart = echarts.init(chartDom, "vintage", { renderer: "svg" });\n    chart.setOption({\n      title: {\n        text: "echart \u5165\u95e8\u6848\u4f8b",\n      },\n      xAxis: {\n        data: ["\u98df\u54c1", "\u996e\u6599", "\u5bb6\u5177", "\u670d\u9970"],\n      }, // x \u8f74\n      yAxis: {}, // y \u8f74\n      series: {\n        type: "bar",\n        data: [100, 200, 400, 300],\n      }, // \u6570\u636e\n    });\n  });\n<\/script>\n'))))}p.isMDXComponent=!0}}]);