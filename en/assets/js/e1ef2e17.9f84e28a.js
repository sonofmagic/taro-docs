"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72626],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),k=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=k(r),m=a,s=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(s,o(o({ref:e},u),{},{components:r})):n.createElement(s,o({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var k=2;k<l;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17871:function(t,e,r){r.r(e),r.d(e,{assets:function(){return k},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={title:"RecorderManager",sidebar_label:"RecorderManager"},i=void 0,d={unversionedId:"apis/media/recorder/RecorderManager",id:"apis/media/recorder/RecorderManager",title:"RecorderManager",description:"The globally unique recording manager.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/recorder/RecorderManager.md",sourceDirName:"apis/media/recorder",slug:"/apis/media/recorder/RecorderManager",permalink:"/taro-docs/en/docs/next/apis/media/recorder/RecorderManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/recorder/RecorderManager.md",tags:[],version:"current",frontMatter:{title:"RecorderManager",sidebar_label:"RecorderManager"},sidebar:"API",previous:{title:"getRecorderManager",permalink:"/taro-docs/en/docs/next/apis/media/recorder/getRecorderManager"},next:{title:"createCameraContext",permalink:"/taro-docs/en/docs/next/apis/media/camera/createCameraContext"}},k={},u=[{value:"Methods",id:"methods",level:2},{value:"onError",id:"onerror",level:3},{value:"API Support",id:"api-support",level:4},{value:"onFrameRecorded",id:"onframerecorded",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"onInterruptionBegin",id:"oninterruptionbegin",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"onInterruptionEnd",id:"oninterruptionend",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"onPause",id:"onpause",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"onResume",id:"onresume",level:3},{value:"API Support",id:"api-support-5",level:4},{value:"onStart",id:"onstart",level:3},{value:"API Support",id:"api-support-6",level:4},{value:"onStop",id:"onstop",level:3},{value:"API Support",id:"api-support-7",level:4},{value:"pause",id:"pause",level:3},{value:"API Support",id:"api-support-8",level:4},{value:"resume",id:"resume",level:3},{value:"API Support",id:"api-support-9",level:4},{value:"start",id:"start",level:3},{value:"API Support",id:"api-support-10",level:4},{value:"stop",id:"stop",level:3},{value:"API Support",id:"api-support-11",level:4},{value:"Parameters",id:"parameters",level:2},{value:"OnErrorCallback",id:"onerrorcallback",level:3},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",level:3},{value:"OnFrameRecordedCallback",id:"onframerecordedcallback",level:3},{value:"OnFrameRecordedCallbackResult",id:"onframerecordedcallbackresult",level:3},{value:"OnStopCallback",id:"onstopcallback",level:3},{value:"OnStopCallbackResult",id:"onstopcallbackresult",level:3},{value:"StartOption",id:"startoption",level:3},{value:"audioSource",id:"audiosource",level:3},{value:"format",id:"format",level:3},{value:"numberOfChannels",id:"numberofchannels",level:3},{value:"sampleRate",id:"samplerate",level:3},{value:"API Support",id:"api-support-12",level:2}],p={toc:u};function c(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The globally unique recording manager."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("h3",a({},{id:"onerror"}),"onError"),(0,n.kt)("p",null,"Listens on the recording error event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onError.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnErrorCallback")),(0,n.kt)("td",null,"The callback function for the recording error event.")))),(0,n.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onError"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"onframerecorded"}),"onFrameRecorded"),(0,n.kt)("p",null,"Listens on the event that the file with specified frame size has been recorded. This event is called back if frameSize is set."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onFrameRecorded.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnFrameRecordedCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnFrameRecordedCallback")),(0,n.kt)("td",null,"The callback function for the event that the file with specified frame size has been recorded")))),(0,n.kt)("h4",a({},{id:"api-support-1"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onFrameRecorded"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"oninterruptionbegin"}),"onInterruptionBegin"),(0,n.kt)("p",null,"Listens on the event that recording interruption starts due to system occupation. This event is triggered by the following scenarios: WeChat voice chat and WeChat video chat. After this event is triggered, the recording is paused. The pause event is triggered after this event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for the event that recording interruption starts due to system occupation.")))),(0,n.kt)("h4",a({},{id:"api-support-2"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onInterruptionBegin"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"oninterruptionend"}),"onInterruptionEnd"),(0,n.kt)("p",null,"Listens on the event that recording interruption ends. After the interruptionBegin event is received, all recording in the Mini Program is paused. After this event is received, recording can be started again."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for the event that recording interruption ends.")))),(0,n.kt)("h4",a({},{id:"api-support-3"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onInterruptionEnd"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",a({},{id:"onpause"}),"onPause"),(0,n.kt)("p",null,"Listens on the event that recording pauses."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onPause.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for the event that recording pauses.")))),(0,n.kt)("h4",a({},{id:"api-support-4"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onPause"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"onresume"}),"onResume"),(0,n.kt)("p",null,"Listens on the event that recording resumes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onResume.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for the event that recording resumes.")))),(0,n.kt)("h4",a({},{id:"api-support-5"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onResume"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"onstart"}),"onStart"),(0,n.kt)("p",null,"Listens on the event that recording starts."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onStart.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"The callback function for the event that recording starts.")))),(0,n.kt)("h4",a({},{id:"api-support-6"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onStart"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"onstop"}),"onStop"),(0,n.kt)("p",null,"Listens on the event that recording ends."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.onStop.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnStopCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnStopCallback")),(0,n.kt)("td",null,"The callback function for the event that recording ends.")))),(0,n.kt)("h4",a({},{id:"api-support-7"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onStop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"pause"}),"pause"),(0,n.kt)("p",null,"Pauses recording"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.pause.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h4",a({},{id:"api-support-8"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.pause"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"resume"}),"resume"),(0,n.kt)("p",null,"Resumes recording"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.resume.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h4",a({},{id:"api-support-9"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.resume"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"start"}),"start"),(0,n.kt)("p",null,"Starts recording"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.start.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: StartOption) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,(0,n.kt)("code",null,"StartOption"))))),(0,n.kt)("h4",a({},{id:"api-support-10"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.start"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h3",a({},{id:"stop"}),"stop"),(0,n.kt)("p",null,"Stops recording"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/recorder/RecorderManager.stop.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h4",a({},{id:"api-support-11"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.stop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"onerrorcallback"}),"OnErrorCallback"),(0,n.kt)("p",null,"The callback function for the recording error event."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnErrorCallbackResult"))))),(0,n.kt)("h3",a({},{id:"onerrorcallbackresult"}),"OnErrorCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")))),(0,n.kt)("h3",a({},{id:"onframerecordedcallback"}),"OnFrameRecordedCallback"),(0,n.kt)("p",null,"The callback function for the event that the file with specified frame size has been recorded"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnFrameRecordedCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnFrameRecordedCallbackResult"))))),(0,n.kt)("h3",a({},{id:"onframerecordedcallbackresult"}),"OnFrameRecordedCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"frameBuffer"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ArrayBuffer")),(0,n.kt)("td",null,"Recording frame data")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"isLastFrame"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",null,"Whether the current frame is the last frame before the end of recording")))),(0,n.kt)("h3",a({},{id:"onstopcallback"}),"OnStopCallback"),(0,n.kt)("p",null,"The callback function for the event that recording ends."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnStopCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnStopCallbackResult"))))),(0,n.kt)("h3",a({},{id:"onstopcallbackresult"}),"OnStopCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"duration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The duration of recording (in sec)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fileSize"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The size of a recording file (in bytes)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFilePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The temporary path to recording files")))),(0,n.kt)("h3",a({},{id:"startoption"}),"StartOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"audioSource"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies the audio source for recording. Available audio sources can be obtained via ",(0,n.kt)("code",null,"Taro.getAvailableAudioSources()"),".")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"duration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Recording duration (in ms). The maximum value is 600,000 (10 minutes).")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"encodeBitRate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Encoding bitrate. Valid values are shown in the following table.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"format"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"mp3" | "aac"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Audio format")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"frameSize"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies the frame size (in KB). If this field is specified, the recorded file will be called back whenever reaching the specified frame size. If it is not specified, the recorded file will not be called back. Only MP3 format is supported.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"numberOfChannels"),(0,n.kt)("td",null,(0,n.kt)("code",null,"1 | 2")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Number of recording channels")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sampleRate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"8000 | 11025 | 12000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Sampling rate")))),(0,n.kt)("h3",a({},{id:"audiosource"}),"audioSource"),(0,n.kt)("p",null,"Valid values of object.audioSource"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"auto"),(0,n.kt)("td",null,"Automatic setup. The mobile microphone is used by default. The headset microphone is automatically adopted when the headset is plugged in. This setup applies to all platforms.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"buildInMic"),(0,n.kt)("td",null,"Mobile microphone for iOS only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"headsetMic"),(0,n.kt)("td",null,"Headset microphone for iOS only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mic"),(0,n.kt)("td",null,"Microphone (if the headset is not plugged in, the mobile microphone is used; otherwise, the headset microphone is used) for Android only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camcorder"),(0,n.kt)("td",null,"Same as mic. Suitable for audio and video recording. For Android only.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"voice_communication"),(0,n.kt)("td",null,"Same as mic. Suitable for real-time communication. For Android only.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"voice_recognition"),(0,n.kt)("td",null,"Same as mic. Suitable for speech recognition. For Android only.")))),(0,n.kt)("h3",a({},{id:"format"}),"format"),(0,n.kt)("p",null,"Valid values of object.format"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"mp3"),(0,n.kt)("td",null,"MP3 format")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"aac"),(0,n.kt)("td",null,"AAC format")))),(0,n.kt)("h3",a({},{id:"numberofchannels"}),"numberOfChannels"),(0,n.kt)("p",null,"Valid values of object.numberOfChannels"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"1"),(0,n.kt)("td",null,"1 channel")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"2 channels")))),(0,n.kt)("h3",a({},{id:"samplerate"}),"sampleRate"),(0,n.kt)("p",null,"Valid values of object.sampleRate"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Encoding code rate"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"8000"),(0,n.kt)("td",null,"8000 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"16000 ~ 48000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"11025"),(0,n.kt)("td",null,"11025 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"16000 ~ 48000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"12000"),(0,n.kt)("td",null,"12000 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"24000 ~ 64000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"16000"),(0,n.kt)("td",null,"16000 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"24000 ~ 96000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"22050"),(0,n.kt)("td",null,"22050 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"32000 ~ 128000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"24000"),(0,n.kt)("td",null,"24000 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"32000 ~ 128000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"32000"),(0,n.kt)("td",null,"32000 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"48000 ~ 192000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"44100"),(0,n.kt)("td",null,"44100 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"64000 ~ 320000"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"48000"),(0,n.kt)("td",null,"48000 Hz sample rate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"64000 ~ 320000"))))),(0,n.kt)("h2",a({},{id:"api-support-12"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onError"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onFrameRecorded"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onInterruptionBegin"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onInterruptionEnd"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onPause"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onResume"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onStart"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.onStop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.pause"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.resume"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.start"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"RecorderManager.stop"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);