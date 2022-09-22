"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18979],{79874:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return k}});var n=r(93106);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(r),k=l,f=p["".concat(c,".").concat(k)]||p[k]||s[k]||a;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function k(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30762:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}const i={title:"Taro.writeBLECharacteristicValue(option)",sidebar_label:"writeBLECharacteristicValue"},o=void 0,c={unversionedId:"apis/device/ble/writeBLECharacteristicValue",id:"version-2.x/apis/device/ble/writeBLECharacteristicValue",title:"Taro.writeBLECharacteristicValue(option)",description:"\u5411\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u4e2d\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 write \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/writeBLECharacteristicValue.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/writeBLECharacteristicValue",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/writeBLECharacteristicValue",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/ble/writeBLECharacteristicValue.md",tags:[],version:"2.x",frontMatter:{title:"Taro.writeBLECharacteristicValue(option)",sidebar_label:"writeBLECharacteristicValue"},sidebar:"version-2.x/API",previous:{title:"addPhoneContact",permalink:"/taro-docs/en/docs/2.x/apis/device/contact/addPhoneContact"},next:{title:"readBLECharacteristicValue",permalink:"/taro-docs/en/docs/2.x/apis/device/ble/readBLECharacteristicValue"}},u={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Promised",id:"promised",level:3},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:d};function p(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",l({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5411\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u4e2d\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 write \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e76\u884c\u8c03\u7528\u591a\u6b21\u4f1a\u5b58\u5728\u5199\u5931\u8d25\u7684\u53ef\u80fd\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u4e0d\u4f1a\u5bf9\u5199\u5165\u6570\u636e\u5305\u5927\u5c0f\u505a\u9650\u5236\uff0c\u4f46\u7cfb\u7edf\u4e0e\u84dd\u7259\u8bbe\u5907\u4f1a\u9650\u5236\u84dd\u72594.0\u5355\u6b21\u4f20\u8f93\u7684\u6570\u636e\u5927\u5c0f\uff0c\u8d85\u8fc7\u6700\u5927\u5b57\u8282\u6570\u540e\u4f1a\u53d1\u751f\u5199\u5165\u9519\u8bef\uff0c\u5efa\u8bae\u6bcf\u6b21\u5199\u5165\u4e0d\u8d85\u8fc720\u5b57\u8282\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u5355\u6b21\u5199\u5165\u6570\u636e\u8fc7\u957f\uff0ciOS \u4e0a\u5b58\u5728\u7cfb\u7edf\u4e0d\u4f1a\u6709\u4efb\u4f55\u56de\u8c03\u7684\u60c5\u51b5\uff08\u5305\u62ec\u9519\u8bef\u56de\u8c03\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5353\u5e73\u53f0\u4e0a\uff0c\u5728\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"notifyBLECharacteristicValueChange")," \u6210\u529f\u540e\u7acb\u5373\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"writeBLECharacteristicValue")," \u63a5\u53e3\uff0c\u5728\u90e8\u5206\u673a\u578b\u4e0a\u4f1a\u53d1\u751f 10008 \u7cfb\u7edf\u9519\u8bef")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),(0,n.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",l({},{id:"promised"}),"Promised"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"characteristicId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"deviceId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"serviceId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"value"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ArrayBuffer")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u503c")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: BluetoothError) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: BluetoothError) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: BluetoothError) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"// \u5411\u84dd\u7259\u8bbe\u5907\u53d1\u9001\u4e00\u4e2a0x00\u768416\u8fdb\u5236\u6570\u636e\nlet buffer = new ArrayBuffer(1)\nlet dataView = new DataView(buffer)\ndataView.setUint8(0, 0)\nTaro.writeBLECharacteristicValue({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5728 getBluetoothDevices \u6216 onBluetoothDeviceFound \u63a5\u53e3\u4e2d\u83b7\u53d6\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  // \u8fd9\u91cc\u7684value\u662fArrayBuffer\u7c7b\u578b\n  value: buffer,\n  success: function (res) {\n    console.log('writeBLECharacteristicValue success', res.errMsg)\n  }\n})\n")),(0,n.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.writeBLECharacteristicValue"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);