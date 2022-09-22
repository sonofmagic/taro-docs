"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31462],{79874:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var r=n(93106);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(n),k=l,f=d["".concat(u,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return i}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const o={title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},c=void 0,u={unversionedId:"apis/device/nfc/onHCEMessage",id:"version-2.x/apis/device/nfc/onHCEMessage",title:"Taro.onHCEMessage(callback)",description:"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c",source:"@site/versioned_docs/version-2.x/apis/device/nfc/onHCEMessage.md",sourceDirName:"apis/device/nfc",slug:"/apis/device/nfc/onHCEMessage",permalink:"/taro-docs/docs/2.x/apis/device/nfc/onHCEMessage",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/nfc/onHCEMessage.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},sidebar:"version-2.x/API",previous:{title:"sendHCEMessage",permalink:"/taro-docs/docs/2.x/apis/device/nfc/sendHCEMessage"},next:{title:"offHCEMessage",permalink:"/taro-docs/docs/2.x/apis/device/nfc/offHCEMessage"}},s={},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"messageType",id:"messagetype",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:i};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",l({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",l({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,(0,r.kt)("code",null,"ArrayBuffer")),(0,r.kt)("td",null,(0,r.kt)("code",null,"messageType=1")," \u65f6 ,\u5ba2\u6237\u7aef\u63a5\u6536\u5230 NFC \u8bbe\u5907\u7684\u6307\u4ee4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"messageType"),(0,r.kt)("td",null,(0,r.kt)("code",null,"1 | 2")),(0,r.kt)("td",null,"\u6d88\u606f\u7c7b\u578b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"reason"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,(0,r.kt)("code",null,"messageType=2")," \u65f6\uff0c\u539f\u56e0")))),(0,r.kt)("h3",l({},{id:"messagetype"}),"messageType"),(0,r.kt)("p",null,"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"HCE APDU Command\u7c7b\u578b\uff0c\u5c0f\u7a0b\u5e8f\u9700\u5bf9\u6b64\u6307\u4ee4\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u8c03\u7528 sendHCEMessage \u63a5\u53e3\u8fd4\u56de\u5904\u7406\u6307\u4ee4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"\u8bbe\u5907\u79bb\u573a\u4e8b\u4ef6\u7c7b\u578b")))),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.onHCEMessage"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);