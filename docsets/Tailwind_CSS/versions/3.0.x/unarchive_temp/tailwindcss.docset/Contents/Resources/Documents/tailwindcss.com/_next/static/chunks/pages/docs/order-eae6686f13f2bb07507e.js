_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[130],{"+qKf":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("order")};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},"4L0O":function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return f}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),p=t.n(c),r=t("7ljp"),o=t("YFqc"),l=t.n(o),i=t("tc9R"),b=t("pOT7"),m=t("vRWG"),j=t("I6Nb"),u=t("+qKf"),O=t.n(u),N=t("8C7G"),d=t("wH44");p.a.createElement;const g={Layout:m.DocumentationLayout,classes:{plugin:O()},meta:{title:"Order",description:"Utilities for controlling the order of flex and grid items."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},k=j.ContentsLayout;function f(a){let{components:e}=a,t=Object(s.a)(a,["components"]);return Object(r.a)(k,Object(n.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"order-{order}")," to render flex and grid items in a different order than they appear in the DOM.")),Object(r.a)(b.a,{preview:'\n  <div class="flex justify-between ...">\n    <div class="order-last w-16 h-16 rounded-md bg-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="w-16 h-16 rounded-md bg-blue-300 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="w-16 h-16 rounded-md bg-blue-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-between ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">order-last</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To apply an order utility only at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(r.a)("inlineCode",{parentName:"p"},"md:order-last")," to an element would apply the ",Object(r.a)("inlineCode",{parentName:"p"},"order-last")," utility at medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"1",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"order-first ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:order-last"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"2",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"3",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"By default, Tailwind provides utilities for ",Object(r.a)("inlineCode",{parentName:"p"},"order-first"),", ",Object(r.a)("inlineCode",{parentName:"p"},"order-last"),", ",Object(r.a)("inlineCode",{parentName:"p"},"order-none"),", and an ",Object(r.a)("inlineCode",{parentName:"p"},"order-{number}")," utility for the numbers 1 through 12. You change, add, or remove these by editing the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.order")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     order",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       first",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'-9999'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       last",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'9999'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       none",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       normal",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'2'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'2'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'4'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'4'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'5'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'5'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'6'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'6'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'8'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'8'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'9'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'9'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'10'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'10'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'11'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'11'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'12'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'12'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)(i.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(N.a,{plugin:"order",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(d.a,{plugin:"order",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=g},"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),p=t("Zb5r"),r=t("AOjV"),o=s.a.createElement;function l({plugin:a,name:e}){const t=c.defaultConfig.variants[a]||["responsive"];e=e||a.replace(/([a-z])([A-Z])/g,((a,e,t)=>`${e} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((a=>!t.includes(a))).slice(0,2),s=`By default, ${t.length?`only ${Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${e} utilities.`;return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:s}}),o("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",o("code",null,a)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(n)," variants:"),o(r.a,{path:"variants.extend",before:"...",add:{[a]:n}}))}},cjDZ:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/order",function(){return t("4L0O")}])},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return O})),t.d(e,"b",(function(){return N}));var n=t("HALo"),s=t("q1tI"),c=t.n(s),p=t("iuhU"),r=t("ZMKu"),o=c.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},b={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function j(a){const e=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:p,1:r}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function a(){r({height:e.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(a);return a(),n.observe(e.current.contentDocument.body),()=>{n.disconnect()}}),[t]),o("iframe",Object(n.a)({},a,{ref:e,onLoad:()=>c(!0),style:p}))}function u({color:a,snippet:e}){return o("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},o("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})))}function O({preview:a,src:e,snippet:t,previewClassName:n,color:s="gray"}){return o("div",{className:"relative overflow-hidden mb-8"},a?o("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",i[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):o(j,{src:e,className:Object(p.a)("w-full rounded-t-xl",i[s])}),o(u,{color:s,snippet:t}))}function N({preview:a,src:e,previewClassName:t,snippet:n,color:c="gray",min:l=!1}){const O=Object(s.useRef)(),N=Object(r.h)(0),d=Object(s.useRef)(),{0:g,1:k}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const a=new window.ResizeObserver((()=>{N.set(0)}));return a.observe(O.current),()=>{a.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:O,className:`relative rounded-t-xl ${b[c]}`},o("div",{className:l?"md:w-88":void 0},o(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(N,(a=>-a))}},a?o("div",{className:Object(p.a)("rounded-t-xl",t,i[c],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):o(j,{src:e,className:Object(p.a)("w-full rounded-t-xl",i[c],{"pointer-events-none":g})}))),o("div",{ref:d,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(r.d.div,{drag:"x",_dragX:N,dragMomentum:!1,dragElastic:0,dragConstraints:d,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:N},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[c]}`,style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(u,{color:c,snippet:n}))}}},[["cjDZ",0,2,6,8,1,3,4,5,7,9,10]]]);