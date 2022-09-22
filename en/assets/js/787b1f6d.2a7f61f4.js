"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[52677],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||s[k]||o;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72302:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Taro Repository Overview"},l=void 0,p={unversionedId:"codebase-overview",id:"codebase-overview",title:"Taro Repository Overview",description:"Repository Composition",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/codebase-overview.md",sourceDirName:".",slug:"/codebase-overview",permalink:"/taro-docs/en/docs/next/codebase-overview",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/codebase-overview.md",tags:[],version:"current",frontMatter:{title:"Taro Repository Overview"},sidebar:"docs",previous:{title:"CONTRIBUTING",permalink:"/taro-docs/en/docs/next/CONTRIBUTING"},next:{title:"Single-step Debugging Configuration",permalink:"/taro-docs/en/docs/next/debug-config"}},m={},d=[{value:"Repository Composition",id:"repository-composition",level:2},{value:"Base",id:"base",level:3},{value:"Mini Program",id:"mini-program",level:3},{value:"H5",id:"h5",level:3},{value:"RN",id:"rn",level:3},{value:"Other",id:"other",level:3},{value:"How to develop",id:"how-to-develop",level:2},{value:"Environment Preparation",id:"environment-preparation",level:3},{value:"Code Style",id:"code-style",level:3},{value:"Debug",id:"debug",level:3},{value:"Unit tests",id:"unit-tests",level:3},{value:"commit Specifications",id:"commit-specifications",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Commit Pull Request",id:"commit-pull-request",level:2}],s={toc:d};function u(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"repository-composition"}),"Repository Composition"),(0,n.kt)("p",null,"The following list describes which NPM packages Taro consists of and what each package does."),(0,n.kt)("h3",r({},{id:"base"}),"Base"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Path"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/cli")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"CLI tool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/service")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Pluginized Kernel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-loader")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Webpack loaders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/helper")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Tool library, mainly for CLI, compile-time use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/runner-utils")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Tool library, mainly for compilation tools for mini program and H5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/shared")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Tool library, mainly for runtime use")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Expose the Taro objects needed on each end")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/api")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro API independent of each platform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"babel-preset-taro")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Babel preset")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"eslint-config-taro")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ESLint rules")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"postcss-pxtransform")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PostCSS plugin that converts ",(0,n.kt)("inlineCode",{parentName:"td"},"px")," to adaptive size units on each platform")))),(0,n.kt)("h3",r({},{id:"mini-program"}),"Mini Program"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Path"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/mini-runner")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Mini program compiler tool, mainly used for setting up and calling Webpack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/react")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Mini program specific React renderer based on ",(0,n.kt)("inlineCode",{parentName:"td"},"react-reconciler"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Mini program Runtime Adapter Core")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-weapp")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Wechat mini program  plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-alipay")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Alipay mini program  plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-swan")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Baidu smart program  plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-tt")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ByteDance mini program plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-qq")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"QQ mini program  plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-platform-jd")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Jingdong mini program  plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-html")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Support for plugins that use HTML tags")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"postcss-html-transform")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PostCSS plugin, class name for handling HTML tags")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/plugin-react-devtools")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Support for plugins using React DevTools")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/extend")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"jQuery-like libraries")))),(0,n.kt)("h3",r({},{id:"h5"}),"H5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Path"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/webpack-runner")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 compiler tool, mainly used for setting up and calling Webpack")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/router")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 Router")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-h5")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 API implemented according to the WeChat mini program specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/components")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 Component Library\uff08Web Components version\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/components-react")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"H5 Component Library (React version)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-taroapi")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Babel plugin that allows the API to be used by ",(0,n.kt)("inlineCode",{parentName:"td"},"tree-shaking"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"postcss-plugin-constparse")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PostCSS plugin for handling the height of the ",(0,n.kt)("inlineCode",{parentName:"td"},"tabbar"))))),(0,n.kt)("h3",r({},{id:"rn"}),"RN"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Path"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/components-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN Component Library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-runner")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN compiler tool, mainly used to set up and call metro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-style-transformer")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN style conversion tool to make RN support sass\u3001less\u3001stylus\u3001postcss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-supporter")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN Basic metro configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/rn-transformer")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN application portal and page conversion tool that allows RN to support Taro-defined app and page config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/router-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN router")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/runtime-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"RN Runtime Packaging")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taro-rn")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"The API implemented on the RN side according to the WeChat mini program specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"babel-plugin-transform-react-jsx-to-rn-stylesheet")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Babel plugin for jsx to support className attribute")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"taro-css-to-react-native")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Converting css to RN stylesheet")))),(0,n.kt)("h3",r({},{id:"other"}),"Other"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Path"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/taroize")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Mini program to Taro compiler")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"@tarojs/with-weapp")),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Runtime adapter for mini program to Taro")))),(0,n.kt)("h2",r({},{id:"how-to-develop"}),"How to develop"),(0,n.kt)("h3",r({},{id:"environment-preparation"}),"Environment Preparation"),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Need to make sure your Node.js version is greater than ",(0,n.kt)("inlineCode",{parentName:"p"},"8")," (it is recommended to install ",(0,n.kt)("inlineCode",{parentName:"p"},"10.5")," or higher)")),(0,n.kt)("p",null,"First fork a copy of the Taro repository to your Github, then clone the project locally and switch to the ",(0,n.kt)("inlineCode",{parentName:"p"},"next")," branch."),(0,n.kt)("p",null,"Then run the following commands in sequence."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ yarn\n$ yarn run bootstrap\n$ yarn build\n")),(0,n.kt)("p",null,"After running the above command, the environment is ready and you can pull a new branch for development."),(0,n.kt)("h3",r({},{id:"code-style"}),"Code Style"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"JavaScript"),"\uff1aFollow ",(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style"),"\uff0cFor details, see the root directory ",(0,n.kt)("inlineCode",{parentName:"li"},".eslintrc.js"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TypeScript"),": Follow variants based on ",(0,n.kt)("a",r({parentName:"li"},{href:"https://github.com/standard/standard"}),"JavaScript Standard Style"),", see ",(0,n.kt)("inlineCode",{parentName:"li"},".eslintrc.js")," in the root directory and ",(0,n.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," in the relevant package directory for details."),(0,n.kt)("li",{parentName:"ul"},"Styles: follow the ",(0,n.kt)("inlineCode",{parentName:"li"},".stylelintrc")," style in the relevant package directory.")),(0,n.kt)("h3",r({},{id:"debug"}),"Debug"),(0,n.kt)("p",null,"During debugging, the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.npmjs.com/cli/v7/commands/npm-link/"}),"npm link")," command is typically used to softlink the package to be debugged to a test project."),(0,n.kt)("p",null,"To debug ",(0,n.kt)("strong",{parentName:"p"},"compile-time")," code, please refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"./debug-config"}),'"Single-step debugging"'),"."),(0,n.kt)("p",null,"Debug ",(0,n.kt)("strong",{parentName:"p"},"Runtime")," code, you can breakpoint debug directly."),(0,n.kt)("h3",r({},{id:"unit-tests"}),"Unit tests"),(0,n.kt)("p",null,"The packages are currently equipped with unit tests for."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"babel-preset-taro")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/cli")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/react")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/webpack-runner")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/mini-runner")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/runtime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/taro-rn")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,n.kt)("p",null,"After modifying the above packages, developers should make sure to run ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm --filter [package name] run test:ci")," to check if the test cases all pass."),(0,n.kt)("p",null,"Also, after developing some important features, please take time to fill in the corresponding test cases."),(0,n.kt)("admonition",r({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," use ",(0,n.kt)("inlineCode",{parentName:"p"},"snapshot")," (snapshot of test results), and modifying these two packages or some other packages may cause these snapshots to fail, and thus fail the tests. When you modify these two packages, or if CI prompts you with a test case error for these two packages, run ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpm --filter [package name] run test:ci -u")," to update the snapshot and resubmit.")),(0,n.kt)("h3",r({},{id:"commit-specifications"}),"commit Specifications"),(0,n.kt)("p",null,"When entering the ",(0,n.kt)("inlineCode",{parentName:"p"},"commit message"),", please make sure to follow the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions")," Specifications."),(0,n.kt)("h3",r({},{id:"documentation"}),"Documentation"),(0,n.kt)("p",null,"When a commit involves new features, Breaking Changes or important modifications, please add or modify the corresponding documentation."),(0,n.kt)("p",null,"Please read ",(0,n.kt)("a",r({parentName:"p"},{href:"./CONTRIBUTING"}),"Modifying Documentation")," for more information about the development of documentation\u3002"),(0,n.kt)("h2",r({},{id:"commit-pull-request"}),"Commit Pull Request"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you are not familiar with PR (Pull Request), please read\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"}),"\u300aAbout Pull Requests\u300b"))),(0,n.kt)("p",null,"After completing the development and pushing it to your own Taro repository, you are ready to submit the Pull Request."),(0,n.kt)("p",null,"Before submitting a PR, please read the following notes."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"make sure ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run build")," compiles successfully."),(0,n.kt)("li",{parentName:"ol"},"Make sure the code passes the ESLint test."),(0,n.kt)("li",{parentName:"ol"},"ensure that all test cases pass when the package in question has the ",(0,n.kt)("inlineCode",{parentName:"li"},"npm test:ci")," command."),(0,n.kt)("li",{parentName:"ol"},"when the related package has test cases, add the corresponding test cases to your commit code as well."),(0,n.kt)("li",{parentName:"ol"},"ensure that the commit message needs to follow the ",(0,n.kt)("a",r({parentName:"li"},{href:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153"}),"Angular Style Commit Message Conventions"),"."),(0,n.kt)("li",{parentName:"ol"},"If the commit code is very large or complex, you can divide the PR into several commits together. We will squash as appropriate when merging."),(0,n.kt)("li",{parentName:"ol"},"PR authors can choose to join Taro Developer WeChat group for merging PRs and technical communication.")))}u.isMDXComponent=!0}}]);