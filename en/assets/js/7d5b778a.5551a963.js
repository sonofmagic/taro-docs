"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[89158],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,b=d["".concat(i,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Taro.onBLEConnectionStateChange(callback)",sidebar_label:"onBLEConnectionStateChange"},c=void 0,i={unversionedId:"apis/device/ble/onBLEConnectionStateChange",id:"version-2.x/apis/device/ble/onBLEConnectionStateChange",title:"Taro.onBLEConnectionStateChange(callback)",description:"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\u4e8b\u4ef6\u3002\u5305\u62ec\u5f00\u53d1\u8005\u4e3b\u52a8\u8fde\u63a5\u6216\u65ad\u5f00\u8fde\u63a5\uff0c\u8bbe\u5907\u4e22\u5931\uff0c\u8fde\u63a5\u5f02\u5e38\u65ad\u5f00\u7b49\u7b49",source:"@site/versioned_docs/version-2.x/apis/device/ble/onBLEConnectionStateChange.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/onBLEConnectionStateChange",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/onBLEConnectionStateChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/ble/onBLEConnectionStateChange.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onBLEConnectionStateChange(callback)",sidebar_label:"onBLEConnectionStateChange"},sidebar:"version-2.x/API",previous:{title:"readBLECharacteristicValue",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/readBLECharacteristicValue"},next:{title:"onBLECharacteristicValueChange",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/onBLECharacteristicValueChange"}},u={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"Callback",id:"callback",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:s};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\u4e8b\u4ef6\u3002\u5305\u62ec\u5f00\u53d1\u8005\u4e3b\u52a8\u8fde\u63a5\u6216\u65ad\u5f00\u8fde\u63a5\uff0c\u8bbe\u5907\u4e22\u5931\uff0c\u8fde\u63a5\u5f02\u5e38\u65ad\u5f00\u7b49\u7b49"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"callbackresult"}),"CallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"connected"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,"\u662f\u5426\u5904\u4e8e\u5df2\u8fde\u63a5\u72b6\u6001")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"deviceId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u84dd\u7259\u8bbe\u5907ID")))),(0,r.kt)("h3",a({},{id:"callback"}),"Callback"),(0,r.kt)("p",null,"\u4f4e\u529f\u8017\u84dd\u7259\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.onBLEConnectionStateChange(function (res) {\n  // \u8be5\u65b9\u6cd5\u56de\u8c03\u4e2d\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u8fde\u63a5\u610f\u5916\u65ad\u5f00\u7b49\u5f02\u5e38\u60c5\u51b5\n  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)\n})\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onBLEConnectionStateChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);