"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6020],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?a.createElement(k,c(c({ref:t},m),{},{components:n})):a.createElement(k,c({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76571:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(93106),r=n(4706),l="tabItem_hkNs";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",c({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},7907:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(93106),r=n(4706),l=n(53620),c=n(55080),o=n(39564),i=n(48297),p="tabList_HZIO",m="tabItem_bO0X";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e){var t;const{lazy:n,block:l,defaultValue:s,values:u,groupId:k,className:g}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=u?u:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,c.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const v=null===s?s:null!==(f=null!=s?s:null===(t=N.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==f?f:N[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:y}=(0,o.U)(),[C,w]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=k){const e=x[k];null!=e&&e!==C&&b.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==C&&(P(t),w(a),null!=k&&y(k,String(a)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>O.push(e),onKeyDown:j,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function u(e){const t=(0,l.Z)();return a.createElement(s,d({key:String(t)},e))}},50008:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});n(93106);var a=n(79874),r=n(7907),l=n(76571);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Checkbox",sidebar_label:"Checkbox"},p=void 0,m={unversionedId:"components/forms/checkbox",id:"version-3.x/components/forms/checkbox",title:"Checkbox",description:"\u591a\u9009\u9879\u76ee",source:"@site/versioned_docs/version-3.x/components/forms/checkbox.md",sourceDirName:"components/forms",slug:"/components/forms/checkbox",permalink:"/taro-docs/docs/components/forms/checkbox",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/checkbox.md",tags:[],version:"3.x",frontMatter:{title:"Checkbox",sidebar_label:"Checkbox"},sidebar:"components",previous:{title:"Button",permalink:"/taro-docs/docs/components/forms/button"},next:{title:"Editor",permalink:"/taro-docs/docs/components/forms/editor"}},d={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"CheckboxProps",id:"checkboxprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],u={toc:s};function k(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",c({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u591a\u9009\u9879\u76ee"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",c({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",c({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CheckboxProps>\n")),(0,a.kt)("h2",c({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"export default class PageCheckbox extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='page-body'>\n        <View className='page-section'>\n          <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n          <Checkbox value='\u9009\u4e2d' checked>\u9009\u4e2d</Checkbox>\n          <Checkbox style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Checkbox>\n        </View>\n        <View className='page-section'>\n          <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n          {this.state.list.map((item, i) => {\n            return (\n              <Label className='checkbox-list__label' for={i} key={i}>\n                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>\n              </Label>\n            )\n          })}\n        </View>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <view class=\"page-section\">\n      <text>\u9ed8\u8ba4\u6837\u5f0f</text>\n      <checkbox value=\"\u9009\u4e2d\" :checked=\"true\">\u9009\u4e2d</checkbox>\n      <checkbox style=\"margin-left: 20rpx;\" value=\"\u672a\u9009\u4e2d\">\u672a\u9009\u4e2d</checkbox>\n    </view>\n    <view class=\"page-section\">\n      <text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f(Taro \u56e2\u961f\u6210\u5458):</text>\n      <label v-for=\"item in list\" class=\"checkbox-list__label\">\n        <checkbox class=\"checkbox-list__checkbox\" :value=\"item.value\" :checked=\"item.checked\">{{ item.text }}</checkbox>\n      </label>\n    </view>\n  </view>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      list: [\n        {\n          value: '\u7f8e\u56fd',\n          text: '\u7f8e\u56fd',\n          checked: false\n        },\n        {\n          value: '\u4e2d\u56fd',\n          text: '\u4e2d\u56fd',\n          checked: true\n        },\n        {\n          value: '\u5df4\u897f',\n          text: '\u5df4\u897f',\n          checked: false\n        },\n        {\n          value: '\u65e5\u672c',\n          text: '\u65e5\u672c',\n          checked: false\n        },\n        {\n          value: '\u82f1\u56fd',\n          text: '\u82f1\u56fd',\n          checked: false\n        },\n        {\n          value: '\u6cd5\u56fd',\n          text: '\u6cd5\u56fd',\n          checked: false\n        }\n      ]\n    }\n  }\n}\n<\/script>\n")))),(0,a.kt)("h2",c({},{id:"checkboxprops"}),"CheckboxProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<Checkbox/>"),"\u6807\u8bc6\uff0c\u9009\u4e2d\u65f6\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"<CheckboxGroup/>"),"\u7684 change \u4e8b\u4ef6\uff0c\u5e76\u643a\u5e26 ",(0,a.kt)("inlineCode",{parentName:"td"},"<Checkbox/>")," \u7684 value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"disabled"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"checked"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53\u524d\u662f\u5426\u9009\u4e2d\uff0c\u53ef\u7528\u6765\u8bbe\u7f6e\u9ed8\u8ba4\u9009\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"checkbox\u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onChange"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<{ value: string[]; }>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0c\u5c0f\u7a0b\u5e8f\u65e0\u6b64 API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ariaLabel"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")))),(0,a.kt)("h3",c({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.value"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.disabled"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.checked"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.color"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.onChange"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.nativeProps"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"CheckboxProps.ariaLabel"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);