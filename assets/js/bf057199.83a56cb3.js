"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19545],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(d,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},32758:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.createMediaAudioPlayer()",sidebar_label:"createMediaAudioPlayer"},c=void 0,d={unversionedId:"apis/media/audio/createMediaAudioPlayer",id:"version-3.x/apis/media/audio/createMediaAudioPlayer",title:"Taro.createMediaAudioPlayer()",description:"\u521b\u5efa\u5a92\u4f53\u97f3\u9891\u64ad\u653e\u5668\u5bf9\u8c61 MediaAudioPlayer \u5bf9\u8c61\uff0c\u53ef\u7528\u4e8e\u64ad\u653e\u89c6\u9891\u89e3\u7801\u5668 VideoDecoder \u8f93\u51fa\u7684\u97f3\u9891",source:"@site/versioned_docs/version-3.x/apis/media/audio/createMediaAudioPlayer.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/createMediaAudioPlayer",permalink:"/taro-docs/docs/apis/media/audio/createMediaAudioPlayer",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/audio/createMediaAudioPlayer.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createMediaAudioPlayer()",sidebar_label:"createMediaAudioPlayer"},sidebar:"API",previous:{title:"createWebAudioContext",permalink:"/taro-docs/docs/apis/media/audio/createWebAudioContext"},next:{title:"createInnerAudioContext",permalink:"/taro-docs/docs/apis/media/audio/createInnerAudioContext"}},l={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:u};function p(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u5a92\u4f53\u97f3\u9891\u64ad\u653e\u5668\u5bf9\u8c61 ",(0,n.kt)("a",a({parentName:"p"},{href:"./MediaAudioPlayer"}),"MediaAudioPlayer")," \u5bf9\u8c61\uff0c\u53ef\u7528\u4e8e\u64ad\u653e\u89c6\u9891\u89e3\u7801\u5668 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/apis/media/video-decoder/VideoDecoder"}),"VideoDecoder")," \u8f93\u51fa\u7684\u97f3\u9891"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"iOS 7.0.15 mediaAudioPlayer \u64ad\u653e\u7f51\u7edc\u89c6\u9891\u8d44\u6e90\u4f1a\u51fa\u73b0\u97f3\u9891\u5361\u987f\uff0c\u672c\u5730\u89c6\u9891\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c06\u4e0b\u4e00\u4e2a\u5ba2\u6237\u7aef\u7248\u672c\u4fee\u590d\u3002")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createMediaAudioPlayer.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => MediaAudioPlayer\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"// \u521b\u5efa\u89c6\u9891\u89e3\u7801\u5668\uff0c\u5177\u4f53\u53c2\u6570\u89c1 createVideoDecoder \u6587\u6863\nconst videoDecoder = Taro.createVideoDecoder()\n// \u521b\u5efa\u5a92\u4f53\u97f3\u9891\u64ad\u653e\u5668\nconst mediaAudioPlayer = Taro.createMediaAudioPlayer()\n// \u542f\u52a8\u89c6\u9891\u89e3\u7801\u5668\nvideoDecoder.start()\n// \u542f\u52a8\u64ad\u653e\u5668\nmediaAudioPlayer.start().then(() => {\n  // \u6dfb\u52a0\u64ad\u653e\u5668\u97f3\u9891\u6765\u6e90\n  mediaAudioPlayer.addAudioSource(videoDecoder).then(res => {\n    videoDecoder.getFrameData() // \u5efa\u8bae\u5728 requestAnimationFrame \u91cc\u83b7\u53d6\u6bcf\u4e00\u5e27\u89c6\u9891\u6570\u636e\n    console.log(res)\n  })\n\n  // \u79fb\u9664\u64ad\u653e\u5668\u97f3\u9891\u6765\u6e90\n  mediaAudioPlayer.removeAudioSource(videoDecoder).then()\n  // \u505c\u6b62\u64ad\u653e\u5668\n  mediaAudioPlayer.stop().then()\n  // \u9500\u6bc1\u64ad\u653e\u5668\n  mediaAudioPlayer.destroy().then()\n  // \u8bbe\u7f6e\u64ad\u653e\u5668\u97f3\u91cf\n  mediaAudioPlayer.volume = 0.5\n})\n")))}p.isMDXComponent=!0},80068:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);