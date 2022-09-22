"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26319],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76571:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(93106),a=t(4706),l="tabItem_hkNs";function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:n,className:t}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,t)},{hidden:n}),e)}},7907:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(93106),a=t(4706),l=t(53620),o=t(55080),i=t(39564),s=t(48297),c="tabList_HZIO",u="tabItem_bO0X";function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function d(e){var n;const{lazy:t,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:v.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),k=(0,o.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const g=null===d?d:null!==(y=null!=d?d:null===(n=v.find((e=>e.props.default)))||void 0===n?void 0:n.props.value)&&void 0!==y?y:v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,i.U)(),[j,w]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==j&&h.some((n=>n.value===e))&&w(e)}const S=e=>{const n=e.currentTarget,t=x.indexOf(n),r=h[t].value;r!==j&&(T(n),w(r),null!=f&&O(f,String(r)))},E=e=>{let n=null;switch(e.key){case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;var t;n=null!==(t=x[r])&&void 0!==t?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;var r;n=null!==(r=x[t])&&void 0!==r?r:x[x.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},b)},h.map((({value:e,label:n,attributes:t})=>r.createElement("li",p({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:S,onClick:S},t,{className:(0,a.Z)("tabs__item",u,null==t?void 0:t.className,{"tabs__item--active":j===e})}),null!=n?n:e)))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function m(e){const n=(0,l.Z)();return r.createElement(d,p({key:String(n)},e))}},40128:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});t(93106);var r=t(79874),a=t(7907),l=t(76571);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"\u4f7f\u7528 CSS-in-JS"},c=void 0,u={unversionedId:"css-in-js",id:"version-3.x/css-in-js",title:"\u4f7f\u7528 CSS-in-JS",description:"linaria",source:"@site/versioned_docs/version-3.x/css-in-js.mdx",sourceDirName:".",slug:"/css-in-js",permalink:"/taro-docs/docs/css-in-js",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/css-in-js.mdx",tags:[],version:"3.x",frontMatter:{title:"\u4f7f\u7528 CSS-in-JS"},sidebar:"docs",previous:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro-docs/docs/css-modules"},next:{title:"\u4f7f\u7528  NutUI \u4eac\u4e1c\u98ce\u683c\u7ec4\u4ef6\u5e93",permalink:"/taro-docs/docs/nutui"}},p={},d=[{value:"linaria",id:"linaria",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3},{value:"Fower",id:"fower",level:2}],m={toc:d};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"linaria"}),"linaria"),(0,r.kt)("p",null,"\u5728 React \u793e\u533a\u6709\u4e00\u4e2a\u8457\u540d\u7684 CSS-in-JS \u89e3\u51b3\u65b9\u6848: ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/styled-components/styled-components"}),"styled-components"),"\u3002\u4f46\u9057\u61be\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<style>")," \u6807\u7b7e\u6765\u52a8\u6001\u5730\u63a7\u5236\u6837\u5f0f\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u7c7b\u4f3c\u7684\u65b9\u6848\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/callstack/linaria"}),"linaria")," \u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"linaria")," \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd1\u4f3c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"styled-components")," \u7684 API"),(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u7684 TypeScript \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u96f6\u8fd0\u884c\u65f6")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria")," \u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u9996\u5148\u901a\u8fc7 NPM \u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ npm i linaria\n")),(0,r.kt)("p",null,"\u5176\u6b21\u914d\u7f6e\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      ts: true\n    }],\n    'linaria/babel' // \u6dfb\u52a0\u5230 babel-preset\n  ]\n}\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"config/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader \u9009\u9879\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  },\n  h5: {\n    webpackChain(chain, webpack) {\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="linaria.config.js"',title:'"linaria.config.js"'}),'// linaria \u914d\u7f6e\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options\nmodule.exports = {\n  rules: [\n    {\n      action: require("linaria/evaluators").shaker,\n    },\n    {\n      test: /node_modules[\\/\\\\](?!@tarojs)/,\n      action: "ignore"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,r.kt)(a.Z,{defaultValue:"JS",values:[{label:"JavaScript",value:"JS"},{label:"TypeScript",value:"TS"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)`\n  color: ${props => props.color}\n`;\n\nconst Index = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n"))),(0,r.kt)(l.Z,{value:"TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)<{ color: string }>`\n  color: ${props => props.color}\n`;\n\nconst Index: React.FC = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")))),(0,r.kt)("h3",o({},{id:"\u5e38\u89c1\u95ee\u9898"}),"\u5e38\u89c1\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Linaria \u8bbe\u7f6e\u7ec4\u4ef6\u6837\u5f0f\u540e\uff0c\u8be5\u7ec4\u4ef6\u4e0a\u7684\u5c5e\u6027\u4e0d\u751f\u6548\uff0c",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/11664"}),"#11664")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styled(View)")," \u5199\u6cd5\u4f1a\u4ea7\u751f\u7c7b\u578b\u9519\u8bef\uff0c",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/8883"}),"#8883")),(0,r.kt)("li",{parentName:"ul"},"\u4e0e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u76f4\u64ad\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"live-player-plugin")," \u5171\u7528\u65f6\u62a5\u9519\uff0c",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7389"}),"#7389"))),(0,r.kt)("h2",o({},{id:"fower"}),"Fower"),(0,r.kt)("p",null,"\u793e\u533a\u8fd8\u6709\u53e6\u4e00\u4e2a\u65b9\u6848 ",(0,r.kt)("strong",{parentName:"p"},"Fower"),"\uff0c",(0,r.kt)("a",o({parentName:"p"},{href:"https://fower.vercel.app/zh-cn/docs/use-with-taro"}),"\u6587\u6863")))}f.isMDXComponent=!0}}]);