"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[21298],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,p(p({ref:e},d),{},{components:n})):a.createElement(s,p({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78016:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:e,className:n}),t)}},27205:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(93106),r=n(60467),l=n(7617),p=n(26679),i="tabItem_ySgZ";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function m(t){var e,n;const{lazy:r,block:m,defaultValue:d,values:c,groupId:u,className:k}=t,s=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=c?c:s.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),N=(0,l.lx)(g,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const f=null===d?d:null!==(b=null!=d?d:null===(e=s.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:null===(n=s[0])||void 0===n?void 0:n.props.value;if(null!==f&&!g.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,l.UB)(),[h,O]=(0,a.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=u){const t=y[u];null!=t&&t!==h&&g.some((e=>e.value===t))&&O(t)}const T=t=>{const e=t.currentTarget,n=w.indexOf(e),a=g[n].value;a!==h&&(P(e),O(a),null!=u&&v(u,a))},x=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=w.indexOf(t.currentTarget)+1;e=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(t.currentTarget)-1;e=w[n]||w[w.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},k)},g.map((({value:t,label:e,attributes:n})=>a.createElement("li",o({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:t=>w.push(t),onKeyDown:x,onFocus:T,onClick:T},n,{className:(0,p.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":h===t})}),null!=e?e:t)))),r?(0,a.cloneElement)(s.filter((t=>t.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},s.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})))))}function d(t){const e=(0,r.Z)();return a.createElement(m,o({key:String(e)},t))}},57185:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});n(93106);var a=n(79874),r=n(27205),l=n(78016);function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"OpenData",sidebar_label:"OpenData"},m=void 0,d={unversionedId:"components/open/open-data",id:"components/open/open-data",title:"OpenData",description:"\u7528\u4e8e\u5c55\u793a\u5e73\u53f0\u5f00\u653e\u7684\u6570\u636e",source:"@site/docs/components/open/open-data.md",sourceDirName:"components/open",slug:"/components/open/open-data",permalink:"/taro-docs/docs/next/components/open/open-data",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/open/open-data.md",tags:[],version:"current",frontMatter:{title:"OpenData",sidebar_label:"OpenData"},sidebar:"components",previous:{title:"OfficialAccount",permalink:"/taro-docs/docs/next/components/open/official-account"},next:{title:"WebView",permalink:"/taro-docs/docs/next/components/open/web-view"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"OpenDataProps",id:"opendataprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"Type",id:"type",level:3},{value:"Lang",id:"lang",level:3}],k={toc:u};function s(t){var{components:e}=t,o=i(t,["components"]);return(0,a.kt)("wrapper",p({},k,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u5e73\u53f0\u5f00\u653e\u7684\u6570\u636e"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(58884).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",p({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",p({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenDataProps>\n")),(0,a.kt)("h2",p({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-html"}),'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),(0,a.kt)("h2",p({},{id:"opendataprops"}),"OpenDataProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Type")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f00\u653e\u6570\u636e\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"openGid"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'\u5f53 type="groupName" \u65f6\u751f\u6548, \u7fa4id')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"lang"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Lang")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"en"')),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'\u5f53 type="user*" \u65f6\u751f\u6548\uff0c\u4ee5\u54ea\u79cd\u8bed\u8a00\u5c55\u793a userInfo')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"defaultText"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u6587\u6848")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"defaultAvatar"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u5934\u50cf\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u56fe\u7247\uff0c\u652f\u6301\u76f8\u5bf9\u8def\u5f84\u548c\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7fa4\u540d\u79f0\u6216\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a\u65f6\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useEmptyValue"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53\u6570\u636e\u4e3a\u7a7a\u4e14\u672a\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u65f6\uff0c\u662f\u5426\u663e\u793a\u5b98\u65b9\u9ed8\u8ba4\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"shareTicket"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53 type=groupCloudStorage \u65f6\u6709\u6548\uff0c\u7fa4\u5206\u4eab\u5bf9\u5e94\u7684 shareTicket")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"keyList"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53 type=*CloudStorage \u65f6\u6709\u6548\uff0c\u6307\u5b9a\u8981\u62c9\u53d6\u7684 key \u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"componentData"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53 type=*CloudStorage \u65f6\u6709\u6548\uff0c\u4ece\u4e3b\u57df\u900f\u4f20\u7ed9\u5f00\u653e\u6570\u636e\u57df\u7684\u6570\u636e\uff0c\u4f1a\u81ea\u52a8\u6ce8\u5165\u5230\u81ea\u5b9a\u4e49\u5f00\u653e\u6570\u636e\u57df\u7ec4\u4ef6\u7684 properties \u4e2d")))),(0,a.kt)("h3",p({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.type"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.openGid"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.lang"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultText"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultAvatar"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.onError"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.useEmptyValue"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.shareTicket"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.keyList"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.componentData"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",p({},{id:"type"}),"Type"),(0,a.kt)("p",null,"type \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"groupName"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u62c9\u53d6\u7fa4\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userNickName"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6635\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userAvatarUrl"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u5934\u50cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userGender"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6027\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userCity"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6240\u5728\u57ce\u5e02")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userProvince"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6240\u5728\u7701\u4efd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userCountry"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userLanguage"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u7684\u8bed\u8a00")))),(0,a.kt)("h3",p({},{id:"lang"}),"Lang"),(0,a.kt)("p",null,"lang \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"en"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u82f1\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"zh_CN"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7b80\u4f53\u4e2d\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"zh_TW"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7e41\u4f53\u4e2d\u6587")))))}s.isMDXComponent=!0},56174:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58884:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},21207:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);