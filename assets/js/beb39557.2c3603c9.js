"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r=n.p+"assets/images/demo-8f8d53d5150bd7195be2864180620fe9.gif",o=n.p+"assets/images/demo2-6fb361e21f1d89c22867ccf82255b57b.gif",l={id:"animateAsState",title:"Animate*AsState"},p=void 0,m={unversionedId:"design/animation/animateAsState",id:"design/animation/animateAsState",title:"Animate*AsState",description:"animate*AsState \u51fd\u6570\u662f Compose \u4e2d\u6700\u7b80\u5355\u7684\u52a8\u753b API\uff0c\u7528\u4e8e\u4e3a\u5355\u4e2a\u503c\u5236\u4f5c\u52a8\u753b\u3002\u4f60\u53ea\u9700\u63d0\u4f9b\u7ed3\u675f\u503c\uff08\u6216\u76ee\u6807\u503c\uff09\uff0cAPI \u5c31\u4f1a\u4ece\u5f53\u524d\u503c\u5230\u6307\u5b9a\u503c\u5f00\u59cb\u52a8\u753b\u3002",source:"@site/docs/design/animation/animatestate.mdx",sourceDirName:"design/animation",slug:"/design/animation/animateAsState",permalink:"/docs/design/animation/animateAsState",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/design/animation/animatestate.mdx",tags:[],version:"current",frontMatter:{id:"animateAsState",title:"Animate*AsState"},sidebar:"docs",previous:{title:"AnimationVisibility\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/docs/design/animation/animationVisibility"},next:{title:"Animatable",permalink:"/docs/design/animation/animatable"}},s={},c=[{value:"1. \u7b80\u5355\u4f7f\u7528",id:"1-\u7b80\u5355\u4f7f\u7528",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"animate*AsState")," \u51fd\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Compose")," \u4e2d\u6700\u7b80\u5355\u7684\u52a8\u753b ",(0,i.kt)("inlineCode",{parentName:"p"},"API"),"\uff0c\u7528\u4e8e\u4e3a\u5355\u4e2a\u503c\u5236\u4f5c\u52a8\u753b\u3002\u4f60\u53ea\u9700\u63d0\u4f9b\u7ed3\u675f\u503c\uff08\u6216\u76ee\u6807\u503c\uff09\uff0cAPI \u5c31\u4f1a\u4ece\u5f53\u524d\u503c\u5230\u6307\u5b9a\u503c\u5f00\u59cb\u52a8\u753b\u3002"),(0,i.kt)("h2",{id:"1-\u7b80\u5355\u4f7f\u7528"},"1. \u7b80\u5355\u4f7f\u7528"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"API")," \u5236\u4f5c\u6309\u94ae\u5927\u5c0f\u52a8\u753b\u7684\u4f8b\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun Demo() {\n    var change by remember{ mutableStateOf(false) }\n    var flag by remember{ mutableStateOf(false) }\n\n    val buttonSize by animateDpAsState(\n        targetValue = if(change) 32.dp else 24.dp\n    )\n    if(buttonSize == 32.dp) {\n        change = false\n    }\n    IconButton(\n        onClick = {\n            change = true\n            flag = !flag\n        }\n    ) {\n        Icon(Icons.Rounded.Favorite,\n            contentDescription = null,\n            modifier = Modifier.size(buttonSize),\n            tint = if(flag) Color.Red else Color.Gray\n        )\n    }\n}\n")),(0,i.kt)("img",{src:r}),(0,i.kt)("p",null,"\u518d\u6765\u770b\u770b\u53e6\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528\u5427"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'var text by remember{ mutableStateOf("") }\nvar focusState by remember { mutableStateOf(false) }\nval size by animateFloatAsState(targetValue = if(focusState) 1f else 0.5f)\nColumn(\n    modifier = Modifier.fillMaxWidth()\n) {\n    SearchTextField(\n        value = text,\n        onValueChange = {\n            text = it\n        },\n        closeOnclick = {\n            text = ""\n        },\n        modifier = Modifier\n            .align(Alignment.CenterHorizontally)\n            .onFocusChanged {\n                focusState = it.isFocused\n            }\n            .fillMaxWidth(size)\n    )\n}\n')),(0,i.kt)("img",{src:o}),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u4f60\u4e0d\u9700\u8981\u521b\u5efa\u4efb\u4f55\u52a8\u753b\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4e5f\u4e0d\u9700\u8981\u5904\u7406\u4e2d\u65ad\u3002\u5728\u80cc\u540e\uff0c\u4e00\u4e2a\u52a8\u753b\u5bf9\u8c61\uff08\u5373\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Animatable")," \u5b9e\u4f8b\uff09\u5c06\u88ab\u521b\u5efa\uff0c\u5e76\u88ab\u8bb0\u4f4f\u5728\u8c03\u7528\u5730\u70b9\uff0c\u4ee5\u7b2c\u4e00\u4e2a\u76ee\u6807\u503c\u4f5c\u4e3a\u5176\u521d\u59cb\u503c\u3002\u4ece\u90a3\u4ee5\u540e\uff0c\u4efb\u4f55\u65f6\u5019\u4f60\u7ed9\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Composable")," \u5bf9\u8c61\u63d0\u4f9b\u4e00\u4e2a\u4e0d\u540c\u7684\u76ee\u6807\u503c\uff0c\u4e00\u4e2a\u52a8\u753b\u5c31\u4f1a\u81ea\u52a8\u5f00\u59cb\u5411\u90a3\u4e2a\u503c\u53d1\u5c55\u3002\u5982\u679c\u5df2\u7ecf\u6709\u4e00\u4e2a\u52a8\u753b\u5728\u8fd0\u884c\uff0c\u8fd9\u4e2a\u52a8\u753b\u5c31\u4f1a\u4ece\u5b83\u7684\u5f53\u524d\u503c\uff08\u548c\u901f\u5ea6\uff09\u5f00\u59cb\uff0c\u7136\u540e\u5411\u76ee\u6807\u503c\u52a8\u753b\u3002\u5728\u52a8\u753b\u8fc7\u7a0b\u4e2d\uff0c\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Composable")," \u4e1c\u897f\u88ab\u91cd\u65b0\u7ec4\u5408\uff0c\u6bcf\u4e00\u5e27\u90fd\u8fd4\u56de\u4e00\u4e2a\u66f4\u65b0\u7684\u52a8\u753b\u503c\u3002"),(0,i.kt)("p",null,"\u5f00\u7bb1\u5373\u7528\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Compose")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Float"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Color"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Dp"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Size"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Bounds"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Offset"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Rect"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"IntOffset")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"IntSize")," \u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"animate*AsState")," \u51fd\u6570\u3002\u901a\u8fc7\u4e3a\u5e26\u6709\u901a\u7528\u7c7b\u578b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"animateValueAsState")," \u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"TwoWayConverter"),"\uff0c\u53ef\u4ee5\u8f7b\u677e\u6dfb\u52a0\u5bf9\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationSpec")," \u6765\u5b9a\u5236\u52a8\u753b\u89c4\u683c\u3002\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"./overview#animationspec"},"AnimationSpec")," \u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f"))}u.isMDXComponent=!0}}]);