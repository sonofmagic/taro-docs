"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16618],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,k=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(k,c(c({ref:t},s),{},{components:r})):n.createElement(k,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68328:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Taro.createTCPSocket()",sidebar_label:"createTCPSocket"},i=void 0,p={unversionedId:"apis/network/tcp/createTCPSocket",id:"version-3.x/apis/network/tcp/createTCPSocket",title:"Taro.createTCPSocket()",description:"\u521b\u5efa\u4e00\u4e2a TCP Socket \u5b9e\u4f8b\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.x/apis/network/tcp/createTCPSocket.md",sourceDirName:"apis/network/tcp",slug:"/apis/network/tcp/createTCPSocket",permalink:"/taro-docs/docs/apis/network/tcp/createTCPSocket",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/network/tcp/createTCPSocket.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createTCPSocket()",sidebar_label:"createTCPSocket"},sidebar:"API",previous:{title:"offLocalServiceDiscoveryStop",permalink:"/taro-docs/docs/apis/network/mdns/offLocalServiceDiscoveryStop"},next:{title:"TCPSocket",permalink:"/taro-docs/docs/apis/network/tcp/TCPSocket"}},l={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2}],u={toc:s};function f(e){var{components:t}=e,c=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a TCP Socket \u5b9e\u4f8b\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"}),"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u9650\u5236")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u4e0e\u5c40\u57df\u7f51\u5185\u7684\u975e\u672c\u673a IP \u901a\u4fe1"),(0,n.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u4e0e\u914d\u7f6e\u8fc7\u7684\u670d\u52a1\u5668\u57df\u540d\u901a\u4fe1\uff0c\u8be6\u89c1",(0,n.kt)("a",o({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"}),"\u76f8\u5173\u8bf4\u660e")),(0,n.kt)("li",{parentName:"ul"},"\u7981\u6b62\u4e0e\u4ee5\u4e0b\u7aef\u53e3\u53f7\u8fde\u63a5\uff1a1024 \u4ee5\u4e0b 1099 1433 1521 1719 1720 1723 2049 2375 3128 3306 3389 3659 4045 5060 5061 5432 5984 6379 6000 6566 7001 7002 8000-8100 8443 8888 9200 9300 10051 10080 11211 27017 27018 27019"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf 5 \u5206\u949f\u5185\u6700\u591a\u521b\u5efa 20 \u4e2a TCPSocket")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/wx.createTCPSocket.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"() => TCPSocket\n")))}f.isMDXComponent=!0},80068:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);