"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[62993],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76649:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});r(93106);var o=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Taro.saveVideoToPhotosAlbum(OBJECT)",sidebar_label:"saveVideoToPhotosAlbum"},l=void 0,s={unversionedId:"apis/multimedia/video/saveVideoToPhotosAlbum",id:"version-1.x/apis/multimedia/video/saveVideoToPhotosAlbum",title:"Taro.saveVideoToPhotosAlbum(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.saveVideoToPhotosAlbum\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/video/saveVideoToPhotosAlbum.md",sourceDirName:"apis/multimedia/video",slug:"/apis/multimedia/video/saveVideoToPhotosAlbum",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/video/saveVideoToPhotosAlbum",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/multimedia/video/saveVideoToPhotosAlbum.md",tags:[],version:"1.x",frontMatter:{title:"Taro.saveVideoToPhotosAlbum(OBJECT)",sidebar_label:"saveVideoToPhotosAlbum"},sidebar:"version-1.x/API",previous:{title:"chooseVideo",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/video/chooseVideo"},next:{title:"createVideoContext",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/video/createVideoContext"}},c={},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],p={toc:u};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,o.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.saveVideoToPhotosAlbum.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"wx.saveVideoToPhotosAlbum")),"\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.saveVideoToPhotosAlbum(params).then(...)\n")),(0,o.kt)("h2",n({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,o.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.saveVideoToPhotosAlbum"),(0,o.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,o.kt)("td",n({parentName:"tr"},{align:"center"})),(0,o.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);