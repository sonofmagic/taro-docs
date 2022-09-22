"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45939],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=s(n),k=r,m=c["".concat(u,".").concat(k)]||c[k]||d[k]||a;return n?l.createElement(m,o(o({ref:e},p),{},{components:n})):l.createElement(m,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43495:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Taro.uploadFile(option)",sidebar_label:"uploadFile"},i=void 0,u={unversionedId:"apis/network/upload/uploadFile",id:"version-3.x/apis/network/upload/uploadFile",title:"Taro.uploadFile(option)",description:"Uploads local resources to the server. The client initiates an HTTPS POST request with content-type being multipart/form-data. Read related instructions before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/network/upload/uploadFile.md",sourceDirName:"apis/network/upload",slug:"/apis/network/upload/uploadFile",permalink:"/taro-docs/en/docs/apis/network/upload/uploadFile",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/network/upload/uploadFile.md",tags:[],version:"3.x",frontMatter:{title:"Taro.uploadFile(option)",sidebar_label:"uploadFile"},sidebar:"API",previous:{title:"DownloadTask",permalink:"/taro-docs/en/docs/apis/network/download/DownloadTask"},next:{title:"UploadTask",permalink:"/taro-docs/en/docs/apis/network/upload/UploadTask"}},s={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"API Support",id:"api-support",level:4},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"API Support",id:"api-support-1",level:2}],d={toc:p};function c(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Uploads local resources to the server. The client initiates an HTTPS POST request with ",(0,l.kt)("inlineCode",{parentName:"p"},"content-type")," being ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". Read ",(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/ability/network.html"}),"related instructions")," before use."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/wx.uploadFile.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult & UploadTask> & UploadTask\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"url"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Developer server URL")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"filePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Path to upload a file")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Key of the file. The developer can get the binary content of the file on the server via this key.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"header"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"HTTP request Header. Referer is not available in Header.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"formData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Additional form data in the HTTP request")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"timeout"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Timeout time, in ms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fileName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Name of the uploaded file",(0,l.kt)("br",null),"(Only H5)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h4",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Option.fileName"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Data returned by the developer server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"statusCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"HTTP status code returned by the developer server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Call result")))),(0,l.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("h3",r({},{id:"example-1"}),"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseImage({\n  success (res) {\n    const tempFilePaths = res.tempFilePaths\n    Taro.uploadFile({\n      url: 'https://example.weixin.qq.com/upload', //This value for demonstration purposes only is not a real API URL.\n      filePath: tempFilePaths[0],\n      name: 'file',\n      formData: {\n        'user': 'test'\n      },\n      success (res){\n        const data = res.data\n        //do something\n      }\n    })\n  }\n})\n")),(0,l.kt)("h3",r({},{id:"example-2"}),"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"const uploadTask = Taro.uploadFile({\n  url: 'https://example.weixin.qq.com/upload', //This value for demonstration purposes only is not a real API URL.\n  filePath: tempFilePaths[0],\n  name: 'file',\n  formData:{\n    'user': 'test'\n  },\n  success: function (res){\n    var data = res.data\n    //do something\n  }\n})\nuploadTask.onProgressUpdate((res) => {\n  console.log('Upload progress', res.progress)\n  console.log('The length of uploaded data', res.totalBytesSent)\n  console.log('The length of data expected to be uploaded', res.totalBytesExpectedToSend)\n})\n\nuploadTask.abort() // Cancel upload tasks\n")),(0,l.kt)("h2",r({},{id:"api-support-1"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.uploadFile"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);