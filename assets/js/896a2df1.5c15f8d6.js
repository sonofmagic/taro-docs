"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58208],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(k,l(l({ref:n},p),{},{components:t})):r.createElement(k,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28784:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={title:"\u4e8b\u4ef6\u5904\u7406"},i=void 0,c={unversionedId:"event",id:"version-3.x/event",title:"\u4e8b\u4ef6\u5904\u7406",description:"Taro \u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u548c DOM \u5143\u7d20\u7684\u5f88\u76f8\u4f3c\u3002\u4f46\u662f\u6709\u4e00\u70b9\u8bed\u6cd5\u4e0a\u7684\u4e0d\u540c:",source:"@site/versioned_docs/version-3.x/event.md",sourceDirName:".",slug:"/event",permalink:"/taro-docs/docs/event",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/event.md",tags:[],version:"3.x",frontMatter:{title:"\u4e8b\u4ef6\u5904\u7406"}},s={},p=[{value:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570",id:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570",level:2},{value:"\u4f7f\u7528\u533f\u540d\u51fd\u6570",id:"\u4f7f\u7528\u533f\u540d\u51fd\u6570",level:3},{value:"\u67ef\u91cc\u5316",id:"\u67ef\u91cc\u5316",level:3},{value:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",level:3},{value:"\u4efb\u4f55\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 <code>on</code> \u5f00\u5934",id:"\u4efb\u4f55\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934",level:2}],u={toc:p};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro \u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u548c DOM \u5143\u7d20\u7684\u5f88\u76f8\u4f3c\u3002\u4f46\u662f\u6709\u4e00\u70b9\u8bed\u6cd5\u4e0a\u7684\u4e0d\u540c:"),(0,r.kt)("p",null,"Taro \u4e8b\u4ef6\u7ed1\u5b9a\u5c5e\u6027\u7684\u547d\u540d\u91c7\u7528\u9a7c\u5cf0\u5f0f\u5199\u6cd5\uff0c\u800c\u4e0d\u662f\u5c0f\u5199\u3002\n\u5982\u679c\u91c7\u7528 JSX \u7684\u8bed\u6cd5\u4f60\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32 (DOM \u5143\u7d20\u7684\u5199\u6cd5)\u3002\n\u4f8b\u5982\uff0c\u4f20\u7edf\u7684\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6a21\u677f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<button onclick="activateLasers">\n  Activate Lasers\n</button>\n')),(0,r.kt)("p",null,"Taro \u4e2d\u7a0d\u7a0d\u6709\u70b9\u4e0d\u540c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"<button onClick={this.activateLasers}>\n  Activate Lasers\n</button>\n")),(0,r.kt)("p",null,"\u5728 Taro \u4e2d\u53e6\u4e00\u4e2a\u4e0d\u540c\u662f\u4f60\u4e0d\u80fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"catchEvent")," \u7684\u65b9\u5f0f\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u3002\u4f60\u5fc5\u987b\u660e\u786e\u7684\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"stopPropagation"),"\u3002\u4f8b\u5982\uff0c\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u4f60\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Toggle extends Component {\n  constructor (props) {\n    super(props)\n    this.state = {isToggleOn: true}\n  }\n\n  onClick = (e) => {\n    e.stopPropagation()\n    this.setState(prevState => ({\n      isToggleOn: !prevState.isToggleOn\n    }))\n  }\n\n  render () {\n    return (\n      <button onClick={this.onClick}>\n        {this.state.isToggleOn ? 'ON' : 'OFF'}\n      </button>\n    )\n  }\n}\n")),(0,r.kt)("h2",o({},{id:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570"}),"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570"),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4f1a\u4e3a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u989d\u5916\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u4f20\u5165\u6b32\u5220\u9664\u884c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>\n")),(0,r.kt)("p",null,"\u5f53\u4f60\u901a\u8fc7 bind \u65b9\u5f0f\u5411\u76d1\u542c\u51fd\u6570\u4f20\u53c2\uff0c\u5728\u7c7b\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u76d1\u542c\u51fd\u6570\uff0c\u4e8b\u4ef6\u5bf9\u8c61 ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," \u8981\u6392\u5728\u6240\u4f20\u9012\u53c2\u6570\u7684\u540e\u9762\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Popper extends Component {\n  constructor () {\n    super(...arguments)\n    this.state = { name:'Hello world!' }\n  }\n\n  // \u4f60\u53ef\u4ee5\u901a\u8fc7 bind \u4f20\u5165\u591a\u4e2a\u53c2\u6570\n  preventPop (name, test, e) {    //\u4e8b\u4ef6\u5bf9\u8c61 e \u8981\u653e\u5728\u6700\u540e\n    e.stopPropagation()\n  }\n\n  render () {\n    return <Button onClick={this.preventPop.bind(this, this.state.name, 'test')}></Button>\n  }\n}\n")),(0,r.kt)("h3",o({},{id:"\u4f7f\u7528\u533f\u540d\u51fd\u6570"}),"\u4f7f\u7528\u533f\u540d\u51fd\u6570"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea v1.2.9 \u5f00\u59cb\u652f\u6301")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u5404\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4f7f\u7528\u533f\u540d\u51fd\u6570\uff0c\u5c24\u5176\u662f\u5728 ",(0,r.kt)("strong",{parentName:"p"},"\u5faa\u73af\u4e2d")," \u4f7f\u7528\u533f\u540d\u51fd\u6570\uff0c\u6bd4\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," \u8fdb\u884c\u4e8b\u4ef6\u4f20\u53c2\u5360\u7528\u66f4\u5927\u7684\u5185\u5b58\uff0c\u901f\u5ea6\u4e5f\u4f1a\u66f4\u6162\u3002")),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," \u4e4b\u5916\uff0c\u4e8b\u4ef6\u53c2\u6570\u4e5f\u53ef\u4ee5\u4f7f\u7528\u533f\u540d\u51fd\u6570\u8fdb\u884c\u4f20\u53c2\u3002\u76f4\u63a5\u5199\u533f\u540d\u51fd\u6570\u4e0d\u4f1a\u6253\u4e71\u539f\u6709\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u987a\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Popper extends Component {\n  constructor () {\n    super(...arguments)\n    this.state = { name: 'Hello world!' }\n  }\n\n  render () {\n    const name = 'test'\n    return (\n      <Button onClick={(e) => {\n        e.stopPropagation()\n        this.setState({\n          name\n        })\n      }}>\n        {this.state.name}\n      </Button>\n    )\n  }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u4f7f\u7528\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e0d\u652f\u6301\u533f\u540d\u51fd\u6570")),(0,r.kt)("h3",o({},{id:"\u67ef\u91cc\u5316"}),"\u67ef\u91cc\u5316"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u81ea v1.3.0-beta.1 \u5f00\u59cb\u652f\u6301")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u5404\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u4f7f\u7528\u67ef\u91cc\u5316 Taro \u4f1a\u5728\u7f16\u8bd1\u540e\u591a\u751f\u6210\u4e00\u4e2a\u533f\u540d\u51fd\u6570\u3002")),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," \u548c\u533f\u540d\u51fd\u6570\u4e4b\u5916\uff0c\u4e8b\u4ef6\u53c2\u6570\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",o({parentName:"p"},{href:"https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96"}),"\u67ef\u91cc\u5316"),"\u4f20\u53c2\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Title extends Component{\n\n  handleClick = (index) => (e) => {\n    e.stopPropagation()\n    this.setState({\n      currentIndex: index\n    })\n  }\n\n  render() {\n    const { currentIndex } = this.props;\n    return (\n      {/* \u8c03\u7528 `this.handleClick(currentIndex)` \u4f1a\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u5230 `currentIndex` \u540c\u65f6\u4e5f\u80fd\u6ee1\u8db3 `onClick` \u7684\u7b7e\u540d */}\n      <View onClick={this.handleClick(currentIndex)}>\n      </View>\n    )\n  }\n }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u4f7f\u7528\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u7684\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u4e0d\u652f\u6301\u533f\u540d\u51fd\u6570")),(0,r.kt)("h3",o({},{id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6"}),"\u51fd\u6570\u5f0f\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\uff0c\u4e8b\u4ef6\u4f20\u53c2\u53ef\u4ee5\u4f20\u5165\u4e8b\u4ef6\u7684\u5f15\u7528\u4e5f\u53ef\u4ee5\u4f20\u5165\u533f\u540d\u51fd\u6570\uff0c\u4ee5\u4e0b\u662f\u51fd\u6570\u5f0f\u7ec4\u4ef6\u914d\u5408 ",(0,r.kt)("a",o({parentName:"p"},{href:"/taro-docs/docs/hooks#usecallback"}),(0,r.kt)("inlineCode",{parentName:"a"},"useCallback"))," \u7684\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  const [c1, setC1] = useState(0);\n  const [c2, setC2] = useState(0);\n  const [c3, setC3] = useState(0);\n\n  const increment = c => c + 1\n\n  // \u53ea\u6709 useCallback \u5bf9\u5e94\u7684 c1 \u6216 c2 \u7684\u503c\u6539\u53d8\u65f6\uff0c\u624d\u4f1a\u8fd4\u56de\u65b0\u7684\u51fd\u6570\n  const increment1 = useCallback(() => setC1(increment), [c1]);\n  const increment2 = useCallback(() => setC2(increment), [c2]);\n\n  return (<View>\n    <Text> Counter 1 is {c1} </Text>\n    <Text> Counter 2 is {c2} </Text>\n    <Text> Counter 3 is {c3} </Text>\n    <View>\n      <Button onClick={increment1}>Increment Counter 1</Button>\n      <Button onClick={increment2}>Increment Counter 2</Button>\n      <Button onClick={() => setC3(increment)}>Increment Counter 3</Button>\n    </View>\n  </View>)\n}\n")),(0,r.kt)("h2",o({},{id:"\u4efb\u4f55\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934"}),"\u4efb\u4f55\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"on")," \u5f00\u5934"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 v1.3.0-beta.0 \u4e4b\u540e\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u95f4\u7684\u4e8b\u4ef6\u4f20\u9012\u53ef\u4ee5\u4e0d\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\uff0c\u4f46\u5185\u7f6e\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f9d\u7136\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\u7684\uff0c\u4e3a\u4e86\u4e00\u81f4\u6027\u6211\u4eec\u4ecd\u7136\u63a8\u8350\u4f60\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\u547d\u540d\u4f60\u7684\u4e8b\u4ef6\u3002")),(0,r.kt)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u80fd\u4f60\u4f1a\u770b\u5230\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"bindTap")," \u8fd9\u6837\u7684\u7528\u6cd5\uff0c\u4f46\u5728 Taro \u4e2d\uff0c\u4e8b\u4ef6\u53c2\u6570(props)\u90fd\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// \u9519\u8bef\nconst element = <View bindtap={this.onTag} />\nconst element2 = <Input bindfocus={this.onFocus} />\nconst element3 = <CustomElement animationEnd={this.props.onAnimationEnd} />\n")),(0,r.kt)("p",null,"\u53ea\u8981\u5f53 JSX \u7ec4\u4ef6\u4f20\u5165\u7684\u53c2\u6570\u662f\u51fd\u6570\uff0c\u53c2\u6570\u540d\u5c31\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," \u5f00\u5934\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// \u6b63\u786e\nconst element = <View onClick={this.onTag} />\nconst element2 = <Input onFocus={this.onFocus} />\nconst element3 = <CustomElement onAnimationEnd={this.props.onAnimationEnd} />\n")))}m.isMDXComponent=!0}}]);