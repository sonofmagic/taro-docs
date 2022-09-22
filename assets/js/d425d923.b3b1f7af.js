"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41721],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(93106);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"Vue3 Pinia"},p=void 0,l={unversionedId:"pinia",id:"pinia",title:"Vue3 Pinia",description:"Taro Vue3 \u652f\u6301\u4f7f\u7528 Pinia \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002",source:"@site/docs/pinia.md",sourceDirName:".",slug:"/pinia",permalink:"/taro-docs/docs/next/pinia",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/pinia.md",tags:[],version:"current",frontMatter:{title:"Vue3 Pinia"},sidebar:"docs",previous:{title:"Vue2 Vuex",permalink:"/taro-docs/docs/next/vuex"},next:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro-docs/docs/next/css-modules"}},u={},c=[{value:"\u5b89\u88c5 &amp; \u914d\u7f6e Taro \u63d2\u4ef6",id:"\u5b89\u88c5--\u914d\u7f6e-taro-\u63d2\u4ef6",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u521b\u5efa Pinia \u5b9e\u4f8b",id:"\u521b\u5efa-pinia-\u5b9e\u4f8b",level:3},{value:"\u521b\u5efa <code>store</code>",id:"\u521b\u5efa-store",level:3},{value:"\u4f7f\u7528 store \u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5",id:"\u4f7f\u7528-store-\u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5",level:3}],s={toc:c};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro Vue3 \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://pinia.vuejs.org/"}),"Pinia")," \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002"),(0,r.kt)("h2",i({},{id:"\u5b89\u88c5--\u914d\u7f6e-taro-\u63d2\u4ef6"}),"\u5b89\u88c5 & \u914d\u7f6e Taro \u63d2\u4ef6"),(0,r.kt)("admonition",i({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\uff0cPinia \u5b58\u5728\u90e8\u5206\u4e0d\u517c\u5bb9\u7684\u4ee3\u7801\uff08",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/10696"}),"#10696"),"\uff09\u3002\u611f\u8c22 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/keyding"}),"@keyding")," \u63d0\u4f9b\u7684 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/keyding/taro-plugin-pinia"}),"taro-plugin-pinia")," \u63d2\u4ef6\u4e3a\u6211\u4eec\u62b9\u5e73\u4e86\u8fd9\u4e9b\u5dee\u5f02\u3002")),(0,r.kt)("p",null,"\u9996\u5148\u8bf7\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"pinia")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"taro-plugin-pinia"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"$ yarn add pinia taro-plugin-pinia\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install pinia taro-plugin-pinia\n")),(0,r.kt)("p",null,"\u7136\u540e\u914d\u7f6e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"taro-plugin-pinia")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  plugins: [\n    'taro-plugin-pinia'\n  ]\n  // ...\n}\n")),(0,r.kt)("h2",i({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"taro init")," \u547d\u4ee4\u65f6\u9009\u62e9 Vue3 -> pinia \u5373\u53ef\u521b\u5efa vue3-pinia \u6a21\u677f\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-todos-pinia"}),"Todo App"))),(0,r.kt)("h2",i({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("h3",i({},{id:"\u521b\u5efa-pinia-\u5b9e\u4f8b"}),"\u521b\u5efa Pinia \u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'}),"import { createApp } from 'vue'\nimport { createPinia } from 'pinia'\n\nconst App = createApp({})\n\nApp.use(createPinia())\n\nexport default App\n")),(0,r.kt)("h3",i({},{id:"\u521b\u5efa-store"}),"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"store")),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'}),"import { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => {\n    return { count: 0 }\n  },\n  actions: {\n    increment() {\n      this.count++\n    }\n  }\n})\n")),(0,r.kt)("h3",i({},{id:"\u4f7f\u7528-store-\u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5"}),"\u4f7f\u7528 store \u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<template>\n  <view>\n    <text>{{ counter.count }}</text>\n    <view @tap=\"onAdd\">ADD</view>\n  </view>\n</template>\n\n<script>\nimport { useCounterStore } from '../stores'\n\nexport default {\n  setup() {\n    const counter = useCounterStore()\n\n    const onAdd = () => {\n      counter.count++\n    }\n\n    return {\n      counter,\n      onAdd\n    }\n  }\n}\n<\/script>\n")))}d.isMDXComponent=!0}}]);