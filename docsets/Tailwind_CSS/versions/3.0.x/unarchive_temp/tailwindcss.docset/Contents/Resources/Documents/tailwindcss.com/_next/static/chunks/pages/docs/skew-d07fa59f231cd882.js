(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9199],{71407:function(a){a.exports=function(a,b){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!=typeof b)throw new Error("expected a function for second argument");for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e),g=c[f];Array.isArray(g)?c[f].push(e):c[f]=[e]}return c}},37442:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/skew",function(){return c(98636)}])},98636:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return u}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(83434),i=c(53339),j=c(50156),k=c(83629),l=c(5286),m=c(74565),n=c(18837),o=c(68143),p=c(44651),q=i.DocumentationLayout,r=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",Object.assign({},a))},s={Layout:q,classes:{utilities:{".skew-x-0":{"--tw-skew-x":"0deg",transform:"var(--tw-transform)"},".skew-x-1":{"--tw-skew-x":"1deg",transform:"var(--tw-transform)"},".skew-x-2":{"--tw-skew-x":"2deg",transform:"var(--tw-transform)"},".skew-x-3":{"--tw-skew-x":"3deg",transform:"var(--tw-transform)"},".skew-x-6":{"--tw-skew-x":"6deg",transform:"var(--tw-transform)"},".skew-x-12":{"--tw-skew-x":"12deg",transform:"var(--tw-transform)"},".skew-y-0":{"--tw-skew-y":"0deg",transform:"var(--tw-transform)"},".skew-y-1":{"--tw-skew-y":"1deg",transform:"var(--tw-transform)"},".skew-y-2":{"--tw-skew-y":"2deg",transform:"var(--tw-transform)"},".skew-y-3":{"--tw-skew-y":"3deg",transform:"var(--tw-transform)"},".skew-y-6":{"--tw-skew-y":"6deg",transform:"var(--tw-transform)"},".skew-y-12":{"--tw-skew-y":"12deg",transform:"var(--tw-transform)"}},sort:function(a){return(0,k.nR)(a)},transformProperties:function(a){var b=a.properties,c=b["--tw-skew-x"],d=b["--tw-skew-y"];return{transform:"skew".concat(c?"X":"Y","(").concat(c||d,")")}}},meta:{title:"Skew",description:"Utilities for skewing elements with transform."},slug:"skew",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Skewing an element",slug:"skewing-an-element",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]},{title:"Removing transforms",slug:"removing-transforms",children:[]},{title:"Hardware acceleration",slug:"hardware-acceleration",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},t=j.ContentsLayout;function u(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.mdx)(t,Object.assign({},s,c,{components:b,mdxType:"MDXLayout"}),(0,d.mdx)(g.Heading,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.mdx)(g.Heading,{level:3,id:"skewing-an-element",nextElement:{type:"paragraph"}},"Skewing an element"),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"skew-x-{amount}")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"skew-y-{amount}")," utilities to skew an element."),(0,d.mdx)(h.e,{p:"none",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex sm:block overflow-scroll sm:overflow-visible scroll-p-8\">\n  <div class=\"flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold p-8 shrink-0\">\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9\">skew-y-0</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 skew-y-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9\">skew-y-3</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 skew-y-3\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9\">skew-y-6</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 skew-y-6\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-9\">skew-y-12</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 skew-y-12\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n"}),(0,d.mdx)("pre",Object.assign({},{className:"language-html"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"skew-y-0")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"skew-y-3")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"skew-y-6")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"skew-y-12")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.mdx)(g.Heading,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,d.mdx)("p",null,"To use a negative skew value, prefix the class name with a dash to convert it to a negative value."),(0,d.mdx)("pre",Object.assign({},{className:"language-html"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-skew-y-6")," ...",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.mdx)(g.Heading,{level:3,id:"removing-transforms",nextElement:{type:"jsx"}},"Removing transforms"),(0,d.mdx)(p.R,{defaultClass:"scale-75 translate-x-4 skew-y-3",mdxType:"RemovingTransforms"}),(0,d.mdx)(g.Heading,{level:3,id:"hardware-acceleration",nextElement:{type:"jsx"}},"Hardware acceleration"),(0,d.mdx)(n.m,{defaultClass:"skew-y-6",mdxType:"HardwareAcceleration"}),(0,d.mdx)("hr",null),(0,d.mdx)(r,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.mdx)(r,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.mdx)(o.k,{featuredClass:"skew-y-12",mdxType:"HoverFocusAndOtherStates"}),(0,d.mdx)(r,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.mdx)(m.p,{featuredClass:"skew-y-12",mdxType:"BreakpointsAndMediaQueries"}),(0,d.mdx)("hr",null),(0,d.mdx)(g.Heading,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,d.mdx)(g.Heading,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,d.mdx)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,d.mdx)("inlineCode",{parentName:"p"},"skew")," utilities. You can customize these values by editing ",(0,d.mdx)("inlineCode",{parentName:"p"},"theme.skew")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"theme.extend.skew")," in your ",(0,d.mdx)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,d.mdx)(f.Editor,{filename:"tailwind.config.js"},(0,d.mdx)("pre",Object.assign({},{className:"language-diff-js"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      skew"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token string"}),"'17'"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token string"}),"'17deg'"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,d.mdx)("p",null,"Learn more about customizing the default theme in the ",(0,d.mdx)(e.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,d.mdx)("a",null,"theme customization"))," documentation."),(0,d.mdx)(g.Heading,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,d.mdx)(l.k,{property:"skew",featuredClass:"skew-y-[17deg]",mdxType:"ArbitraryValues"}))}u.isMDXComponent=!0,u.layoutProps=s},83629:function(a,b,c){"use strict";c.d(b,{nR:function(){return f},Pg:function(){return g}});var d=c(71407);function e(a){return(function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}})(a)||(function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)})(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}function f(a){return e(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?1:isNaN(d)?-1:c-d})}function g(a){return e(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?-1:isNaN(d)?1:c-d})}c.n(d)}},function(a){a.O(0,[9774,3430,6401,4756,6852,1350,4713,1664,5404,2888,179],function(){return a(a.s=37442)}),_N_E=a.O()}])