"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[81297],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(r),s=a,g=d["".concat(p,".").concat(s)]||d[s]||c[s]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.previewImage(param)",sidebar_label:"previewImage"},o=void 0,p={unversionedId:"apis/multimedia/images/previewImage",id:"version-1.x/apis/multimedia/images/previewImage",title:"Taro.previewImage(param)",description:"\u5728\u65b0\u9875\u9762\u4e2d\u5168\u5c4f\u9884\u89c8\u56fe\u7247\u3002\u9884\u89c8\u7684\u8fc7\u7a0b\u4e2d\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u4fdd\u5b58\u56fe\u7247\u3001\u53d1\u9001\u7ed9\u670b\u53cb\u7b49\u64cd\u4f5c\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/images/previewImage.md",sourceDirName:"apis/multimedia/images",slug:"/apis/multimedia/images/previewImage",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/images/previewImage",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/multimedia/images/previewImage.md",tags:[],version:"1.x",frontMatter:{title:"Taro.previewImage(param)",sidebar_label:"previewImage"},sidebar:"version-1.x/API",previous:{title:"chooseImage",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/images/chooseImage"},next:{title:"getImageInfo",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/images/getImageInfo"}},m={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],c={toc:u};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u65b0\u9875\u9762\u4e2d\u5168\u5c4f\u9884\u89c8\u56fe\u7247\u3002\u9884\u89c8\u7684\u8fc7\u7a0b\u4e2d\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u4fdd\u5b58\u56fe\u7247\u3001\u53d1\u9001\u7ed9\u670b\u53cb\u7b49\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.previewImage.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.previewImage")),"\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"object-param"}),"object param"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"urls"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"Array.","<","string",">")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u9700\u8981\u9884\u89c8\u7684\u56fe\u7247\u94fe\u63a5\u5217\u8868\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[current]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"urls","[0]",'"')),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"urls\u7684\u7b2c\u4e00\u5f20 \u5f53\u524d\u663e\u793a\u56fe\u7247\u7684\u94fe\u63a5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[success]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[fail]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[complete]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.previewImage(params).then(...)\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.previewImage"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);