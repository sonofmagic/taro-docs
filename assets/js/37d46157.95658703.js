"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99770],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"Taro.getLaunchOptionsSync()",sidebar_label:"getLaunchOptionsSync"},i=void 0,c={unversionedId:"apis/base/weapp/life-cycle/getLaunchOptionsSync",id:"version-2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync",title:"Taro.getLaunchOptionsSync()",description:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u542f\u52a8\u65f6\u7684\u53c2\u6570\u3002\u4e0e App.onLaunch \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync.md",sourceDirName:"apis/base/weapp/life-cycle",slug:"/apis/base/weapp/life-cycle/getLaunchOptionsSync",permalink:"/taro-docs/docs/2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getLaunchOptionsSync()",sidebar_label:"getLaunchOptionsSync"},sidebar:"version-2.x/API",previous:{title:"UpdateManager",permalink:"/taro-docs/docs/2.x/apis/base/update/UpdateManager"},next:{title:"onPageNotFound",permalink:"/taro-docs/docs/2.x/apis/base/weapp/app-event/onPageNotFound"}},l={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:s};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u542f\u52a8\u65f6\u7684\u53c2\u6570\u3002\u4e0e ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onlaunchobject-object"}),(0,r.kt)("inlineCode",{parentName:"a"},"App.onLaunch"))," \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\n\u90e8\u5206\u7248\u672c\u5728\u65e0",(0,r.kt)("inlineCode",{parentName:"p"},"referrerInfo"),"\u7684\u65f6\u5019\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," \u8fdb\u884c\u5224\u65ad\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => LaunchOptionsApp\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getLaunchOptionsSync"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);