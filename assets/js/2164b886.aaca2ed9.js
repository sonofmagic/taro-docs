"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67570],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},i=void 0,c={unversionedId:"apis/base/update/getUpdateManager",id:"version-2.x/apis/base/update/getUpdateManager",title:"Taro.getUpdateManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u3002",source:"@site/versioned_docs/version-2.x/apis/base/update/getUpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/getUpdateManager",permalink:"/taro-docs/docs/2.x/apis/base/update/getUpdateManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/base/update/getUpdateManager.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},sidebar:"version-2.x/API",previous:{title:"getSystemInfoSync",permalink:"/taro-docs/docs/2.x/apis/base/system/getSystemInfoSync"},next:{title:"UpdateManager",permalink:"/taro-docs/docs/2.x/apis/base/update/UpdateManager"}},l={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u3002\n\u5173\u4e8e\u5c0f\u7a0b\u5e8f\u7684\u66f4\u65b0\u673a\u5236\uff0c\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html"}),"\u8fd0\u884c\u673a\u5236"),"\u6587\u6863\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => UpdateManager\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const updateManager = Taro.getUpdateManager()\n  updateManager.onCheckForUpdate(function (res) {\n  // \u8bf7\u6c42\u5b8c\u65b0\u7248\u672c\u4fe1\u606f\u7684\u56de\u8c03\n  console.log(res.hasUpdate)\n})\nupdateManager.onUpdateReady(function () {\n  Taro.showModal({\n    title: '\u66f4\u65b0\u63d0\u793a',\n    content: '\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f',\n    success: function (res) {\n      if (res.confirm) {\n        // \u65b0\u7684\u7248\u672c\u5df2\u7ecf\u4e0b\u8f7d\u597d\uff0c\u8c03\u7528 applyUpdate \u5e94\u7528\u65b0\u7248\u672c\u5e76\u91cd\u542f\n        updateManager.applyUpdate()\n      }\n    }\n  })\n})\nupdateManager.onUpdateFailed(function () {\n  // \u65b0\u7684\u7248\u672c\u4e0b\u8f7d\u5931\u8d25\n})\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getUpdateManager"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);