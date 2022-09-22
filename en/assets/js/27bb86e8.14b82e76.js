"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18355],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=c(n),k=a,u=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(u,l(l({ref:e},m),{},{components:n})):r.createElement(u,l({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20327:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"PickerView",sidebar_label:"PickerView"},o=void 0,p={unversionedId:"components/forms/picker-view",id:"version-1.x/components/forms/picker-view",title:"PickerView",description:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",source:"@site/versioned_docs/version-1.x/components/forms/picker-view.md",sourceDirName:"components/forms",slug:"/components/forms/picker-view",permalink:"/taro-docs/en/docs/1.x/components/forms/picker-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/forms/picker-view.md",tags:[],version:"1.x",frontMatter:{title:"PickerView",sidebar_label:"PickerView"},sidebar:"version-1.x/components",previous:{title:"Picker",permalink:"/taro-docs/en/docs/1.x/components/forms/picker"},next:{title:"Radio",permalink:"/taro-docs/en/docs/1.x/components/forms/radio"}},c={},m=[{value:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",id:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",level:5},{value:"PickerViewColumn",id:"pickerviewcolumn",level:5},{value:"\u4ec5\u53ef\u653e\u7f6e\u4e8e PickerView \u4e2d\uff0c\u5176\u5b69\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u6210\u4e0e PickerView \u7684\u9009\u4e2d\u6846\u7684\u9ad8\u5ea6\u4e00\u81f4",id:"\u4ec5\u53ef\u653e\u7f6e\u4e8e-pickerview-\u4e2d\u5176\u5b69\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u6210\u4e0e-pickerview-\u7684\u9009\u4e2d\u6846\u7684\u9ad8\u5ea6\u4e00\u81f4",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],s={toc:m};function d(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h5",a({},{id:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668"}),"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"value"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"NumberArray"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u4f9d\u6b21\u8868\u793a picker-view \u5185\u7684 picker-view-column \u9009\u62e9\u7684\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0c\u6570\u5b57\u5927\u4e8e picker-view-column \u53ef\u9009\u9879\u957f\u5ea6\u65f6\uff0c\u9009\u62e9\u6700\u540e\u4e00\u9879\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"indicatorStyle"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u6837\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"indicatorClass"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u7c7b\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"maskStyle"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u8499\u5c42\u7684\u6837\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"maskClass"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u8499\u5c42\u7684\u7c7b\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"EventHandle"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5f53\u6eda\u52a8\u9009\u62e9\uff0cvalue \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = {value: value}\uff1bvalue \u4e3a\u6570\u7ec4\uff0c\u8868\u793a picker-view \u5185\u7684 picker-view-column \u5f53\u524d\u9009\u62e9\u7684\u662f\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5404\u7aef\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"ReactNative"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"value"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"indicatorStyle"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"indicatorClass"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"maskStyle"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"maskClass"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"onChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u2714")))),(0,r.kt)("h5",a({},{id:"pickerviewcolumn"}),"PickerViewColumn"),(0,r.kt)("h5",a({},{id:"\u4ec5\u53ef\u653e\u7f6e\u4e8e-pickerview-\u4e2d\u5176\u5b69\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u6210\u4e0e-pickerview-\u7684\u9009\u4e2d\u6846\u7684\u9ad8\u5ea6\u4e00\u81f4"}),"\u4ec5\u53ef\u653e\u7f6e\u4e8e PickerView \u4e2d\uff0c\u5176\u5b69\u5b50\u8282\u70b9\u7684\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u6210\u4e0e PickerView \u7684\u9009\u4e2d\u6846\u7684\u9ad8\u5ea6\u4e00\u81f4"),(0,r.kt)("h6",a({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, PickerView, PickerViewColumn } from '@tarojs/components'\n\nexport default class Picks extends Component {\n\n  constructor () {\n    super(...arguments)\n    const date = new Date()\n    const years = []\n    const months = []\n    const days = []\n    for (let i = 1990; i <= date.getFullYear(); i++) {\n      years.push(i)\n    }\n    for (let i = 1; i <= 12; i++) {\n      months.push(i)\n    }\n    for (let i = 1; i <= 31; i++) {\n      days.push(i)\n    }\n    this.state = {\n      years: years,\n      year: date.getFullYear(),\n      months: months,\n      month: 2,\n      days: days,\n      day: 2,\n      value: [9999, 1, 1]\n    }\n  }\n\n  onChange = e => {\n    const val = e.detail.value\n    this.setState({\n      year: this.state.years[val[0]],\n      month: this.state.months[val[1]],\n      day: this.state.days[val[2]],\n      value: val\n    })\n  }\n\n  render() {\n    return (\n      <View>\n        <View>{this.state.year}\u5e74{this.state.month}\u6708{this.state.day}\u65e5</View>\n        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>\n          <PickerViewColumn>\n            {this.state.years.map(item => {\n              return (\n                <View>{item}\u5e74</View>\n              );\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.months.map(item => {\n              return (\n                <View>{item}\u6708</View>\n              )\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.days.map(item => {\n              return (\n                <View>{item}\u65e5</View>\n              )\n            })}\n          </PickerViewColumn>\n        </PickerView>\n      </View>\n    )\n  }\n}\n\n")))}d.isMDXComponent=!0}}]);