"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48936],{79874:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=l.createContext({}),c=function(t){var e=l.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},i=function(t){var e=c(t.components);return l.createElement(a.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),k=c(n),p=r,m=k["".concat(a,".").concat(p)]||k[p]||s[p]||o;return n?l.createElement(m,d(d({ref:e},i),{},{components:n})):l.createElement(m,d({ref:e},i))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,d=new Array(o);d[0]=k;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:r,d[1]=u;for(var c=2;c<o;c++)d[c]=n[c];return l.createElement.apply(null,d)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21959:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return a},toc:function(){return i}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const d={title:"Taro.addPhoneContact(option)",sidebar_label:"addPhoneContact"},u=void 0,a={unversionedId:"apis/device/contact/addPhoneContact",id:"apis/device/contact/addPhoneContact",title:"Taro.addPhoneContact(option)",description:'Adds a contact to the mobile contacts. The user can write this form to the mobile contacts using either "Add Contact" or "Add to Existing Contact" method.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/contact/addPhoneContact.md",sourceDirName:"apis/device/contact",slug:"/apis/device/contact/addPhoneContact",permalink:"/taro-docs/en/docs/next/apis/device/contact/addPhoneContact",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/contact/addPhoneContact.md",tags:[],version:"current",frontMatter:{title:"Taro.addPhoneContact(option)",sidebar_label:"addPhoneContact"},sidebar:"API",previous:{title:"chooseContact",permalink:"/taro-docs/en/docs/next/apis/device/contact/chooseContact"},next:{title:"checkIsOpenAccessibility",permalink:"/taro-docs/en/docs/next/apis/device/accessibility/checkIsOpenAccessibility"}},c={},i=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:i};function k(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Adds a contact to the mobile contacts. The user can write this form to the mobile contacts using either "Add Contact" or "Add to Existing Contact" method.'),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/contact/wx.addPhoneContact.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"firstName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Name")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"middleName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Middle name")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lastName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Last name")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"nickName"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Nickname")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"addressCity"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Contact address city")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"addressCountry"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Contact address country")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"addressPostalCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Contact address post code")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"addressState"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Contact address province")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"addressStreet"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Contact address street")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"email"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Email address")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homeAddressCity"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home address city")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homeAddressCountry"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home address county")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homeAddressPostalCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home address post code")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homeAddressState"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home address province")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homeAddressStreet"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home address street")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homeFaxNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home fax")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"homePhoneNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Home phone number")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"hostNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Company phone number")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mobilePhoneNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Mobile number")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"organization"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Company")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"photoFilePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Path of the local profile photo file")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"remark"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Remarks")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Job title")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"url"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Website")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"weChatNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"WeChat ID")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workAddressCity"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work address city")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workAddressCountry"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work address country")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workAddressPostalCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work address post code")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workAddressState"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work address province")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workAddressStreet"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work address street")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workFaxNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work fax")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"workPhoneNumber"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Work phone number")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.addPhoneContact"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);