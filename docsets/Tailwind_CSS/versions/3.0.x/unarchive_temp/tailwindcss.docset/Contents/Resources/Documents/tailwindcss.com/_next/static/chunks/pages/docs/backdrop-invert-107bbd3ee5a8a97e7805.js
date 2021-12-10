_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),r=t("Zb5r"),p=t("AOjV"),o=s.a.createElement;function i({plugin:e,name:a}){const t=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(r.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:s}}),o("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",o("code",null,e)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(r.a)(n)," variants:"),o(p.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=(t("Btb4"),t("AI3G")),r=t("iuhU"),p=s.a.createElement;function o({value:e}){return"string"===typeof e?p("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?p(s.a.Fragment,null,p("span",{className:"token punctuation"},"["),e.map(((a,t)=>p(n.Fragment,{key:t},p(o,{value:a}),t===e.length-1?null:p("span",{className:"token punctuation"},", ")))),p("span",{className:"token punctuation"},"]")):"boolean"===typeof e?p("span",{className:"token boolean"},e.toString()):e.toString()}function i({edits:e,indent:a="",type:t="inserted"}){return p("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,c)=>{return p(n.Fragment,{key:c},p("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,p("span",{className:"token operator"},":")," ",p(o,{value:e[s]}),p("span",{className:"token punctuation"},","),"\n");var i})))}function l({path:e,add:a,remove:t,before:s,after:r}){return e="string"===typeof e?e.split("."):e,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>p(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(c.a)(s).map(((a,t)=>p(n.Fragment,{key:t},"  ".repeat(e.length+2),p("span",{className:"token comment"},`// ${a}`),"\n")))),t&&p(i,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&p(i,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},r&&Object(c.a)(r).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>p(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,a,t)=>{const r=[];return function e(a,t,p){let o;(t=t||{}).indent=t.indent||"\t",p=p||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),p).replace(new RegExp(o.indent,"g"),p+t.indent)};if(-1!==r.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";r.push(a);const n="["+o.newLine+a.map(((n,s)=>{const c=a.length-1===s?o.newLine:","+o.newLineOrSpace;let r=e(n,t,p+t.indent);return t.transform&&(r=t.transform(a,s,r)),o.indent+r+c})).join("")+o.pad+"]";return r.pop(),i(n)}if(s(a)){let n=Object.keys(a).concat(c(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";r.push(a);const s="{"+o.newLine+n.map(((s,c)=>{const r=n.length-1===c?o.newLine:","+o.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),m=i||l?s:e(s,t);let u=e(a[s],t,p+t.indent);return t.transform&&(u=t.transform(a,s,u)),o.indent+String(m)+": "+u+r})).join("")+o.pad+"}";return r.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},haBK:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),r=t.n(c),p=t("7ljp"),o=t("YFqc"),i=t.n(o),l=t("tc9R"),m=t("vRWG"),u=t("I6Nb"),b=t("8C7G"),d=t("wH44");r.a.createElement;const O={Layout:m.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".backdrop-invert-0":{"--tw-backdrop-invert":"invert(0)"},".backdrop-invert":{"--tw-backdrop-invert":"invert(1)"}})}}},meta:{title:"Backdrop Invert",description:"Utilities for applying backdrop invert filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},j=u.ContentsLayout;function N(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(p.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-invert")," and ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-invert-0")," utilities alongside the ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to whether an element should be rendered with inverted backdrop colors or normally."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-invert ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control an element\u2019s backdrop invert filter at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop invert utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:backdrop-invert-0")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-invert-0")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-invert ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-invert-0")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)("p",null,"You can customize which ",Object(p.a)("inlineCode",{parentName:"p"},"backdrop-invert")," utilities are generated using the ",Object(p.a)("inlineCode",{parentName:"p"},"backdropInvert")," key in the ",Object(p.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       backdropInvert",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"25"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'.25'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"75"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'.75'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"Learn more about customizing the default theme in the ",Object(p.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"theme customization documentation")),"."),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(b.a,{plugin:"backdropInvert",name:"backdrop invert",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(d.a,{plugin:"backdropInvert",name:"backdrop invert",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},mS5U:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-invert",function(){return t("haBK")}])},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("cpVT"),s=t("q1tI"),c=t.n(s),r=t("AOjV"),p=t("AI3G"),o=t("Zb5r"),i=c.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u({plugin:e,name:a}){const t=Object(p.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(r.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>m(m({},e),{},{[a]:!1})),{})}))}}},[["mS5U",0,2,1,3,4,5]]]);