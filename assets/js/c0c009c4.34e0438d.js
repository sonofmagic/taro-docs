"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[84556],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78016:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(93106);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return a.createElement("div",r({role:"tabpanel"},{hidden:t,className:n}),e)}},27205:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(93106),r=n(60467),l=n(7617),o=n(26679),i="tabItem_ySgZ";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function p(e){var t,n;const{lazy:r,block:p,defaultValue:u,values:s,groupId:m,className:d}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=s?s:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,l.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const g=null===u?u:null!==(h=null!=u?u:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:null===(n=b[0])||void 0===n?void 0:n.props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,l.UB)(),[N,w]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==N&&(x(t),w(a),null!=m&&y(m,a))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]||O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},d)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:j,onClick:j},n,{className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,r.Z)();return a.createElement(p,c({key:String(t)},e))}},89122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});n(93106);var a=n(79874),r=n(27205),l=n(78016);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"MovableArea",sidebar_label:"MovableArea"},p=void 0,u={unversionedId:"components/viewContainer/movable-area",id:"components/viewContainer/movable-area",title:"MovableArea",description:"movable-view \u7684\u53ef\u79fb\u52a8\u533a\u57df",source:"@site/docs/components/viewContainer/movable-area.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-area",permalink:"/taro-docs/docs/next/components/viewContainer/movable-area",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/movable-area.md",tags:[],version:"current",frontMatter:{title:"MovableArea",sidebar_label:"MovableArea"},sidebar:"components",previous:{title:"MatchMedia",permalink:"/taro-docs/docs/next/components/viewContainer/match-media"},next:{title:"MovableView",permalink:"/taro-docs/docs/next/components/viewContainer/movable-view"}},s={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"MovableAreaProps",id:"movableareaprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],d={toc:m};function b(e){var{components:t}=e,c=i(e,["components"]);return(0,a.kt)("wrapper",o({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"movable-view \u7684\u53ef\u79fb\u52a8\u533a\u57df"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(21207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(56174).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(82078).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(13555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MovableAreaProps>\n")),(0,a.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>\u65c5\u884c\u7684\u610f\u4e49</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>\u5728\u8def\u4e0a</movable-view>\n  </movable-area>\n")))),(0,a.kt)("h2",o({},{id:"movableareaprops"}),"MovableAreaProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"scaleArea"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5f53\u91cc\u9762\u7684 movable-view \u8bbe\u7f6e\u4e3a\u652f\u6301\u53cc\u6307\u7f29\u653e\u65f6\uff0c\u8bbe\u7f6e\u6b64\u503c\u53ef\u5c06\u7f29\u653e\u624b\u52bf\u751f\u6548\u533a\u57df\u4fee\u6539\u4e3a\u6574\u4e2a movable-area")))),(0,a.kt)("h3",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"MovableAreaProps.scaleArea"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0},56174:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},13555:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},82078:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},21207:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);