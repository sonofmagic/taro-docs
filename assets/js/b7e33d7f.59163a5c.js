"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59187],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return N}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),N=r,g=k["".concat(c,".").concat(N)]||k[N]||o[N]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},78016:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:e,className:n}),t)}},27205:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(93106),r=n(60467),l=n(7617),i=n(26679),p="tabItem_ySgZ";function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)}function d(t){var e,n;const{lazy:r,block:d,defaultValue:m,values:o,groupId:k,className:N}=t,g=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),s=null!=o?o:g.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),u=(0,l.lx)(s,((t,e)=>t.value===e.value));if(u.length>0)throw new Error(`Docusaurus error: Duplicate values "${u.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const b=null===m?m:null!==(v=null!=m?m:null===(e=g.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==v?v:null===(n=g[0])||void 0===n?void 0:n.props.value;if(null!==b&&!s.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${s.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,l.UB)(),[h,C]=(0,a.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=k){const t=f[k];null!=t&&t!==h&&s.some((e=>e.value===t))&&C(t)}const P=t=>{const e=t.currentTarget,n=O.indexOf(e),a=s[n].value;a!==h&&(w(e),C(a),null!=k&&y(k,a))},E=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=O.indexOf(t.currentTarget)+1;e=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(t.currentTarget)-1;e=O[n]||O[O.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},N)},s.map((({value:t,label:e,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:t=>O.push(t),onKeyDown:E,onFocus:P,onClick:P},n,{className:(0,i.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":h===t})}),null!=e?e:t)))),r?(0,a.cloneElement)(g.filter((t=>t.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})))))}function m(t){const e=(0,r.Z)();return a.createElement(d,c({key:String(e)},t))}},14241:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return k}});n(93106);var a=n(79874),r=n(27205),l=n(78016);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={title:"Canvas",sidebar_label:"Canvas"},d=void 0,m={unversionedId:"components/canvas/canvas",id:"components/canvas/canvas",title:"Canvas",description:"\u753b\u5e03",source:"@site/docs/components/canvas/canvas.md",sourceDirName:"components/canvas",slug:"/components/canvas/",permalink:"/taro-docs/docs/next/components/canvas/",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/canvas/canvas.md",tags:[],version:"current",frontMatter:{title:"Canvas",sidebar_label:"Canvas"},sidebar:"components",previous:{title:"Map",permalink:"/taro-docs/docs/next/components/maps/map"},next:{title:"Ad",permalink:"/taro-docs/docs/next/components/open/ad"}},o={},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"CanvasProps",id:"canvasprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3}],N={toc:k};function g(t){var{components:e}=t,c=p(t,["components"]);return(0,a.kt)("wrapper",i({},N,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u753b\u5e03"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Canvas />")," \u7ec4\u4ef6\u7684 RN \u7248\u672c\u5c1a\u672a\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(58884).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CanvasProps>\n")),(0,a.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    // \u5982\u679c\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u5219\u8981\u52a0\u4e0a id \u5c5e\u6027\uff0c\u503c\u548ccanvasId\u4e00\u81f4\n    return (\n      <Canvas style='width: 300px; height: 200px;' canvasId='canvas' />\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  \x3c!-- \u5982\u679c\u662f\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c\u5219\u8981\u52a0\u4e0a id \u5c5e\u6027\uff0c\u503c\u548ccanvasId\u4e00\u81f4 --\x3e\n  <canvas style="width: 300px; height: 200px;" canvas-id="canvas" />\n</template>\n')))),(0,a.kt)("h2",i({},{id:"canvasprops"}),"CanvasProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"canvasId"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"disableScroll"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onTouchStart"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onTouchMove"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onTouchEnd"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onTouchCancel"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CanvasTouchEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onLongTap"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onErrorEventDetail>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = {errMsg: 'something wrong'}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7ec4\u4ef6\u552f\u4e00\u6807\u8bc6\u7b26\u3002",(0,a.kt)("br",null),"\u6ce8\u610f\uff1a\u540c\u4e00\u9875\u9762\u4e2d\u7684 id \u4e0d\u53ef\u91cd\u590d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"style"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"class"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onTap"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u70b9\u51fb\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onReady"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"canvas \u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f\u89e6\u53d1\u3002",(0,a.kt)("br",null),"\u7248\u672c\u8981\u6c42\uff1a\u57fa\u7840\u5e93\xa02.7.0\xa0\u53ca\u4ee5\u4e0a")))),(0,a.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.type"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.canvasId"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.disableScroll"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchStart"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchMove"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchEnd"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onTouchCancel"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onLongTap"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onError"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.nativeProps"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.id"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.style"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.class"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.width"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.height"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onTap"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"CanvasProps.onReady"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",i({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string"))))))}g.isMDXComponent=!0},56174:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58884:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);