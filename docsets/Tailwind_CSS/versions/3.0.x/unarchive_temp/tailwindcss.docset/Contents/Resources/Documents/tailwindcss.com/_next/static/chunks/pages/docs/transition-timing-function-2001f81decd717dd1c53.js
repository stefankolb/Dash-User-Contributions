_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[175],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),i=t("98BF"),o=t("Zb5r"),c=t("AOjV"),r=s.a.createElement;function p({plugin:e,name:a}){const t=i.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(o.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:s}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(o.a)(n)," variants:"),r(c.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},QksO:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionTimingFunction",[["ease",["transitionTimingFunction"]]],{filterDefault:!0})};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return j}));var n=t("HALo"),s=t("q1tI"),i=t.n(s),o=t("iuhU"),c=t("ZMKu"),r=i.a.createElement;const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const a=Object(s.useRef)(),{0:t,1:i}=Object(s.useState)(!1),{0:o,1:c}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){c({height:a.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}),[t]),r("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>i(!0),style:o}))}function d({color:e,snippet:a}){return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:t,previewClassName:n,color:s="gray"}){return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:a,className:Object(o.a)("w-full rounded-t-xl",l[s])}),r(d,{color:s,snippet:t}))}function j({preview:e,src:a,previewClassName:t,snippet:n,color:i="gray",min:p=!1}){const g=Object(s.useRef)(),j=Object(c.h)(0),O=Object(s.useRef)(),{0:f,1:h}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{j.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:g,className:`relative rounded-t-xl ${u[i]}`},r("div",{className:p?"md:w-88":void 0},r(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(j,(e=>-e))}},e?r("div",{className:Object(o.a)("rounded-t-xl",t,l[i],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:a,className:Object(o.a)("w-full rounded-t-xl",l[i],{"pointer-events-none":f})}))),r("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(c.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(p?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${b[i]}`,style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(d,{color:i,snippet:n}))}},uKbb:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("HALo"),s=t("dhJC"),i=t("q1tI"),o=t.n(i),c=t("7ljp"),r=t("YFqc"),p=t.n(r),l=t("tc9R"),u=t("pOT7"),b=t("vRWG"),m=t("I6Nb"),d=t("QksO"),g=t.n(d),j=t("8C7G"),O=t("wH44");o.a.createElement;const f={Layout:b.DocumentationLayout,classes:{plugin:g()},meta:{title:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Timing values",slug:"timing-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},h=m.ContentsLayout;function N(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(c.a)(h,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-{timing}")," utilities to control an element\u2019s easing curve.")),Object(c.a)(u.a,{preview:'\n  <div class="flex justify-around items-center">\n    <button class="transition duration-700 ease-in transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element\u2019s transition-timing-function at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-timing-function utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:ease-in-out")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-in-out")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"timing-values",toc:!0},"Timing values"),Object(c.a)("p",null,"By default, Tailwind provides four general purpose transition-timing-function utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionTimingFunction")," section of your Tailwind theme config."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionTimingFunction",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'in-expo'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.95, 0.05, 0.795, 0.035)'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'out-expo'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.19, 1, 0.22, 1)'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(j.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(O.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=f},yHg6:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return t("uKbb")}])}},[["yHg6",0,2,6,8,1,3,4,5,7,9,10]]]);