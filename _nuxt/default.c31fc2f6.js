import{r as v,H as y,o as n,m as p,w as u,ac as d,c as l,b as t,a as _,F as $,d as b,l as M,t as k,X as T,_ as z,a0 as H,j as S,e as j,T as B,p as C}from"./entry.5285d972.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as E}from"./client-only.6a54a4dd.js";const w=""+new URL("me.67f5812f.jpg",import.meta.url).href,V=t("div",{class:"tracking-wide"},[t("h1",{class:"text-4xl font-bold md:text-5xl"},"Emir Kabal"),t("p",{class:"text-base text-gray-600 dark:text-gray-300 md:text-xl"}," Full-stack developer ")],-1),N=t("img",{src:w,alt:"Emir Kabal",loading:"lazy",class:"h-24 w-24 rounded-full md:h-36 md:w-36"},null,-1),P=[V,N],D={key:1,class:"z-10 rounded-xl bg-gray-100 px-4 py-2 shadow backdrop-blur-3xl dark:bg-slate-800/40"},F={class:"flex items-center gap-2 font-semibold"},K={class:"flex flex-shrink-0 items-center gap-2"},L=t("img",{src:w,alt:"Emir Kabal",loading:"lazy",class:"h-6 w-6 rounded-full"},null,-1),R=t("span",{class:"text-gray-400 dark:text-gray-500"},"/",-1),I={class:"text-gray-400 dark:text-gray-500"},X={__name:"Header",setup(c){const a=v("144px"),o=v(null);return y(o,()=>{o.value&&o.value.clientHeight&&(a.value=o.value.clientHeight+"px")}),(e,f)=>{const i=z;return n(),p(T,{"enter-active-class":"duration-700 ease-out","enter-from-class":"transform translate-y-8 opacity-0","enter-to-class":"opacity-700 transform translate-y-0","leave-active-class":"opacity-0"},{default:u(()=>[(e._.provides[d]||e.$route).name==="index"?(n(),l("header",{key:0,ref_key:"headerMain",ref:o,class:"flex items-center justify-between"},P,512)):(n(),l("header",D,[t("ul",F,[t("li",K,[_(i,{to:"/",class:"transition-opacity hover:opacity-80"},{default:u(()=>[L]),_:1}),R]),(n(!0),l($,null,b((e._.provides[d]||e.$route).path.split("/").slice(1),(r,s)=>(n(),l("li",{key:s,class:"flex items-center gap-2"},[_(i,{class:"line-clamp-1 text-gray-600 transition-colors hover:text-gray-500 dark:text-gray-300 dark:hover:text-white",to:`${s<(e._.provides[d]||e.$route).path.split("/").slice(1).length-1?`/${r}`:(e._.provides[d]||e.$route).path}`},{default:u(()=>[M(k(r),1)]),_:2},1032,["to"]),t("span",I,k(s<(e._.provides[d]||e.$route).fullPath.split("/").slice(1).length-1?"/":""),1)]))),128))])]))]),_:1})}}},A=X,O={},U={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},W=t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),Y=t("path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"},null,-1),q=t("path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"},null,-1),G=[W,Y,q];function J(c,a){return n(),l("svg",U,G)}const Q=m(O,[["render",J]]),Z={},tt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},et=t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),ot=t("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"},null,-1),nt=t("path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"},null,-1),st=t("path",{d:"M19 11h2m-1 -1v2"},null,-1),at=[et,ot,nt,st];function rt(c,a){return n(),l("svg",tt,at)}const lt=m(Z,[["render",rt]]),it=()=>H("color-mode").value,ct={class:"fixed bottom-8 left-8 hidden lg:block"},dt=t("div",{class:"absolute left-0 right-0 top-0 -z-10 h-5 w-5 animate-pulse rounded-full bg-gradient-to-tl from-lime-300 to-violet-400 blur-lg transition-all group-hover:blur-md dark:from-lime-500 dark:to-violet-800 md:h-10 md:w-10"},null,-1),_t={__name:"ThemeSwitcher",setup(c){const a=it(),o=S(()=>a.value==="dark"),e=typeof document<"u"&&document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=i=>{if(!e||!i){a.preference=o.value?"light":"dark";return}const r=i.clientX,s=i.clientY,h=Math.hypot(Math.max(r,innerWidth-r),Math.max(s,innerHeight-s));document.startViewTransition(async()=>{a.preference=o.value?"light":"dark",await B()}).ready.then(()=>{const g=[`circle(0px at ${r}px ${s}px)`,`circle(${h}px at ${r}px ${s}px)`];document.documentElement.animate({clipPath:o.value?[...g].reverse():g},{duration:400,easing:"ease-in",pseudoElement:o.value?"::view-transition-old(root)":"::view-transition-new(root)"})})};return(i,r)=>{const s=Q,h=lt,x=E;return n(),l("div",ct,[t("button",{onClick:f,class:"group relative flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors duration-500"},[_(x,null,{default:u(()=>[j(o)?(n(),p(s,{key:0,class:"absolute h-7 w-7 text-white"})):(n(),p(h,{key:1,class:"absolute h-7 w-7 text-gray-800"}))]),_:1}),dt])])}}},ut=_t,ht={},pt=t("div",{class:"pointer-events-none absolute inset-0 -z-10 hidden h-screen w-full bg-gradient-to-t from-black from-70% via-black via-85% to-klue/20 dark:block"},null,-1),mt={class:"mx-auto max-w-2xl px-4 pt-[6vw] md:px-0 lg:pt-[2vw]"},ft=t("span",{class:"fixed bottom-0 right-0 hidden select-none flex-col p-12 opacity-0 transition-opacity duration-500 hover:opacity-100 lg:flex"},[t("span",null," dervis was here "),t("span",{class:"text-xs text-gray-600 dark:text-gray-300"},"~ he's my cat ")],-1);function xt(c,a){const o=A,e=ut;return n(),l("div",null,[pt,t("div",mt,[_(o),C(c.$slots,"default"),_(e),ft])])}const wt=m(ht,[["render",xt]]);export{wt as default};
