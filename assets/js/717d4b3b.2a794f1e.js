"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6957],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98142:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},i=void 0,u={unversionedId:"apis/device/bluetooth/getBluetoothDevices",id:"apis/device/bluetooth/getBluetoothDevices",title:"Taro.getBluetoothDevices(option)",description:"\u83b7\u53d6\u5728\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u5df2\u53d1\u73b0\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5305\u62ec\u5df2\u7ecf\u548c\u672c\u673a\u5904\u4e8e\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002",source:"@site/docs/apis/device/bluetooth/getBluetoothDevices.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothDevices",permalink:"/taro-docs/docs/next/apis/device/bluetooth/getBluetoothDevices",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/bluetooth/getBluetoothDevices.md",tags:[],version:"current",frontMatter:{title:"Taro.getBluetoothDevices(option)",sidebar_label:"getBluetoothDevices"},sidebar:"API",previous:{title:"getConnectedBluetoothDevices",permalink:"/taro-docs/docs/next/apis/device/bluetooth/getConnectedBluetoothDevices"},next:{title:"getBluetoothAdapterState",permalink:"/taro-docs/docs/next/apis/device/bluetooth/getBluetoothAdapterState"}},c={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"SuccessCallbackResultBlueToothDevice",id:"successcallbackresultbluetoothdevice",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:p};function d(t){var{components:e}=t,o=l(t,["components"]);return(0,a.kt)("wrapper",r({},s,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u5728\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u5df2\u53d1\u73b0\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5305\u62ec\u5df2\u7ecf\u548c\u672c\u673a\u5904\u4e8e\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u83b7\u53d6\u5230\u7684\u8bbe\u5907\u5217\u8868\u4e3a",(0,a.kt)("strong",{parentName:"li"},"\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907"),"\uff0c\u82e5\u5728\u84dd\u7259\u6a21\u5757\u4f7f\u7528\u6d41\u7a0b\u7ed3\u675f\u540e\u672a\u53ca\u65f6\u8c03\u7528 Taro.closeBluetoothAdapter \u91ca\u653e\u8d44\u6e90\uff0c\u4f1a\u5b58\u5728\u8c03\u7528\u8be5\u63a5\u53e3\u4f1a\u8fd4\u56de\u4e4b\u524d\u7684\u84dd\u7259\u4f7f\u7528\u6d41\u7a0b\u4e2d\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907\uff0c\u53ef\u80fd\u8bbe\u5907\u5df2\u7ecf\u4e0d\u5728\u7528\u6237\u8eab\u8fb9\uff0c\u65e0\u6cd5\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u84dd\u7259\u8bbe\u5907\u5728\u88ab\u641c\u7d22\u5230\u65f6\uff0c\u7cfb\u7edf\u8fd4\u56de\u7684 name \u5b57\u6bb5\u4e00\u822c\u4e3a\u5e7f\u64ad\u5305\u4e2d\u7684 LocalName \u5b57\u6bb5\u4e2d\u7684\u8bbe\u5907\u540d\u79f0\uff0c\u800c\u5982\u679c\u4e0e\u84dd\u7259\u8bbe\u5907\u5efa\u7acb\u8fde\u63a5\uff0c\u7cfb\u7edf\u8fd4\u56de\u7684 name \u5b57\u6bb5\u4f1a\u6539\u4e3a\u4ece\u84dd\u7259\u8bbe\u5907\u4e0a\u83b7\u53d6\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"GattName"),"\u3002\u82e5\u9700\u8981\u52a8\u6001\u6539\u53d8\u8bbe\u5907\u540d\u79f0\u5e76\u5c55\u793a\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"localName")," \u5b57\u6bb5\u3002")),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: SuccessCallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"devices"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"SuccessCallbackResultBlueToothDevice[]")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"uuid \u5bf9\u5e94\u7684\u7684\u5df2\u8fde\u63a5\u8bbe\u5907\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,a.kt)("h3",r({},{id:"successcallbackresultbluetoothdevice"}),"SuccessCallbackResultBlueToothDevice"),(0,a.kt)("p",null,"uuid \u5bf9\u5e94\u7684\u7684\u5df2\u8fde\u63a5\u8bbe\u5907\u5217\u8868"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"RSSI"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"advertisData"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ManufacturerData \u6570\u636e\u6bb5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"advertisServiceUUIDs"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string[]")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceUUIDs \u6570\u636e\u6bb5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"deviceId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"localName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 LocalName \u6570\u636e\u6bb5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u84dd\u7259\u8bbe\u5907\u540d\u79f0\uff0c\u67d0\u4e9b\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"serviceData"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceData \u6570\u636e\u6bb5")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"// ArrayBuffer\u8f6c16\u8fdb\u5ea6\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.getBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n    if (res.devices[0]) {\n      console.log(ab2hex(res.devices[0].advertisData))\n    }\n  }\n})\n")))}d.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);