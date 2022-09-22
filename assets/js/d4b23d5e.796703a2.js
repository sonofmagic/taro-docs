"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45684],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),m=r,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},21748:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Taro.getBLEDeviceCharacteristics(option)",sidebar_label:"getBLEDeviceCharacteristics"},o=void 0,c={unversionedId:"apis/device/bluetooth-ble/getBLEDeviceCharacteristics",id:"apis/device/bluetooth-ble/getBLEDeviceCharacteristics",title:"Taro.getBLEDeviceCharacteristics(option)",description:"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u67d0\u4e2a\u670d\u52a1\u4e2d\u6240\u6709\u7279\u5f81\u503c(characteristic)\u3002",source:"@site/docs/apis/device/bluetooth-ble/getBLEDeviceCharacteristics.md",sourceDirName:"apis/device/bluetooth-ble",slug:"/apis/device/bluetooth-ble/getBLEDeviceCharacteristics",permalink:"/taro-docs/docs/next/apis/device/bluetooth-ble/getBLEDeviceCharacteristics",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/bluetooth-ble/getBLEDeviceCharacteristics.md",tags:[],version:"current",frontMatter:{title:"Taro.getBLEDeviceCharacteristics(option)",sidebar_label:"getBLEDeviceCharacteristics"},sidebar:"API",previous:{title:"getBLEDeviceRSSI",permalink:"/taro-docs/docs/next/apis/device/bluetooth-ble/getBLEDeviceRSSI"},next:{title:"createBLEConnection",permalink:"/taro-docs/docs/next/apis/device/bluetooth-ble/createBLEConnection"}},p={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"BLECharacteristic",id:"blecharacteristic",level:3},{value:"Properties",id:"properties",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:d};function s(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u67d0\u4e2a\u670d\u52a1\u4e2d\u6240\u6709\u7279\u5f81\u503c(characteristic)\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"deviceId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u84dd\u7259\u8bbe\u5907 id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"serviceId"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u84dd\u7259\u670d\u52a1 uuid\uff0c\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"td"},"getBLEDeviceServices")," \u83b7\u53d6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(res: SuccessCallbackResult) => void")),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"characteristics"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"BLECharacteristic[]")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u5907\u7279\u5f81\u503c\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,n.kt)("h3",r({},{id:"blecharacteristic"}),"BLECharacteristic"),(0,n.kt)("p",null,"\u8bbe\u5907\u7279\u5f81\u503c\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"properties"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Properties")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be5\u7279\u5f81\u503c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"uuid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u7684 uuid")))),(0,n.kt)("h3",r({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"\u8be5\u7279\u5f81\u503c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"indicate"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 indicate \u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"notify"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 notify \u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"read"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 read \u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"write"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 write \u64cd\u4f5c")))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getBLEDeviceCharacteristics({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  success: function (res) {\n    console.log('device getBLEDeviceCharacteristics:', res.characteristics)\n  }\n})\n")))}s.isMDXComponent=!0},80068:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);