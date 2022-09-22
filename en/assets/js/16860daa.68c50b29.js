"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56728],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var n=r(93106);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(r),k=l,b=s["".concat(c,".").concat(k)]||s[k]||d[k]||a;return r?n.createElement(b,o(o({ref:e},u),{},{components:r})):n.createElement(b,o({ref:e},u))}));function k(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85185:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}const o={title:"Taro.getClipboardData(res)",sidebar_label:"getClipboardData"},i=void 0,c={unversionedId:"apis/device/clipboard/getClipboardData",id:"version-3.x/apis/device/clipboard/getClipboardData",title:"Taro.getClipboardData(res)",description:"Gets the content on the system clipboard.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/clipboard/getClipboardData.md",sourceDirName:"apis/device/clipboard",slug:"/apis/device/clipboard/getClipboardData",permalink:"/taro-docs/en/docs/apis/device/clipboard/getClipboardData",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/clipboard/getClipboardData.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getClipboardData(res)",sidebar_label:"getClipboardData"},sidebar:"API",previous:{title:"setClipboardData",permalink:"/taro-docs/en/docs/apis/device/clipboard/setClipboardData"},next:{title:"onNetworkWeakChange",permalink:"/taro-docs/en/docs/apis/device/network/onNetworkWeakChange"}},p={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Promised",id:"promised",level:3},{value:"Option",id:"option",level:3},{value:"SuccessCallbackOption",id:"successcallbackoption",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:u};function s(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",l({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Gets the content on the system clipboard."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/clipboard/wx.getClipboardData.html"}),"Reference"))),(0,n.kt)("h2",l({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(res?: Option) => Promise<Promised>\n")),(0,n.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",l({},{id:"promised"}),"Promised"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The clipboard content")))),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",l({},{id:"successcallbackoption"}),"SuccessCallbackOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The clipboard content")))),(0,n.kt)("h2",l({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.getClipboardData({\n  success: function (res){\n    console.log(res.data)\n  }\n})\n")),(0,n.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getClipboardData"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);